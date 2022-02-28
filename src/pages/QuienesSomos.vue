<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menusomos />
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
        :autoplay="autoplay"
      >
        <q-carousel-slide v-for="(banner, key) in info.field_banner_seccion" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
      <div class="row_wrap no-wrap flex justify-between first_row_somos">
        <div class="q-px-md row items-start centrar q-gutter-md">
          <q-card class="my-card sin_fondo q-pb-md ">
            <q-card-section>
              <div class="center text-center q-my-lg titulos">Quiénes Somos</div>
              <p class="text-center w_800" v-html="info.body[0].value"></p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Menusomos from 'pages/submenus/Menusomos'
import configServices from '../services/config'

export default {
  name: 'QuienesSomos',
  components: {
    Menusomos
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      autoplay: true,
      info: {}
    }
  },
  created () {
    this.$q.loading.show()
    this.getInfo()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/6?_format=json', {
        callBack: (data) => {
          console.log(data.field_banner_seccion)
          _this.info = data
          _this.slide = data.field_banner_seccion[0].target_uuid
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
