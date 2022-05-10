<template>
    <div class="filters">
      <ul class="wrp_actions_center_peluqueria" v-if="path === 'hockey'">
          <li><a href="#" @click="goAnchor($event, '#damas')">Damas</a></li>
          <li><a href="#" @click="goAnchor($event, '#varones')">Varones</a></li>
          <li><a href="#" v-show="subPath !== 'calendario'" @click="goAnchor($event, '#reglamentos')">Reglamentos</a></li>
      </ul>
      <ul class="wrp_actions_center_peluqueria" v-if="path === 'rugby' || path === 'paddle'">
          <li v-for="(item, key) in info" :key="key"><a href="#" @click="goAnchor($event, item.title)">{{ item.title }}</a></li>
      </ul>
    </div>
</template>

<script>

export default {
  name: 'TablaClasificacion',
  props: {
    goAnchor: Function,
    path: String,
    items: Array
  },
  data () {
    return {
      subPath: this.path,
      month: '',
      info: this.items
    }
  },
  mounted () {
    console.log(this.subPath)
  }
}
</script>
