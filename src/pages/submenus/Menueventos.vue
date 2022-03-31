<template>
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline color="submenu" label="Eventos" />
      <q-btn outline  @click="IrEventos()" color="submenu" label="Staff" />
      <q-btn outline  @click="IrTipoEventos()" color="submenu" label="Tipos de Eventos" />
      <q-btn outline @click="IrBiblioteca()"  color="submenu" label="Espacios y Salones" />
      <q-btn outline  @click="IrNoticias()" color="submenu" label="Country Streaming / Experience" />
      <q-btn outline  @click="IrMultimedia()" color="submenu" label="Servicios" />
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
    IrBiblioteca () {
      this.$router.push('/cultura/biblioteca')
    },
    IrNoticias () {
      this.$router.push('/cultura/noticias')
    },
    IrMultimedia () {
      this.$router.push('/cultura/multimedia')
    }
  }
}
</script>
