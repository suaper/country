<template>
  <q-page class="flex flex-center view_quienes_somos view_danza">
    <Menucultura currentItem="/cultura/danza"/>
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
            <div class="center text-center q-my-lg titulos">Danza</div>
            <p class="intro text-center" v-html="info.body[0].value"></p>
        </div>
        <div class="setenta cien_movil centrar" v-if="loadedBallet">
            <ul class="wrp_actions_center_spa">
               <li><img :src="urlSite + ballet[0].field_icono_item"><strong>{{ ballet[0].field_titulo_item_1 }}</strong><a href="#" @click="goItem($event, 'Escuelas')" icon-right="arrow_right_alt">Ver más  <span>-&gt;</span></a></li>
               <li><img :src="urlSite + ballet[1].field_icono_item"><strong>{{ ballet[1].field_titulo_item_1 }}</strong><a href="#" @click="goItem($event, 'Compañia')" icon-right="arrow_right_alt">Ver más  <span>-&gt;</span></a></li>
               <li><img :src="urlSite + ballet[2].field_icono_item"><strong>{{ ballet[2].field_titulo_item_1 }}</strong><a href="#" @click="goItem($event, 'Obras')" icon-right="arrow_right_alt">Ver más  <span>-&gt;</span></a></li>
            </ul>
        </div>
    </div>

    <div class="q-pb-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
            <h4 class="subtitle">Noticias</h4>
            <div class="row flex justify-center  items-start">
                <table class="sesenta">
                    <tr>
                        <td>
                            <img :src="urlSite + notices[0].field_imagen_noticia" />
                        </td>
                        <td>
                            <h5 class="titulo_noticias">{{ trimNotice(notices[0].title) }}</h5>
                            <p v-html="trimNoticeDetalle(notices[0].body)"></p>
                            <q-btn outline class="azul q-my-md centrar bg_white_i" @click="goNotice(notices[0])" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                </table>
                <table class="treintaycinco">
                    <tr>
                        <td>
                            <h5 class="titulo_noticias">{{  trimNotice(notices[1].title) }}</h5>
                            <p v-html="trimNoticeDetalle(notices[1].body)"></p>
                            <q-btn outline class="azul q-my-md centrar bg_white_i" @click="goNotice(notices[1])" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5 class="titulo_noticias">{{  trimNotice(notices[2].title) }}</h5>
                            <p v-html="trimNoticeDetalle(notices[2].body)"></p>
                            <q-btn outline class="azul q-my-md centrar bg_white_i" @click="goNotice(notices[2])" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

    <div class="q-py-xl all_width gris_home wrp_club">
        <div class="row_wrap no-wrap flex justify-start">
            <h3 class="q-my-none">Multimedia</h3>
            <q-btn @click="goToPage()" class="q-ml-lg capital" outline color="indigo-10" icon-right="east" label="Ver más" />
      </div>

      <div class="row_wrap no-wrap flex justify-between fsecond_row_home">
        <div class="q-py-md">
          <table class="esquma_inferior" v-if="multimediaHome.length" >
            <tr>
              <td class="tg-0pky" rowspan="2">
                <a href="#" @click="openItem($event, multimediaHome[4])"><img class="q-mx-none" alt="img1" :src="urlSite + multimediaHome[4].field_portada_multimedia"><div class="wrp_over">
                      <span class="text-white">{{ multimediaHome[4].title }}</span>
                      <span class="desc_white" v-html="multimediaHome[4].body"></span>
                  </div></a>
              </td>
              <td class="tg-1pky"><a href="#" @click="openItem($event, multimediaHome[2])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[2].field_portada_multimedia"><div class="wrp_over">
                      <span class="text-white">{{ multimediaHome[2].title }}</span>
                      <span class="desc_white" v-html="multimediaHome[2].body"></span>
                  </div></a></td>
              <td class="tg-2pky" rowspan="2"><a href="#" @click="openItem($event, multimediaHome[1])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[1].field_portada_multimedia"><div class="wrp_over">
                      <span class="text-white">{{ multimediaHome[1].title }}</span>
                      <span class="desc_white" v-html="multimediaHome[1].body"></span>
                      <q-btn outline type="submit" class="azul centrar mt_10 bg_white_home" label="ver" icon-right="arrow_right_alt"/>
                  </div></a></td>
              <td class="tg-3pky" rowspan="2"><a href="#" @click="openItem($event, multimediaHome[0])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[0].field_portada_multimedia"><div class="wrp_over">
                      <span class="text-white">{{ multimediaHome[0].title }}</span>
                      <span class="desc_white" v-html="multimediaHome[0].body"></span>
                      <q-btn outline type="submit" class="azul centrar mt_10 bg_white_home" label="ver" icon-right="arrow_right_alt"/>
                  </div></a></td>
            </tr>
            <tr>
              <td class="tg-4pky"><a href="#" @click="openItem($event, multimediaHome[3])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[3].field_portada_multimedia"><div class="wrp_over">
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
                      @submit.prevent="onSubmit"
                      class="q-gutter-md"
                  >
                      <q-input
                          outlined
                          v-model="name"
                          ref="nameRef"
                          label="Nombres y Apellidos *"
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
              <div class="staff" v-if="loadedInstagram">
                <iframe width="320" height="460" :src="'https://www.instagram.com/p/' + instagram.field_instagram_danza[0].value + '/embed'" frameborder="0"></iframe>
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
import Menucultura from 'pages/submenus/Menucultura'
import configServices from '../../services/config'

