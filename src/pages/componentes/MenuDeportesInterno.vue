<template>
  <div class="new_wrap">
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn :disable="getDisable('/deportes')" @click="goItem('/deportes')" outline color="submenu" label="Deportes" />
      <!-- Golf -->
      <q-btn :disable="getDisable('/deportes/golf')" v-if="path === 'golf'" @click="goItem('/deportes/golf')" outline color="submenu" label="Golf" />
      <q-btn :disable="getDisable('/deportes/golf/equipo')" v-if="path === 'golf'" @click="goItem('/deportes/golf/equipo')" outline color="submenu" label="Equipo" />
      <q-btn :disable="getDisable('/deportes/golf/historia')" v-if="path === 'golf'" @click="goItem('/deportes/golf/historia')" outline color="submenu" label="Historia" />
      <q-btn :disable="getDisable('/deportes/golf/campeones')" v-if="path === 'golf'" @click="goItem('/deportes/golf/campeones')" outline color="submenu" label="Campeones" />
      <q-btn :disable="getDisable('/deportes/golf/cancha')" v-if="path === 'golf'" @click="goItem('/deportes/golf/cancha')" outline color="submenu" label="Cancha" />
      <q-btn :disable="getDisable('/deportes/golf/casilla')" v-if="path === 'golf'" @click="goItem('/deportes/golf/casilla')" outline color="submenu" label="Casilla" />
      <q-btn :disable="getDisable('/deportes/golf/campeonatos')" v-if="path === 'golf'" @click="goItem('/deportes/golf/campeonatos')" outline color="submenu" label="Campeonatos" />
      <q-btn :disable="getDisable('/deportes/golf/escuelas')" v-if="path === 'golf'" @click="goItem('/deportes/golf/escuelas')" outline color="submenu" label="Escuela" />
      <q-btn :disable="getDisable('/deportes/golf/noticias')" v-if="path === 'golf'" @click="goItem('/deportes/golf/noticias')" outline color="submenu" label="Noticias" />
      <q-btn :disable="getDisable('/deportes/golf/multimedia')" v-if="path === 'golf'" @click="goItem('/deportes/golf/multimedia')" outline color="submenu" label="Multimedia" />
      <q-btn :disable="getDisable('/deportes/golf/contacto')" v-if="path === 'golf'" @click="goItem('/deportes/golf/contacto')" outline color="submenu" label="Contacto" />
      <!-- Futbol -->
      <q-btn :disable="getDisable('/deportes/futbol')" v-if="path === 'futbol'" @click="goItem('/deportes/futbol')" outline color="submenu" label="Fútbol" />
      <q-btn :disable="getDisable('/deportes/futbol/equipo')" v-if="path === 'futbol'" @click="goItem('/deportes/futbol/equipo')" outline color="submenu" label="Equipo" />
      <q-btn :disable="getDisable('/deportes/futbol/escuela')" v-if="path === 'futbol'" @click="goItem('/deportes/futbol/escuela')" outline color="submenu" label="Escuela" />
      <q-btn :disable="getDisable('/deportes/futbol/liga-pwcc')" v-if="path === 'futbol'" @click="goItem('/deportes/futbol/liga-pwcc')" outline color="submenu" label="Liga PWCC" />
      <q-btn :disable="getDisable('/deportes/futbol/ramas')" v-if="path === 'futbol'" @click="goItem('/deportes/futbol/ramas')" outline color="submenu" label="Rama" />
      <q-btn :disable="getDisable('/deportes/futbol/calendario')" v-if="path === 'futbol'" @click="goItem('/deportes/futbol/calendario')" outline color="submenu" label="Calendario" />
      <q-btn :disable="getDisable('/deportes/futbol/noticias')" v-if="path === 'futbol'" @click="goItem('/deportes/futbol/noticias')" outline color="submenu" label="Noticias" />
      <q-btn :disable="getDisable('/deportes/futbol/multimedia')" v-if="path === 'futbol'" @click="goItem('/deportes/futbol/multimedia')" outline color="submenu" label="Multimedia" />
      <q-btn :disable="getDisable('/deportes/futbol/contacto')" v-if="path === 'futbol'" @click="goItem('/deportes/futbol/contacto')" outline color="submenu" label="Contacto" />
      <!-- Hockey -->
      <q-btn :disable="getDisable('/deportes/hockey')" v-if="path === 'hockey'" @click="goItem('/deportes/hockey')" outline color="submenu" label="Hockey" />
      <q-btn :disable="getDisable('/deportes/hockey/nosotros')" v-if="path === 'hockey'" @click="goItem('/deportes/hockey/nosotros')" outline color="submenu" label="Nosotros" />
      <q-btn :disable="getDisable('/deportes/hockey/categoria')" v-if="path === 'hockey'" @click="goItem('/deportes/hockey/categoria')" outline color="submenu" label="Categorías" />
      <q-btn :disable="getDisable('/deportes/hockey/calendario')" v-if="path === 'hockey'" @click="goItem('/deportes/hockey/calendario')" outline color="submenu" label="Calendario" />
      <q-btn :disable="getDisable('/deportes/hockey/noticias')" v-if="path === 'hockey'" @click="goItem('/deportes/hockey/noticias')" outline color="submenu" label="Noticias" />
      <q-btn :disable="getDisable('/deportes/hockey/multimedia')" v-if="path === 'hockey'" @click="goItem('/deportes/hockey/multimedia')" outline color="submenu" label="Multimedia" />
      <q-btn :disable="getDisable('/deportes/hockey/contacto')" v-if="path === 'hockey'" @click="goItem('/deportes/hockey/contacto')" outline color="submenu" label="Contacto" />
      <!-- Rugby -->
      <q-btn :disable="getDisable('/deportes/rugby')" v-if="path === 'rugby'" @click="goItem('/deportes/rugby')" outline color="submenu" label="Rugby" />
      <q-btn :disable="getDisable('/deportes/rugby/historia')" v-if="path === 'rugby'" @click="goItem('/deportes/rugby/historia')" outline color="submenu" label="Historia" />
      <q-btn :disable="getDisable('/deportes/rugby/calendario')" v-if="path === 'rugby'" @click="goItem('/deportes/rugby/calendario')" outline color="submenu" label="Calendario" />
      <q-btn :disable="getDisable('/deportes/rugby/staff')" v-if="path === 'rugby'" @click="goItem('/deportes/rugby/staff')" outline color="submenu" label="Staff" />
      <q-btn :disable="getDisable('/deportes/rugby/noticias')" v-if="path === 'rugby'" @click="goItem('/deportes/rugby/noticias')" outline color="submenu" label="Noticias" />
      <q-btn :disable="getDisable('/deportes/rugby/multimedia')" v-if="path === 'rugby'" @click="goItem('/deportes/rugby/multimedia')" outline color="submenu" label="Multimedia" />
      <q-btn :disable="getDisable('/deportes/rugby/contacto')" v-if="path === 'rugby'" @click="goItem('/deportes/rugby/contacto')" outline color="submenu" label="Contacto" />
      <!-- Natacion -->
      <q-btn :disable="getDisable('/deportes/natacion')" v-if="path === 'natacion'" @click="goItem('/deportes/natacion')" outline color="submenu" label="Natación" />
      <q-btn :disable="getDisable('/deportes/natacion/master')" v-if="path === 'natacion'" @click="goItem('/deportes/natacion/master')" outline color="submenu" label="Natación Master" />
      <q-btn :disable="getDisable('/deportes/natacion/triatlon')" v-if="path === 'natacion'" @click="goItem('/deportes/natacion/triatlon')" outline color="submenu" label="Triatlón" />
      <q-btn :disable="getDisable('/deportes/natacion/escuela-natacion')" v-if="path === 'natacion'" @click="goItem('/deportes/natacion/escuela-natacion')" outline color="submenu" label="Escuela de Natación" />
      <q-btn :disable="getDisable('/deportes/natacion/natacion-para-bebes')" v-if="path === 'natacion'" @click="goItem('/deportes/natacion/natacion-para-bebes')" outline color="submenu" label="Natación para Bebés" />
      <q-btn :disable="getDisable('/deportes/natacion/actividades')" v-if="path === 'natacion'" @click="goItem('/deportes/natacion/actividades')" outline color="submenu" label="Actividades" />
      <q-btn :disable="getDisable('/deportes/natacion/noticias')" v-if="path === 'natacion'" @click="goItem('/deportes/natacion/noticias')" outline color="submenu" label="Noticias" />
      <q-btn :disable="getDisable('/deportes/natacion/multimedia')" v-if="path === 'natacion'" @click="goItem('/deportes/natacion/multimedia')" outline color="submenu" label="Multimedia" />
      <q-btn :disable="getDisable('/deportes/natacion/contacto')" v-if="path === 'natacion'" @click="goItem('/deportes/natacion/contacto')" outline color="submenu" label="Contacto" />
       <!-- Squash -->
       <q-btn :disable="getDisable('/deportes/squash')" v-if="path === 'squash'" @click="goItem('/deportes/squash')" outline color="submenu" label="Squash" />
       <q-btn :disable="getDisable('/deportes/squash/historia')" v-if="path === 'squash'" @click="goItem('/deportes/squash/historia')" outline color="submenu" label="Historia" />
       <q-btn :disable="getDisable('/deportes/squash/escuelas')" v-if="path === 'squash'" @click="goItem('/deportes/squash/escuelas')" outline color="submenu" label="Escuela" />
       <q-btn :disable="getDisable('/deportes/squash/torneos')" v-if="path === 'squash'" @click="goItem('/deportes/squash/torneos')" outline color="submenu" label="Torneos" />
       <q-btn :disable="getDisable('/deportes/squash/noticias')" v-if="path === 'squash'" @click="goItem('/deportes/squash/noticias')" outline color="submenu" label="Noticias" />
       <q-btn :disable="getDisable('/deportes/squash/multimedia')" v-if="path === 'squash'" @click="goItem('/deportes/squash/multimedia')" outline color="submenu" label="Multimedia" />
       <q-btn :disable="getDisable('/deportes/squash/contacto')" v-if="path === 'squash'" @click="goItem('/deportes/squash/contacto')" outline color="submenu" label="Contacto" />
       <!-- Paddle -->
       <q-btn :disable="getDisable('/deportes/paddle')" v-if="path === 'paddle'" @click="goItem('/deportes/paddle')" outline color="submenu" label="Paddle" />
       <q-btn :disable="getDisable('/deportes/paddle/calendario')" v-if="path === 'paddle'" @click="goItem('/deportes/paddle/calendario')" outline color="submenu" label="Calendario" />
       <q-btn :disable="getDisable('/deportes/paddle/ranking')" v-if="path === 'paddle'" @click="goItem('/deportes/paddle/ranking')" outline color="submenu" label="Ranking" />
       <q-btn :disable="getDisable('/deportes/paddle/noticias')" v-if="path === 'paddle'" @click="goItem('/deportes/paddle/noticias')" outline color="submenu" label="Noticias" />
       <q-btn :disable="getDisable('/deportes/paddle/multimedia')" v-if="path === 'paddle'" @click="goItem('/deportes/paddle/multimedia')" outline color="submenu" label="Multimedia" />
       <q-btn :disable="getDisable('/deportes/paddle/contacto')" v-if="path === 'paddle'" @click="goItem('/deportes/paddle/contacto')" outline color="submenu" label="Contacto" />
       <!-- Tennis -->
        <q-btn :disable="getDisable('/deportes/tennis')" v-if="path === 'tennis'" @click="goItem('/deportes/tennis')" outline color="submenu" label="Tennis" />
        <q-btn :disable="getDisable('/deportes/tennis/equipo')" v-if="path === 'tennis'" @click="goItem('/deportes/tennis/equipo')" outline color="submenu" label="Equipo" />
        <q-btn :disable="getDisable('/deportes/tennis/categorias')" v-if="path === 'tennis'" @click="goItem('/deportes/tennis/categorias')" outline color="submenu" label="Categorías" />
        <q-btn :disable="getDisable('/deportes/tennis/ranking')" v-if="path === 'tennis'" @click="goItem('/deportes/tennis/ranking')" outline color="submenu" label="Ranking" />
        <q-btn :disable="getDisable('/deportes/tennis/calendario')" v-if="path === 'tennis'" @click="goItem('/deportes/tennis/calendario')" outline color="submenu" label="Calendario" />
        <q-btn :disable="getDisable('/deportes/tennis/reservar-cancha')" v-if="path === 'tennis'" @click="goItem('/deportes/tennis/reservar-cancha')" outline color="submenu" label="Reservar Cancha" />
        <q-btn :disable="getDisable('/deportes/tennis/noticias')" v-if="path === 'tennis'" @click="goItem('/deportes/tennis/noticias')" outline color="submenu" label="Noticias" />
       <q-btn :disable="getDisable('/deportes/tennis/multimedia')" v-if="path === 'tennis'" @click="goItem('/deportes/tennis/multimedia')" outline color="submenu" label="Multimedia" />
       <q-btn :disable="getDisable('/deportes/tennis/contacto')" v-if="path === 'tennis'" @click="goItem('/deportes/tennis/contacto')" outline color="submenu" label="Contacto" />
    </q-btn-group>
    <Buscador />
  </div>
</template>

<script>
import Buscador from '../submenus/Buscador.vue'

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
    this.path = localStorage.getItem('sport')
    console.log(this.path)
  },
  methods: {
    goItem (route) {
      this.$router.push(route)
    },
    getDisable (route) {
      if (this.current === route) return true
      return false
    }
  },
  components: { Buscador }
}
</script>
