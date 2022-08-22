<template>
  <q-page class="flex flex-center view_quienes_somos view_calendario view_danzas">
    <div class="q-pb-md all_width gris_home">
        <div class="setenta q-pd-md centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Actividades</div>
            <div class="back"> <q-btn round color="white" onclick="history.back()" icon="west" />Volver</div>
        </div>

        <div class="q-py-none all_width gris_home wrp_club hazte_socio">
            <div class="centrar w_1200">
              <h6 class="peluqueria q-mt-none">Eventos</h6>
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
                                            <q-btn @click="openDetalleEvento(event)" class="text_azul centrar bg_white btn_centrar" label="Ver más" icon-right="arrow_right_alt"/>
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
            <q-dialog v-model="dtevento" >
            <q-card style="width: 700px; max-width: 80vw;" class="pop_mi_c">
                <q-card-section class="row items-center q-pb-none">
                    <div class="text-h6">{{ event.title }}</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>

                <q-card-section class="pop_club">
                    <span class="desc_club strong">Evento {{ event.field_tipo_evento }}</span><br>
                    <span class="desc_club">{{ getDate(event.field_fecha_evento) }} {{ getHour(event.field_fecha_evento) }}</span>
                </q-card-section>
                <q-card-section class="flex flex-start pop_descargar">
                    <div class="wrp_list_eventos">
                        <div class="list_desc flex">
                            <span class="bold">Ubicación</span>
                            <span>{{ event.field_ubicacion }}</span>
                        </div>
                        <div class="list_desc flex">
                            <span class="bold">Duración</span>
                            <span>{{ event.field_duracion }}</span>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo wrp_club hazte_socio" v-if="loadedDescargables">
        <div class="w_1200 centrar">
            <h6 class="peluqueria q-mt-none">Descargables</h6>
            <ul class="list_descargables">
                <li v-for="(item, key) in descargables" :key="key">
                    <a href="#"  @click="openPopDescargas($event, item)">
                      <img class="normal" :src="urlSite + item.icon">
                      <strong>{{ item.title }}</strong>
                      <q-btn class="text_azul centrar bg_white btn_centrar" label="Ver más" icon-right="arrow_right_alt"/>
                    </a>
                </li>
            </ul>
        </div>
      </div>
  <q-dialog v-model="LstDescarga" persistent>
    <q-card>
        <q-card-section class="row items-center relative salones pop_down">
            <q-btn icon="close volando" flat round dense v-close-popup />
            <div class="row">
                <h4>{{ currentDescargable.title }}</h4>
                <div class="wrp_search_pop">
                    <div class="buscador_general">
                    <q-input
                      v-model="search"
                      filled
                      placeholder="Buscar"
                    >
                      <template>
                      </template>
                    </q-input>

                    <q-btn class="peque" round color="white" icon="search" @click="searchDescargable()"/>
                </div>
              </div>
            </div>
            <div class="list_descargables_pop">
                <ul class="list_reglamentos q-py-md">
                    <li v-for="(item, key) in currentDescargable.subServices" :key="key">
                        <div class="box_download q-ma-none m_left_20 flex bg_white">
                            <img src="../../assets/MiClub/i-pdf.svg">
                            <div class="text">
                              <a :href="urlSite + item.field_archivo_pdf">
                                <span class="bold">{{ item.field_nombre_item }}</span>
                                <span v-html="item.field_descripcion_pdf"></span>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </q-card-section>
    </q-card>
  </q-dialog>
  </q-page>
</template>

<script>

import configServices from '../../services/config'

export default {
  name: 'Calendario',

  data () {
    return {
      sliders: true,
      video: false,
      currentVideo: '',
      currentItem: 'Charlas Culturales',
      LstDescarga: false,
      search: '',
      month: '',
      slide: 1,
      slidecontent: 0,
      categories: [],
      info: {
        body: [
          { value: '' }
        ]
      },
      urlSite: 'https://obt3.cl',
      options: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
      events: [],
      allEvents: [],
      dtevento: false,
      event: {},
      descargables: [],
      loadedDescargables: false,
      currentDescargable: {},
      lastItem: ''
    }
  },
  created () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
    this.subPath = currentPath[3]

    this.getInfo()
    this.getEvents()
  },
  methods: {
    stripHtml (html) {
      var tmp = document.createElement('div')
      tmp.innerHTML = html
      return tmp.textContent || tmp.innerText || ''
    },
    searchDescargable () {
      var _this = this
      var newDescargables = []

      this.lastItem = JSON.stringify(this.currentDescargable)

      this.currentDescargable.subServices.map((item, key) => {
        var description = this.stripHtml(item.field_descripcion_pdf).toLowerCase()
        if (item.field_nombre_item.toLowerCase().includes(_this.search) || description.includes(_this.search)) {
          newDescargables.push(item)
        }
      })
      this.currentDescargable.subServices = newDescargables
    },
    openPopDescargas (e, item) {
      e.preventDefault()
      this.search = ''
      this.currentDescargable = item
      if (this.lastItem !== '') {
        var lastItem = JSON.parse(this.lastItem)
        if (item.title === lastItem.title) {
          this.currentDescargable = lastItem
        }
      }
      this.LstDescarga = true
    },
    openDetalleEvento (event) {
      this.event = event
      this.dtevento = true
    },
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
      if (typeof dateInput !== 'undefined') {
        var dateParse = dateInput.replace('T', ' ')
        dateParse = dateParse.split(' ')
        var eventDate = dateParse[0].split('-')

        var date = new Date(eventDate[0], eventDate[1], eventDate[2])
        const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

        return eventDate[2] + ' ' + month[date.getUTCMonth() - 1] + '/' + date.getFullYear()
      }
    },
    getHour (dateInput) {
      if (typeof dateInput !== 'undefined') {
        var date = new Date(dateInput)
        var dateAmPm = this.formatAMPM(date)

        var hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours()
        var minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()

        return hours + ':' + minutes + ' ' + dateAmPm
      }
    },
    formatAMPM (date) {
      var hours = date.getHours()
      var ampm = hours >= 12 ? 'pm' : 'am'
      return ampm
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/item-descargables-fitness/json', {
        callBack: (data) => {
          data.map((item, key) => {
            var service = {
              title: item.field_titulo_item,
              icon: item.field_ico,
              subServices: [
                {
                  field_descripcion_pdf: item.field_descripcion_pdf,
                  field_nombre_item: item.field_nombre_item,
                  field_archivo_pdf: item.field_archivo_pdf
                }
              ]
            }
            const isFound = _this.descargables.find((element, index) => {
              if (element.title === item.field_titulo_item) {
                _this.descargables.splice(index, 1)
                return element
              }
            })

            if (isFound && typeof isFound !== 'undefined') {
              isFound.subServices.push({
                field_descripcion_pdf: item.field_descripcion_pdf,
                field_nombre_item: item.field_nombre_item,
                field_archivo_pdf: item.field_archivo_pdf
              })

              _this.descargables.push(isFound)
            } else {
              _this.descargables.push(service)
            }
          })

          _this.loadedDescargables = true

          _this.$q.loading.hide()
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
      configServices.loadData(this, 'eventos-calendario/fitness/json', {
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
