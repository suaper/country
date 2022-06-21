<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menudeportes currentItem="/deportes"/>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
        autoplay="autoplay"
      >
        <q-carousel-slide v-for="(banner, key) in info.field_slider_sport" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Deportes</div>
            <p class="intro text-center" v-html="intro.body[0].value"></p>
        </div>
        <div class="w_1100 enlaces centrar">
            <div class="wrp_gallery_multimedia">
                <q-carousel
                v-model="slidedeportes"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="primary"
                padding
                arrows
                height="350px"
                class="galeria_deportes"
                >
                <q-carousel-slide :name="key" class="column no-wrap" v-for="(item, key) in portadas" :key="key">
                    <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                        <ul class="wrp_sport_gale" v-for="(subItem, subKey) in item" :key="subKey">
                            <li>
                                <img :src="urlSite + subItem.field_portada_deporte" alt="img_golf">
                                <div class="info_bottom">
                                    <h6 class="title">{{ subItem.title }}</h6>
                                    <a href="#" @click="goToSport($event, subItem.title)">Ir a <span class="material-icons">arrow_right_alt</span></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </q-carousel-slide>
                </q-carousel>
                <div class="row justify-center botones">
                    <q-btn-toggle
                        glossy
                        v-model="slidedeportes"
                        :options="options"
                    />
                </div>
            </div>

        </div>
    </div>
    <div class="franja_azul full-width row wrap justify-center items-center content-center bg_azul">
        <h5 class="text-white text_normal">Visita nuestro Calendario de Eventos</h5>
          <q-btn @click="goToCalendar" outline click="pop_form_socio = true" class="text_beige sin_borde" label="" icon-right="event"/>
    </div>
    <div class="q-py-none all_width bg_amarillo wrp_club">
        <div class="q-py-md centrar text-center w_1200">
            <div class="center text-left q-my-lg titulos">Valores Deporte Country</div>
                <ul class="list_valores_deportes">
                    <li v-for="(item, key) in valores" :key="key">
                        <img :src="urlSite + item.field_imagen_valor" alt="img_golf">
                        <span class="nro">{{ item.field_titulo_valor }}</span>
                        <p class="desc" v-html="item.field_descripcion_valor"></p>
                    </li>
                </ul>
        </div>
    </div>
    <div class="q-py-xl all_width bg_gris wrp_club">
        <div class="row_wrap no-wrap flex justify-start">
            <h3 class="q-my-none">Multimedia</h3>
            <q-btn class="q-ml-lg" outline color="indigo-10" icon-right="east" label="Ver más" />
      </div>

      <div class="row_wrap no-wrap flex justify-between fsecond_row_home">
        <div class="q-py-md">
          <table class="esquma_inferior" v-if="multimediaHome.length">
            <tr>
              <td class="tg-0pky" rowspan="2">
                <a @click="openItem($event, multimediaHome[4])"><img class="q-mx-none" alt="img1" :src="urlSite + multimediaHome[4].field_portada_multimedia"><div class="wrp_over">
                      <span class="text-white">{{ multimediaHome[4].title }}</span>
                      <span class="desc_white" v-html="multimediaHome[4].body"></span>
                  </div></a>
              </td>
              <td class="tg-1pky"><a @click="openItem($event, multimediaHome[2])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[2].field_portada_multimedia"><div class="wrp_over">
                      <span class="text-white">{{ multimediaHome[2].title }}</span>
                      <span class="desc_white" v-html="multimediaHome[2].body"></span>
                  </div></a></td>
              <td class="tg-2pky" rowspan="2"><a @click="openItem($event, multimediaHome[1])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[1].field_portada_multimedia"><div class="wrp_over">
                      <span class="text-white">{{ multimediaHome[1].title }}</span>
                      <span class="desc_white" v-html="multimediaHome[1].body"></span>
                      <q-btn outline type="submit" class="azul centrar mt_10 bg_white_home" label="ver" icon-right="arrow_right_alt"/>
                  </div></a></td>
              <td class="tg-3pky" rowspan="2"><a @click="openItem($event, multimediaHome[0])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[0].field_portada_multimedia"><div class="wrp_over">
                      <span class="text-white">{{ multimediaHome[0].title }}</span>
                      <span class="desc_white" v-html="multimediaHome[0].body"></span>
                      <q-btn outline type="submit" class="azul centrar mt_10 bg_white_home" label="ver" icon-right="arrow_right_alt"/>
                  </div></a></td>
            </tr>
            <tr>
              <td class="tg-4pky"><a @click="openItem($event, multimediaHome[3])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[3].field_portada_multimedia"><div class="wrp_over">
                      <span class="text-white">{{ multimediaHome[3].title }}</span>
                      <span class="desc_white" v-html="multimediaHome[3].body"></span>
                  </div></a></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="q-py-none all_width bg_amarillo wrp_club">
        <div class="row_wrap no-wrap flex justify-start">
        <div class="q-py-md centrar text-center w_1200">
          <div class="row_2 fitnes_last">
              <div class="form_fitness">
                  <h6 class="title_text">Contacto</h6>
                  <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                  >
                      <q-input
                          outlined
                          v-model="name"
                          label="Nombres y Apellidos *"
                          lazy-rules
                          :rules="[ val => val && val.length > 0 || 'Please type something']"
                      />
                      <q-input
                          outlined
                          v-model="telefono"
                          label="Número de contacto *"
                      />
                      <q-input outlined v-model="email" type="Correo electrónico" label="Correo electrónico *" />
                      <q-input
                          outlined
                          v-model="sport"
                          label="Seleccione un deporte *"
                      />
                      <q-input
                          outlined
                          v-model="message"
                          label="Mensaje *"
                      />
                      <div class="text-left">
                          <q-btn outline type="submit" class="azul q-my-md bg_white_i" label="Enviar" icon-right="arrow_right_alt"/>
                      </div>
                  </q-form>
              </div>
              <div class="staff">
              <h6 class="title_text">Staff</h6>
                 <div class="flex no-wrap">
                    <table class="datos_staff_contacto" v-for="(personal, key) in personal" :key="key">
                        <tr>
                            <td>
                                <img class="raius" :src="urlSite + personal.field_imagen_perfil" />
                            </td>
                            <td>
                                <p><strong>{{ personal.field_nombre_staff }}</strong></p>
                                <p><strong> {{ personal.field_cargo_staff }} </strong></p>
                                <p>{{ personal.field_correo_staff }}</p>
                                <p>{{ personal.field_numero_staff }}</p>
                            </td>
                        </tr>
                    </table>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <q-dialog v-model="video" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + currentVideo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cerrar" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import Menudeportes from 'pages/submenus/Menudeportes'
