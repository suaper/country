<template>
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline color="submenu" label="Kids" />
      <q-btn outline  @click="IrSummer()" color="submenu" label="Summer Activities" />
      <q-btn outline  @click="IrWinter()" color="submenu" label="Winter Activities" />
      <q-btn outline @click="IrPlayroom()"  color="submenu" label="Playroom" />
      <q-btn outline  @click="IrMotor()" color="submenu" label="Motor Skills" />
      <q-btn outline  @click="IrSport()" color="submenu" label="Sport Kids" />
    </q-btn-group>
</template>

<script>

export default {
  name: 'Menukids',

  methods: {
    IrSummer () {
      this.$router.push('/kids/summer-activities')
    },
    IrWinter () {
      this.$router.push('/kids/winter-activities')
    },
    IrPlayroom () {
      this.$router.push('/special_day')
    },
    IrMotor () {
      this.$router.push('/country')
    },
    IrSport () {
      this.$router.push('/multimedia_gastronomia')
    }
  }
}
</script>
