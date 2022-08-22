 <template>
  <q-page class="flex flex-center view_quienes_somos">
  <MenuDeporteInterno currentItem="/deportes/natacion/master" />
   <Banner :banner="info" :bannerSlide="slide" v-if="loadedInfo"/>
   <div class="q-pb-md all_width bg_gris wrp_club hazte_socio">
        <div class="centrar w_1200">
            <div class="center text-center q-my-lg titulos">Natación Master</div>
            <DescDeporte :content="content" v-if="loadedContent" />
        </div>
    </div>
    <div class="q-pb-xl all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1100 bg_amarillo">
            <h4 class="subtitle q-my-xl">Días de entrenamiento</h4>
            <div class="w_900 centrar">
              <TablaClasificacion :items="categories" v-if="loadedServices"/>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Banner from 'pages/componentes/Uno'
import DescDeporte from 'pages/componentes/SoloTexto'
import TablaClasificacion from 'pages/componentes/TableClasificacion'
import configServices from '../../services/config'

export default {
  name: 'NatacionMaster',
  components: {
    MenuDeporteInterno,
    Banner,
    DescDeporte,
    TablaClasificacion
  },
  data () {
    return {
      sliders: true,
      slide: '0',
      urlSite: 'https://obt3.cl',
      path: '',
      subPath: '',
      info: {},
      loadedInfo: false,
      content: {},
      loadedContent: false,
      comite: {},
      loadedComite: false,
      espiritu: {},
      loadedServices: false,
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
      var top = el.offsetTop
      window.scrollTo({
        top: top,
        left: 0,
        behavior: 'smooth'
      })
      // el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })
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

      configServices.loadData(this, '/intro-internas-deportes/' + _this.path + '-' + _this.subPath + '/json', {
        callBack: (data) => {
          _this.content = data[0]
          _this.loadedContent = true
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

          _this.loadedServices = true
        }
      })
    }
  }
}
</script>
