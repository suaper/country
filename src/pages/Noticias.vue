<template>
  <q-page class="flex flex-center view_quienes_somos view_danza">
    <div class="buscador_home">
      <Buscador />
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Noticias</div>
        </div>
        <div class="centrar w_1200">
        <ul class="wrp_actions_center_peluqueria menos_p igualar ulti_filter">
            <li>
                <a href="#" class="anchor anchor-active" @click="filterNotices($event, 'all')" icon-right="arrow_right_alt">Todas las noticias</a>
            </li>
            <li v-for="(item, key) in filters" :key="key" v-show="item.title !== ''">
                <a href="#" class="anchor" @click="filterNotices($event, item)" icon-right="arrow_right_alt">{{ item.title }}</a>
            </li>
        </ul>
            <div class="q-py-md all_width gris_home wrp_club hazte_socio">
                <div class="centrar q-pb-xl  w_1200">
                    <div class="wrp_gallery_noticias">
                      <div class="notices colum" :name="key" v-for="(item, key) in notices" :key="key">
                        <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                                <div class="noticia_slider" v-for="(itemNotice, keyNotice) in item" :key="keyNotice">
                                    <div class="item_galeria">
                                        <img :src="urlSite + itemNotice.field_portada_noticia" />
                                        <div class="info_bottom">
                                            <span class="fecha" >{{ getDate(itemNotice.created) }}</span>
                                            <p class="desc" v-html="trimNotice(itemNotice.title)"></p>
                                            <q-btn @click="goNotice(itemNotice)" class="text_azul centrar bg_white btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      </div>
                        <div class="row justify-center botones">
                            <q-btn-toggle
                                glossy
                                v-model="slidecontent"
                                :options="[]"
                            />
                            <q-pagination
                              class="nuevo_paginador"
                              v-model="slidecontent"
                              :max="max"
                              :max-pages="5"
                              direction-links
                              boundary-links
                              :ellipses="false"
                              icon-first="skip_previous"
                              icon-last="skip_next"
                              icon-prev="fast_rewind"
                              icon-next="fast_forward"
                              @input="setPager"
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
import Buscador from 'pages/submenus/Buscador.vue'

export default {
  name: 'Noticias',
  components: { Buscador },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {},
      slidecontent: 1,
      notices: [],
      filters: [],
      urlSite: 'https://obt3.cl',
      multimediaHome: [],
      pop_reservar_spa: false,
      numberNotices: 1,
      slidenotice: 0,
      max: 0,
      filtered: false,
      filter: {},
      e: {}
    }
  },
  updated () {
    this.slidenotice = this.slidecontent - 1
  },
  created () {
    if (Platform.is.desktop) {
      this.numberNotices = 3
    }

    this.getNumberNotices()
    this.getNotices()
    this.getCategories()
  },
  methods: {
    setPager () {
      console.log(this.filtered)
      if (this.filtered) {
        return this.filterNotices('', this.filter)
      }
      this.getNotices()
    },
    getNumberNotices () {
      var _this = this
      var data = {
        type: 'numberNotices'
      }
      configServices.consumerStandar(this, 'pwcc-rest/post', data, {
        callBack: (data) => {
          _this.max = Math.round(data.notices / this.numberNotices)
        }
      })
    },
    getDate (dateInput) {
      if (typeof dateInput !== 'undefined') {
        var dateParse = dateInput.replace('T', ' ')
        dateParse = dateParse.split(' ')
        var eventDate = dateParse[0].split('-')
        var monthDate = parseInt(eventDate[1])

        if (eventDate[1] === '12') {
          monthDate = 11
        }

        var date = new Date(eventDate[0], eventDate[1], eventDate[2])
        const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

        if (monthDate === 11) {
          return eventDate[2] + ' ' + month[monthDate] + '/' + date.getFullYear()
        }

        return eventDate[2] + ' ' + month[monthDate - 1] + '/' + date.getFullYear()
      }
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
    addCurrentClass (e) {
      const collection = document.getElementsByClassName('anchor')
      for (let index = 0; index < collection.length; index++) {
        collection[index].classList.remove('anchor-active')
      }
      e.currentTarget.classList.add('anchor-active')
    },
    filterNotices (e, item) {
      if (e !== '') {
        e.preventDefault()
        this.addCurrentClass(e)
        this.slidecontent = 1
        this.slidenotice = 0
      }

      this.filtered = true
      this.filter = item

      if (item === 'all') {
        this.getNotices()
      } else {
        var _this = this
        var data = {
          type: 'numberNoticesCategory',
          categoria: item.id
        }
        configServices.consumerStandar(_this, 'pwcc-rest/post', data, {
          callBack: (data) => {
            if (data.notices) {
              _this.max = _this.max = Math.round(data.numberNotices / this.numberNotices)
            }
          }
        })

        var pager = this.slidecontent
        if (pager > 0) {
          pager = pager - 1
        }

        console.log(pager)

        configServices.loadData(this, '/noticias-categorias/' + item.id + '/json?page=' + pager, {
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
    getCategories () {
      var _this = this

      configServices.loadData(this, '/categorias-noticias/json', {
        callBack: (data) => {
          data.map((item, key) => {
            var filter = {
              title: item.name,
              id: item.tid
            }

            var data = {
              type: 'numberNoticesCategory',
              categoria: item.tid
            }

            configServices.consumerStandar(_this, 'pwcc-rest/post', data, {
              callBack: (data) => {
                _this.$q.loading.show()

                if (data.notices) {
                  const isFound = _this.filters.find((element, index) => {
                    if (element.title === item.name) {
                      _this.filters.splice(index, 1)
                      return element
                    }
                  })

                  if (typeof isFound !== 'undefined') {
                    _this.filters.push(filter)
                  } else {
                    _this.filters.push(filter)
                  }
                }
                _this.$q.loading.hide()
              }
            })
          })
        }
      })
    },
    getNotices () {
      var _this = this
      var pager = this.slidecontent
      if (pager > 0) {
        pager = pager - 1
      }

      configServices.loadData(this, '/noticias-todas/json?page=' + pager, {
        callBack: (data) => {
          const n = this.numberNotices
          var notices = []
          data.map((item, key) => {
            notices.push(item)
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
