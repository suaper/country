<template>
  <div class="new_wrap">
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline color="submenu" label="Hazte Socio" :disable="getDisable('/hazte-socio')"  @click="goItem('/hazte-socio')"/>
      <q-btn outline :disable="getDisable('/hazte-socio/hijos-socios')"  @click="goItem('/hazte-socio/hijos-socios')" color="submenu" label="Hijos de Socios" />
      <q-btn outline :disable="getDisable('/hazte-socio/hijos-ex-socios')"  @click="goItem('/hazte-socio/hijos-ex-socios')" color="submenu" label="Hijos de Ex Socios" />
      <q-btn outline :disable="getDisable('/hazte-socio/nuevos-socios')"  @click="goItem('/hazte-socio/nuevos-socios')" color="submenu" label="Nuevos Socios" />
      <q-btn outline :disable="getDisable('/hazte-socio/extranjeros-de-paso')"  @click="goItem('/hazte-socio/extranjeros-de-paso')" color="submenu" label="Extranjeros de Paso" />
      <q-btn outline :disable="getDisable('/hazte-socio/senior')"  @click="goItem('/hazte-socio/senior')" color="submenu" label="Senior sin Cargas" />
      <q-btn outline :disable="getDisable('/hazte-socio/familia-de-socios')"  @click="goItem('/hazte-socio/familia-de-socios')" color="submenu" label="Familia de Socios" />
      <q-btn outline :disable="getDisable('/hazte-socio/familia-rama-deportiva')"  @click="goItem('/hazte-socio/familia-rama-deportiva')" color="submenu" label="Familia de Rama Deportiva" />
    </q-btn-group>
    <Buscador />
  </div>
</template>

<script>
import Buscador from './Buscador.vue'

export default {
  name: 'Menuhaztesocio',
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
