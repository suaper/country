<template>
  <q-page class="flex flex-center view_quienes_somos view_danza">
    <Menucultura currentItem="/cultura/noticias"/>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-xl titulos">Noticias</div>
        </div>
        <div class="centrar w_1200">
            <div class="q-py-md all_width gris_home wrp_club hazte_socio">
                <div class="centrar q-pb-xl  w_1200">
                    <div class="wrp_gallery_noticias">
                        <q-carousel
                        v-model="slidenotice"
                        transition-prev="slide-right"
                        transition-next="slide-left"
                        swipeable
                        navigation
                        animated
                        control-color="primary"
                        padding
                        height="400px"
                        class="galeria_noticias"
                        >
                        <q-carousel-slide :name="key" class="column no-wrap" v-for="(item, key) in notices" :key="key">
                            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                                <div class="noticia_slider" v-for="(notice, noticeKey) in item" :key="noticeKey">
                                    <div class="item_galeria">
                                        <img :src="urlSite + notice.field_portada_noticia" />
                                        <div class="info_bottom">
                                            <span class="fecha">{{ getDate(notice.created )}}</span>
                                            <p class="desc" v-html="trimNotice(notice.title)"></p>
                                            <q-btn @click="goNotice(notice)" class="text_azul centrar bg_white btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
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
                            <q-pagination
                              v-model="slidecontent"
                              class="nuevo_paginador"
                              :max="max"
                              :max-pages="5"
                              direction-links
                              boundary-links
                              :ellipses="false"
                              icon-first="skip_previous"
                              icon-last="skip_next"
                              icon-prev="fast_rewind"
                              icon-next="fast_forward"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menucultura from 'pages/submenus/Menucultura'
import configServices from '../../services/config'
import { Platform } from 'quasar'

export default {
  name: 'Noticiascultura',
  components: {
    Menucultura
  },
  data () {
    return {
      sliders: true,
      slide: 0,
      info: {},
      slidecontent: 1,
      urlSite: 'https://www.pwcc.cl',
      notices: [],
      pop_reservar_spa: false,
      numberNotices: 1,
      slidenotice: 0,
      max: 0
    }
  },
  updated () {
    this.slidenotice = this.slidecontent - 1
  },
  created () {
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
    goNotice (notice) {
      localStorage.setItem('noticeId', notice.nid)
      this.$router.push('/detalle-noticia/' + notice.title.toLowerCase().replaceAll(' ', '-'))
    },
    trimNotice (title) {
      var maxLength = 90
      if (title.length > maxLength) {
        var trimmedString = title.substr(0, maxLength)
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')))
        return trimmedString + '...'
      }

      return title
    },
    getNotices () {
      var _this = this
      configServices.loadData(this, '/noticias/cultura/json', {
        callBack: (data) => {
          const n = this.numberNotices
          _this.notices = new Array(Math.ceil(data.length / n))
            .fill()
            .map(_ => data.splice(0, n))

          _this.max = _this.notices.length

          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
