<template>
  <div class="new_wrap">
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline :disable="getDisable('/mi-club')" @click="goItem('/mi-club')"  color="submenu" label="Mi Club" />
      <q-btn outline :disable="getDisable('/mi-club/reglamento')" @click="goItem('/mi-club/reglamento')" color="submenu" label="Reglamento" />
      <q-btn outline :disable="getDisable('/mi-club/normas-de-convivencia')" @click="goItem('/mi-club/normas-de-convivencia')" color="submenu" label="Normas de Convivencia" />
      <q-btn outline :disable="getDisable('/mi-club/cuotas-sociales')" @click="goItem('/mi-club/cuotas-sociales')" color="submenu" label="Cuotas Sociales" />
      <q-btn outline :disable="getDisable('/mi-club/pagos')" @click="goItem('/mi-club/pagos')"  color="submenu" label="Pagos" />
      <q-btn outline :disable="getDisable('/mi-club/beneficios-socios')" @click="goItem('/mi-club/beneficios-socios')"  color="submenu" label="Beneficios" />
      <q-btn outline :disable="getDisable('/mi-club/clubes-intercambio')" color="submenu" label="Clubes de Intercambio" @click="goItem('/mi-club/clubes-intercambio')"/>
      <q-btn outline :disable="getDisable('/mi-club/denuncias')" @click="goItem('/mi-club/denuncias')" color="submenu" label="Comite Máas" />
    </q-btn-group>

    <Buscador />
  </div>
</template>

<script>
import Buscador from './Buscador.vue'

export default {
  name: 'Menumiclub',
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
