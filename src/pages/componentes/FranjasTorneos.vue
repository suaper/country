<template>
    <div>
        <div class="franja_torneos" v-for="(item, key) in info" :key="key">
            <img :src="urlSite + item.field_imagen_torneo" />
            <div class="sobreponer"><p>{{ item.field_nombre_torneo }} <br> {{ item.field_fecha_torneo }}</p></div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'FranjasTorneos',
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
