<template>
  <div class="new_wrap">
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline :disable="getDisable('/eventos/staff')" @click="goItem('/eventos/staff')" color="submenu" label="Staff" />
      <q-btn outline :disable="getDisable('/eventos/tipo-eventos')" @click="goItem('/eventos/tipo-eventos')" color="submenu" label="Tipos de Eventos" />
      <q-btn outline :disable="getDisable('/eventos/espacios-salones')" @click="goItem('/eventos/espacios-salones')" color="submenu" label="Espacios y Salones" />
      <q-btn outline :disable="getDisable('/eventos/matrimonios')" @click="goItem('/eventos/matrimonios')" color="submenu" label="Matrimonios" />
      <q-btn outline :disable="getDisable('/eventos/multimedia')" @click="goItem('/eventos/multimedia')" color="submenu" label="Multimedia" />
      <q-btn outline :disable="getDisable('/eventos/contacto')" @click="goItem('/eventos/contacto')" color="submenu" label="Contacto" />
    </q-btn-group>

    <Buscador />
  </div>
</template>

<script>
import Buscador from './Buscador.vue'

export default {
  name: 'Menueventos',
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
