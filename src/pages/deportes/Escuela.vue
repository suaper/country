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
                <div class="wrp_busca_mes w_100 centrar select" v-if="path === 'squash'">
                    <q-select outlined class="q-mb-xl" v-if="loadedRanking" v-model="tournament" label="Seleccione el Torneo" :options="filtersTournaments" @input="filterRankingByTournament(tournament)" />
                </div>
                <TableRanking v-if="path === 'squash' && loadedTournament" :key="key" :items="filterItems"/>
                <TablaPosiciones v-if="path === 'futbol'" :items="campeonatos" :positions="positions" :key="keyPositions" :obtainPositions="getPositions"/>
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
import TableRanking from 'pages/componentes/TableRanking'

export default {
  name: 'Escuela',
  components: {
    MenuDeporteInterno,
    TablaClasificacion,
    TablaPosiciones,
    Banner,
    SoloTexto,
    Staff,
    ListaReglamentos,
    TableRanking
  },
  data () {
    return {
      sliders: true,
      slide: '0',
      urlSite: 'https://www.pwcc.cl',
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
      keyPositions: 0,
      ranking: [],
      loadedRanking: false,
      loadedTournament: false,
      filtersTournaments: [],
      filterItems: [],
      tournament: '',
      key: 0
    }
  },
  mounted () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
    this.subPath = currentPath[3]

    this.getInfo()
    this.getCategories()
    this.getRanking()
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
    filterRankingByTournament (tournament) {
      var _this = this
      var items = JSON.stringify(this.ranking)
      items = JSON.parse(items)

      _this.filterItems = []

      items.map((item, key) => {
        if (item.title === tournament.label) {
          _this.filterItems.push(item)
        }
      })

      this.loadedTournament = true
      this.sortItems()

      this.key = this.key + 1
    },
    sortItems () {
      this.filterItems[0].subServices.sort(function (a, b) {
        return parseInt(a.field_ranking) - parseInt(b.field_ranking)
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
    getRanking () {
      var _this = this
      configServices.loadData(this, '/ranking-deportes/' + _this.path + '/json', {
        callBack: (data) => {
          data.map((item, key) => {
            if (item.title !== '') {
              var filter = {
                label: item.title
              }
              const isFound = _this.filtersTournaments.find((element, index) => {
                if (element.label === item.title) {
                  _this.filtersTournaments.splice(index, 1)
                  return element
                }
              })
              if (typeof isFound !== 'undefined') {
                _this.filtersTournaments.push(filter)
              } else {
                _this.filtersTournaments.push(filter)
              }
            }
          })

          data.map((item, key) => {
            var service = {
              title: item.title,
              image: item.field_imagen_ranking,
              tournament: item.field_campeonato,
              temporada: item.field_seleccione_la_temporada,
              category: item.field_categoria_ranking,
              subServices: [
                {
                  field_cambio: item.field_cambio,
                  field_nombre_y_apellidos: item.field_nombre_y_apellidos,
                  field_sube_baja: item.field_sube_baja,
                  field_puntaje: item.field_puntaje,
                  field_ranking: item.field_ranking
                }
              ]
            }
            const isFound = _this.ranking.find((element, index) => {
              if (element.title === item.title) {
                _this.ranking.splice(index, 1)
                return element
              }
            })

            if (isFound && typeof isFound !== 'undefined') {
              isFound.subServices.push({
                field_cambio: item.field_cambio,
                field_nombre_y_apellidos: item.field_nombre_y_apellidos,
                field_sube_baja: item.field_sube_baja,
                field_puntaje: item.field_puntaje,
                field_ranking: item.field_ranking
              })

              _this.ranking.push(isFound)
            } else {
              _this.ranking.push(service)
            }
          })

          _this.loadedRanking = true

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
