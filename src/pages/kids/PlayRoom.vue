<template>
  <q-page class="flex flex-center view_hijos_socios view_kids">
    <Menukids currentItem="/kids/playroom"/>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
      >
        <q-carousel-slide v-for="(banner, key) in info.field_slider_home" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
    <div class="q-pb-xl all_width gris_home">
        <div class="setenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Playroom</div>
            <p class="intro text-center" v-html="info.body[0].value"></p>
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo wrp_club">
        <div class="row_wrap no-wrap flex">
          <div class="staff_general w_50">
            <h3 class="q-my-none">Staff</h3>
              <div class="flex" style="justify-content: space-between;">
                <table class="datos_staff_contacto" v-for="(personal, key) in personal" :key="key" v-show="personal.nid === '384'">
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
          <div class="w_50">
            <h3 class="q-my-none q-mb-md">Protocolo</h3>
            <div class="q-pa-md row items-start w_1200 centrar q-gutter-md">
                <div class="box_download flex bg_white">
                    <img src="../../assets/MiClub/i-pdf.svg">
                    <div class="text">
                        <span class="bold">Protocolo</span>
                        <a href="https://www.pwcc.cl/administrador/sites/default/files/2022-11/PROTOCOLO_PLAYROOM.pdf" target="_blank"><span>Ver o descargar</span></a>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </div>
     <!--<div class="q-py-xl all_width bg_amarillo wrp_club">
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
    </div>-->
    <div class="q-py-xl all_width gris_home wrp_club">
        <div class="centrar w_1200 flex justify-between items-center">
        <div class="row_2 fitnes_last align_center">
          <div class="form_fitness">
            <h6 class="title_text">Contáctanos</h6>
            <q-form
                @submit="onSubmit"
                @reset="onReset"
                ref="form"
                class="q-gutter-md"
            >
                <q-input
                    outlined
                    v-model="name"
                    ref="nameRef"
                    label="Nombres y Apellidos *"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Por favor diligencie el campo']"
                />
                <q-input
                    outlined
                    v-model="telefono"
                    label="Número de contacto *"
                />
                <q-input outlined v-model="email" type="Correo electrónico" label="Correo electrónico *" />
                <q-input
                    outlined
                    v-model="rut"
                    label="Rut *"
                />
                <q-input
                    outlined
                    v-model="mensaje"
                    label="Mensaje *"
                />
                <div class="text-left">
                    <q-btn outline type="submit" class="azul q-my-md bg_white_i" label="Enviar" icon-right="arrow_right_alt"/>
                </div>
            </q-form>
          </div>
          <div v-if="loadedInfo">
            <ul class="contacto_footer cien all_width diferent">
                <li class="mail">
                    <img src="../../assets/HazteSocio/i-correo.svg" />
                    <span>{{ info.field_co[0].value }}</span>
                </li>
                <li class="tel">
                    <img src="../../assets/HazteSocio/i-phone.svg" />
                    <span>{{ info.field_telefono_1[0].value }}</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Menukids from 'pages/submenus/Menukids'
import configServices from '../../services/config'

export default {
  name: 'Playroom',
  components: {
    Menukids
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
      personal: [],
      contactInfo: [],
      secondPersonal: [],
      urlSite: 'https://www.pwcc.cl',
      multimediaHome: [],
      name: '',
      telefono: '',
      email: '',
      rut: '',
      mensaje: '',
      loadedInfo: false
    }
  },

  created () {
    this.getInfo()
    // this.getMultimediaHome()
  },
  methods: {
    getMultimediaHome () {
      var _this = this
      configServices.loadData(this, '/multimedia-secciones/playroom/json', {
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
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/382?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
          _this.loadedInfo = true
        }
      })

      configServices.loadData(this, '/personal-staff/playroom', {
        callBack: (data) => {
          _this.personal = data
          _this.$q.loading.hide()
        }
      })
    },
    onSubmit () {
      var _this = this
      var data = {
        type: 'sendEmailReserva',
        service: 'Playroom',
        email: this.email,
        name: this.name,
        lastname: '',
        phone: this.telefono,
        rut: this.rut,
        message: this.mensaje
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
          this.rut = ''
          this.pop_reservar_spa = false
          this.$refs.form.reset()
        }
      })
    },
    onReset () {

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
