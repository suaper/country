<template>
    <q-btn-group outline rounded class="sub_menu">
      <q-btn outline color="submenu" label="Quiénes Somos" />
      <q-btn outline  @click="IrHistoria()" color="submenu" label="Historia" />
      <q-btn outline  @click="IrMision()" color="submenu" label="Misión" />
      <q-btn outline @click="IrDirectorio()"  color="submenu" label="Directorio" />
      <q-btn outline color="submenu" label="Ex Presidentes" />
    </q-btn-group>
</template>

<script>

export default {
  name: 'Menusomos',

  methods: {
    IrHistoria () {
      this.$router.push('/historia')
    },
    IrMision () {
      this.$router.push('/mision')
    },
    IrDirectorio () {
      this.$router.push('/directorio')
    }
  }
}
</script>
