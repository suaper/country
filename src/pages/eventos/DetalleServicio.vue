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
                <img src="../../assets/MiClub/i-pdf.svg">
                <h5>Almuerzos y Comidas</h5>
                <q-btn outline class="azul q-my-md centrar bg_white_i" @click="goCotizador()" label="Cotiza tu evento" icon-right="arrow_right_alt"/>
            </div>
            <div class="right68">
                <img src="https://pwccdev.mkbk.digital/administrador/sites/default/files/2022-04/banner-tipos-eventos.png" alt="banner">
            </div>
        </div>
    </div>

    <div class="row jusify-beetwen text_adicional w_1100 centrar q-pa-xl">
        <div class="left30">
            <h5>Áreas disponibles</h5>
            <ul class="icono_amarillo">
                <li>Sala Directorio</li>
                <li>Sala Newton </li>
                <li>CoWork</li>
            </ul>
        </div>
        <div class="w_60 text-left">
            <h5>Descripción</h5>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget posuere nisl. Fusce tincidunt massa pulvinar est lobortis, at pellentesque ante accumsan. Aenean condimentum neque a libero sollicitudin, a pretium massa auctor.
            </p>
        </div>
    </div>

  </q-page>
</template>

<script>

export default {
  name: 'ServicioEventos',

  data () {
    return {
      urlSite: 'https://pwccdev.mkbk.digital/'
    }
  },
  methods: {
    goCotizador () {
      this.$router.push('/eventos/cotizador')
    }
  }
}
</script>
