 <template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno :currentItem="'/deportes/' + path + '/calendario'"/>

    <div class="q-pb-md all_width bg_gris">
        <div class="centrar w_1100">
            <div class="center text-center q-pt-md q-my-lg titulos">Calendario</div>
            <Anclas :goAnchor="filterItem" :path="subPath" v-if="path === 'hockey'"/>
            <Fechas :info="events" v-if="loadedEvents" :eventsByMonth="getEventsByMonth" :key="key"/>
        </div>
    </div>

    <div class="q-py-xl all_width bg_amarillo" v-if="path === 'hockey'">
        <div class="centrar w_1100 fila_separador ">
            <div class="w_55">
                <h5 class="style_title q-my-lg ">Tabla de posiciones</h5>
                <TablaPosiciones :items="campeonatos" :positions="positions" :key="keyPositions" :obtainPositions="getPositions"/>
            </div>
            <div class="w_35">
                <h5 class="style_title q-my-lg ">Palmarés</h5>
                <Palmares :items="info" v-if="loadedInfo"/>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Anclas from 'pages/componentes/Anclas'
import TablaPosiciones from 'pages/componentes/TablaPosiciones'
import Palmares from 'pages/componentes/Palmares'
import Fechas from 'pages/componentes/CincoProximos'
import configServices from '../../services/config'

export default {
  name: 'Categorias',
  components: {
    MenuDeporteInterno,
    Anclas,
    TablaPosiciones,
    Palmares,
    Fechas
  },
  data () {
    return {
      sliders: true,
      key: 0,
      urlSite: 'https://pwccdev.mkbk.digital/',
      loadedEvents: false,
      events: [],
      allEvents: [],
      currentItem: 'Damas',
      event: {},
      path: '',
      info: [],
      loadedInfo: false,
      subPath: '',
      options: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
      campeonatos: [],
      loadedCampeonatos: false,
      positions: [],
      loadedPositions: false,
      keyPositions: 0
    }
  },
  created () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
    this.subPath = currentPath[3]
    this.getEvents()
    this.getInfo()
  },
  methods: {
    getEvents () {
      var _this = this
      var url = '/eventos-deportes-calendario/' + _this.path + '/json/' + _this.currentItem
      if (_this.path !== 'hockey') {
        url = '/eventos/' + _this.path + '/json/'
      }
      configServices.loadData(this, url, {
        callBack: (data) => {
          const n = 3
          _this.allEvents = data

          var newData = JSON.stringify(data)
          newData = JSON.parse(newData)

          _this.events = new Array(Math.ceil(newData.length / n))
            .fill()
            .map(_ => newData.splice(0, n))

          _this.loadedEvents = true
          _this.key = _this.key + 1
        }
      })
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/palmares/' + _this.path + '/json', {
        callBack: (data) => {
          _this.info = data
          _this.loadedInfo = true
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
    openDetalleEvento (event) {
      this.event = event
      this.dtevento = true
    },
    getDate (dateInput) {
      var date = new Date(dateInput)
      const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      var day = (date.getDay() < 10) ? '0' + date.getDay() : date.getDay()
      return day + ' ' + month[date.getUTCMonth()] + '/' + date.getFullYear()
    },
    getMonth (dateInput) {
      var date = new Date(dateInput)
      return this.options[date.getUTCMonth()]
    },
    getHour (dateInput) {
      var date = new Date(dateInput)
      var dateAmPm = this.formatAMPM(date)
      var hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours()
      var minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()
      return hours + ':' + minutes + ' ' + dateAmPm
    },
    filterItem (e, item) {
      e.preventDefault()
      this.currentItem = item.replace('#', '')
      this.getEvents()
    },
    formatAMPM (date) {
      var hours = date.getHours()
      var ampm = hours >= 12 ? 'pm' : 'am'
      return ampm
    },
    getEventsByMonth (componentMonth) {
      var _this = this
      console.log(componentMonth)
      var events = JSON.stringify(_this.allEvents)
      var newEvents = []
      events = JSON.parse(events)

      events.map((item, key) => {
        var month = _this.getMonth(item.field_fecha_evento)
        if (month === componentMonth) {
          newEvents.push(item)
        }
      })

      var n = 3
      _this.events = new Array(Math.ceil(newEvents.length / n))
        .fill()
        .map(_ => newEvents.splice(0, n))

      _this.key = _this.key + 1
    },
    getPositions (tournament) {
      var _this = this
      configServices.loadData(this, '/tabla-posiciones/' + tournament.id + '/json', {
        callBack: (data) => {
          console.log(data)
          _this.positions = data

          _this.loadedPositions = true
          _this.keyPositions = _this.keyPositions + 1
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
