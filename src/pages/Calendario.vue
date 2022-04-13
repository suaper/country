<template>
  <q-page class="flex flex-center view_quienes_somos view_calendario">
    <Menucalendario currentItem="/calendario"/>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-xl titulos">Calendario Cultura</div>
        </div>
        <div class="w_1200 centrar">
            <ul class="wrp_actions_calendario">
                <li :class="(currentItem === item.name) ? 'active' : ''" v-for="(item, key) in categories" :key="key">
                    <a href="#" @click="filterItem($event, item.name)">
                    <div class="wrp_animate">
                        <img class="normal" :src="urlSite + item.field_icono_1">
                        <img class="activa" :src="urlSite + item.field_icono_2">
                    </div>
                    <strong>{{ item.name }}</strong>
                    </a>
                </li>
            </ul>
            <div class="wrp_busca_mes w_500 centrar">
                <q-select outlined label="Seleccione el mes" v-model="month" :options="options" @input="getEventsByMonth()" />
            </div>
        </div>
        <div class="q-py-none all_width gris_home wrp_club hazte_socio">
            <div class="centrar w_1200">
                <div class="wrp_gallery_beneficios">
                    <q-carousel
                    v-model="slidecontent"
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    swipeable
                    animated
                    control-color="primary"
                    padding
                    arrows
                    height="300px"
                    class="galeria_beneficios"
                    >
                    <q-carousel-slide :name="key" class="column no-wrap" v-for="(item, key) in events" :key="key">
                        <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                            <div class="treintaydos_general" v-for="(event, eventKey) in item" :key="eventKey">
                                <table class="galeri_event">
                                    <tr class="th_top">
                                        <th class="fecha">{{ getDate(event.field_fecha_evento) }}</th>
                                        <th class="hora">{{ getHour(event.field_fecha_evento) }}</th>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <h5 class="name_event">{{ event.title }}</h5>
                                            <p class="desc_event" v-html="event.field_detalle_evento"></p>
                                            <q-btn class="text_azul centrar bg_white btn_centrar" label="Ver más" icon-right="arrow_right_alt"/>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </q-carousel-slide>
                    </q-carousel>
                    <div class="row justify-center botones">
                        <q-btn-toggle
                        glossy
                        v-model="slidecontent"
                        :options="[]"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menucalendario from 'pages/submenus/Menucalendario'
import configServices from '../services/config'

export default {
  name: 'Calendario',
  components: {
    Menucalendario
  },
  data () {
    return {
      sliders: true,
      video: false,
      currentVideo: '',
      currentItem: 'Charlas Culturales',
      month: '',
      slide: 1,
      slidecontent: 0,
      categories: [],
      info: {
        body: [
          { value: '' }
        ]
      },
      urlSite: 'https://pwccdev.mkbk.digital/',
      options: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
      events: [],
      allEvents: []
    }
  },
  created () {
    this.getInfo()
    this.getEvents()
  },
  methods: {
    getEventsByMonth () {
      var _this = this
      var events = JSON.stringify(this.allEvents)
      var newEvents = []
      events = JSON.parse(events)

      events.map((item, key) => {
        var month = _this.getMonth(item.field_fecha_evento)

        if (month === _this.month) {
          newEvents.push(item)
        }
      })

      var n = 3
      _this.events = new Array(Math.ceil(newEvents.length / n))
        .fill()
        .map(_ => newEvents.splice(0, n))
    },
    getMonth (dateInput) {
      var date = new Date(dateInput)
      return this.options[date.getUTCMonth()]
    },
    getDate (dateInput) {
      var date = new Date(dateInput)
      var day = (date.getDay() < 10) ? '0' + date.getDay() : date.getDay()
      return day + ' ' + this.options[date.getUTCMonth()] + '/' + date.getFullYear()
    },
    getHour (dateInput) {
      var date = new Date(dateInput)
      var dateAmPm = this.formatAMPM(date)

      var hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours()
      var minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()

      return hours + ':' + minutes + ' ' + dateAmPm
    },
    formatAMPM (date) {
      var hours = date.getHours()
      var ampm = hours >= 12 ? 'pm' : 'am'
      return ampm
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/categorias/cultura/json', {
        callBack: (data) => {
          _this.categories = data
        }
      })
    },
    filterItem (e, item) {
      e.preventDefault()
      this.currentItem = item
      this.getEvents()
    },
    getEvents () {
      var _this = this
      configServices.loadData(this, 'eventos-calendario/' + _this.currentItem + '/json', {
        callBack: (data) => {
          _this.allEvents = data

          var newData = JSON.stringify(data)
          newData = JSON.parse(newData)

          const n = 3
          _this.events = new Array(Math.ceil(newData.length / n))
            .fill()
            .map(_ => newData.splice(0, n))
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
