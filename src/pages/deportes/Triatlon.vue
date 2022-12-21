 <template>
  <q-page class="flex flex-center view_quienes_somos">
   <MenuDeporteInterno currentItem="/deportes/natacion/triatlon" />
   <Banner :banner="info" :bannerSlide="slide" v-if="loadedInfo"/>
   <div class="q-pb-md all_width bg_gris wrp_club hazte_socio sin_enlace">
        <div class="centrar w_1200">
            <div class="center text-center q-my-lg titulos">Triatlón</div>
            <DescTriatlon :info="content" v-if="loadedContent"/>
        </div>
    </div>
  </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Banner from 'pages/componentes/Uno'
import DescTriatlon from 'pages/componentes/DiezHockey'
import configServices from '../../services/config'

export default {
  name: 'Triatlon',
  components: {
    MenuDeporteInterno,
    Banner,
    DescTriatlon
  },
  data () {
    return {
      sliders: true,
      slide: '0',
      urlSite: 'https://www.pwcc.cl',
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
  mounted () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
    this.subPath = currentPath[3]

    this.getInfo()
    this.$q.loading.hide()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/slider-deportes/' + _this.path + '-' + _this.subPath + '/json', {
        callBack: (data) => {
          _this.info = data[0]
          _this.slide = data[0].field_slider_sport[0].target_uuid
          _this.loadedInfo = true
        }
      })

      configServices.loadData(this, '/video-deportes/' + _this.path + '-' + _this.subPath + '/json', {
        callBack: (data) => {
          _this.content = data[0]
          _this.loadedContent = true
        }
      })
    }
  }
}
</script>
