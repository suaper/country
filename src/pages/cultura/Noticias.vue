<template>
  <q-page class="flex flex-center view_quienes_somos view_danza">
    <Menucultura currentItem="/cultura/noticias"/>
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
                        height="400px"
                        class="galeria_noticias"
                        >
                        <q-carousel-slide :name="key" class="column no-wrap" v-for="(item, key) in notices" :key="key">
                            <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                                <div class="noticia_slider" v-for="(notice, noticeKey) in item" :key="noticeKey">
                                    <div class="item_galeria">
                                        <img :src="urlSite + notice.field_imagen_noticia" />
                                        <div class="info_bottom">
                                            <span class="fecha">{{ notice.created }}</span>
                                            <p class="desc" v-html="notice.body"></p>
                                            <q-btn @click="goNotice(notice.nid)" class="text_azul centrar bg_white btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
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
import Menucultura from 'pages/submenus/Menucultura'
import configServices from '../../services/config'

export default {
  name: 'Noticiascultura',
  components: {
    Menucultura
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {},
      slidecontent: 1,
      urlSite: 'https://pwccdev.mkbk.digital/',
      notices: [],
      pop_reservar_spa: false
    }
  },
  created () {
    this.getNotices()
  },
  methods: {
    goNotice (nid) {
      localStorage.setItem('noticeId', nid)
      this.$router.push('/detalle-noticia')
    },
    getNotices () {
      var _this = this
      configServices.loadData(this, '/noticias/cultura/json', {
        callBack: (data) => {
          const n = 3
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
