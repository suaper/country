<template>
  <div class="wrp_img q-mt-xl">
    <div class="only-image" v-if="sport === 'hockey'">
      <img :src="urlSite + info[0].field_imagen_comite" v-show="sport === 'hockey'" />
      <div class="text-left" v-if="sport === 'hockey'">
          <q-btn @click="comite = true" class="azul q-my-md bg_white_i" label="Ver más" icon-right="arrow_right_alt"/>
      </div>
    </div>

    <div class="only-image" v-if="sport === 'rugby'">
      <a :href="info.field_enlace_tienda[0].uri" target="_blank" >
        <img :src="info.field_imagen_tienda[0].url" />
      </a>
    </div>

    <div class="only-image" v-if="sport === 'paddle' || sport === 'tennis'">
      <img :src="urlSite + info[0].image" />
    </div>

    <div class="only-image" v-if="sport === 'categorias-tennis'">
      <img :src="urlSite + info[0].field_imagen_inscripcion" />
    </div>

    <div class="only-image" v-if="sport === 'futbol'">
      <img :src="urlSite + info[0].field_imagen_tabla" />
    </div>

    <div class="only-image" v-if="sport === 'golf'">
      <img :src="info.field_imagen_tabla[0].url" />
    </div>

    <q-dialog v-model="comite" persistent>
      <q-card>
          <q-card-section class="row items-center relative salones pop_down">
              <q-btn icon="close volando" flat round dense v-close-popup />
              <div class="row text-center block">
                  <h4 class="text-center">Comité de {{ sport }}</h4>
              </div>
              <div class="flex hockey_poop">
                <Staff :info="info"/>
              </div>
        </q-card-section>
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
    content: [Array, Object],
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
