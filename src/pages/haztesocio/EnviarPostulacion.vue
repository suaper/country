<template>
  <q-page class="flex flex-center view_hijos_socios view_danzas">
    <div class="q-pb-xl all_width gris_home view_form_cotizar">
        <div class="setenta q-pd-md centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Enviar Postulación</div>
            <div class="back"> <q-btn to="/cultura/danza" round color="white" icon="west" />Volver</div>
        </div>
        <div class="q-py-md w_1100 centrar flex_escuelas flex_obras justify-center view_form_cotizar is_hijo">
        <q-form>
            <div class="roww">
                <div class="ancho50 items-1">
                    <span class="label_strong">Firma de autorización</span>
                    <q-uploader
                        url="http://localhost:4444/upload"
                        style="max-width: 300px"
                    />
                </div>
                <div class="ancho50 items-1">
                    <q-checkbox v-model="terminos" label="Acepto términos y Condiciones y tratamiento de datos." />
                </div>
            </div>
            <div class="action_next">
                <q-btn outline type="submit" class="azul centrar mt_10 bg_white_home" label="Enviar" icon-right="add"/>
            </div>
        </q-form>
        </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'esConyugue',
  data () {
    return {
      eshijos: '',
      terminos: false
    }
  },
  methods: {
    irSiguiente () {
      this.$router.push('enviarpostulacion')
    }
  }
}
</script>
