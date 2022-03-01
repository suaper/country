<template>
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline color="submenu" label="Clubes de intercambio" />
      <q-btn outline  @click="IrEtiquetas()" color="submenu" label="Etiquetas" />
      <q-btn outline  @click="IrCuotasReglamento()" color="submenu" label="Cuotas Sociales y Reglamento" />
      <q-btn outline @click="IrDirectorio()"  color="submenu" label="Beneficios de los Socios" />
    </q-btn-group>
</template>

<script>

export default {
  name: 'Menumiclub',

  methods: {
    IrEtiquetas () {
      this.$router.push('/etiquetas')
    },
    IrMision () {
      this.$router.push('/mision')
    },
    IrCuotasReglamento () {
      this.$router.push('/cuotas_reglamento')
    },
    IrExpresidentes () {
      this.$router.push('/expresidentes')
    }
  }
}
</script>
