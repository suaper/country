<template>
    <div class="bg_white q-pa-md q-mt-xl">
        <table class="contenido_html">
            <tr>
                <td class="wrp_img">
                    <img width="200" :src="info.field_imagen_bloque[0].url" />
                </td>
                <td v-html="info.body[0].value"></td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
  name: 'FondoBlanco',
  props: {
    content: Object
  },
  data () {
    return {
      info: this.content
    }
  }
}
</script>
