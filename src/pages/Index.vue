<template>
  <q-page class="flex flex-center">
    <div class="q-py-md all_width">
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
      <div class="row_wrap no-wrap flex justify-between first_row_home">
        <div class="q-py-md">

         <iframe width="560" height="400" src="https://www.youtube.com/embed/mDQcgdE_1N4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card sin_fondo">
            <q-card-section>
              <div class="text-h6">Sé partede del mejor<br>Club De Golf</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="q-py-md all_width bg_beige">
      <div class="row_wrap no-wrap flex justify-start">
        <h3 class="q-my-none">Multimedia</h3>
        <q-btn class="q-ml-lg" outline color="indigo-10" icon-right="east" label="Ver más" />

      </div>
      <div class="row_wrap no-wrap flex justify-between fsecond_row_home">
        <div class="q-py-md">
          <table class="esquma_inferior">
            <tr>
              <td class="tg-0pky" rowspan="2"><img class="q-mx-none" alt="img1" src="../assets/Eventos/experiencia03.png"></td>
              <td class="tg-0pky"><img class="q-mx-none" alt="img2" src="../assets/Eventos/experiencia04.png"></td>
              <td class="tg-0pky" rowspan="2"><img class="q-mx-none" alt="img2" src="../assets/Eventos/experiencia06.png"></td>
              <td class="tg-0pky" rowspan="2"><img class="q-mx-none" alt="img2" src="../assets/Eventos/experiencia07.png"></td>
            </tr>
            <tr>
              <td class="tg-0pky"><img class="q-mx-none" alt="img2" src="../assets/Eventos/experiencia05.png"></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      sliders: true,
      slide: 1,
      autoplay: true
    }
  }
}
</script>
