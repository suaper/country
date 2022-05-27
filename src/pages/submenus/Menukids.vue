<template>
  <div class="new_wrap">
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline :disable="getDisable('/kids')" @click="goItem('/kids')" color="submenu" label="Kids" />
      <q-btn outline :disable="getDisable('/kids/summer-activities')" @click="goItem('/kids/summer-activities')" color="submenu" label="Summer Activities" />
      <q-btn outline :disable="getDisable('/kids/winter-activities')" @click="goItem('/kids/winter-activities')" color="submenu" label="Winter Activities" />
      <q-btn outline :disable="getDisable('/kids/play-room')" @click="goItem('/kids/play-room')" color="submenu" label="Playroom" />
      <q-btn outline :disable="getDisable('/kids/motor-skills')" @click="goItem('/kids/motor-skills')" color="submenu" label="Motor Skills" />
      <q-btn outline :disable="getDisable('/kids/sport-kids')" @click="goItem('/kids/sport-kids')" color="submenu" label="Sport Kids" />
    </q-btn-group>
    <Buscador />

  </div>
</template>

<script>
import Buscador from './Buscador.vue'

export default {
  name: 'Menukids',
  components: { Buscador },
  props: {
    currentItem: String
  },
  data () {
    return {
      current: this.currentItem
    }
  },
  methods: {
    goItem (route) {
      this.$router.push(route)
    },
    getDisable (route) {
      if (this.current === route) return true
      return false
    }
  }
}
</script>
