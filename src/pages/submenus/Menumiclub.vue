<template>
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline :disable="getDisable('/mi-club')" color="submenu" label="Clubes de intercambio" @click="goItem('/mi-club')"/>
      <q-btn outline :disable="getDisable('/mi-club/etiquetas')" @click="goItem('/mi-club/etiquetas')" color="submenu" label="Etiquetas" />
      <q-btn outline :disable="getDisable('/mi-club/cuotas-reglamento')" @click="goItem('/mi-club/cuotas-reglamento')" color="submenu" label="Cuotas Sociales y Reglamento" />
      <q-btn outline :disable="getDisable('/mi-club/cuotas-reglamento')" @click="goItem('/mi-club/cuotas-reglamento')"  color="submenu" label="Beneficios de los Socios" />
    </q-btn-group>
</template>

<script>

export default {
  name: 'Menumiclub',
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
