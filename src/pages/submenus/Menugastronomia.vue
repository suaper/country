<template>
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline :disable="getDisable('/gastronomia')"  @click="goItem('/gastronomia')" color="submenu" label="Gastronomía" />
      <q-btn outline :disable="getDisable('/gastronomia/staff')"  @click="goItem('/gastronomia/staff')" color="submenu" label="Staff" />
      <q-btn outline :disable="getDisable('/gastronomia/restaurantes')"  @click="goItem('/gastronomia/restaurantes')" color="submenu" label="Restaurantes" />
      <q-btn outline :disable="getDisable('/gastronomia/country')"  @click="goItem('/gastronomia/country')" color="submenu" label="Country al día" />
      <q-btn outline :disable="getDisable('/gastronomia/multimedia')"  @click="goItem('/gastronomia/multimedia')" color="submenu" label="Multimedia" />
      <q-btn outline :disable="getDisable('/gastronomia/contacto')"  @click="goItem('/gastronomia/contacto')" color="submenu" label="Contacto" />
    </q-btn-group>
</template>

<script>

export default {
  name: 'Menugastronomia',
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
