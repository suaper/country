 <template>
  <q-page class="flex flex-center view_quienes_somos">
   <MenuDeporteInterno :currentItem="'/deportes/' + path + '/historia'"/>
   <Banner :banner="info" :bannerSlide="slide" v-if="loadedInfo"/>
   <div class="q-pb-md all_width bg_gris wrp_club hazte_socio">
        <div class="centrar w_1200">
            <div class="center text-center q-my-lg titulos">Historia</div>
            <DescDeporte :content="content" v-if="loadedContent" />
            <ListaReglamentos :content="reglamentos" v-if="loadedReglamentos"/>
        </div>
    </div>
  </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Banner from 'pages/componentes/Uno'
import DescDeporte from 'pages/componentes/SoloTexto'
import ListaReglamentos from 'pages/componentes/ListaReglamentos'
import configServices from '../../services/config'

export default {
  name: 'NatacionBebes',
  components: {
    MenuDeporteInterno,
    Banner,
    DescDeporte,
    ListaReglamentos
  },
  data () {
    return {
      sliders: true,
      slide: '0',
      urlSite: 'https://pwccdev.mkbk.digital/',
      path: '',
      subPath: '',
      info: {},
      loadedInfo: false,
      content: {},
      loadedContent: false,
      comite: {},
      loadedComite: false,
      espiritu: {},
      loadedEspiritu: false,
      categories: [],
      menCategories: [],
      reglamentos: {},
      loadedReglamentos: false
    }
  },
  created () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
    this.subPath = currentPath[3]

    this.getInfo()
    this.$q.loading.hide()
  },
  methods: {
    goToAnchor (e, item) {
      e.preventDefault()
      const el = document.querySelector(item)
      el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/slider-deportes/' + _this.subPath + '-' + _this.path + '/json', {
        callBack: (data) => {
          _this.info = data[0]
          _this.slide = data[0].field_slider_sport[0].target_uuid
          _this.loadedInfo = true
        }
      })

      configServices.loadData(this, '/intro-internas-deportes/' + _this.subPath + '-' + _this.path + '/json', {
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
    }
  }
}
</script>
