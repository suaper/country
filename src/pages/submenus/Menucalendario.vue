<template>
  <div class="new_wrap">
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn :disable="getDisable('/calendario')" @click="goItem('/calendario')" outline color="submenu" label="‘Social’" />
      <q-btn :disable="getDisable('/calendario/deportes')" @click="goItem('/calendario/deportes')" outline color="submenu" label="Deportes" />
      <!--<q-btn :disable="getDisable('/calendario/spa')" @click="goItem('/calendario/spa')" outline color="submenu" label="Spa & Wellness" />-->
    </q-btn-group>
    <Buscador />

  </div>
</template>

<script>
import Buscador from './Buscador.vue'

export default {
  name: 'Menucalendario',
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
