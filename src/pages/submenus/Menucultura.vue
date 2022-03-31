<template>
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline color="submenu" label="Cultura" />
      <q-btn outline  @click="IrCharlas()" color="submenu" label="Charlas Culturales" />
      <q-btn outline  @click="IrDanza()" color="submenu" label="Danza" />
      <q-btn outline @click="IrBiblioteca()"  color="submenu" label="Biblioteca" />
      <q-btn outline  @click="IrNoticias()" color="submenu" label="Noticias" />
      <q-btn outline  @click="IrMultimedia()" color="submenu" label="Multimedia" />
    </q-btn-group>
</template>

<script>

export default {
  name: 'Menukids',

  methods: {
    IrCharlas () {
      this.$router.push('/cultura/charlas-culturales')
    },
    IrDanza () {
      this.$router.push('/cultura/danza')
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
