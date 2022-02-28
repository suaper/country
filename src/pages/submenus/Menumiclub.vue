<template>
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline color="submenu" label="Clubes de intercambio" />
      <q-btn outline  @click="IrHistoria()" color="submenu" label="Etiquetas" />
      <q-btn outline  @click="IrMision()" color="submenu" label="Cuotas Sociales y Reglamento" />
      <q-btn outline @click="IrDirectorio()"  color="submenu" label="Beneficios de los Socios" />
    </q-btn-group>
</template>

<script>

export default {
  name: 'Menumiclub',

  methods: {
    IrHistoria () {
      this.$router.push('/historia')
    },
    IrMision () {
      this.$router.push('/mision')
    },
    IrDirectorio () {
      this.$router.push('/directorio')
    },
    IrExpresidentes () {
      this.$router.push('/expresidentes')
    }
  }
}
</script>
