<template>
  <div class="new_wrap">
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline :disable="getDisable('/cultura')" @click="goItem('/cultura')" color="submenu" label="Cultura" />
      <q-btn outline :disable="getDisable('/cultura/charlas-culturales')" @click="goItem('/cultura/charlas-culturales')" color="submenu" label="Charlas Culturales" />
      <q-btn outline :disable="getDisable('/cultura/danza')" @click="goItem('/cultura/danza')" color="submenu" label="Danza" />
      <q-btn outline :disable="getDisable('/cultura/biblioteca')" @click="goItem('/cultura/biblioteca')" color="submenu" label="Biblioteca" />
      <q-btn outline :disable="getDisable('/cultura/noticias')" @click="goItem('/cultura/noticias')" color="submenu" label="Noticias" />
      <q-btn outline :disable="getDisable('/cultura/multimedia')" @click="goItem('/cultura/multimedia')" color="submenu" label="Multimedia" />
    </q-btn-group>
    <Buscador />

  </div>
</template>

<script>
import Buscador from './Buscador.vue'

export default {
  name: 'Menucultura',
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
