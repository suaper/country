<template>
  <q-page class="flex flex-center view_quienes_somos">
    <div class="q-pb-md all_width gris_home view_danzas q-mt-xl q-mb-none">
        <div class="setenta  centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Servicios</div>
            <div class="back"> <q-btn to="/eventos/tipo-eventos" round color="white" icon="west" />Volver</div>
        </div>
    </div>
    <div class="q-py-md w_1100 centrar flex_escuelas flex_obras justify-center">
        <div class="row detalle_serivcio">
            <div class="left30">
                <img :src="urlSite + service.field_icono_servicio_evento">
                <h5>{{ service.title }}</h5>
                <q-btn outline class="azul q-my-md centrar bg_white_i" @click="goCotizador()" label="Cotiza tu evento" icon-right="arrow_right_alt"/>
            </div>
            <div class="right68">
                <img :src="urlSite + service.field_imagen_servicio_evento" alt="banner">
            </div>
        </div>
    </div>

    <div class="row jusify-beetwen text_adicional w_1100 centrar q-pa-xl">
        <div class="left30" v-html="service.field_texto_servicio_evento"></div>
        <div class="w_60 text-left">
            <h5>Descripción</h5>
            <p v-html="service.field_descripcion_servicio"></p>
        </div>
    </div>

  </q-page>
</template>

<script>

export default {
  name: 'ServicioEventos',

  data () {
    return {
      urlSite: 'https://www.pwcc.cl',
      service: []
    }
  },
  created () {
    this.service = JSON.parse(localStorage.getItem('service'))
  },
  methods: {
    goCotizador () {
      this.$router.push('/eventos/cotizador')
    }
  }
}
</script>
