<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menuhaztesocio currentItem="/hazte-socio"/>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
        autoplay
      >
        <q-carousel-slide v-for="(banner, key) in info.field_banner_seccion" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Hazte Socio</div>
            <p class="intro text-center" v-html="info.body[0].summary"></p>
            <hr class="hr_amarillo">
             <h5 class="italic" v-html="info.body[0].value"></h5>
             <q-btn outline @click="pop_form_socio = true" class="azul q-my-md centrar bg_white_i" label="Más información" icon-right="arrow_right_alt"/>
        </div>
    </div>
    <q-dialog v-model="pop_form_socio" >
        <q-card class="flex pop_hazte_socio">
            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md arre"
              >
            <div class="wrp_left sesenta">
                <q-card-section class="row items-center q-pb-none">
                    <div class="text-h6 open">1. Datos Principales</div>
                    <q-space />
                </q-card-section>

                <q-card-section class="flex pop_club">
                        <q-input
                            outlined
                            v-model="name"
                            label="Nombre completo *"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Por favor diligencie el campo']"
                        />
                        <q-input outlined v-model="date" mask="date" label="Fecha de Nacimiento" :rules="['date']">
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                                <q-date v-model="date">
                                <div class="row items-center justify-end">
                                    <q-btn v-close-popup label="Close" color="primary" flat />
                                </div>
                                </q-date>
                            </q-popup-proxy>
                            </q-icon>
                        </template>
                        </q-input>

                        <q-input
                            outlined
                            v-model="phone"
                            label="Teléfono *"
                        />

                        <q-input
                            outlined
                            v-model="mobile"
                            label="Celular *"
                        />

                        <q-input outlined v-model="email" type="Correo electrónico" label="Correo electrónico *" />

                        <q-select outlined label="Estado Civil" v-model="civilStatus" :options="options_civil"  />
                </q-card-section>
            </div>
            <div class="wrp_left cuarenta bg_amarillo">
                <q-card-section class="row items-center q-pb-none">
                    <div class="text-h6 open">2. Datos Postulación</div>
                    <q-space />
                    <q-btn class="close_top" icon="close" flat round dense v-close-popup />
                </q-card-section>

                <q-card-section class="pop_radio q-px-md">
                    <div class="q-px-md vertical">
                        <div class="label_radio">
                            <p>Selecciona la categoría a la que deseas postularte:</p>
                        </div>
                        <q-radio name="shape" v-model="shape" val="Hijos de Socios" label="Hijos de Socios" />
                        <q-radio name="shape" v-model="shape" val="Hijos de Ex Socios" label="Hijos de Ex Socios" />
                        <q-radio name="shape" v-model="shape" val="Nuevos Socios" label="Nuevos Socios" />
                        <q-radio name="shape" v-model="shape" val="Extranjeros de Paso" label="Extranjeros de Paso" />
                        <q-radio name="shape" v-model="shape" val="Senior sin Cargas" label="Senior sin Cargas" />
                        <q-radio name="shape" v-model="shape" val="Familia de Socios" label="Familia de Socios" />
                        <q-radio name="shape" v-model="shape" val="Familia de rama deportiva" label="Familia de rama deportiva" />

                        <div>
                            <q-btn outline type="submit" class="text_white mt_10 centrar bg_orange" label="Enviar Formulario" icon-right="arrow_right_alt"/>
                        </div>
                    </div>
                </q-card-section>
            </div>
          </q-form>
        </q-card>
    </q-dialog>
    <div class="q-pb-md all_width bg_amarillo wrp_club hazte_socio" v-if="notices.lenght !== 0">
        <div class="centrar w_1200">
            <h4 class="subtitle">Información</h4>
            <div class="row flex justify-center  items-start">
                <table class="sesenta">
                    <tr>
                        <td>
                            <img :src="urlSite + notices[0].field_imagen_noticia" />
                        </td>
                        <td>
                            <h5 class="titulo_noticias">{{ trimNotice(notices[0].title) }}</h5>
                            <p v-html="trimNoticeDetalle(notices[0].body)"></p>
                            <q-btn @click="goNotice(notices[0])" outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                </table>
                <table class="treintaycinco">
                    <tr>
                        <td>
                            <h5 class="titulo_noticias">{{ trimNotice(notices[1].title) }}</h5>
                            <p v-html="trimNoticeDetalle(notices[1].body)"></p>
                            <q-btn @click="goNotice(notices[1])" outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5 class="titulo_noticias">{{ trimNotice(notices[2].title)  }}</h5>
                            <p v-html="trimNoticeDetalle(notices[2].body)"></p>
                            <q-btn @click="goNotice(notices[2])" outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

    <div class="q-py-xl all_width gris_home wrp_club">
        <div class="centrar w_1200 flex justify-between items-center">
            <h4 class="subtitle sin_margen">Contáctanos</h4>
            <ul class="contacto_footer">
                <li class="mail">
                    <img src="../assets/HazteSocio/i-correo.svg" />
                    <span>{{ info.field_correo[0].value }}</span>
                </li>
                <li class="tel">
                    <img src="../assets/HazteSocio/i-phone.svg" />
                    <span>{{ info.field_telefono_1[0].value }}</span>
                </li>
                <!--<li class="tel">
                    <img src="../assets/HazteSocio/i-phone.svg" />
                    <span>{{ info.field_telefono_2[0].value }}</span>
                </li>-->
            </ul>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menuhaztesocio from 'pages/submenus/Menuhaztesocio'
