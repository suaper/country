<template>
  <div class="new_wrap">
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline color="submenu" :disable="getDisable('/spa')"  @click="goItem('/spa')" label="Spa & Wellness" />
      <q-btn outline color="submenu" :disable="getDisable('/spa/fitness')"  @click="goItem('/spa/fitness')" label="Fitness" />
      <q-btn outline color="submenu" :disable="getDisable('/spa/peluqueria')"  @click="goItem('/spa/peluqueria')" label="Peluquería" />
      <q-btn outline color="submenu" :disable="getDisable('/spa/estetica')"  @click="goItem('/spa/estetica')" label="Centro de Estética" />
      <q-btn outline color="submenu" :disable="getDisable('/spa/kinesiologia')"  @click="goItem('/spa/kinesiologia')" label="Kinesiología" />
      <q-btn outline color="submenu" :disable="getDisable('/spa/contacto')"  @click="goItem('/spa/contacto')" label="Contacto" />
    </q-btn-group>

    <Buscador />
  </div>
</template>

<script>
import Buscador from './Buscador.vue'

export default {
  name: 'Menuspa',
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
