<template>
    <q-btn-group outline rounded class="sub_menu open">
      <q-btn outline color="submenu" label="Hazte Socio" />
      <q-btn outline  @click="IrHijosSocios()" color="submenu" label="Hijos de Socios" />
      <q-btn outline  @click="IrHijosExSocios()" color="submenu" label="Hijos de Ex Socios" />
      <q-btn outline @click="IrNuevosSocios()"  color="submenu" label="Nuevos Socios" />
      <q-btn outline  @click="IrExtranjeros()" color="submenu" label="Extranjeros de Paso" />
      <q-btn outline  @click="IrSenior()" color="submenu" label="Senior sin cargas" />
      <q-btn outline @click="IrFamiliaSocios()"  color="submenu" label="Familia de Socios" />
      <q-btn outline @click="IrFamiliaRamaDeportiva()"  color="submenu" label="Familia de Rama Deportiva" />
    </q-btn-group>
</template>

<script>

export default {
  name: 'Menuhaztesocio',

  methods: {
    IrHijosSocios () {
      this.$router.push('/hijos_socios')
    },
    IrHijosExSocios () {
      this.$router.push('/hijos_ex_socios')
    },
    IrNuevosSocios () {
      this.$router.push('/nuevos_socios')
    },
    IrExtranjeros () {
      this.$router.push('/extranjeros_de_paso')
    },
    IrSenior () {
      this.$router.push('/senior')
    },
    IrFamiliaSocios () {
      this.$router.push('/familia_de_socios')
    },
    IrFamiliaRamaDeportiva () {
      this.$router.push('/familia_rama_deportiva')
    }
  }
}
</script>
