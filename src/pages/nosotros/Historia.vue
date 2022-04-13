<template>
  <q-page class="flex flex-center view_historia">
    <Menusomos currentItem="/quienes-somos/historia" />
    <div class="q-py-none all_width" v-if="info.length != 0">
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
    <div class="q-py-md all_width gris_home" v-if="info.length != 0">
        <div class="row_2 row_wrap flex no-wrap flex justify-between">
            <div class="cuarenta">
                <img class="cien" :src="info.field_imagen_seccion[0].url">
            </div>
            <div class="sesenta">
              <div class="text-h6 text-left q-my-lg f_44">Historia</div>
              <div class="html" v-html="info.body[0].value"></div>
            </div>
        </div>
        <div class="rwo_1 row_wrap">
          <div class="html" v-html="info.field_bloque_texto[0].value"></div>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menusomos from '../../pages/submenus/Menusomos'
import configServices from '../../services/config'

export default {
  name: 'Historia',
  components: {
    Menusomos
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      autoplay: true,
      info: []
    }
  },
  created () {
    this.$q.loading.show()
    this.getInfo()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/111?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_banner_seccion[0].target_uuid
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
