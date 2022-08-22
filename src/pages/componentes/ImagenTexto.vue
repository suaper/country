<template>
    <table class="contenido_html">
        <tr>
            <td class="wrp_img">
                <img :src="player.field_imagen_jugador[0].url" />
            </td>
            <td>
                <h4>{{ player.title[0].value }}</h4>
                <h6 class="text_strong">{{ player.field_nombre_jugador[0].value }}</h6>
                <h6 class="text_strong">{{ player.field_categoria_deporte[0].value }}</h6>
                <span>{{ player.field_edad_jugador[0].value }}</span>
                <p v-html="player.body[0].value"></p>
            </td>
        </tr>
    </table>
</template>

<script>

export default {
  name: 'ImagenTexto',
  props: {
    info: {}
  },
  data () {
    return {
      player: this.info,
      urlSite: 'https://obt3.cl'
    }
  }
}
</script>
