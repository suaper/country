<template>
    <q-btn-group outline rounded class="sub_menu open">
    <q-btn :disable="getDisable('/deportes')" @click="goItem('/deportes')" outline color="submenu" label="Deportes" />
      <q-btn :disable="getDisable('/deportes/hockey')" v-show="path === 'hockey'" @click="goItem('/deportes/hockey')" outline color="submenu" label="Hockey" />
      <q-btn :disable="getDisable('/deportes/hockey/nosotros')" v-show="path === 'hockey'" @click="goItem('/deportes/hockey/nosotros')" outline color="submenu" label="Nosotros" />
      <q-btn :disable="getDisable('/deportes/hockey/categoria')" v-show="path === 'hockey'" @click="goItem('/deportes/hockey/categoria')" outline color="submenu" label="Categorias" />
      <q-btn :disable="getDisable('/deportes/hockey/calendario')" v-show="path === 'hockey'" @click="goItem('/deportes/hockey/calendario')" outline color="submenu" label="Calendario" />
      <q-btn :disable="getDisable('/deportes/hockey/noticias')" v-show="path === 'hockey'" @click="goItem('/deportes/hockey/noticias')" outline color="submenu" label="Noticias" />
      <q-btn :disable="getDisable('/deportes/hockey/multimedia')" v-show="path === 'hockey'" @click="goItem('/deportes/hockey/multimedia')" outline color="submenu" label="Multimedia" />
      <q-btn :disable="getDisable('/deportes/hockey/contacto')" v-show="path === 'hockey'" @click="goItem('/deportes/hockey/contacto')" outline color="submenu" label="Contacto" />
      <!-- Rugby -->
      <q-btn :disable="getDisable('/deportes/rugby')" v-show="path === 'rugby'" @click="goItem('/deportes/rugby')" outline color="submenu" label="Rugby" />
      <q-btn :disable="getDisable('/deportes/rugby/calendario')" v-show="path === 'rugby'" @click="goItem('/deportes/rugby/calendario')" outline color="submenu" label="Calendario" />
      <q-btn :disable="getDisable('/deportes/rugby/staff')" v-show="path === 'rugby'" @click="goItem('/deportes/rugby/staff')" outline color="submenu" label="Staff" />
      <q-btn :disable="getDisable('/deportes/rugby/noticias')" v-show="path === 'rugby'" @click="goItem('/deportes/rugby/noticias')" outline color="submenu" label="Noticias" />
      <q-btn :disable="getDisable('/deportes/rugby/multimedia')" v-show="path === 'rugby'" @click="goItem('/deportes/rugby/multimedia')" outline color="submenu" label="Multimedia" />
      <q-btn :disable="getDisable('/deportes/rugby/contacto')" v-show="path === 'rugby'" @click="goItem('/deportes/rugby/contacto')" outline color="submenu" label="Contacto" />
      <!-- Natacion -->
      <q-btn :disable="getDisable('/deportes/natacion')" v-show="path === 'natacion'" @click="goItem('/deportes/natacion')" outline color="submenu" label="Natación" />
      <q-btn :disable="getDisable('/deportes/natacion/master')" v-show="path === 'natacion'" @click="goItem('/deportes/natacion/master')" outline color="submenu" label="Natación Master" />
      <q-btn :disable="getDisable('/deportes/natacion/triatlon')" v-show="path === 'natacion'" @click="goItem('/deportes/natacion/triatlon')" outline color="submenu" label="Triatlon" />
      <q-btn :disable="getDisable('/deportes/natacion/escuela-natacion')" v-show="path === 'natacion'" @click="goItem('/deportes/natacion/escuela-natacion')" outline color="submenu" label="Escuela Natacion" />
      <q-btn :disable="getDisable('/deportes/natacion/natacion-bebes')" v-show="path === 'natacion'" @click="goItem('/deportes/natacion/natacion-bebes')" outline color="submenu" label="Natación para Bebés" />
      <q-btn :disable="getDisable('/deportes/natacion/actividades')" v-show="path === 'natacion'" @click="goItem('/deportes/natacion/actividades')" outline color="submenu" label="Actividades" />
      <q-btn :disable="getDisable('/deportes/natacion/noticias')" v-show="path === 'natacion'" @click="goItem('/deportes/natacion/noticias')" outline color="submenu" label="Noticias" />
      <q-btn :disable="getDisable('/deportes/natacion/multimedia')" v-show="path === 'natacion'" @click="goItem('/deportes/natacion/multimedia')" outline color="submenu" label="Multimedia" />
      <q-btn :disable="getDisable('/deportes/natacion/contacto')" v-show="path === 'natacion'" @click="goItem('/deportes/natacion/contacto')" outline color="submenu" label="Contacto" />
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
      current: this.currentItem,
      path: ''
    }
  },
  created () {
    console.log(this.current)
    this.path = localStorage.getItem('sport')
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
