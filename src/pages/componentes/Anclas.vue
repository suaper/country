<template>
    <div class="filters">
      <ul class="wrp_actions_center_peluqueria" v-if="path === 'hockey'">
          <li><a href="#" class="anchor" v-show="subPath !== 'calendario'" @click="goAnchor($event, '#reglamentos')">Reglamentos</a></li>
      </ul>

      <ul class="wrp_actions_center_peluqueria reverse_tennis" v-if="path === 'tennis'">
        <li v-for="(item, key) in info" :key="key"><a href="#" :class="(key === 0) ? 'anchor anchor-active' : 'anchor'" @click="goAnchor($event, item.title)">{{ item.title }}</a></li>
      </ul>

      <ul class="wrp_actions_center_peluqueria reverse_tennis" v-if="path === 'futbol'">
        <li v-for="(item, key) in info" :key="key"><a href="#" :class="(key === 1) ? 'anchor anchor-active' : 'anchor'" @click="goAnchor($event, item.title)">{{ item.title }}</a></li>
      </ul>

      <ul class="wrp_actions_center_peluqueria" v-if="path === 'golf'">
          <li><a href="#" class="anchor" @click="goAnchor($event, '#comite-golf')">Comité de Golf</a></li>
          <li><a href="#" class="anchor" @click="goAnchor($event, '#comite-cancha')">Comité de Cancha</a></li>
          <li><a href="#" class="anchor" @click="goAnchor($event, '#profesores')">Profesores</a></li>
      </ul>

      <ul class="wrp_actions_center_peluqueria" v-if="path === 'liga-pwcc'">
          <li v-for="(item, key) in info" :key="key"><a href="#" :class="(key === 0) ? 'anchor anchor-active' : 'anchor'" @click="goAnchor($event, item)">{{ item.title }}</a></li>
      </ul>

      <ul class="wrp_actions_center_peluqueria list_categoris_paddle" v-if="path === 'paddle'">
          <li v-for="(item, key) in info" :key="key"><a href="#" class="anchor" @click="goAnchor($event, item.title)">{{ item.title }}</a></li>
      </ul>

      <ul class="wrp_actions_center_peluqueria" v-if="path !== 'hockey' && path !== 'liga-pwcc' && path !== 'paddle' && path !== 'tennis' && path !== 'futbol'">
          <li v-for="(item, key) in info" :key="key"><a href="#" class="anchor" @click="goAnchor($event, item.title)">{{ item.title }}</a></li>
      </ul>
    </div>
</template>

<script>

export default {
  name: 'TablaClasificacion',
  props: {
    goAnchor: Function,
    path: String,
    subPath: String,
    items: Array
  },
  data () {
    return {
      month: '',
      info: this.items
    }
  }
}
</script>
