<template>
  <q-page class="flex flex-center view_quienes_somos view_danza">
    <MenuDeporteInterno :currentItem="'/deportes/' + path + '/noticias'"/>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Noticias</div>
        </div>
        <div class="centrar w_1200">
            <div class="q-py-md all_width gris_home wrp_club hazte_socio">
                <div class="centrar q-pb-xl  w_1200">
                    <div class="wrp_gallery_noticias">
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
                        class="galeria_noticias"
                        >
                        <q-carousel-slide :name="key" class="column" v-for="(item, key) in notices" :key="key">
                            <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                                <div class="noticia_slider" v-for="(itemNotice, keyNotice) in item" :key="keyNotice">
                                    <div class="item_galeria">
                                        <img :src="urlSite + itemNotice.field_imagen_noticia_3" />
                                        <div class="info_bottom">
                                            <span class="fecha" >{{ getDate(itemNotice.created) }}</span>
                                            <p class="desc" v-html="itemNotice.body"></p>
                                            <q-btn @click="goNotice(itemNotice)" class="text_azul centrar bg_white btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
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
        </div>
    </div>
  </q-page>
</template>

<script>

import configServices from '../../services/config'
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import { Platform } from 'quasar'

export default {
  name: 'Noticias',
  components: {
    MenuDeporteInterno
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {},
      slidecontent: 0,
      notices: [],
      filters: [],
      urlSite: 'https://pwccdev.mkbk.digital/',
      multimediaHome: [],
      pop_reservar_spa: false,
      numberNotices: 1
    }
  },
  created () {
    if (Platform.is.desktop) {
      this.numberNotices = 3
    }
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
    this.getNotices()
  },
  methods: {
    getDate (dateInput) {
      var date = new Date(dateInput)
      const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
      var day = (date.getDay() < 10) ? '0' + date.getDay() : date.getDay()
      return day + ' ' + month[date.getUTCMonth()] + '/' + date.getFullYear()
    },
    goNotice (notice) {
      localStorage.setItem('noticeId', notice.nid)
      this.$router.push('/detalle-noticia/' + notice.title.toLowerCase().replaceAll(' ', '-'))
    },
    getNotices () {
      var _this = this
      configServices.loadData(this, '/noticias/' + _this.path + '/json', {
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
