<template>
  <div class="wrp_img q-mt-xl imagen_publicitaria">
      <img :src="urlSite + info[0].field_imagen_inscripcion" />
      <div class="text_lover">
        <h5 class="text-white fuente_normal  fuente_titulo font_30">{{ info[0].field_titulo_item }}</h5>
        <span class="font_20" v-html="info[0].field_texto_imagen"></span><br>
      </div>
  </div>
</template>

<script>

export default {
  name: 'ImagenPublicitaria',
  props: {
    content: [Array, Object],
    path: String
  },
  data () {
    return {
      info: this.content,
      urlSite: 'https://www.pwcc.cl',
      comite: false,
      sport: this.path
    }
  }
}
</script>
