<template>
    <div class="wrp_img q-mt-xl">
        <img :src="urlSite + info[0].field_imagen_comite" />
        <div class="text-left">
            <q-btn outline class="azul q-my-md bg_white_i" label="Ver más" icon-right="arrow_right_alt"/>
        </div>
    </div>
</template>

<script>

export default {
  name: 'imagenBoton',
  props: {
    content: Array
  },
  data () {
    return {
      info: this.content,
      urlSite: 'https://pwccdev.mkbk.digital/'
    }
  }
}
</script>
