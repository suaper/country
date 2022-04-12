<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menugastronomia currentItem="/gastronomia"/>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
        autoplay
      >
        <q-carousel-slide v-for="(banner, key) in info.field_slider_home" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Gastronomía</div>
            <p class="intro text-center" v-html="info.body[0].value"></p>
        </div>
    </div>
    <div class="q-pb-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
            <h4 class="subtitle">Country al día</h4>
            <div class="row flex justify-center  items-start">
                <table class="sesenta">
                    <tr>
                        <td>
                            <img :src="urlSite + notices[0].field_imagen_noticia" />
                        </td>
                        <td>
                            <h5 class="titulo_noticias">{{ notices[0].title }}</h5>
                            <p v-html="notices[0].body"></p>
                            <q-btn outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                </table>
                <table class="treintaycinco">
                    <tr>
                        <td>
                            <h5 class="titulo_noticias">{{ notices[1].title }}</h5>
                            <p v-html="notices[1].body"></p>
                            <q-btn outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5 class="titulo_noticias">{{ notices[2].title }}</h5>
                            <p v-html="notices[2].body"></p>
                            <q-btn outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

    <div class="q-py-xl all_width bg_gris wrp_club">
        <div class="row_wrap no-wrap flex justify-start">
            <h3 class="q-my-none">Multimedia</h3>
            <q-btn class="q-ml-lg" outline color="indigo-10" icon-right="east" label="Ver más" to="/gastronomia/multimedia"/>
      </div>

      <div class="row_wrap no-wrap flex justify-between fsecond_row_home">
        <div class="q-py-md">
          <table class="esquma_inferior" v-if="multimediaHome.length">
            <tr>
              <td class="tg-0pky" rowspan="2">
                <a href="#" @click="openItem(multimediaHome[4])"><img class="q-mx-none" alt="img1" :src="urlSite + multimediaHome[4].field_portada_multimedia"></a>
              </td>
              <td class="tg-1pky"><a href="#" @click="openItem(multimediaHome[2])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[2].field_portada_multimedia"></a></td>
              <td class="tg-2pky" rowspan="2"><a href="#" @click="openItem(multimediaHome[1])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[1].field_portada_multimedia"></a></td>
              <td class="tg-3pky" rowspan="2"><a href="#" @click="openItem(multimediaHome[0])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[0].field_portada_multimedia"></a></td>
            </tr>
            <tr>
              <td class="tg-4pky"><a href="#" @click="openItem(multimediaHome[0])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[3].field_portada_multimedia"></a></td>
            </tr>
          </table>
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
import Menugastronomia from 'pages/submenus/Menugastronomia'
import configServices from '../services/config'

export default {
  name: 'Gastronomia',
  components: {
    Menugastronomia
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {
        body: [
          { value: '' }
        ]
      },
      urlSite: 'https://pwccdev.mkbk.digital/',
      multimediaHome: [],
      notices: [
        {
          title: '',
          field_imagen_noticia: ''
        },
        {
          title: '',
          field_imagen_noticia: ''
        },
        {
          title: '',
          field_imagen_noticia: ''
        }
      ],
      pop_reservar_spa: false,
      video: false,
      currentVideo: ''
    }
  },
  created () {
    this.getInfo()
    this.getMultimediaHome()
    this.getNotices()
  },
  methods: {
    getMultimediaHome () {
      var _this = this
      configServices.loadData(this, '/multimedia-secciones/gastronomia-multimedia-home/json', {
        callBack: (data) => {
          console.log(data)
          for (const item in data) {
            _this.multimediaHome.push(data[item])
          }
          _this.$q.loading.hide()
        }
      })
    },
    getNotices () {
      var _this = this
      configServices.loadData(this, '/noticias/gastronomia/json', {
        callBack: (data) => {
          _this.notices = data
        }
      })
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/224?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
        }
      })
    },
    openItem (multimedia) {
      if (multimedia.field_tipo_de_multimedia === 'Imagen') {
        this.$router.push('/multimedia/' + multimedia.field_multimedia_enlace)
      } else {
        var currentVideo = multimedia.field_video_youtube.split('=')
        this.currentVideo = currentVideo[1]
        this.video = true
      }
    }
  }
}
</script>
