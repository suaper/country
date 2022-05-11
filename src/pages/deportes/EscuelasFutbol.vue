 <template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno currentItem="/deportes/hockey/categoria"/>
    <Banner :banner="info" :bannerSlide="slide" v-if="loadedInfo"/>

    <div class="q-pb-md all_width bg_gris">
        <div class="centrar w_1100">
            <div class="center text-center q-my-lg titulos">Escuelas</div>

            <div class="row_2 centrar flex all_width">
                <div class="w_25 q-mx-md">
                    <ImagenPublicitaria/>
                </div>
                <div class="w_70 q-mx-md">
                    <h5 class="style_title q-my-lg" >Horarios e Inscripción</h5>
                    <div class="row_2 centrar flex">
                        <div class="w_45">
                            <h5 class="text_normal">Rama Femenina</h5>
                            <TablaHorarios />
                        </div>
                        <div class="w_45">
                            <h5 class="text_normal">Rama Masculina</h5>
                            <TablaHorarios />
                        </div>
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
import ImagenPublicitaria from 'pages/componentes/ImagenPublicitaria'
import TablaHorarios from 'pages/componentes/TablaHorarios'
import configServices from '../../services/config'

export default {
  name: 'Categorias',
  components: {
    MenuDeporteInterno,
    Banner,
    ImagenPublicitaria,
    TablaHorarios
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
      womanCategories: [],
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
      configServices.loadData(this, '/slider-deportes/' + _this.subPath + '-' + _this.path + '/json', {
        callBack: (data) => {
          _this.info = data[0]
          _this.slide = data[0].field_slider_sport[0].target_uuid
          _this.loadedInfo = true
        }
      })

      configServices.loadData(this, '/reglamentos-deportes/' + _this.subPath + '-' + _this.path + '/json', {
        callBack: (data) => {
          _this.reglamentos = data
          _this.loadedReglamentos = true
        }
      })
    },
    getCategories () {
      var _this = this
      configServices.loadData(this, '/categorias/' + _this.subPath + '-' + _this.path + '/deportes', {
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
            if (item.title === 'Damas') {
              const isFound = _this.womanCategories.find((element, index) => {
                if (element.title === item.title) {
                  _this.womanCategories.splice(index, 1)
                  return element
                }
              })

              if (isFound && typeof isFound !== 'undefined') {
                isFound.subServices.push({
                  training: item.field_entranamiento,
                  date: item.field_horarios,
                  teacher: item.field_profesor_a
                })

                _this.womanCategories.push(isFound)
              } else {
                _this.womanCategories.push(service)
              }
            }
            if (item.title === 'Varones') {
              const isFound = _this.menCategories.find((element, index) => {
                if (element.title === item.title) {
                  _this.menCategories.splice(index, 1)
                  return element
                }
              })

              if (isFound && typeof isFound !== 'undefined') {
                isFound.subServices.push({
                  training: item.field_entranamiento,
                  date: item.field_horarios,
                  teacher: item.field_profesor_a
                })

                _this.menCategories.push(isFound)
              } else {
                _this.menCategories.push(service)
              }
            }
          })

          _this.loadedContent = true
        }
      })
    }
  }
}
</script>
