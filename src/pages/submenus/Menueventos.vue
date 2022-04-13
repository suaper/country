<template>
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline color="submenu" label="Eventos" />
      <q-btn outline  @click="IrEventos()" color="submenu" label="Staff" />
      <q-btn outline  @click="IrTipoEventos()" color="submenu" label="Tipos de Eventos" />
      <q-btn outline @click="IrEspacios()"  color="submenu" label="Espacios y Salones" />
      <q-btn outline  @click="IrMultimedia()" color="submenu" label="Servicios" />
      <q-btn outline  @click="IrMatrimonios()" color="submenu" label="Matrimonios" />
      <q-btn outline color="submenu"  @click="IrMultimedia()" label="Multimedia" />
      <q-btn outline color="submenu" @click="IrContacto()" label="Contacto" />
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
    IrMatrimonios () {
      this.$router.push('/eventos/matrimonios')
    },
    IrMultimedia () {
      this.$router.push('/eventos/multimedia')
    },
    IrContacto () {
      this.$router.push('/eventos/contacto')
    }
  }
}
</script>
