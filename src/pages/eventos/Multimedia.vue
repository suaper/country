<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
    <Menueventos currentItem="/eventos/multimedia"/>
    <div class="q-pt-xl all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Multimedia</div>
        </div>
    </div>

    <div class="q-py-xl all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar q-pb-xl  w_1200">
            <div class="cincuenta q-pd-md centrar text-center">
              <div class="center text-center titulos">Fotos</div>
            </div>
            <div class="wrp_gallery_multimedia">
                <q-carousel
                v-model="slidecontent"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="primary"
                padding
                arrows
                height="250px"
                class="galeria_multimedia"
                >
                <q-carousel-slide class="column no-wrap" :name="key" v-for="(item, key) in slidersContentImages" :key="key">
                    <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                        <div class="multimedia_slider" v-for="(subItem, subKey) in item" :key="subKey">
                            <div class="item_galeria">
                                <img :src="urlSite + subItem.field_portada_multimedia" />
                                <div class="info_bottom">
                                    <p class="desc">{{ subItem.title }}</p>
                                    <q-btn class="text_white centrar btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
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
                        :options="options"
                    />
                </div>
            </div>
        </div>
    </div>
    <div class="q-py-md all_width gris_home">
        <div class="w_1200 q-py-md centrar text-center">
        <div class="center text-center q-my-md titulos">Videos</div>
            <div class="wrp_gallery_video">
                <q-carousel
                v-model="slidevideo"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="primary"
                padding
                arrows
                height="470px"
                class="galeria_video"
                >
                <q-carousel-slide class="column no-wrap" :name="key" v-for="(item, key) in slidersContentImages" :key="key">
                    <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                        <table class="item_cien">
                            <tr>
                                <td class="first" rowspan="0">
                                    <a href="#" @click="openVideo($event, item[0])">
                                      <img :src="urlSite + item[0].field_portada_multimedia" />
                                      <div class="info_bottom text-center">
                                          <p class="desc">{{ item[0].title }}</p>
                                          <span v-html="item[0].body"></span>
                                      </div>
                                    </a>
                                </td>
                                <td class="othet">
                                    <a href="#" @click="openVideo($event, item[1])">
                                    <img :src="(typeof item[1] !== 'undefined') ? urlSite + item[1].field_portada_multimedia : urlSite + item[0].field_portada_multimedia" />
                                    <div class="info_bottom text-center">
                                        <p class="desc">{{ (typeof item[1] !== 'undefined') ? item[1].title : item[0].title }}</p>
                                        <span v-html="(typeof item[1] !== 'undefined') ? item[1].body : item[0].body"></span>
                                    </div>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="othet">
                                    <a href="#" @click="openVideo($event, item[2])">
                                    <img :src="(typeof item[2] !== 'undefined') ? urlSite + item[2].field_portada_multimedia : urlSite + item[0].field_portada_multimedia" />
                                    <div class="info_bottom text-center">
                                        <p class="desc">{{ (typeof item[2] !== 'undefined') ? item[2].title : item[0].title }}</p>
                                        <span v-html="(typeof item[2] !== 'undefined') ? item[2].body : item[0].body"></span>
                                    </div>
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </q-carousel-slide>

                </q-carousel>
                <div class="row justify-center botones">
                    <q-btn-toggle
                        glossy
                        v-model="slidevideo"
                        :options="optionsVideo"
                    />
                </div>
            </div>
        </div>
    </div>
    <q-dialog v-model="video" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + currentVideo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cerrar" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import Menueventos from 'pages/submenus/Menueventos'
import configServices from '../../services/config'
import { Platform } from 'quasar'

export default {
  name: 'Multimediagastronomia',
  components: {
    Menueventos
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {},
      pop_consultar: false,
      slidecontent: 0,
      slidevideo: 0,
      urlSite: 'https://pwccdev.mkbk.digital/',
      options: [],
      optionsVideo: [],
      slidersContentImages: [],
      slidersContentVideos: [],
      images: [],
      videos: [],
      video: false,
      currentVideo: '',
      numberNotices: 1
    }
  },
  mounted () {
    if (Platform.is.desktop) {
      this.numberNotices = 3
    }
    this.getMultimedia()
  },
  methods: {
    openItem (multimedia) {
      if (multimedia.field_tipo_de_multimedia === 'Imagen') {
        localStorage.setItem('multimediaId', multimedia.nid)
        this.$router.push('/detalle-multimedia')
      } else {
        var currentVideo = multimedia.field_video_youtube.split('=')
        this.currentVideo = currentVideo[0]
        this.video = true
      }
    },
    openVideo (e, multimedia) {
      e.preventDefault()
      if (multimedia.field_tipo_de_multimedia === 'Imagen') {
        localStorage.setItem('multimediaId', multimedia.nid)
        this.$router.push('/detalle-multimedia')
      } else {
        var currentVideo = multimedia.field_video_youtube.split('=')
        this.currentVideo = currentVideo[1]
        this.video = true
      }
    },
    getMultimedia () {
      var _this = this
      configServices.loadData(this, '/multimedia-secciones/eventos/json', {
        callBack: (data) => {
          data.map((item, key) => {
            if (item.field_tipo_de_multimedia === 'Video') {
              _this.videos.push(item)
            } else {
              _this.images.push(item)
            }
          })
          const n = this.numberNotices
          _this.slidersContentImages = new Array(Math.ceil(_this.images.length / n))
            .fill()
            .map(_ => _this.images.splice(0, n))

          _this.slidersContentVideos = new Array(Math.ceil(_this.videos.length / n))
            .fill()
            .map(_ => _this.videos.splice(0, n))

          _this.getOptions()
          _this.$q.loading.hide()
        }
      })
    },
    getOptions () {
      var _this = this
      this.slidersContentImages.map((item, key) => {
        var n = {
          label: key + 1,
          value: key
        }

        _this.options.push(n)
      })

      this.slidersContentVideos.map((item, key) => {
        var n = {
          label: key + 1,
          value: key
        }

        _this.optionsVideo.push(n)
      })
    }
  }
}
</script>
