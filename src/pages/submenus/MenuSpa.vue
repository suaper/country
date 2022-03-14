<template>
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline color="submenu" label="Spa & Wellness" />
      <q-btn outline  @click="IrFitness()" color="submenu" label="Fitness" />
      <q-btn outline  @click="IrPeluqueria()" color="submenu" label="Peluquería" />
      <q-btn outline @click="IrEstetica()"  color="submenu" label="Centro de Estética" />
      <q-btn outline  @click="IrKinesiologia()" color="submenu" label="Kinesiología" />
      <q-btn outline  @click="IrSenior()" color="submenu" label="Multimedia" />
      <q-btn outline @click="IrContactoSpa()"  color="submenu" label="Contacto" />
    </q-btn-group>
</template>

<script>

export default {
  name: 'Menuspa',

  methods: {
    IrFitness () {
      this.$router.push('/fitness')
    },
    IrPeluqueria () {
      this.$router.push('/peluqueria')
    },
    IrEstetica () {
      this.$router.push('/estetica')
    },
    IrKinesiologia () {
      this.$router.push('/kinesiologia')
    },
    IrSenior () {
      this.$router.push('/senior')
    },
    IrContactoSpa () {
      this.$router.push('/contacto_spa')
    }
  }
}
</script>
