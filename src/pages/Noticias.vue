<template>
  <q-page class="flex flex-center view_quienes_somos view_danza">
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Noticias</div>
        </div>
        <div class="centrar w_1200">
        <ul class="wrp_actions_center_peluqueria menos_p igualar">
            <li>
                <a href="#" @click="filterNotices($event, 'all')" icon-right="arrow_right_alt">Todas las noticias</a>
            </li>
            <li v-for="(item, key) in filters" :key="key">
                <a href="#" @click="filterNotices($event, item)" icon-right="arrow_right_alt">{{ item.title }}</a>
            </li>
        </ul>
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
                                        <img :src="urlSite + itemNotice.field_imagen_noticia" />
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

import configServices from '../services/config'
import { Platform } from 'quasar'

export default {
  name: 'Noticias',
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
    filterNotices (e, item) {
      e.preventDefault()
      if (item === 'all') {
        this.getNotices()
      } else {
        var filter = item.title.replaceAll(' ', '-').toLowerCase()
        var _this = this
        configServices.loadData(this, '/noticias/' + filter + '/json', {
          callBack: (data) => {
            const n = this.numberNotices
            _this.notices = new Array(Math.ceil(data.length / n))
              .fill()
              .map(_ => data.splice(0, n))
            _this.$q.loading.hide()
          }
        })
      }
    },
    goNotice (notice) {
      localStorage.setItem('noticeId', notice.nid)
      this.$router.push('/detalle-noticia/' + notice.title.toLowerCase().replaceAll(' ', '-'))
    },
    getNotices () {
      var _this = this
      configServices.loadData(this, '/noticias-todas/json', {
        callBack: (data) => {
          const n = this.numberNotices
          var notices = []
          data.map((item, key) => {
            if (key <= 30) {
              notices.push(item)
            }
            var filter = {
              title: item.field_mostra_en_
            }
            const isFound = _this.filters.find((element, index) => {
              if (element.title === item.field_mostra_en_) {
                _this.filters.splice(index, 1)
                return element
              }
            })

            if (typeof isFound !== 'undefined') {
              _this.filters.push(filter)
            } else {
              _this.filters.push(filter)
            }
          })

          _this.notices = new Array(Math.ceil(notices.length / n))
            .fill()
            .map(_ => notices.splice(0, n))

          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
