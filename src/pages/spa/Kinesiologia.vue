<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
    <Menuspa currentItem="/spa/kinesiologia"/>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
      >
        <q-carousel-slide v-for="(banner, key) in info.field_slider_home" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
        <div class="cincuenta q-pb-xl centrar text-center">
            <div class="center text-center q-my-lg titulos">Kinesiología</div>
            <p class="intro text-center" v-html="info.body[0].value"></p>
             <q-btn outline  @click="pop_reservar_spa = true" class="azul q-my-md centrar bg_white_i" label="Reserva aquí" icon-right="arrow_right_alt"/>
        </div>
  </q-page>
</template>

<script>
import Menuspa from 'pages/submenus/Menuspa'
import configServices from '../../services/config'

export default {
  name: 'Kinesiologia',
  components: {
    Menuspa
  },
  data () {
    return {
      sliders: true,
      slide: 0,
      info: {
        body: [
          { value: '' }
        ]
      },
      pop_consultar: false
    }
  },
  created () {
    this.$q.loading.show()
    this.getInfo()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/278?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
