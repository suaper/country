<template>
    <ul class="wrp_actions_center_peluqueria">
        <li><a href="#" @click="goAnchor($event, '#damas')">Damas</a></li>
        <li><a href="#" @click="goAnchor($event, '#varones')">Varones</a></li>
        <li><a href="#" @click="goAnchor($event, '#reglamentos')">Reglamentos</a></li>
    </ul>
</template>

<script>

export default {
  name: 'TablaClasificacion',
  props: {
    goAnchor: Function
  },
  data () {
    return {
      month: '',
      info: this.items
    }
  }
}
</script>
