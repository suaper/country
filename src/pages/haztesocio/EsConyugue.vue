<template>
  <q-page class="flex flex-center view_hijos_socios view_danzas">
    <div class="q-pb-xl all_width gris_home view_form_cotizar">
        <div class="setenta q-pd-md centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Conyuge</div>
            <div class="back"> <q-btn to="/hazte-socio/formulario" round color="white" icon="west" />Volver</div>
        </div>
        <div class="q-py-md w_500 centrar flex_escuelas flex_obras justify-center view_form_cotizar is_hijo">
        <q-form @submit="irFormularioConyugue()">
            <div class="roww">
                <div class="flexline">
                    <strong>Tiene cónyuge o pareja de hecho</strong>
                    <q-radio left-label v-model="eshijos" color="orange-4" val="si" label="Si" />
                    <q-radio left-label v-model="eshijos" color="orange-4" val="no" label="No" />
                </div>
            </div>
            <div class="action_next">
                <q-btn outline type="submit" class="azul centrar mt_10 bg_white_home" label="Continuar" icon-right="add"/>
            </div>
        </q-form>
        </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'eshijo',
  data () {
    return {
      eshijos: '',
      detalleObras: false
    }
  },
  methods: {
    irFormularioConyugue () {
      if (this.eshijos === 'no') {
        this.$router.push('/hazte-socio/eshijo')
      } else {
        this.$router.push('/hazte-socio/formularioconyugue')
      }
    }
  }
}
</script>
