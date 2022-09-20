<template>
    <div class="filters">
      <ul class="wrp_actions_center_peluqueria" v-if="path === 'hockey'">
          <li><a href="#" @click="goAnchor($event, '#escuela')">Damas</a></li>
          <li><a href="#" @click="goAnchor($event, '#varones')">Varones</a></li>
          <li><a href="#" v-show="subPath !== 'calendario'" @click="goAnchor($event, '#reglamentos')">Reglamentos</a></li>
      </ul>

      <ul class="wrp_actions_center_peluqueria" v-if="path === 'tennis'">
          <li><a href="#" @click="goAnchor($event, '#escuela')">Escuela</a></li>
          <li><a href="#" @click="goAnchor($event, '#rama')">Rama</a></li>
      </ul>

      <ul class="wrp_actions_center_peluqueria" v-if="path === 'futbol'">
          <li><a href="#" @click="goAnchor($event, '#rama-femenina')">Rama Femenina</a></li>
          <li><a href="#" @click="goAnchor($event, '#rama-masculina')">Rama Masculina</a></li>
      </ul>

      <ul class="wrp_actions_center_peluqueria" v-if="path === 'golf'">
          <li><a href="#" @click="goAnchor($event, '#comite-golf')">Comité de Golf</a></li>
          <li><a href="#" @click="goAnchor($event, '#comite-cancha')">Comité de Cancha</a></li>
          <li><a href="#" @click="goAnchor($event, '#profesores')">Profesores</a></li>
      </ul>

      <ul class="wrp_actions_center_peluqueria" v-if="path === 'liga-pwcc'">
          <li v-for="(item, key) in info" :key="key"><a href="#" @click="goAnchor($event, item)">{{ item.title }}</a></li>
      </ul>

      <ul class="wrp_actions_center_peluqueria list_categoris_paddle" v-if="path === 'paddle'">
          <li v-for="(item, key) in info" :key="key"><a href="#" @click="goAnchor($event, item.title)">{{ item.title }}</a></li>
      </ul>

      <ul class="wrp_actions_center_peluqueria" v-if="path !== 'hockey' && path !== 'liga-pwcc' && path !== 'paddle' && path !== 'futbol'">
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
