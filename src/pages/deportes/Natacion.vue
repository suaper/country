 <template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno currentItem="/deportes/natacion" />
    <Banner :banner="info" :bannerSlide="slide" v-if="loadedInfo"/>
    <div class="q-pb-md all_width bg_white">
        <Patrocinadores :images="images" v-if="loadedImages" />
    </div>
   <div class="q-pb-md all_width bg_gris wrp_club hazte_socio">
        <div class="centrar w_1200">
            <div class="center text-center q-my-lg titulos">Natación</div>
            <DescDeporte :content="content" v-if="loadedContent" />
        </div>
    </div>
    <div class="q-pb-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200 bg_amarillo">
            <h4 class="subtitle q-my-md">Noticias</h4>
            <Noticias :info="notices" v-if="loadedNotices"/>
        </div>
    </div>

    <div class="q-py-none all_width bg_gris wrp_club">
        <div class="row_wrap no-wrap flex justify-start">
        <div class="q-py-md centrar text-center w_1200">
          <div class="row_2 fitnes_last">
            <div class="w_55">
                <Contacto />
            </div>
            <div class="w_35">
                <Staff :info="personal" v-if="loadedPersonal"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Banner from 'pages/componentes/Uno'
import DescDeporte from 'pages/componentes/SoloTexto'
import Patrocinadores from 'pages/componentes/Dos'
import Noticias from 'pages/componentes/TresNoticias'
import Contacto from 'pages/componentes/SieteContacto'
import Staff from 'pages/componentes/OchoStaff'
import configServices from '../../services/config'

export default {
  name: 'Natacion',
  components: {
    MenuDeporteInterno,
    Banner,
    DescDeporte,
    Noticias,
    Patrocinadores,
    Contacto,
    Staff
  },
  data () {
    return {
      sliders: true,
      video: false,
      currentVideo: '',
      slide: '1',
      slidecontent: 0,
      info: {
        body: [
          { value: '' }
        ]
      },
      urlSite: 'https://obt3.cl',
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
      rut: '',
      personal: {
        field_imagen_perfil: ''
      },
      events: [],
      dtevento: false,
      event: {},
      images: {},
      loadedInfo: false,
      loadedImages: false,
      loadedContent: false,
      content: {},
      notices: [],
      loadedNotices: false,
      path: '',
      player: {},
      loadedPlayer: false,
      loadedEvents: false,
      loadedPersonal: false
    }
  },
  created () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]

    localStorage.setItem('sport', this.path)

    this.getInfo()
    this.getNotices()
    this.getMultimediaHome()
  },
  methods: {
    onReset () {

    },
    onSubmit () {
      var _this = this
      var data = {
        type: 'sendEmailReserva',
        service: 'Charlas Culturales',
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
          this.rut = ''
          this.pop_reservar_spa = false
        }
      })
    },
    getNotices () {
      var _this = this
      configServices.loadData(this, '/noticias/' + _this.path + '/json', {
        callBack: (data) => {
          _this.notices = data
          _this.loadedNotices = true
        }
      })
    },
    openDetalleEvento (event) {
      this.event = event
      this.dtevento = true
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
    getInfo () {
      var _this = this
      configServices.loadData(this, '/slider-deportes/' + _this.path + '/json', {
        callBack: (data) => {
          _this.info = data[0]
          _this.slide = data[0].field_slider_sport[0].target_uuid
          _this.loadedInfo = true
        }
      })

      configServices.loadData(this, '/galeria-deportes/' + _this.path + '/json', {
        callBack: (data) => {
          _this.images = data[0]
          _this.loadedImages = true
        }
      })

      configServices.loadData(this, '/intro-internas-deportes/' + _this.path + '/json', {
        callBack: (data) => {
          _this.content = data[0]
          _this.loadedContent = true
        }
      })

      configServices.loadData(this, '/jugador-deportes/' + _this.path + '/json', {
        callBack: (data) => {
          _this.player = data[0]
          _this.loadedPlayer = true
        }
      })

      configServices.loadData(this, '/personal-staff/' + _this.path, {
        callBack: (data) => {
          _this.personal = data
          _this.loadedPersonal = true
        }
      })
    },
    getEvents () {
      var _this = this
      configServices.loadData(this, '/eventos/' + this.path + '/json', {
        callBack: (data) => {
          const n = 3
          _this.events = new Array(Math.ceil(data.length / n))
            .fill()
            .map(_ => data.splice(0, n))
          _this.loadedEvents = true
        }
      })
    },
    getMultimediaHome () {
      var _this = this
      configServices.loadData(this, '/multimedia-secciones/charlas-culturales/json', {
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

          _this.multimediaHome.push(images[0])
          _this.multimediaHome.push(images[1])
          _this.multimediaHome.push(videos[0])
          _this.multimediaHome.push(videos[1])
          _this.multimediaHome.push(videos[2])
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
