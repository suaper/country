<template>
  <div class="new_wrap">
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn :disable="getDisable('/deportes')" @click="goItem('/deportes')" outline color="submenu" label="Deportes" />
      <q-btn :disable="getDisable('/deportes/golf')" @click="goItem('/deportes/golf')" outline color="submenu" label="Golf" />
      <q-btn :disable="getDisable('/deportes/hockey')" @click="goItem('/deportes/hockey')" outline color="submenu" label="Hockey" />
      <q-btn :disable="getDisable('/deportes/rugby')" @click="goItem('/deportes/rugby')" outline color="submenu" label="Rugby" />
      <q-btn :disable="getDisable('/deportes/natacion')" @click="goItem('/deportes/natacion')" outline color="submenu" label="Natacion" />
      <q-btn :disable="getDisable('/deportes/squash')" @click="goItem('/deportes/squash')" outline color="submenu" label="Squash" />
      <q-btn :disable="getDisable('/deportes/paddle')" @click="goItem('/deportes/paddle')" outline color="submenu" label="Paddle" />
      <q-btn :disable="getDisable('/deportes/tennis')" @click="goItem('/deportes/tennis')" outline color="submenu" label="Tennis" />
      <q-btn :disable="getDisable('/deportes/futbol')" @click="goItem('/deportes/futbol')" outline color="submenu" label="Futbol" />
      <q-btn :disable="getDisable('/deportes/ramas')" @click="goItem('/deportes/ramas')" outline color="submenu" label="Ramas" />
      <q-btn :disable="getDisable('/deportes/escuelas')" @click="goItem('/deportes/escuelas')" outline color="submenu" label="Escuelas" />
      <q-btn :disable="getDisable('/deportes/calendario')" @click="goItem('/deportes/calendario')" outline color="submenu" label="Calendario" />
    </q-btn-group>
    <Buscador />
  </div>
</template>

<script>
import Buscador from './Buscador.vue'

export default {
  name: 'Menudeportes',
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
