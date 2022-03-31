<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menueventos/>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
        autoplay="autoplay"
      >
        <q-carousel-slide :name="1" img-src="../assets/Home/banner-home.png" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Eventos</div>
            <p class="intro text-center">Nuestras instalaciones nos permiten ser centro de eventos para los diversos intereses y edades de nuestros socios, sus familias y empresas. Aquí podrás encontrar todos los recintos donde realizar tus celebraciones familiares, sociales y profesionales, para las que podemos ofrecer un servicio de catering de primer nivel.</p>
            <q-btn outline class="azul q-my-xl m_y_20 centrar bg_white_i" label="Cotiza tu evento" icon-right="arrow_right_alt"/>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menueventos from 'pages/submenus/Menueventos'

export default {
  name: 'Kids',
  components: {
    Menueventos
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {}
    }
  }
}
</script>
