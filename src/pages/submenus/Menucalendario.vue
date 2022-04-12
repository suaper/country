<template>
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline  @click="IrCulturaCalendario()" color="submenu" label="Cultura" />
      <q-btn outline  @click="IrDeportesCalendario()" color="submenu" label="Deportes" />
      <q-btn outline @click="IrSpaCalendario()"  color="submenu" label="Spa & Wellness" />
    </q-btn-group>
</template>

<script>

export default {
  name: 'Menucalendario',

  methods: {
    IrCulturaCalendario () {
      this.$router.push('/calendario')
    },
    IrDeportesCalendario () {
      this.$router.push('/calendario/deportes')
    },
    IrSpaCalendario () {
      this.$router.push('/calendario/spa')
    }
  }
}
</script>
