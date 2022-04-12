<template>
  <q-page class="flex flex-center view_quienes_somos view_calendario">
    <Menucalendario/>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-xl titulos">Calendario Spa & Wellness</div>
        </div>
        <div class="w_1200 centrar">
            <ul class="wrp_actions_calendario">
                <li class="active">
                    <div class="wrp_animate">
                        <img class="normal" src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-03/i-escuelas.png">
                        <img class="activa" src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-03/i-escuelas.png">
                    </div>
                    <strong>Charlas culturales</strong>
                </li>
                <li>
                    <div class="wrp_animate">
                        <img class="normal" src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-03/i-compania.png">
                        <img class="activa" src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-03/i-compania.png">
                    </div>
                    <strong>Ballet y Danza</strong></li>
                <li>
                    <div class="wrp_animate">
                        <img class="normal" src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-03/i-obras.png">
                        <img class="activa" src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-03/i-obras.png">
                    </div>
                    <strong>Eventos Culturales</strong>
                </li>
                <li> <div class="wrp_animate">
                        <img class="normal" src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-03/i-obras.png">
                        <img class="activa" src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-03/i-obras.png">
                    </div>
                    <strong>Special Days</strong>
                </li>
            </ul>
            <div class="wrp_busca_mes w_500 centrar">
                <q-select outlined label="Seleccione el mes" v-model="civilStatus" :options="options"  />
            </div>
        </div>
        <div class="q-py-none all_width gris_home wrp_club hazte_socio">
            <div class="centrar w_1200">
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
                                            <q-btn class="text_azul centrar bg_white btn_centrar" label="Ver más" icon-right="arrow_right_alt"/>
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
        </div>
    </div>
  </q-page>
</template>

<script>
import Menucalendario from 'pages/submenus/Menucalendario'
import configServices from '../../services/config'

export default {
  name: 'Calendariospa',
  components: {
    Menucalendario
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
      urlSite: 'https://pwccdev.mkbk.digital/',
      options: [
        'Enero', 'Febrero', 'Marzo', 'Abril'
      ],
      events: []
    }
  },
  created () {
    this.getInfo()
    this.getMultimediaHome()
    this.getEvents()
  },
  methods: {
    onReset () {

    },
    getDate (dateInput) {
      var date = new Date(dateInput)
      const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      var day = (date.getDay() < 10) ? '0' + date.getDay() : date.getDay()
      return day + ' ' + month[date.getUTCMonth()] + '/' + date.getFullYear()
    },
    getHour (dateInput) {
      var date = new Date(dateInput)
      var dateAmPm = this.formatAMPM(date)

      var hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours()
      var minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()

      return hours + ':' + minutes + ' ' + dateAmPm
    },
    formatAMPM (date) {
      var hours = date.getHours()
      var ampm = hours >= 12 ? 'pm' : 'am'
      return ampm
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/180?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
        }
      })

      configServices.loadData(this, '/personal-staff/charlas-culturales', {
        callBack: (data) => {
          _this.personal = data
        }
      })
    },
    getEvents () {
      var _this = this
      configServices.loadData(this, '/eventos/cultura/json', {
        callBack: (data) => {
          const n = 3
          _this.events = new Array(Math.ceil(data.length / n))
            .fill()
            .map(_ => data.splice(0, n))
        }
      })
    },
    getMultimediaHome () {
      var _this = this
      configServices.loadData(this, '/multimedia-secciones/charlas-culturales/json', {
        callBack: (data) => {
          _this.multimediaHome = []

          for (const item in data) {
            _this.multimediaHome.push(data[item])
          }
          _this.$q.loading.hide()
        }
      })
    },
    openItem (multimedia) {
      console.log(multimedia)
      if (multimedia.field_tipo_de_multimedia === 'Imagen') {
        this.$router.push('/multimedia/' + multimedia.field_multimedia_enlace)
      } else {
        var currentVideo = multimedia.field_video_youtube.split('=')
        this.currentVideo = currentVideo[0]
        this.video = true
      }
    }
  }
}
</script>
