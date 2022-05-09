<template>
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn :disable="getDisable('/deportes/golf')" @click="goItem('/deportes/golf')" outline color="submenu" label="golf" />
      <q-btn :disable="getDisable('/deportes/hockey')" @click="goItem('/deportes/hockey')" outline color="submenu" label="Hockey" />
      <q-btn :disable="getDisable('/deportes/rugby')" @click="goItem('/deportes/rugby')" outline color="submenu" label="Rugby" />
      <q-btn :disable="getDisable('/deportes/natacion')" @click="goItem('/deportes/natacion')" outline color="submenu" label="Natacion" />
      <q-btn :disable="getDisable('/deportes/squash')" @click="goItem('/deportes/squash')" outline color="submenu" label="Squash" />
      <q-btn :disable="getDisable('/deportes/paddle')" @click="goItem('/deportes/paddle')" outline color="submenu" label="paddle" />
    </q-btn-group>
</template>

<script>

export default {
  name: 'Menudeportes',
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
