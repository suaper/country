 <template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno currentItem="/deportes/golf/campeonatos" />
    <Banner :banner="info" :bannerSlide="slide" v-if="loadedInfo"/>
    <div class="q-pb-md all_width bg_white">
        <Patrocinadores :images="images" v-if="loadedImages" />
    </div>
    <div class="q-pb-md all_width bg_gris wrp_club hazte_socio">
        <div class="centrar w_1200">
            <div class="center text-center q-my-lg titulos">Golf</div>
            <div class="q-pb-md all_width wrp_club hazte_socio">
                <div class="centrar w_1200">
                <h4 class="subtitle q-my-md">Campeonato Nombre</h4>
                <CampeonatoActual :data="info" v-if="loadedInfo"/>
                </div>
            </div>
        </div>
    </div>

    <div class="q-py-none all_width bg_amarillo wrp_club">
        <div class="row_wrap no-wrap flex justify-start">
        <div class="q-py-md centrar text-center w_1200">
          <h4 class="subtitle q-my-md text-left">Leaderboard</h4>
          <div class="row_2 fitnes_last">
            <div class="w_50">
                <TableLeaderboard :data="info" v-if="loadedInfo"/>
            </div>
            <div class="w_50">
                <Imagen :path="path" :content="info" v-if="loadedInfo"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="q-pb-md all_width bg_gris wrp_club hazte_socio">
        <div class="centrar w_1200">
            <h4 class="subtitle q-my-md">Campeonatos</h4>
            <Noticias :info="notices" v-if="loadedNotices"/>
        </div>
    </div>
    <div class="q-pb-md all_width bg_white">
        <Patrocinadores :images="images" v-if="loadedImages" />
    </div>

    <div class="q-pb-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
            <Multimedia :path="path"/>
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
import Imagen from 'pages/componentes/ImagenBoton'
import Patrocinadores from 'pages/componentes/Dos'
import Noticias from 'pages/componentes/TresNoticias'
import Multimedia from 'pages/componentes/Multimedia'
import CampeonatoActual from 'pages/componentes/InfoCampeonato'
import TableLeaderboard from 'pages/componentes/TableLeaderboard'
import configServices from '../../services/config'

export default {
  name: 'Campeonatos',
  components: {
    MenuDeporteInterno,
    Banner,
    Patrocinadores,
    Imagen,
    Noticias,
    Multimedia,
    CampeonatoActual,
    TableLeaderboard
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
      loadedBannerDeportes: false
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
    getNotices () {
      var _this = this
      configServices.loadData(this, '/noticias/' + _this.path + '/json', {
        callBack: (data) => {
          _this.notices = data
          _this.loadedNotices = true
        }
      })
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/681?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.images = data

          _this.slide = data.field_slider_sport[0].target_uuid
          _this.loadedImages = true
          _this.loadedInfo = true
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
