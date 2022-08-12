<template>
  <q-page class="flex flex-center view_hijos_socios view_kids">
    <Menukids currentItem="/kids/summer-activities"/>
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
            <div class="center text-center q-my-lg titulos">Summer Activities</div>
            <p class="intro text-center" v-html="info.body[0].value"></p>
        </div>
        <div class="row_2 flex w_850 centrar q-pt-xl justify-between">
            <div class="left cuarentaycinco wrp_fechas">
                <h5 class="txt_norm">Fechas</h5>
                <ul>
                    <li v-for="(item, key) in dates" :key="key">
                        <p><strong>{{ item.field_fecha_kids }}</strong></p>
                        <span>{{ item.field_info_fecha }}</span>
                    </li>
                </ul>

                <div class="q-pa-none q-my-xl row items-start q-gutter-md">
                    <div class="box_download q-ma-none m_left_20 flex bg_white">
                        <img src="../../assets/MiClub/i-pdf.svg">
                        <div class="text">
                            <span class="bold">Programa Summer</span>
                            <a :href="info.field_descargar_archivo[0].url" target="_blank"><span>Actividades</span></a>
                        </div>
                    </div>
                </div>

                <q-btn outline @click="openPopForm()" class="azul q-my-md centrar bg_white_i" label="Más Información" icon-right="arrow_right_alt"/>
            </div>

            <div class="right cuarentaycinco wrp_table">
                <table class="bg_white">
                    <tr>
                        <th>Edades</th>
                        <th>Grupos</th>
                    </tr>
                    <tr v-for="(item, key) in groups" :key="key">
                        <td>{{ item.field_edades }}</td>
                        <td>{{ item.field_grupos_1 }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo wrp_club">
        <div class="row_wrap no-wrap flex justify-start">
            <h3 class="q-my-none">Multimedia</h3>
            <q-btn class="q-ml-lg" outline color="indigo-10" icon-right="east" to="/kids/multimedia" label="Ver más" />
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
    <!--<div class="q-py-xl all_width gris_home wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_fitness">
              <tr>
                  <td>
                    <a class="etiqueta_video" href="#" @click="openVideoInscription($event)">
                      <img class="img_video" :src="howInscription.field_portada_video[0].url" />
                      <div class="wrp_over">
                          <span class="text-white">Titulo video</span>
                          <span class="desc_white">Descripción Corta</span>
                      </div>
                    </a>
                  </td>
                  <td class="q-pl-md">
                      <h6 class="title_text t_kid">{{ howInscription.title[0].value }}</h6>
                      <p v-html="howInscription.body[0].value"></p>
                  </td>
              </tr>
          </table>
        </div>
    </div>-->
    <div class="q-pb-md all_width gris_home wrp_club hazte_socio wrp_noticias">
        <div class="centrar w_1200">
            <h4 class="subtitle">Noticias</h4>
            <div class="row flex justify-center  items-start">
                <table class="sesenta">
                    <tr>
                        <td>
                            <img :src="urlSite + notices[0].field_imagen_noticia" />
                        </td>
                        <td>
                            <h5 class="titulo_noticias">{{ notices[0].title }}</h5>
                            <p v-html="notices[0].body"></p>
                            <q-btn @click="goNotice(notices[0])" outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                </table>
                <table class="treintaycinco">
                    <tr>
                        <td>
                            <h5 class="titulo_noticias">{{ notices[1].title }}</h5>
                            <p v-html="notices[1].body"></p>
                            <q-btn @click="goNotice(notices[1])" outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5 class="titulo_noticias">{{ notices[2].title }}</h5>
                            <p v-html="notices[2].body"></p>
                            <q-btn @click="goNotice(notices[2])" outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <div class="q-py-xl all_width gris_home wrp_club">
        <div class="centrar w_1200 flex justify-between items-center">
          <div class="row_2 fitnes_last align_center">
            <div class="form_fitness">
              <h6 class="title_text">Contáctanos</h6>
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
                  <q-input outlined v-model="correo" type="Correo electrónico" label="Correo electrónico *" />
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
            <div>
              <ul class="contacto_footer diferent">
                  <li class="mail">
                      <img src="../../assets/HazteSocio/i-correo.svg" />
                      <span>{{ contactInfo.field_correo_electronico[0].value }}</span>
                  </li>
                  <li class="tel">
                      <img src="../../assets/HazteSocio/i-phone.svg" />
                      <span>{{ contactInfo.field_numero[0].value }}</span>
                  </li>
              </ul>
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

    <q-dialog v-model="formulario" >
        <q-card style="width: 700px; max-width: 80vw;" class="pop_mi_c pob_biblioteca bg_beige pop_escuelas">
            <q-card-section class="row items-center q-pb-none relative ">
                <q-btn class="btn_cerrar" icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="pop_club bg_white libro_icn">
              <span class="autor bold">Reserva de Servicios</span>
              <span class="autor bold">Summer Activities</span>
            </q-card-section>
            <q-card-section class="pop_descargar bg_white list_biblioteca">
              <q-form
                  @submit="onSubmit"
                  @reset="onReset"
                  class="q-gutter-md form_biblioteca"
                  >

                  <div class="row_2">
                    <q-input
                        outlined
                        v-model="name"
                        label="Nombre *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Por favor diligencie el campo']"
                    />
                    <q-input
                        outlined
                        v-model="apellido"
                        label="Apellidos *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Por favor diligencie el campo']"
                    />
                  </div>

                  <div class="fila">
                    <q-input
                        outlined
                        v-model="telefono"
                        label="Número de contacto *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Por favor diligencie el campo']"
                    />
                  </div>

                  <div class="fila">
                    <q-input
                        outlined
                        v-model="correo"
                        label="Correo electrónico*"
                    />
                  </div>

                  <div class="fila">
                    <q-input
                        outlined
                        v-model="rut"
                        label="Rut"
                    />
                  </div>
                  <div class="fila">
                    <q-input
                        outlined
                        v-model="mensaje"
                        label="Mensaje"
                    />
                  </div>
                  <div class="fila">
                      <q-btn outline type="submit" class="azul text_white mt_10 bg_white" label="Inscribirse" icon-right="arrow_right_alt"/>
                  </div>
              </q-form>
            </q-card-section>
        </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import Menukids from 'pages/submenus/Menukids'
import configServices from '../../services/config'

export default {
  name: 'Summeractivities',
  components: {
    Menukids
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      dates: [],
      video: false,
      currentVideo: '',
      formulario: false,
      name: '',
      correo: '',
      telefono: '',
      rut: '',
      mensaje: '',
      apellido: '',
      groups: [],
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
      ],
      info: {
        body: [
          { value: '' }
        ],
        field_descargar_archivo: [
          { url: '' }
        ]
      },
      contactInfo: {
        field_correo_electronico: [
          { value: '' }
        ],
        field_numero: [
          { value: '' }
        ],
        field_contacto_2: [
          { value: '' }
        ]
      },
      urlSite: 'https://pwccdev.mkbk.digital/',
      multimediaHome: [],
      howInscription: {
        field_portada_video: [
          { url: '' }
        ],
        title: [
          { value: '' }
        ],
        body: [
          { value: '' }
        ]
      }
    }
  },

  created () {
    this.getInfo()
    this.getNotices()
    this.getMultimediaHome()
  },
  methods: {
    openPopForm (item) {
      this.currentItem = item
      this.formulario = true
    },
    openVideoInscription (e) {
      e.preventDefault()
      this.currentVideo = this.howInscription.field_video_inscripcion[0].video_id
      this.video = true
    },
    goNotice (notice) {
      localStorage.setItem('noticeId', notice.nid)
      this.$router.push('/detalle-noticia/' + notice.title.toLowerCase().replaceAll(' ', '-'))
    },
    onReset () {

    },
    onSubmit () {
      var _this = this
      var data = {
        type: 'sendEmailReserva',
        service: 'Summer Activities',
        email: this.correo,
        name: this.name,
        lastname: this.apellido,
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

          this.correo = ''
          this.name = ''
          this.telefono = ''
          this.rut = ''
          this.formulario = false
        }
      })
    },
    getDate (dateInput) {
      var date = new Date(dateInput)
      const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      var day = (date.getDay() < 10) ? '0' + date.getDay() : date.getDay()
      return month[date.getUTCMonth()] + ' ' + day
    },
    getNotices () {
      var _this = this
      configServices.loadData(this, '/noticias/summer-activities/json', {
        callBack: (data) => {
          _this.notices = data
        }
      })
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/365?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
        }
      })

      configServices.loadData(this, '/fechas-kids/365/json', {
        callBack: (data) => {
          _this.dates = data
        }
      })

      configServices.loadData(this, '/grupos-kids/365/json', {
        callBack: (data) => {
          _this.groups = data
        }
      })

      configServices.loadData(this, '/node/367?_format=json', {
        callBack: (data) => {
          _this.howInscription = data
        }
      })

      configServices.loadData(this, '/node/381?_format=json', {
        callBack: (data) => {
          _this.contactInfo = data
        }
      })
    },
    getMultimediaHome () {
      var _this = this
      configServices.loadData(this, '/multimedia-secciones/summer-activities/json', {
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
