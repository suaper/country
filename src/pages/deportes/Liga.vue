 <template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno currentItem="/deportes/futbol/liga-pwcc" />
   <div class="q-pb-md all_width bg_gris wrp_club hazte_socio">
        <div class="centrar q-pt-md w_1200">
            <div class="center text-center q-my-lg titulos">Liga PWCC</div>
            <Anclas :items="filterCategories" :path="subPath" :goAnchor="filterInformation"/>

            <h5 class="style_title q-my-lg " v-if="loadedContent">Historia</h5>
            <Historia :content="content" v-if="loadedContent" :key="keyContent" />
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo" v-if="loadedTeams">
        <div class="centrar w_1100">
            <h5 class="style_title q-my-lg ">Equipos</h5>
            <Equipos :items="teams" v-if="loadedTeams" :key="keyTeams"/>
        </div>
    </div>

    <div class="q-py-none all_width bg_gris wrp_club" v-if="loadedPositions">
        <div class="row_wrap no-wrap flex justify-start">
            <div class="q-py-md centrar text-center w_1200">
              <h5 class="style_title q-my-lg text-left">Tabla de Posiciones</h5>
                <div class="row_2 fitnes_last">
                    <div class="w_50">
                        <Imagen :key="keyPositions" :path="path" :content="positions" v-if="loadedPositions"/>
                    </div>
                    <div class="w_50">
                        <TableRankingFutbol :items="positions" :key="keyPositions" v-if="loadedPositions"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo" v-if="loadedGoleadores">
        <div class="centrar w_1100">
            <h5 class="style_title q-my-lg ">Goleadores</h5>
            <Goleadores :items="goleadores" :key="keyGoleadores" v-if="loadedGoleadores"/>
        </div>
    </div>
    <div class="q-py-xl all_width bg_gris" v-if="loadedPalmares">
        <div class="centrar w_1100">
            <h5 class="style_title q-my-lg ">Palmarés</h5>
            <PalmaresFutbol :items="palmares" :key="keyPalmares" v-if="loadedPalmares"/>
        </div>
    </div>
  </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Anclas from 'pages/componentes/Anclas'
import Imagen from 'pages/componentes/ImagenBoton'
import TableRankingFutbol from 'pages/componentes/TableRankingFutbol'
import Equipos from 'pages/componentes/EquiposFutbol.vue'
import Goleadores from 'pages/componentes/Goleadores.vue'
import PalmaresFutbol from 'pages/componentes/PalmaresFutbol.vue'
import configServices from '../../services/config'
import Historia from 'pages/componentes/SoloTexto'

export default {
  name: 'Rugby',
  components: {
    MenuDeporteInterno,
    Anclas,
    Imagen,
    Equipos,
    Goleadores,
    PalmaresFutbol,
    TableRankingFutbol,
    Historia
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
      urlSite: 'https://www.pwcc.cl',
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
      ranking: [],
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
      loadedTeams: false,
      loadedRanking: false,
      bannerDeportes: [],
      loadedBannerDeportes: false,
      filterCategories: [],
      filterTemporadas: [],
      teams: [],
      temporada: '',
      tournament: '',
      keyContent: 0,
      keyTeams: 0,
      filterItems: [],
      subPath: '',
      intros: [],
      positions: [],
      loadedPositions: false,
      keyPositions: 0,
      goleadores: [],
      loadedGoleadores: false,
      keyGoleadores: 0,
      palmares: [],
      loadedPalmares: false,
      keyPalmares: 0
    }
  },
  created () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
    this.subPath = currentPath[3]
    localStorage.setItem('sport', this.path)

    this.getLeagues()
    this.getInfo()
  },
  methods: {
    addCurrentClass (e) {
      const collection = document.getElementsByClassName('anchor')
      for (let index = 0; index < collection.length; index++) {
        collection[index].classList.remove('anchor-active')
      }
      e.currentTarget.classList.add('anchor-active')
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/intro-internas-deportes/' + _this.subPath + '/json', {
        callBack: (data) => {
          _this.intros = data
        }
      })
    },
    getLeagues () {
      var _this = this
      configServices.loadData(this, '/categorias-liga/json', {
        callBack: (data) => {
          data.map((item, key) => {
            var filter = {
              id: item.tid,
              title: item.name
            }

            _this.filterCategories.push(filter)
            _this.filterInformation('', _this.filterCategories[0])
          })
          _this.$q.loading.hide()
        }
      })
    },
    filterInformation (e, category) {
      if (e !== '') {
        e.preventDefault()
        this.addCurrentClass(e)
      }

      var _this = this
      var intro = JSON.stringify(this.intros)
      intro = JSON.parse(intro)

      intro.map((item, key) => {
        if (item.field_ligas[0].target_id === parseInt(category.id)) {
          _this.content = item
          _this.loadedContent = true
          _this.keyContent = _this.keyContent + 1
        }
      })

      _this.teams = []

      configServices.loadData(this, '/equipos-futbol/' + category.id + '/json', {
        callBack: (data) => {
          data.map((item, key) => {
            var service = {
              title: item.title,
              image: item.field_imagen_equipo_1,
              subServices: [
                {
                  field_cargo_staff: item.field_cargo_staff,
                  field_nombre_staff: item.field_nombre_staff
                }
              ]
            }
            const isFound = _this.teams.find((element, index) => {
              if (element.title === item.title) {
                _this.teams.splice(index, 1)
                return element
              }
            })

            if (isFound && typeof isFound !== 'undefined') {
              isFound.subServices.push({
                field_cargo_staff: item.field_cargo_staff,
                field_nombre_staff: item.field_nombre_staff
              })

              _this.teams.push(isFound)
            } else {
              _this.teams.push(service)
            }
          })
          _this.loadedTeams = true
          _this.keyTeams = _this.keyTeams + 1
        }
      })

      configServices.loadData(this, '/tabla-posiciones-futbol/' + category.id + '/json', {
        callBack: (data) => {
          _this.positions = data
          _this.sortItems()

          _this.loadedPositions = true
          _this.keyPositions = _this.keyPositions + 1
        }
      })

      configServices.loadData(this, '/goleadores/' + category.id + '/json', {
        callBack: (data) => {
          const n = 3
          _this.goleadores = new Array(Math.ceil(data.length / n))
            .fill()
            .map(_ => data.splice(0, n))

          _this.loadedGoleadores = true
          _this.keyGoleadores = _this.keyGoleadores + 1
        }
      })
      configServices.loadData(this, '/palmares-futbol/' + category.id + '/json', {
        callBack: (data) => {
          _this.palmares = data

          _this.loadedPalmares = true
          _this.keyPalmares = _this.keyPalmares + 1
        }
      })

      _this.$q.loading.hide()
    },
    sortItems () {
      this.positions.sort(function (a, b) {
        return parseInt(a.field_posicion) - parseInt(b.field_posicion)
      })
    },
    filterRankingByTournament (tournament) {
      var _this = this
      var items = JSON.stringify(this.ranking)
      items = JSON.parse(items)

      items.map((item, key) => {
        if (item.tournament === tournament.label) {
          _this.filterItems.push(item)
        }
      })

      this.sortItems()

      this.key = this.key + 1
      this.loadedRanking = true
    },
    filterRankingByTemporada (temporada) {
      var _this = this
      var items = JSON.stringify(this.ranking)
      items = JSON.parse(items)

      items.map((item, key) => {
        if (item.temporada === temporada.label) {
          _this.filterItems.push(item)
        }
      })
      this.sortItems()

      this.key = this.key + 1
      this.loadedRanking = true
    },
    getRanking () {
      // ranking
    }
  }
}
</script>
