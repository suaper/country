<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menusomos />
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
        :autoplay="autoplay"
      >
        <q-carousel-slide :name="1" img-src="../assets/Home/banner-home.png" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </q-carousel>
    </div>
    <div class="q-py-md all_width gris_home">
      <div class="row_wrap no-wrap flex justify-between first_row_somos">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card sin_fondo">
            <q-card-section>
              <div class="text-h6 center text-center q-my-lg">Quiénes Somos</div>
              <p class="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <p class="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Menusomos from 'pages/submenus/Menusomos'

export default {
  name: 'QuienesSomos',
  components: {
    Menusomos
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      autoplay: true
    }
  }
}
</script>
