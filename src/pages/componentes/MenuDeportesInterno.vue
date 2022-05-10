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
      <q-btn :disable="getDisable('/deportes/rugby/historia')" v-show="path === 'rugby'" @click="goItem('/deportes/rugby/historia')" outline color="submenu" label="Historia" />
      <q-btn :disable="getDisable('/deportes/rugby/calendario')" v-show="path === 'rugby'" @click="goItem('/deportes/rugby/calendario')" outline color="submenu" label="Calendario" />
      <q-btn :disable="getDisable('/deportes/rugby/staff')" v-show="path === 'rugby'" @click="goItem('/deportes/rugby/staff')" outline color="submenu" label="Staff" />
      <q-btn :disable="getDisable('/deportes/rugby/noticias')" v-show="path === 'rugby'" @click="goItem('/deportes/rugby/noticias')" outline color="submenu" label="Noticias" />
      <q-btn :disable="getDisable('/deportes/rugby/multimedia')" v-show="path === 'rugby'" @click="goItem('/deportes/rugby/multimedia')" outline color="submenu" label="Multimedia" />
      <q-btn :disable="getDisable('/deportes/rugby/contacto')" v-show="path === 'rugby'" @click="goItem('/deportes/rugby/contacto')" outline color="submenu" label="Contacto" />
      <!-- Natacion -->
      <q-btn :disable="getDisable('/deportes/natacion')" v-show="path === 'natacion'" @click="goItem('/deportes/natacion')" outline color="submenu" label="Natación" />
      <q-btn :disable="getDisable('/deportes/natacion/master')" v-show="path === 'natacion'" @click="goItem('/deportes/natacion/master')" outline color="submenu" label="Natación Master" />
      <q-btn :disable="getDisable('/deportes/natacion/triatlon')" v-show="path === 'natacion'" @click="goItem('/deportes/natacion/triatlon')" outline color="submenu" label="Triatlon" />
      <q-btn :disable="getDisable('/deportes/natacion/escuela-natacion')" v-show="path === 'natacion'" @click="goItem('/deportes/natacion/escuela-natacion')" outline color="submenu" label="Escuela de Natacion" />
      <q-btn :disable="getDisable('/deportes/natacion/natacion-para-bebes')" v-show="path === 'natacion'" @click="goItem('/deportes/natacion/natacion-para-bebes')" outline color="submenu" label="Natación para Bebés" />
      <q-btn :disable="getDisable('/deportes/natacion/actividades')" v-show="path === 'natacion'" @click="goItem('/deportes/natacion/actividades')" outline color="submenu" label="Actividades" />
      <q-btn :disable="getDisable('/deportes/natacion/noticias')" v-show="path === 'natacion'" @click="goItem('/deportes/natacion/noticias')" outline color="submenu" label="Noticias" />
      <q-btn :disable="getDisable('/deportes/natacion/multimedia')" v-show="path === 'natacion'" @click="goItem('/deportes/natacion/multimedia')" outline color="submenu" label="Multimedia" />
      <q-btn :disable="getDisable('/deportes/natacion/contacto')" v-show="path === 'natacion'" @click="goItem('/deportes/natacion/contacto')" outline color="submenu" label="Contacto" />
       <!-- Squash -->
       <q-btn :disable="getDisable('/deportes/squash')" v-show="path === 'squash'" @click="goItem('/deportes/squash')" outline color="submenu" label="Squash" />
       <q-btn :disable="getDisable('/deportes/squash/historia')" v-show="path === 'squash'" @click="goItem('/deportes/squash/historia')" outline color="submenu" label="Historia" />
       <q-btn :disable="getDisable('/deportes/squash/escuelas')" v-show="path === 'squash'" @click="goItem('/deportes/squash/escuelas')" outline color="submenu" label="Escuela" />
       <q-btn :disable="getDisable('/deportes/squash/torneos')" v-show="path === 'squash'" @click="goItem('/deportes/squash/torneos')" outline color="submenu" label="Torneos" />
       <q-btn :disable="getDisable('/deportes/squash/noticias')" v-show="path === 'squash'" @click="goItem('/deportes/squash/noticias')" outline color="submenu" label="Noticias" />
       <q-btn :disable="getDisable('/deportes/squash/multimedia')" v-show="path === 'squash'" @click="goItem('/deportes/squash/multimedia')" outline color="submenu" label="Multimedia" />
       <q-btn :disable="getDisable('/deportes/squash/contacto')" v-show="path === 'squash'" @click="goItem('/deportes/squash/contacto')" outline color="submenu" label="Contacto" />
       <!-- Paddle -->
       <q-btn :disable="getDisable('/deportes/paddle')" v-show="path === 'paddle'" @click="goItem('/deportes/paddle')" outline color="submenu" label="paddle" />
       <q-btn :disable="getDisable('/deportes/paddle/calendario')" v-show="path === 'paddle'" @click="goItem('/deportes/paddle/calendario')" outline color="submenu" label="Calendario" />
       <q-btn :disable="getDisable('/deportes/paddle/ranking')" v-show="path === 'paddle'" @click="goItem('/deportes/paddle/ranking')" outline color="submenu" label="Ranking" />
       <q-btn :disable="getDisable('/deportes/paddle/noticias')" v-show="path === 'paddle'" @click="goItem('/deportes/paddle/noticias')" outline color="submenu" label="Noticias" />
       <q-btn :disable="getDisable('/deportes/paddle/multimedia')" v-show="path === 'paddle'" @click="goItem('/deportes/paddle/multimedia')" outline color="submenu" label="Multimedia" />
       <q-btn :disable="getDisable('/deportes/paddle/contacto')" v-show="path === 'paddle'" @click="goItem('/deportes/paddle/contacto')" outline color="submenu" label="Contacto" />
       <!-- Tennis -->
        <q-btn :disable="getDisable('/deportes/tennis')" v-show="path === 'tennis'" @click="goItem('/deportes/tennis')" outline color="submenu" label="Tennis" />
        <q-btn :disable="getDisable('/deportes/tennis/equipo')" v-show="path === 'tennis'" @click="goItem('/deportes/tennis/equipo')" outline color="submenu" label="Equipo" />
        <q-btn :disable="getDisable('/deportes/tennis/categorias')" v-show="path === 'tennis'" @click="goItem('/deportes/tennis/categorias')" outline color="submenu" label="Categorías" />
        <q-btn :disable="getDisable('/deportes/tennis/ranking')" v-show="path === 'tennis'" @click="goItem('/deportes/tennis/ranking')" outline color="submenu" label="Ranking" />
        <q-btn :disable="getDisable('/deportes/tennis/calendario')" v-show="path === 'tennis'" @click="goItem('/deportes/tennis/calendario')" outline color="submenu" label="Calendario" />
        <q-btn :disable="getDisable('/deportes/tennis/reservar-cancha')" v-show="path === 'tennis'" @click="goItem('/deportes/tennis/reservar-cancha')" outline color="submenu" label="Reservar Cancha" />
        <q-btn :disable="getDisable('/deportes/tennis/noticias')" v-show="path === 'tennis'" @click="goItem('/deportes/tennis/noticias')" outline color="submenu" label="Noticias" />
       <q-btn :disable="getDisable('/deportes/tennis/multimedia')" v-show="path === 'tennis'" @click="goItem('/deportes/tennis/multimedia')" outline color="submenu" label="Multimedia" />
       <q-btn :disable="getDisable('/deportes/tennis/contacto')" v-show="path === 'tennis'" @click="goItem('/deportes/tennis/contacto')" outline color="submenu" label="Contacto" />
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
