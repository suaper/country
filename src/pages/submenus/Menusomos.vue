<template>
  <div class="new_wrap">
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline :disable="getDisable('/quienes-somos')" color="submenu" label="Quiénes Somos" @click="goItem('/quienes-somos')" />
      <q-btn outline :disable="getDisable('/quienes-somos/historia')"  @click="goItem('/quienes-somos/historia')" color="submenu" label="Historia" />
      <q-btn outline :disable="getDisable('/quienes-somos/mision')" @click="goItem('/quienes-somos/mision')" color="submenu" label="Misión" />
      <q-btn outline :disable="getDisable('/quienes-somos/directorio')" @click="goItem('/quienes-somos/directorio')"  color="submenu" label="Directorio" />
      <q-btn outline :disable="getDisable('/quienes-somos/administracion')" @click="goItem('/quienes-somos/administracion')"  color="submenu" label="Administración" />
      <q-btn outline :disable="getDisable('/quienes-somos/expresidentes')" @click="goItem('/quienes-somos/expresidentes')" color="submenu" label="Ex Presidentes" />
      <q-btn outline :disable="getDisable('/quienes-somos/memoria-anual')" @click="goItem('/quienes-somos/memoria-anual')" color="submenu" label="Memoria Anual" />
    </q-btn-group>

    <Buscador />
  </div>

</template>

<script>
import Buscador from './Buscador.vue'

export default {
  name: 'Menusomos',
  components: { Buscador },
  props: {
    currentItem: String
  },
  data () {
    return {
      current: this.currentItem,
      search: ''
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
