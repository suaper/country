<template>
    <q-btn-group outline rounded class="sub_menu open">
    <q-btn :disable="getDisable('/deportes')" @click="goItem('/deportes')" outline color="submenu" label="Deportes" />
      <q-btn :disable="getDisable('/deportes/hockey')" @click="goItem('/deportes/hockey')" outline color="submenu" label="Hockey" />
      <q-btn :disable="getDisable('/deportes/hockey/nosotros')" @click="goItem('/deportes/hockey/nosotros')" outline color="submenu" label="Nosotros" />
      <q-btn :disable="getDisable('/deportes/hockey/categoria')" @click="goItem('/deportes/hockey/categoria')" outline color="submenu" label="Categorias" />
      <q-btn :disable="getDisable('/deportes/hockey/calendario')" @click="goItem('/deportes/hockey/calendario')" outline color="submenu" label="Calendario" />
      <q-btn :disable="getDisable('/deportes/rugby/noticias')" @click="goItem('/deportes/rugby/noticias')" outline color="submenu" label="Noticias" />
      <q-btn :disable="getDisable('/deportes/multimedia')" @click="goItem('/deportes/multimedia')" outline color="submenu" label="Multimedia" />
      <q-btn :disable="getDisable('/deportes/contacto')" @click="goItem('/deportes/contacto')" outline color="submenu" label="Contacto" />
      <q-btn :disable="getDisable('/deportes/rugby/calendario')" @click="goItem('/deportes/rugby/calendario')" outline color="submenu" label="Calendario" />
      <q-btn :disable="getDisable('/deportes/rugby/staff')" @click="goItem('/deportes/rugby/staff')" outline color="submenu" label="Staff" />
    </q-btn-group>
</template>

<script>

export default {
  name: 'Menudeportesinterno',
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
