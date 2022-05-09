 <template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno />
   <Banner :banner="info" :bannerSlide="slide" v-if="loadedInfo"/>
   <div class="q-pb-md all_width bg_gris wrp_club hazte_socio">
        <div class="centrar w_1200">
            <div class="center text-center q-my-lg titulos">Actividades</div>
            <h4 class="subtitle">Eventos</h4>
            <Eventos />
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1100 bg_amarillo">
            <h4 class="subtitle q-my-md">Descargables</h4>
            <Descargables />
        </div>
    </div>
  </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Banner from 'pages/componentes/Uno'
import Eventos from 'pages/componentes/CincoProximos.vue'
import Descargables from 'pages/componentes/Descargables'
import configServices from '../../services/config'

export default {
  name: 'NatacionBebes',
  components: {
    MenuDeporteInterno,
    Banner,
    Eventos,
    Descargables
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
  mounted () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
    this.subPath = currentPath[3]

    this.getInfo()
    this.getCategories()
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
      configServices.loadData(this, '/slider-deportes/' + _this.path + '-' + _this.subPath + '/json', {
        callBack: (data) => {
          _this.info = data[0]
          _this.slide = data[0].field_slider_sport[0].target_uuid
          _this.loadedInfo = true
        }
      })

      configServices.loadData(this, '/reglamentos-deportes/' + _this.path + '-' + _this.subPath + '/json', {
        callBack: (data) => {
          _this.reglamentos = data
          _this.loadedReglamentos = true
        }
      })
    },
    getCategories () {
      var _this = this
      configServices.loadData(this, '/categorias/' + _this.path + '-' + _this.subPath + '/deportes', {
        callBack: (data) => {
          data.map((item, key) => {
            var service = {
              title: item.title,
              body: item.body,
              subServices: [
                {
                  training: item.field_entranamiento,
                  date: item.field_horarios,
                  teacher: item.field_profesor_a
                }
              ]
            }
            const isFound = _this.categories.find((element, index) => {
              if (element.title === item.title) {
                _this.categories.splice(index, 1)
                return element
              }
            })

            if (isFound && typeof isFound !== 'undefined') {
              isFound.subServices.push({
                training: item.field_entranamiento,
                date: item.field_horarios,
                teacher: item.field_profesor_a
              })

              _this.categories.push(isFound)
            } else {
              _this.categories.push(service)
            }
          })

          _this.loadedContent = true
        }
      })
    }
  }
}
</script>
