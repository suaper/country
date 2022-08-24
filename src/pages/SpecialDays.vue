<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness movil_cien_2">
     <Specialdays currentItem="/special-days"/>
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
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Special Days</div>
            <p class="intro text-center" v-html="info.body[0].value"></p>
        </div>
    </div>

    <div :class="(key % 2) === 0 ? 'q-py-xl all_width bg_amarillo wrp_club hazte_socio' : 'q-py-xl all_width bg_amarillo wrp_club hazte_socio'" v-for="(item, key) in moments" :key="key" >
        <div class="centrar w_1200">
        <div class="center text-center q-mb-lg titulos" v-show="(key % 2) === 0"></div>
        <hr class="hr_amarillo" v-show="(key % 2) === 0">
          <table class="contenido_fitness q-my-md" v-show="(key % 2) === 0">
              <tr>
                  <td>
                      <h6 class="title_text open">{{ item.title }}</h6>
                      <p v-html="item.body"></p>
                  </td>
                  <td>
                      <img :src="urlSite + item.field_image" />
                  </td>
              </tr>
          </table>

          <table class="contenido_fitness q-my-md" v-show="(key % 2) !== 0">
              <tr>
                  <td>
                      <img :src="urlSite + item.field_image" />
                  </td>
                  <td>
                      <h6 class="title_text open">{{ item.title }}</h6>
                      <p v-html="item.body"></p>
                  </td>
              </tr>
          </table>
        </div>
    </div>
    <div class="q-py-none all_width gris_home wrp_club hazte_socio">
        <div class="centrar w_1200">
        <div class="text-left q-mb-none q-mt-xl titulos">Próximos Eventos</div>
            <div class="wrp_gallery_beneficios">
                <q-carousel
                v-model="slidecontent"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="primary"
                padding
                arrows
                height="300px"
                class="galeria_beneficios"
                >
                <q-carousel-slide :name="key" class="column no-wrap" v-for="(item, key) in events" :key="key">
                    <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                        <div class="treintaydos_general" v-for="(event, eventKey) in item" :key="eventKey">
                            <table class="galeri_event">
                                <tr class="th_top">
                                    <th class="fecha">{{ getDate(event.field_fecha_evento) }}</th>
                                    <th class="hora">{{ getHour(event.field_fecha_evento) }}</th>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <h5 class="name_event">{{ event.title }}</h5>
                                        <p class="desc_event" v-html="event.field_detalle_evento"></p>
                                        <q-btn @click="openDetalleEvento(event)" class="text_azul centrar bg_white btn_centrar" label="Ver más" icon-right="arrow_right_alt"/>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </q-carousel-slide>
                </q-carousel>
                <div class="row justify-center botones">
                    <q-btn-toggle
                      glossy
                      v-model="slidecontent"
                      :options="[]"
                    />
                </div>
            </div>
        </div>
        <q-dialog v-model="dtevento" >
            <q-card style="width: 700px; max-width: 80vw;" class="pop_mi_c">
                <q-card-section class="row items-center q-pb-none">
                    <div class="text-h6">{{ event.title }}</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>

                <q-card-section class="pop_club">
                    <span class="desc_club strong">Evento {{ event.field_tipo_evento }}</span><br>
                    <span class="desc_club">{{ getDate(event.field_fecha_evento) }} {{ getHour(event.field_fecha_evento) }}</span>
                </q-card-section>
                <q-card-section class="flex flex-start pop_descargar">
                    <div class="wrp_list_eventos">
                        <div class="list_desc flex">
                            <span class="bold">Ubicación</span>
                            <span>{{ event.field_ubicacion }}</span>
                        </div>
                        <div class="list_desc flex">
                            <span class="bold">Duración</span>
                            <span>{{ event.field_duracion }}</span>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>

    <div class="q-py-xl all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
            <div class="row_wrap no-wrap flex justify-start">
                <h3 class="q-my-none">Multimedia</h3>
                <q-btn class="q-ml-lg" outline color="indigo-10" icon-right="east" to="/special-days/multimedia"  label="Ver más" />
            </div>
            <div class="row_wrap no-wrap flex justify-between fsecond_row_home">
                <div class="q-py-md">
                <table class="esquma_inferior" v-if="loadedMultimedia">
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
    </div>
    <div class="q-py-xl all_width gris_home wrp_club">
        <div class="centrar w_1200 flex justify-between items-center">
            <h4 class="subtitle sin_margen">Contáctanos</h4>
            <ul class="contacto_footer">
                <li class="mail">
                    <img src="../assets/HazteSocio/i-correo.svg" />
                    <span>{{ contactInfo.field_correo_electronico[0].value }}</span>
                </li>
                <li class="tel">
                    <img src="../assets/HazteSocio/i-phone.svg" />
                    <span>{{ contactInfo.field_numero[0].value }}</span>
                </li>
                <!--<li class="tel">
                    <img src="../assets/HazteSocio/i-phone.svg" />
                    <span>{{ contactInfo.field_contacto_2[0].value }}</span>
                </li>-->
            </ul>
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
import configServices from '../services/config'
import Specialdays from 'pages/submenus/Menuspecialdays'
import { Platform } from 'quasar'

export default {
  name: 'Specialday',
  components: {
    Specialdays
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      video: false,
      currentVideo: '',
      info: {
        body: [
          { value: '' }
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
      urlSite: 'https://obt3.cl',
      multimediaHome: [],
      pop_consultar: false,
      slidecontent: 0,
      events: [],
      dtevento: false,
      loadedMultimedia: false,
      event: {},
      moments: [],
      numberNotices: 1
    }
  },
  created () {
    if (Platform.is.desktop) {
      this.numberNotices = 3
    }

    this.getInfo()
    this.getMultimediaHome()
    this.getEvents()
  },
  methods: {
    openDetalleEvento (event) {
      this.event = event
      this.dtevento = true
    },
    getDate (dateInput) {
      if (typeof dateInput !== 'undefined') {
        var dateParse = dateInput.replace('T', ' ')
        dateParse = dateParse.split(' ')
        var eventDate = dateParse[0].split('-')

        var date = new Date(eventDate[0], eventDate[1], eventDate[2])
        const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

        return eventDate[2] + ' ' + month[date.getUTCMonth() - 1] + '/' + date.getFullYear()
      }
    },
    getHour (dateInput) {
      if (typeof dateInput !== 'undefined') {
        var date = new Date(dateInput)
        var dateAmPm = this.formatAMPM(date)

        var hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours()
        var minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()

        return hours + ':' + minutes + ' ' + dateAmPm
      }
    },
    formatAMPM (date) {
      var hours = date.getHours()
      var ampm = hours >= 12 ? 'pm' : 'am'
      return ampm
    },
    getEvents () {
      var _this = this
      configServices.loadData(this, '/eventos/special-days/json', {
        callBack: (data) => {
          const n = this.numberNotices
          _this.events = new Array(Math.ceil(data.length / n))
            .fill()
            .map(_ => data.splice(0, n))
        }
      })
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/313?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
        }
      })

      configServices.loadData(this, '/special-moments/json', {
        callBack: (data) => {
          _this.moments = data
        }
      })

      configServices.loadData(this, '/node/492?_format=json', {
        callBack: (data) => {
          _this.contactInfo = data
        }
      })
    },
    getMultimediaHome () {
      var _this = this
      configServices.loadData(this, '/multimedia-secciones/special-days/json', {
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
          _this.loadedMultimedia = true
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
