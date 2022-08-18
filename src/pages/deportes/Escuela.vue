 <template>
  <q-page class="flex flex-center view_quienes_somos">
   <MenuDeporteInterno currentItem="/deportes/squash/escuelas" />
   <Banner :banner="info" :bannerSlide="slide" v-if="loadedInfo"/>
    <div class="q-py-xl all_width bg_gris">
        <div class="centrar w_1100 sin_separador">
            <div class="center text-center q-my-lg titulos">Escuela</div>
        </div>
        <div class="centrar w_1100 sin_separador escuela_doble">
            <div class="w_55">
                <TablaClasificacion :items="categories" v-if="loadedServices"/>
            </div>
            <div class="w_35">
                <SoloTexto :content="categories" v-if="loadedServices"/>
            </div>
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo">
        <div class="centrar w_1100">
            <Staff :info="personal" v-if="loadedPersonal" title="Profesores"/>
        </div>
    </div>
    <div class="q-py-xl all_width bg_gris">
        <div class="centrar w_1100 sin_separador ">
            <div class="center text-center q-my-lg titulos">Ranking</div>
        </div>
        <div class="centrar w_1100 sin_separador ">
            <div class="w_55">
                <TablaPosiciones :items="campeonatos" :positions="positions" :key="keyPositions" :obtainPositions="getPositions"/>
            </div>
            <div class="w_35 margon_t">
                <ListaReglamentos :content="reglamentos" v-if="loadedReglamentos"/>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Banner from 'pages/componentes/Uno'
import SoloTexto from 'pages/componentes/SoloTexto'
import TablaClasificacion from 'pages/componentes/TableClasificacion'
import TablaPosiciones from 'pages/componentes/TablaPosiciones'
import Staff from 'pages/componentes/OchoStaff'
import ListaReglamentos from 'pages/componentes/ListaReglamentos'
import configServices from '../../services/config'

export default {
  name: 'Escuela',
  components: {
    MenuDeporteInterno,
    TablaClasificacion,
    TablaPosiciones,
    Banner,
    SoloTexto,
    Staff,
    ListaReglamentos
  },
  data () {
    return {
      sliders: true,
      slide: '0',
      urlSite: 'https://obt3.cl/',
      path: '',
      subPath: '',
      info: {},
      personal: {
        field_imagen_perfil: ''
      },
      loadedPersonal: false,
      loadedInfo: false,
      content: {},
      loadedContent: false,
      comite: {},
      loadedServices: false,
      espiritu: {},
      loadedEspiritu: false,
      categories: [],
      menCategories: [],
      reglamentos: {},
      loadedReglamentos: false,
      campeonatos: [],
      loadedCampeonatos: false,
      positions: [],
      loadedPositions: false,
      keyPositions: 0
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
      configServices.loadData(this, '/slider-deportes/' + _this.subPath + '-' + _this.path + '/json', {
        callBack: (data) => {
          _this.info = data[0]
          _this.slide = data[0].field_slider_sport[0].target_uuid
          _this.loadedInfo = true
        }
      })

      configServices.loadData(this, '/personal-staff/' + _this.subPath + '-' + _this.path, {
        callBack: (data) => {
          _this.personal = data
          _this.loadedPersonal = true
        }
      })

      configServices.loadData(this, '/reglamentos-deportes/' + _this.subPath + '-' + _this.path + '/json', {
        callBack: (data) => {
          _this.reglamentos = data
          _this.loadedReglamentos = true
        }
      })

      configServices.loadData(this, '/campeonatos/' + _this.path + '/json', {
        callBack: (data) => {
          data.map((item, key) => {
            var tournament = {
              id: item.nid,
              label: item.title
            }

            _this.campeonatos.push(tournament)
          })

          _this.loadedCampeonatos = true
          _this.$q.loading.hide()
        }
      })
    },
    getPositions (tournament) {
      var _this = this
      configServices.loadData(this, '/tabla-posiciones/' + tournament.id + '/json', {
        callBack: (data) => {
          _this.positions = data

          _this.loadedPositions = true
          _this.keyPositions = _this.keyPositions + 1
          _this.$q.loading.hide()
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
