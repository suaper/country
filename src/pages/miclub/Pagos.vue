<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menumiclub currentItem="/mi-club/pagos" />
    <div class="q-pb-md all_width gris_home etiquetas">
        <br>
        <div class="center text-center q-my-lg titulos q-mt-2">Pagos</div>
        <div class="centrar w_1200 pagos" v-if="loadedInfo">
            <div class="left text-left q-my-lg titulos">{{ info.field_titulo_bloque[0].value }}</div>
            <div class="q-pa-md row items-start q-gutter-md no-flex" v-html="info.body[0].value"></div>
            <div class="text-right">
                <q-btn type="a" :href="info.field_enlace[0].uri" outline class="azul q-my-md centrar bg_white_i" label="Pago WebPay" icon-right="arrow_right_alt"/>
                <img :src="info.field_imagen_pago[0].url">
            </div>
            <div class="left text-left q-my-lg titulos">{{ info.field_titulo_bloque_1[0].value }}</div>
            <div class="q-pa-md row items-start q-gutter-md no-flex" v-html="info.field_body_2[0].value"></div>
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
      configServices.loadData(this, '/node/1060?_format=json', {
        callBack: (data) => {
          console.log(data)
          _this.info = data
          _this.loadedInfo = true
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
