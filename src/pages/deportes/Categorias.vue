 <template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno currentItem="/deportes/hockey/categoria"/>
    <Banner :banner="info" :bannerSlide="slide" v-if="loadedInfo"/>

    <div class="q-pb-md all_width bg_gris">
        <div class="centrar w_1100">
            <div class="center text-center q-my-lg titulos">Categorías</div>
            <Anclas :goAnchor="goToAnchor" :path="subPath"/>
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo" id="damas">
        <div class="centrar w_1100 fila_separador ">
            <div class="w_55">
                <h5 class="style_title q-my-lg" >Damas</h5>
                <TablaClasificacion :items="womanCategories" v-if="loadedContent"/>
            </div>
            <div class="w_35">
                <SoloTexto :content="womanCategories" v-if="loadedContent"/>
            </div>
        </div>
    </div>
    <div class="q-py-xl all_width bg_gris" id="varones">
        <div class="centrar w_1100 fila_separador ">
            <div class="w_55">
                <h5 class="style_title q-my-lg" >Varones</h5>
                <TablaClasificacion :items="menCategories" v-if="loadedContent"/>
            </div>
            <div class="w_35">
                <SoloTexto :content="menCategories" v-if="loadedContent"/>
            </div>
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo" id="reglamentos">
        <div class="centrar w_1100">
            <h5 class="style_title q-my-lg" >Reglamentos</h5>
            <ListaReglamentos :content="reglamentos" v-if="loadedReglamentos"/>
        </div>
    </div>
  </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Banner from 'pages/componentes/Uno'
import Anclas from 'pages/componentes/Anclas'
import TablaClasificacion from 'pages/componentes/TableClasificacion'
import ListaReglamentos from 'pages/componentes/ListaReglamentos'
import SoloTexto from 'pages/componentes/SoloTexto'
import configServices from '../../services/config'

export default {
  name: 'Categorias',
  components: {
    MenuDeporteInterno,
    Banner,
    Anclas,
    TablaClasificacion,
    SoloTexto,
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