import configServices from '../services/config'

export default {
  name: 'Deportes',
  components: {
    Menudeportes
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {
        body: [
          { value: '' }
        ]
      },
      urlSite: 'https://pwccdev.mkbk.digital/',
      multimediaHome: [],
      pop_reservar_spa: false,
      portadas: [],
      personal: [],
      video: false,
      currentVideo: '',
      slidedeportes: 0,
      options: [],
      name: '',
      email: '',
      telefono: '',
      sport: '',
      message: '',
      intro: {
        body: [
          { value: '' }
        ]
      },
      valores: []
    }
  },
  created () {
    this.getInfo()
    this.getMultimediaHome()
  },
  methods: {
    goToSport (e, title) {
      e.preventDefault()
      title = title.replace('á', 'a')
      title = title.replace('é', 'e')
      title = title.replace('í', 'i')
      title = title.replace('ó', 'o')
      title = title.replace('ú', 'u')
      this.$router.push('/deportes/' + title.toLowerCase())
    },
    onReset () {

    },
    goToCalendar () {
      this.$router.push('/deportes/calendario')
    },
    onSubmit () {
      var _this = this
      var data = {
        type: 'sendEmailDeportes',
        service: 'Deportes',
        email: this.email,
        name: this.name,
        lastname: '',
        phone: this.telefono,
        rut: this.rut
      }
      configServices.consumerStandar(this, 'pwcc-rest/post', data, {
        callBack: (data) => {
          if (data.status) {
            _this.$swal('Hemos registrado su solicitud pronto nos contactaremos')
          } else {
            _this.$swal('Estamos presentando problemas técnicos intente nuevamente más tarde')
          }

          this.email = ''
          this.name = ''
          this.telefono = ''
          this.sport = ''
          this.message = ''
          this.rut = ''
          this.pop_reservar_spa = false
        }
      })
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/581?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_sport[0].target_uuid
        }
      })

      configServices.loadData(this, '/node/582?_format=json', {
        callBack: (data) => {
          _this.intro = data
        }
      })

      configServices.loadData(this, '/intro-deportes/json', {
        callBack: (data) => {
          var n = 4
          _this.portadas = new Array(Math.ceil(data.length / n))
            .fill()
            .map(_ => data.splice(0, n))
        }
      })

      configServices.loadData(this, '/personal-staff/deportes', {
        callBack: (data) => {
          _this.personal = data
        }
      })

      configServices.loadData(this, '/valores-deporte/json', {
        callBack: (data) => {
          _this.valores = data
        }
      })
    },
    getMultimediaHome () {
      var _this = this
      configServices.loadData(this, '/multimedia-secciones/deportes/json', {
        callBack: (data) => {
          const videos = []
          const images = []
          for (const item in data) {
            if (data[item].field_tipo_de_multimedia === 'Video') {
              videos.push(data[item])
            } else {
              images.push(data[item])
            }
          }

          _this.multimediaHome.push(images[1])
          _this.multimediaHome.push(images[0])
          _this.multimediaHome.push(videos[1])
          _this.multimediaHome.push(videos[2])
          _this.multimediaHome.push(videos[0])
          _this.$q.loading.hide()
        }
      })
    },
    openItem (e, multimedia) {
      e.preventDefault()
      if (multimedia.field_tipo_de_multimedia === 'Imagen') {
        localStorage.setItem('multimediaId', multimedia.nid)
        this.$router.push('/detalle-multimedia')
      } else {
        var currentVideo = multimedia.field_video_youtube.split('=')
        this.currentVideo = currentVideo[1]
        this.video = true
      }
    }
  }
}
</script>
