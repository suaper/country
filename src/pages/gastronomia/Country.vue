<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
    <Menugastronomia currentItem="/gastronomia/country"/>
    <div class="q-pt-xl all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Country al día</div>
        </div>
    </div>

    <div class="q-py-xl all_width gris_home wrp_club hazte_socio grande">
        <div class="centrar q-pb-xl  w_1200">
            <div class="wrp_gallery_country">
                <q-carousel
                v-model="slidecontent"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                navigation
                animated
                control-color="primary"
                padding
                arrows
                height="383px"
                class="galeria_country"
                >
                <q-carousel-slide :name="key" class="column no-wrap" v-for="(item, key) in notices" :key="key">
                    <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                        <div class="country_slider" v-for="(subItem, subKey) in item" :key="subKey">
                            <div class="item_galeria">
                                <img :src="urlSite + subItem.field_imagen_noticia_1" width="190" height="380"/>
                                <div class="info_bottom">
                                    <span class="fecha" >{{ getDate(subItem.created) }}</span>
                                    <p class="desc" v-html="subItem.body"></p>
                                    <q-btn @click="goNotice(subItem)" class="text_azul centrar bg_white btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                </div>
                            </div>
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
  </q-page>
</template>

<script>
import Menugastronomia from 'pages/submenus/Menugastronomia'
import configServices from '../../services/config'
import { Platform } from 'quasar'
export default {
  name: 'Country',
  components: {
    Menugastronomia
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      notices: [],
      urlSite: 'https://pwccdev.mkbk.digital/',
      pop_consultar: false,
      slidecontent: 0,
      numberNotices: 1
    }
  },
  mounted () {
    if (Platform.is.desktop) {
      this.numberNotices = 3
    }
    this.getNotices()
  },
  methods: {
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
    goNotice (notice) {
      localStorage.setItem('noticeId', notice.nid)
      this.$router.push('/detalle-noticia/' + notice.title.toLowerCase().replaceAll(' ', '-'))
    },
    getNotices () {
      var _this = this
      configServices.loadData(this, '/noticias/country-al-dia/json', {
        callBack: (data) => {
          const n = this.numberNotices
          _this.notices = new Array(Math.ceil(data.length / n))
            .fill()
            .map(_ => data.splice(0, n))

          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