export default {
  name: 'Danza',
  components: {
    Menucultura
  },
  data () {
    return {
      sliders: true,
      video: false,
      currentVideo: '',
      slide: 1,
      slidecontent: 0,
      info: {
        body: [
          { value: '' }
        ]
      },
      urlSite: 'https://www.pwcc.cl',
      multimediaHome: [
        { field_portada_multimedia: '' },
        { field_portada_multimedia: '' },
        { field_portada_multimedia: '' },
        { field_portada_multimedia: '' },
        { field_portada_multimedia: '' }
      ],
      pop_reservar_spa: false,
      name: '',
      email: '',
      telefono: '',
      mensaje: '',
      rut: '',
      personal: {
        field_imagen_perfil: ''
      },
      ballet: [],
      instagram: {},
      loadedBallet: false,
      loadedInstagram: false,
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
    this.getInfo()
    this.getMultimediaHome()
    this.getNotices()
  },
  mounted () {
    const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://cdn2.woxo.tech/a.js#6261ba73ca8ed3002fe4f3d6')
    recaptchaScript.setAttribute('async', 'asyng')
    recaptchaScript.setAttribute('data-usrc', 'data-usrc')

    document.head.appendChild(recaptchaScript)
  },
  methods: {
    onReset () {

    },
    goItem (e, item) {
      e.preventDefault()
      switch (item) {
        case 'Escuelas':
          this.$router.push('/cultura/danza/escuelas-y-rama')
          break
        case 'Compañia':
        case 'Compañias':
        case 'Compañías':
        case 'Compañía':
          this.$router.push('/cultura/danza/staff-y-compania')
          break
        case 'Obras':
          this.$router.push('/cultura/danza/obras')
          break
      }
    },
    goNotice (notice) {
      localStorage.setItem('noticeId', notice.nid)
      this.$router.push('/detalle-noticia/' + notice.title.toLowerCase().replaceAll(' ', '-'))
    },
    onSubmit () {
      var _this = this
      var data = {
        type: 'sendEmailReserva',
        service: 'Danza',
        email: this.email,
        name: this.name,
        lastname: '',
        phone: this.telefono,
        rut: this.rut,
        message: this.mensaje
      }
      configServices.consumerStandar(this, 'pwcc-rest/post', data, {
        callBack: (data) => {
          _this.resetForm()
          if (data.status) {
            _this.$swal('Hemos registrado su solicitud pronto nos contactaremos')
          } else {
            _this.$swal('Estamos presentando problemas técnicos intente nuevamente más tarde')
          }
          this.$refs.nameRef.resetValidation()
        }
      })
    },
    resetForm () {
      this.name = ' '
      this.email = ''
      this.telefono = ''
      this.rut = ''
      this.mensaje = ''
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/199?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
        }
      })

      configServices.loadData(this, '/node/9282?_format=json', {
        callBack: (data) => {
          _this.instagram = data
          _this.loadedInstagram = true
        }
      })

      configServices.loadData(this, '/items-ballet/json', {
        callBack: (data) => {
          _this.ballet = data
          _this.loadedBallet = true
        }
      })

      configServices.loadData(this, '/personal-staff/charlas-culturales', {
        callBack: (data) => {
          _this.personal = data
        }
      })
    },
    goToPage () {
      this.$router.push('/cultura/multimedia')
    },
    getNotices () {
      var _this = this
      configServices.loadData(this, '/noticias/danza-y-ballet/json', {
        callBack: (data) => {
          _this.notices = data
        }
      })
    },
    trimNotice (title) {
      var maxLength = 90
      if (typeof title !== 'undefined') {
        if (title.length > maxLength) {
          var trimmedString = title.substr(0, maxLength)
          trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')))
          return trimmedString + '...'
        }
      }
      return title
    },
    trimNoticeDetalle (title) {
      var maxLength = 100
      if (typeof title !== 'undefined') {
        if (title.length > maxLength) {
          var trimmedString = title.substr(0, maxLength)
          trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')))
          return trimmedString + '...'
        }
      }
      return title
    },
    getMultimediaHome () {
      var _this = this
      configServices.loadData(this, 'multimedia-secciones/danza-y-ballet/json', {
        callBack: (data) => {
          _this.multimediaHome = []
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
        this.$router.push('/detalle-multimedia/' + multimedia.title.toLowerCase().replaceAll(' ', '-'))
      } else {
        var currentVideo = multimedia.field_video_youtube.split('=')
        this.currentVideo = currentVideo[1]
        this.video = true
      }
    },
    irDetalleNoticia () {
      this.$router.push('/detalle-noticia')
    }
  }
}
</script>
