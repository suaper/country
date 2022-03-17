<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
    <Menugastronomia/>
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
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Staff</div>
            <p class="intro text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget posuere nisl. Fusce tincidunt massa pulvinar est lobortis, at pellentesque ante accumsan. Aenean condimentum neque a libero sollicitudin, a pretium massa auctor.</p>
        </div>
    </div>

    <div class="q-py-xl all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_fitness">
              <tr>
                  <td>
                      <h6 class="title_text">Titulo 1 <br>/Staff 1</h6>
                      <p>Nulla eget posuere nisl. Fusce tincidunt massa pulvinar est lobortis, at pellentesque ante accumsan.</p>
                      <p class="q-mt-md"><strong>Martes a sábado:</strong>10:00 a 23:00</p>
                      <p>Nulla eget posuere nisl. Fusce tincidunt massa pulvinar est lobortis, at pellentesque ante accumsan.</p>
                  </td>
                  <td>
                      <img src="../../assets/HazteSocio/socio01.png" />
                  </td>
              </tr>
          </table>
        </div>
    </div>
    <div class="q-py-xl all_width gris_home wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_fitness">
              <tr>
                  <td>
                      <img src="../../assets/HazteSocio/socio02.png" />
                  </td>
                  <td>
                      <h6 class="title_text">Titulo 2 <br>/Staff 2</h6>
                      <p>Nulla eget posuere nisl. Fusce tincidunt massa pulvinar est lobortis, at pellentesque ante accumsan. Nulla eget posuere nisl. Fusce tincidunt massa pulvinar est lobortis, at pellentesque ante accumsan.</p>
                  </td>
              </tr>
          </table>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menugastronomia from 'pages/submenus/Menugastronomia'

export default {
  name: 'Staff',
  components: {
    Menugastronomia
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
