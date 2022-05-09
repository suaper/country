<template>
    <div class="texto_normal" v-html="(typeof info[0] !== 'object') ? info.body[0].value : info[0].body"></div>
</template>

<script>

export default {
  name: 'SoloTexto',
  props: {
    content: [Object, Array]
  },
  data () {
    return {
      info: this.content
    }
  }
}
</script>
