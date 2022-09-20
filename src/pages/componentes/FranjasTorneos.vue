<template>
    <div>
        <div class="franja_torneos" v-for="(item, key) in info" :key="key">
            <img :src="urlSite + item.field_imagen_torneo" />
            <div class="sobreponer"><p>{{ item.field_nombre_torneo }} <br> {{ item.field_fecha_torneo }}</p>
              <a class="enlace" :href="item.field_enlace">Click Aquí</a>
            </div>
            <q-icon class="flotaleft" name="east" />
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
      urlSite: 'https://obt3.cl'
    }
  }
}
</script>
