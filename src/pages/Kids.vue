<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menukids currentItem="/kids"/>
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
        <q-carousel-slide v-for="(banner, key) in info.field_slider_home" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Kids</div>
            <p class="intro text-center" v-html="info.body[0].value"></p>
        </div>
        <div class="w_1100 enlaces centrar">
            <ul class="list_img_link centrer">
                <li v-for="(item, key) in portadas" :key="key">
                    <img :src="urlSite + item.field_portada_kids" alt="">
                    <h6 class="title">{{ item.title }}</h6>
                    <a @click="goItem($event, item.title)" href="#">Ir a <span class="material-icons">arrow_right_alt</span></a>
                </li>
            </ul>
        </div>
    </div>

    <div class="q-py-xl all_width bg_amarillo wrp_club">
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
    <div class="q-py-none all_width bg_gris wrp_club">
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
              <div class="staff">
              <h6 class="title_text">Staff</h6>
                 <div class="flex">
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
import Menukids from 'pages/submenus/Menukids'
import configServices from '../services/config'

export default {
  name: 'Kids',
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
      urlSite: 'https://obt3.cl/',
      multimediaHome: [],
      pop_reservar_spa: false,
      portadas: [],
      personal: [],
      video: false,
      currentVideo: '',
      name: '',
      email: '',
      telefono: '',
      rut: '',
      mensaje: ''
    }
  },
  created () {
    this.getInfo()
    this.getMultimediaHome()
  },
  methods: {
    onReset () {

    },
    onSubmit () {
      var _this = this
      var data = {
        type: 'sendEmailReserva',
        service: 'Kids',
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
        }
      })
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/374?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
        }
      })

      configServices.loadData(this, '/secciones-kids/json', {
        callBack: (data) => {
          _this.portadas = data
        }
      })

      configServices.loadData(this, '/personal-staff/kids', {
        callBack: (data) => {
          _this.personal = data
        }
      })
    },
    goItem (e, title) {
      e.preventDefault()
      this.$router.push('/kids/' + title.replaceAll(' ', '-').toLowerCase())
    },
    getMultimediaHome () {
      var _this = this
      configServices.loadData(this, '/multimedia-secciones/kids/json', {
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
