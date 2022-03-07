<template>
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline color="submenu" label="Hazte Socio" />
      <q-btn outline  @click="IrEtiquetas()" color="submenu" label="Hijos de Socios" />
      <q-btn outline  @click="IrCuotasReglamento()" color="submenu" label="Hijos de Ex Socios" />
      <q-btn outline @click="IrBeneficiosSocios()"  color="submenu" label="Nuevos Socios" />
      <q-btn outline  @click="IrEtiquetas()" color="submenu" label="Extranjeros de Paso" />
      <q-btn outline  @click="IrCuotasReglamento()" color="submenu" label="Senior sin cargas" />
      <q-btn outline @click="IrBeneficiosSocios()"  color="submenu" label="Familia de Socios" />
      <q-btn outline @click="IrBeneficiosSocios()"  color="submenu" label="Familia de Rama Deportiva" />
    </q-btn-group>
</template>

<script>

export default {
  name: 'Menuhaztesocio',

  methods: {
    IrEtiquetas () {
      this.$router.push('/etiquetas')
    },
    IrBeneficiosSocios () {
      this.$router.push('/beneficios_socios')
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
