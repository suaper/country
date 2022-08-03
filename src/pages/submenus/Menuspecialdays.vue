<template>
  <div class="new_wrap">
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline :disable="getDisable('/special-days')"  @click="goItem('/special-days')" color="submenu" label="Special Days" />
      <q-btn outline :disable="getDisable('/special-days/multimedia')"  @click="goItem('/special-days/multimedia')" color="submenu" label="Multimedia" />
    </q-btn-group>
    <Buscador />
  </div>
</template>

<script>
import Buscador from './Buscador.vue'

export default {
  name: 'Menuspecialdays',
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
