 <template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno :currentItem="'/deportes/' + path + '/reservar-cancha'"/>
    <Banner :banner="info" :bannerSlide="slide" v-if="loadedInfo"/>
   <div class="q-pb-md all_width bg_gris wrp_club hazte_socio cancha">
        <div class="centrar q-pt-md w_1200">
            <div class="center text-center q-my-lg titulos">Cancha</div>
            <div class="row_2 fitnes_last">
                <div class="w_65">
                    <CanchaGolf/>
                </div>
                <div class="w_30">
                    <listaDescargablesIconos/>
                </div>
            </div>
        </div>
    </div>
    <div class="q-pb-md all_width bg_amarillo wrp_club hazte_socio cancha">
        <div class="centrar q-pt-md w_1200">
            <IndicesCancha/>
        </div>
    </div>
    <div class="q-py-none all_width bg_gris wrp_club cancha">
        <div class="row_wrap no-wrap flex justify-start">
        <div class="q-py-md centrar text-center w_1200">
        <h4 class="subtitle text-left q-my-md">Reglamento</h4>
          <div class="row_2 fitnes_last">
            <div class="w_40">
                 <Reglamento :content="reglamentos" v-if="loadedReglamentos"/>
            </div>
            <div class="w_55">
                <ListaNumeros :items="listado" v-if="loadedListado"/>
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
import CanchaGolf from 'pages/componentes/CanchaGolf'
import listaDescargablesIconos from 'pages/componentes/listaDescargablesIconos'
import Reglamento from 'pages/componentes/ListaReglamentos'
import ListaNumeros from 'pages/componentes/ListaNumeros'
import IndicesCancha from 'pages/componentes/IndicesCancha'
import configServices from '../../services/config'

export default {
  name: 'Rugby',
  components: {
    MenuDeporteInterno,
    Banner,
    CanchaGolf,
    ListaNumeros,
    listaDescargablesIconos,
    Reglamento,
    IndicesCancha
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
      loadedReglamentos: false,
      listado: {},
      loadedListado: false
    }
  },
  created () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
    this.subPath = currentPath[3]

    localStorage.setItem('sport', this.path)

    this.getInfo()
  },
  methods: {
    getInfo () {
      var _this = this

      configServices.loadData(this, '/slider-deportes/' + _this.subPath + '-' + _this.path + '/json', {
        callBack: (data) => {
          _this.info = data[0]
          _this.slide = data[0].field_slider_sport[0].target_uuid
          _this.loadedInfo = true
        }
      })

      configServices.loadData(this, '/video-deportes/' + _this.subPath + '-' + _this.path + '/json', {
        callBack: (data) => {
          _this.content = data[0]
          _this.loadedContent = true
        }
      })

      configServices.loadData(this, '/reglamentos-deportes/' + _this.subPath + '-' + _this.path + '/json', {
        callBack: (data) => {
          _this.reglamentos = data
          _this.loadedReglamentos = true
        }
      })

      configServices.loadData(this, '/reglamentos-deportes-listado/' + _this.subPath + '-' + _this.path + '/json', {
        callBack: (data) => {
          _this.listado = data
          _this.loadedListado = true
        }
      })

      _this.$q.loading.hide()
    }
  }
}
</script>
