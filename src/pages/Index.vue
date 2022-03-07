<template>
  <q-page class="flex flex-center">
    <div class="q-py-md all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
        :autoplay="autoplay"
        v-if="banners.length"
      >
        <q-carousel-slide v-for="banner in banners" :key="banner.title" :name="banner.title" :img-src="urlSite + banner.field_slider_home" />
      </q-carousel>
    </div>
    <div class="q-py-md all_width gris_home">
      <div class="row_wrap no-wrap flex justify-between first_row_home">
        <div class="q-py-md">

         <iframe width="560" height="400" :src="'https://www.youtube.com/embed/' + introHome.field_video_youtube[1]" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card sin_fondo">
            <q-card-section>
              <div class="text-h6">{{ introHome.title }}</div>
              <p v-html="introHome.body"></p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="q-py-md all_width bg_beige">
      <div class="row_wrap no-wrap flex justify-start">
        <h3 class="q-my-none">Multimedia</h3>
        <q-btn class="q-ml-lg" outline color="indigo-10" icon-right="east" label="Ver más" />

      </div>
      <div class="row_wrap no-wrap flex justify-between fsecond_row_home">
        <div class="q-py-md">
          <table class="esquma_inferior" v-if="multimediaHome.length">
            <tr>
              <td class="tg-0pky" rowspan="2">
                <img class="q-mx-none" alt="img1" :src="urlSite + multimediaHome[4].image">
                </td>
              <td class="tg-0pky"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[2].image"></td>
              <td class="tg-0pky" rowspan="2"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[1].image"></td>
              <td class="tg-0pky" rowspan="2"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[0].image"></td>
            </tr>
            <tr>
              <td class="tg-0pky"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[3].image"></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import configServices from '../services/config'

export default {
  name: 'PageIndex',
  data () {
    return {
      sliders: true,
      slide: 1,
      autoplay: true,
      banners: [],
      urlSite: 'http://www.pwcc.markablanka.com/',
      introHome: {
        field_video_youtube: []
      },
      multimediaHome: []
    }
  },
  created () {
    this.$q.loading.show()
    this.getBanners()
    this.getIntroHome()
    this.getMultimediaHome()
  },
  methods: {
    getBanners () {
      var _this = this
      configServices.loadData(this, 'slider-home/json', {
        callBack: (data) => {
          _this.banners = data
          _this.slide = data[0].title
        }
      })
    },
    getIntroHome () {
      var _this = this
      configServices.loadData(this, 'intro-home/json', {
        callBack: (data) => {
          data[0].field_video_youtube = data[0].field_video_youtube.split('=')
          _this.introHome = data[0]
        }
      })
    },
    getMultimediaHome () {
      var _this = this
      configServices.loadData(this, 'multimedia-home/json', {
        callBack: (data) => {
          for (const item in data) {
            var image = {}
            image.type = data[item].field_multimedia_home
            image.image = data[item].field_galeria_home
            image.video = data[item].field_video_youtube

            _this.multimediaHome.push(image)
          }
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
