<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
    <Menuspa currentItem="/spa/kinesiologia"/>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
      >
        <q-carousel-slide :name="1" img-src="../../assets/Home/banner-home.png" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </q-carousel>
    </div>
        <div class="cincuenta q-pb-xl centrar text-center">
            <div class="center text-center q-my-lg titulos">Kinesiología</div>
            <p class="intro text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget posuere nisl. Fusce tincidunt massa pulvinar est lobortis, at pellentesque ante accumsan. Aenean condimentum neque a libero sollicitudin, a pretium massa auctor.</p>
             <q-btn outline  @click="pop_reservar_spa = true" class="azul q-my-md centrar bg_white_i" label="Reserva aquí" icon-right="arrow_right_alt"/>
        </div>
  </q-page>
</template>

<script>
import Menuspa from 'pages/submenus/Menuspa'

export default {
  name: 'Kinesiologia',
  components: {
    Menuspa
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {},
      pop_consultar: false
    }
  }
}
</script>
