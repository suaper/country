<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menueventos currentItem="/eventos"/>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
        autoplay="autoplay"
      >
        <q-carousel-slide v-for="(banner, key) in info.field_banner_seccion" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Eventos</div>
            <p class="intro text-center" v-html="info.body[0].value"></p>
            <q-btn outline type="a" :href="info.field_cotiza[0].uri" target="_blank" class="azul q-my-xl m_y_20 centrar bg_white_i" label="Cotiza tu evento" icon-right="arrow_right_alt"/>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menueventos from 'pages/submenus/Menueventos'
import configServices from '../services/config'

export default {
  name: 'Kids',
  components: {
    Menueventos
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {
        body: [
          { value: '' }
        ],
        field_cotiza: [
          { uri: '' }
        ]
      },
      urlSite: 'https://pwccdev.mkbk.digital/',
      pop_reservar_spa: false,
      video: false,
      currentVideo: ''
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/113?_format=json', {
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