import configServices from '../services/config'

export default {
  name: 'Haztesocio',
  components: {
    Menuhaztesocio
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      urlSite: 'https://www.pwcc.cl',
      info: {
        body: [
          {
            value: '',
            summary: ''
          }
        ],
        field_correo: [
          {
            value: ''
          }
        ],
        field_telefono_1: [
          {
            value: ''
          }
        ],
        field_telefono_2: [
          {
            value: ''
          }
        ]
      },
      pop_form_socio: false,
      shape: 'false',
      options_civil: [
        'Soltero/a', 'Casado/a'
      ],
      civilStatus: null,
      mobile: '',
      date: '',
      country: '',
      phone: '',
      email: '',
      name: '',
      age: '',
      notices: [
        {
          title: '',
          field_imagen_noticia: ''
        },
        {
          title: '',
          field_imagen_noticia: ''
        },
        {
          title: '',
          field_imagen_noticia: ''
        }
      ]
    }
  },
  created () {
    this.$q.loading.show()
    this.getInfo()
    this.getNotices()
  },
  methods: {
    onSubmit () {
      var _this = this
      var data = {
        type: 'sendEmailHazteSocio',
        email: this.email,
        name: this.name,
        phone: this.phone,
        mobile: this.mobile,
        civilStatus: this.civilStatus,
        birthdate: this.date,
        country: this.country,
        category: this.shape
      }
      configServices.consumerStandar(this, 'pwcc-rest/post', data, {
        callBack: (data) => {
          if (data.status) {
            _this.$swal('Hemos registrado su solicitud pronto nos contactaremos.')
          } else {
            _this.$swal('Estamos presentando problemas técnicos intente nuevamente más tarde')
          }

          this.email = ''
          this.name = ''
          this.phone = ''
          this.mobile = ''
          this.civilStatus = ''
          this.date = ''
          this.country = ''
          this.shape = ''
          this.pop_form_socio = false
        }
      })
    },
    onReset () {

    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/1?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_banner_seccion[0].target_uuid
        }
      })
    },
    trimNotice (title) {
      var maxLength = 90
      if (title.length > maxLength) {
        var trimmedString = title.substr(0, maxLength)
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')))
        return trimmedString + '...'
      }

      return title
    },
    trimNoticeDetalle (detalle) {
      if (typeof detalle !== 'undefined') {
        var maxLength = 100
        if (detalle.length > maxLength) {
          var trimmedString = detalle.substr(0, maxLength)
          trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')))
          return trimmedString + '...'
        }

        return detalle
      }
    },
    goNotice (notice) {
      localStorage.setItem('noticeId', notice.nid)
      this.$router.push('/detalle-noticia/' + notice.title.toLowerCase().replaceAll(' ', '-'))
    },
    getNotices () {
      var _this = this
      configServices.loadData(this, '/noticias/hazte-socio/json', {
        callBack: (data) => {
          _this.notices = data
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
