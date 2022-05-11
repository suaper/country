 <template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno currentItem="/deportes/paddle/ranking" />
   <div class="q-pb-md all_width bg_gris wrp_club hazte_socio">
        <div class="centrar q-pt-md w_1200">
            <div class="center text-center q-my-lg titulos">Liga PWCC</div>
            <Anclas :items="filterCategories" :path="path" :goAnchor="filterRankingByCategorie"/>

            <h5 class="style_title q-my-lg ">Historia</h5>
            <Historia :content="content" v-if="loadedContent" />
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo">
        <div class="centrar w_1100">
            <h5 class="style_title q-my-lg ">Equipos</h5>
            <Equipos />
        </div>
    </div>

    <div class="q-py-none all_width bg_gris wrp_club">
        <div class="row_wrap no-wrap flex justify-start">
            <div class="q-py-md centrar text-center w_1200">
              <h5 class="style_title q-my-lg text-left">Tabla de Posiciones</h5>
                <div class="row_2 fitnes_last">
                    <div class="w_50">
                        <Imagen :key="key" :path="path" :content="filterItems" v-if="loadedRanking"/>
                    </div>
                    <div class="w_50">
                        <TableRankingFutbol />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo">
        <div class="centrar w_1100">
            <h5 class="style_title q-my-lg ">Goleadores</h5>
            <Goleadores />
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo">
        <div class="centrar w_1100">
            <h5 class="style_title q-my-lg ">Palmarés</h5>
            <PalmaresFutbol />
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

export default {
  name: 'Rugby',
  components: {
    MenuDeporteInterno,
    Anclas,
    Imagen,
    Equipos,
    Goleadores,
    PalmaresFutbol,
    TableRankingFutbol
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
      loadedEvents: false,
      loadedRanking: false,
      bannerDeportes: [],
      loadedBannerDeportes: false,
      filtersTournaments: [],
      filterTemporadas: [],
      filterCategories: [],
      temporada: '',
      tournament: '',
      key: 0,
      filterItems: []
    }
  },
  created () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]

    localStorage.setItem('sport', this.path)

    this.getRanking()
  },
  methods: {
    filterRankingByCategorie (e, category) {
      e.preventDefault()
      var _this = this
      var items = JSON.stringify(this.ranking)
      items = JSON.parse(items)

      items.map((item, key) => {
        if (item.category === category) {
          _this.filterItems.push(item)
        }
      })

      this.sortItems()
      this.key = this.key + 1
      this.loadedRanking = true
    },
    sortItems () {
      this.filterItems[0].subServices.sort(function (a, b) {
        return parseInt(a.field_ranking) - parseInt(b.field_ranking)
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
      var _this = this
      configServices.loadData(this, '/ranking-deportes/' + _this.path + '/json', {
        callBack: (data) => {
          data.map((item, key) => {
            if (item.field_campeonato !== '') {
              var filter = {
                label: item.field_campeonato
              }
              const isFound = _this.filtersTournaments.find((element, index) => {
                if (element.label === item.field_campeonato) {
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
            var filter = {
              label: item.field_seleccione_la_temporada
            }
            const isFound = _this.filterTemporadas.find((element, index) => {
              if (element.label === item.field_seleccione_la_temporada) {
                _this.filterTemporadas.splice(index, 1)
                return element
              }
            })

            if (typeof isFound !== 'undefined') {
              _this.filterTemporadas.push(filter)
            } else {
              _this.filterTemporadas.push(filter)
            }
          })

          data.map((item, key) => {
            var filter = {
              title: item.field_categoria_ranking
            }
            const isFound = _this.filterCategories.find((element, index) => {
              if (element.title === item.field_categoria_ranking) {
                _this.filterCategories.splice(index, 1)
                return element
              }
            })

            if (typeof isFound !== 'undefined') {
              _this.filterCategories.push(filter)
            } else {
              _this.filterCategories.push(filter)
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

          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
