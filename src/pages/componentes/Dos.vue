<template>
    <ul class="patrocinadores">
        <li v-for="(item, key) in patrocinadores.field_galeria_deporte" :key="key"><img :src="item.url"/></li>
    </ul>
</template>

<script>

export default {
  name: 'Dos',
  props: {
    images: Object
  },
  data () {
    return {
      patrocinadores: this.images
    }
  }
}
</script>
