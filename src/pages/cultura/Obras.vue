<template>
  <q-page class="flex flex-center view_hijos_socios view_danzas">

    <div class="q-pb-xl all_width gris_home">
        <div class="setenta q-pd-md centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Obras</div>
            <div class="back"> <q-btn to="/cultura/danza" round color="white" icon="west" />Volver</div>
        </div>
        <div class="q-py-md w_1200 centrar flex_escuelas flex_obras justify-center">
            <div class="wrp_img_obras" v-for="(item, key) in obras" :key="key">
                <q-img :src="urlSite + item.field_imagen_elenco[0]">
                    <div class="absolute-bottom text-subtitle1 text-center">
                        {{ item.title }} <br>
                        <q-btn class="q-ml-lg sin_borde" @click="openObra(item)" outline color="indigo-10" icon-right="east" label="Ver más" />
                    </div>
                </q-img>
            </div>
        </div>
    </div>
    <div class="q-py-none all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
            <div class="text-left q-mb-none q-mt-xl titulos">Próximos Estrenos</div>
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

        <q-dialog v-model="detalleObras" persistent>
          <q-card>
            <q-card-section class="row items-center relative salones">
              <q-btn icon="close volando" flat round dense v-close-popup />
              <div class="row">
                <div class="q-pa-none w_100">
                  <q-carousel
                    animated
                    v-model="slide"
                    arrows
                    navigation
                    infinite
                  >
                    <q-carousel-slide :name="key" v-for="(item, key) in currentObra.field_imagen_elenco" :key="key" :img-src="urlSite + item.replace(' ', '')" />
                  </q-carousel>
                </div>
              </div>
              <table class="info_obras">
                <tr>
                  <td><strong>Coreografía</strong></td>
                  <td>{{ currentObra.field_coreograia }}</td>
                </tr>
                <tr>
                  <td><strong>Música</strong></td>
                  <td>{{ currentObra.field_musica }}</td>
                </tr>
                <tr>
                  <td><strong>Duración</strong></td>
                  <td>{{ currentObra.field_duracion }}</td>
                </tr>
                <tr>
                  <td><strong>Elenco</strong></td>
                  <td>{{ currentObra.field_elenco }}</td>
                </tr>
              </table>
            </q-card-section>

            <!--<q-card-actions align="right">
              <q-btn flat label="Cotiza tu evento" color="primary" v-close-popup />
            </q-card-actions> -->
          </q-card>
        </q-dialog>
    </div>
    <div class="q-py-none all_width bg_amarillo wrp_club hazte_socio">
      <div class="centrar w_1200">
        <ul class="barra_logos cuatro">
          <li v-for="(item, key) in info.field_galeria_" :key="key"><q-img :src="item.url"></q-img></li>
        </ul>
      </div>
    </div>
  </q-page>
</template>

<script>
import configServices from '../../services/config'

export default {
  name: 'Obras',
  data () {
    return {
      sliders: true,
      slide: 0,
      video: false,
      detalleObras: false,
      currentVideo: '',
      info: {
        body: [
          { value: '' }
        ]
      },
      currentObra: {},
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
      urlSite: 'https://www.pwcc.cl',
      obras: [],
      pop_consultar: false,
      slidecontent: 0,
      events: [],
      dtevento: false,
      event: {},
      moments: []
    }
  },
  created () {
    this.getInfo()
    this.getObras()
    this.getEvents()
  },
  methods: {
    openDetalleEvento (event) {
      this.event = event
      this.dtevento = true
    },
    getMonth (dateInput) {
      var date = new Date(dateInput)
      return this.options[date.getUTCMonth()]
    },
    getDate (dateInput) {
      if (typeof dateInput !== 'undefined') {
        var dateParse = dateInput.replace('T', ' ')
        dateParse = dateParse.split(' ')
        var eventDate = dateParse[0].split('-')
        var monthDate = parseInt(eventDate[1])
        var yearDate = parseInt(eventDate[0])
        var date = new Date(yearDate, monthDate, eventDate[2])
        var calculatedMonth = date.getUTCMonth() - 1
        if (monthDate === 12) {
          date = new Date(dateInput)
          calculatedMonth = date.getUTCMonth()
        }

        const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

        return eventDate[2] + ' ' + month[calculatedMonth] + '/' + date.getFullYear()
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
    openObra (item) {
      this.currentObra = item
      this.detalleObras = true
    },
    getEvents () {
      var _this = this
      configServices.loadData(this, '/eventos/obras/json', {
        callBack: (data) => {
          const n = 3
          _this.events = new Array(Math.ceil(data.length / n))
            .fill()
            .map(_ => data.splice(0, n))
        }
      })
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/343?_format=json', {
        callBack: (data) => {
          _this.info = data
        }
      })
    },
    getObras () {
      var _this = this
      configServices.loadData(this, '/obras/json', {
        callBack: (data) => {
          for (const item in data) {
            data[item].field_imagen_elenco.replaceAll(' ', '')
            data[item].field_imagen_elenco = data[item].field_imagen_elenco.split(',')
            _this.obras.push(data[item])
          }

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
