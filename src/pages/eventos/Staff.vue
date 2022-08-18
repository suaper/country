<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
    <Menueventos currentItem="/eventos/staff"/>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
      >
        <q-carousel-slide v-for="(banner, key) in info[0].field_banner_seccion" :key="key" :name="key" :img-src="urlSite + banner.trim()" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Staff</div>
            <p class="intro text-center" v-html="info[0].body"></p>
        </div>
    </div>

    <div :class="key % 2 === 0 ? 'q-py-xl all_width bg_amarillo wrp_club hazte_socio' : 'q-py-xl all_width gris_home wrp_club hazte_socio'" v-for="(item, key) in info" :key="key">
        <div class="centrar w_1200">
          <table class="contenido_fitness" v-show="key % 2 === 0">
              <tr>
                  <td>
                      <h6 class="title_text">{{ item.field_titulo_bloque }}</h6>
                      <p v-html="item.field_bloque_texto"></p>
                  </td>
                  <td>
                      <img :src="urlSite + item.field_imagen_bloque" />
                  </td>
              </tr>
          </table>
          <table class="contenido_fitness" v-show="key % 2 !== 0">
              <tr>
                  <td>
                      <img :src="urlSite + item.field_imagen_bloque" />
                  </td>
                  <td>
                      <h6 class="title_text">{{ item.field_titulo_bloque }}</h6>
                      <p v-html="item.field_bloque_texto"></p>
                  </td>
              </tr>
          </table>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menueventos from 'pages/submenus/Menueventos'
import configServices from '../../services/config'

export default {
  name: 'Staff',
  components: {
    Menueventos
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: [
        {
          field_banner_seccion: ''
        }
      ],
      pop_consultar: false,
      urlSite: 'https://obt3.cl/'
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/staff-eventos/json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = 0
          _this.info[0].field_banner_seccion = _this.info[0].field_banner_seccion.split(',')
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
