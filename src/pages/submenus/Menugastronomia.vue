<template>
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline color="submenu" label="Gastronomía" />
      <q-btn outline  @click="IrStaff()" color="submenu" label="Staff" />
      <q-btn outline  @click="IrRestaurantes()" color="submenu" label="Restaurantes" />
      <q-btn outline @click="IrSpecialDay()"  color="submenu" label="Special Days" />
      <q-btn outline  @click="IrCountry()" color="submenu" label="Country al día" />
      <q-btn outline  @click="IrMultimedia()" color="submenu" label="Multimedia" />
      <q-btn outline @click="IrContactoGastronimioa()"  color="submenu" label="Contacto" />
    </q-btn-group>
</template>

<script>

export default {
  name: 'Menuspa',

  methods: {
    IrStaff () {
      this.$router.push('/staff')
    },
    IrRestaurantes () {
      this.$router.push('/restaurantes')
    },
    IrSpecialDay () {
      this.$router.push('/special_day')
    },
    IrCountry () {
      this.$router.push('/country')
    },
    IrMultimedia () {
      this.$router.push('/multimedia_gastronomia')
    },
    IrContactoGastronimioa () {
      this.$router.push('/contacto_gastronomia')
    }
  }
}
</script>
