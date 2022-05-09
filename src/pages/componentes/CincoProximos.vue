<template>
    <div class="wrp_gallery_beneficios">
      <div class="w_1200 centrar">
        <div class="wrp_busca_mes w_500 centrar">
            <q-select outlined label="Seleccione el mes"/>
        </div>
      </div>
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
</template>

<script>

export default {
  name: 'CincoProximos',
  props: {
    info: Array
  },
  data () {
    return {
      currentVideo: '',
      slide: 1,
      slidecontent: 0,
      urlSite: 'https://pwccdev.mkbk.digital/',
      pop_reservar_spa: false,
      personal: {
        field_imagen_perfil: ''
      },
      events: this.info,
      dtevento: false,
      event: {}
    }
  },
  methods: {
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
    }
  }
}
</script>
