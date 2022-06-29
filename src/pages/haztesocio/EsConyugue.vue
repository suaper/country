<template>
  <q-page class="flex flex-center view_hijos_socios view_danzas">
    <div class="q-pb-xl all_width gris_home view_form_cotizar">
        <div class="setenta q-pd-md centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Conyugue</div>
            <div class="back"> <q-btn to="/hazte-socio/formulario" round color="white" icon="west" />Volver</div>
        </div>
        <div class="q-py-md w_500 centrar flex_escuelas flex_obras justify-center view_form_cotizar is_hijo">
        <q-form>
            <div class="roww">
                <div class="flexline">
                    <strong>Tiene Esposa</strong>
                    <q-radio left-label v-model="eshijos" color="orange-4" val="si" label="Si" />
                    <q-radio left-label v-model="eshijos" color="orange-4" val="no" label="No" />
                </div>
            </div>
            <div class="action_next">
                <q-btn outline type="submit" @click="irFormularioConyugue()"  class="azul centrar mt_10 bg_white_home" label="Continuar" icon-right="add"/>
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
      console.log(this.eshijos)
      if (this.eshijos === 'no') {
        this.$router.push('/hazte-socio/eshijo')
      } else {
        this.$router.push('/hazte-socio/formularioconyugue')
      }
    }
  }
}
</script>
