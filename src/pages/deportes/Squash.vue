 <template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno currentItem="/deportes/squash" />
    <Banner :banner="info" :bannerSlide="slide" v-if="loadedInfo"/>
    <div class="q-pb-md all_width bg_white">
        <Patrocinadores :images="images" v-if="loadedImages" />
    </div>
   <div class="q-pb-md all_width bg_gris wrp_club hazte_socio">
        <div class="centrar w_1200">
            <div class="center text-center q-my-lg titulos">Squash</div>
            <DescDeporte :content="content" v-if="loadedContent" />
        </div>
    </div>
    <div class="q-pb-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200 bg_amarillo">
            <h4 class="subtitle q-my-md">Noticias</h4>
            <Noticias :info="notices" v-if="loadedNotices"/>
        </div>
    </div>

   <div class="q-pb-md all_width bg_gris wrp_club hazte_socio">
        <div class="centrar w_1200">
            <Multimedia :path="path"/>
        </div>
    </div>

    <div class="franja_azul full-width row wrap justify-center items-center content-center bg_azul">
        <h5 class="text-white fuente_normal font_40"><span class="fuente_titulo font_50" style="color:#E8C28F;">  Squash  /   </span> Tienda  <strong>oficial</strong></h5>
          <q-btn outline class="btn_bg_beige" label="Comprar" icon-right="arrow_right_alt"/>
    </div>

    <div class="q-py-none all_width bg_amarillo wrp_club">
        <div class="row_wrap no-wrap flex justify-start">
        <div class="q-py-xl centrar text-center w_1200">
          <div class="row_2 fitnes_last">
            <div class="w_55">
                <Contacto />
                <Staff :info="personal" v-if="loadedPersonal"/>
            </div>
            <div>
                <iframe width="320" height="460" src="https://www.instagram.com/p/CbskERQJwsW/embed" frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="q-py-xl all_width bg_gris" id="reglamentos">
        <div class="centrar w_1100">
            <h5 class="style_title q-my-lg" >Reglamentos</h5>
            <ListaReglamentos :content="reglamentos" v-if="loadedReglamentos"/>
        </div>
    </div>
    <div class="q-pb-md all_width bg_white">
        <Patrocinadores :images="images" v-if="loadedImages" />
    </div>
  </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Banner from 'pages/componentes/Uno'
import DescDeporte from 'pages/componentes/SoloTexto'
import Patrocinadores from 'pages/componentes/Dos'
import Noticias from 'pages/componentes/TresNoticias'
import Multimedia from 'pages/componentes/Multimedia'
import Contacto from 'pages/componentes/SieteContacto'
import Staff from 'pages/componentes/OchoStaff'
import ListaReglamentos from 'pages/componentes/ListaReglamentos'
import configServices from '../../services/config'

export default {
  name: 'Natacion',
  components: {
    MenuDeporteInterno,
    Banner,
    DescDeporte,
    Patrocinadores,
    Noticias,
    Multimedia,
    Contacto,
    Staff,
    ListaReglamentos
  },
  data () {
    return {
      sliders: true,
      video: false,
      currentVideo: '',
      slide: '1',
      slidecontent: 0,
      image: [],
      loadedImage: false,
      info: {
        body: [
          { value: '' }
        ]
      },
      urlSite: 'https://pwccdev.mkbk.digital/',
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
      loadedPersonal: false,
      bannerDeportes: [],
      loadedBannerDeportes: false,
      reglamentos: {},
      loadedReglamentos: false
    }
  },
  created () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]

    localStorage.setItem('sport', this.path)

    this.getInfo()
    this.getNotices()
    this.getMultimediaHome()
    this.getEvents()
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

      configServices.loadData(this, '/node/723?_format=json', {
        callBack: (data) => {
          _this.image = data
          _this.loadedImage = true
        }
      })

      configServices.loadData(this, 'banner-torneo-deportes/' + _this.path + '/json', {
        callBack: (data) => {
          _this.bannerDeportes = data
          _this.loadedBannerDeportes = true
        }
      })

      configServices.loadData(this, '/reglamentos-deportes/' + _this.path + '/json', {
        callBack: (data) => {
          _this.reglamentos = data
          _this.loadedReglamentos = true
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
      configServices.loadData(this, '/multimedia-secciones/' + _this.path + '/json', {
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
