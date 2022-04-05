<template>
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline color="submenu" label="Eventos" />
      <q-btn outline  @click="IrEventos()" color="submenu" label="Staff" />
      <q-btn outline  @click="IrTipoEventos()" color="submenu" label="Tipos de Eventos" />
      <q-btn outline @click="IrEspacios()"  color="submenu" label="Espacios y Salones" />
      <q-btn outline  @click="IrCountryExperience()" color="submenu" label="Country Streaming / Experience" />
      <q-btn outline  @click="IrMultimedia()" color="submenu" label="Servicios" />
      <q-btn outline  @click="IrMatrimonios()" color="submenu" label="Matrimonios" />
      <q-btn outline color="submenu" label="Multimedia" />
      <q-btn outline color="submenu" label="Reservas" />
      <q-btn outline color="submenu" label="Contacto" />
    </q-btn-group>
</template>

<script>

export default {
  name: 'Menueventos',

  methods: {
    IrEventos () {
      this.$router.push('/eventos/staff')
    },
    IrTipoEventos () {
      this.$router.push('/eventos/tipo-eventos')
    },
    IrEspacios () {
      this.$router.push('/eventos/espacios-salones')
    },
    IrCountryExperience () {
      this.$router.push('/eventos/country-experience')
    },
    IrMatrimonios () {
      this.$router.push('/eventos/matrimonios')
    },
    IrMultimedia () {
      this.$router.push('/cultura/multimedia')
    }
  }
}
</script>
