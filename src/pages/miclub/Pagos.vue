<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menumiclub currentItem="/mi-club/pagos" />
    <div class="q-py-xl all_width gris_home etiquetas" v-if="loadedInfo">
        <br>
        <div class="center text-center q-my-lg titulos q-mt-2 subir_movil">Pagos</div>
          <div class="cincuenta q-pd-md centrar text-center">
              <p class="intro text-center" v-html="info.field_intro_[0].value"></p>
          </div>
          <div class="text-center q-my-xl">
              <a target="_blank" :href="info.field_enlace[0].uri" ><img :src="info.field_imagen_pago[0].url"></a>
          </div>
        <div class="centrar w_1200 pagos flex justify-between q-mt-2" v-if="loadedInfo">

          <div class="caja_blanca wrp_left w_47">
            <h5 class="titulo_noticias">{{ info.field_titulo_bloque[0].value }}</h5>
            <div class="q-pa-md row items-start q-gutter-md no-flex" v-html="info.body[0].value"></div>
          </div>

          <div class="caja_blanca wrp_right w_47">
              <h5 class="titulo_noticias">{{ info.field_titulo_bloque_1[0].value }}</h5>
              <div class="q-pa-md row items-start q-gutter-md no-flex" v-html="info.field_body_2[0].value"></div>
          </div>

          <div class="caja_blanca wrp_right w_47 q-mt-xl">
              <h5 class="titulo_noticias">{{ info.field_titulo_bloque_3[0].value }}</h5>
              <div class="q-pa-md row items-start q-gutter-md no-flex" v-html="info.field_body_bloque_3[0].value"></div>
          </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menumiclub from 'pages/submenus/Menumiclub'
import configServices from '../../services/config'

export default {
  name: 'Pagos',
  components: {
    Menumiclub
  },
  data () {
    return {
      info: [],
      loadedInfo: false
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/9324?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.loadedInfo = true
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
