<template>
  <div class="wrp_img q-mt-xl">
      <img :src="urlSite + info[0].field_imagen_comite" />
      <div class="text-left">
          <q-btn @click="comite = true" class="azul q-my-md bg_white_i" label="Ver más" icon-right="arrow_right_alt"/>
      </div>
      <q-dialog v-model="comite" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <h2>Comité de {{ sport }}</h2>
            <Staff :info="info"/>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cerrar" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
  </div>
</template>

<script>
import Staff from 'pages/componentes/StaffView'

export default {
  name: 'imagenBoton',
  components: {
    Staff
  },
  props: {
    content: Array,
    path: String
  },
  data () {
    return {
      info: this.content,
      urlSite: 'https://pwccdev.mkbk.digital/',
      comite: false,
      sport: this.path
    }
  }
}
</script>
