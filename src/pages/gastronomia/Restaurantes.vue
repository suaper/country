<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness view_restaurantes">
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
            <div class="center text-center q-my-lg titulos">Restaurantes</div>
        </div>
        <ul class="wrp_actions_center_peluqueria">
            <li>
                <a href="#bar">Bar / Comedor</a>
            </li>
            <li>
                <a href="#terraza">Terraza</a>
            </li>
            <li>
                <a href="#pub">PUB</a>
            </li>
            <li>
                <a href="#sports">Sports Café</a>
            </li>
            <li>
                <a href="#pasada">Pasada de Golf</a>
            </li>
            <li>
                <a href="#gazebo">Gazebo</a>
            </li>
            <li>
                <a href="#work">Co - Work</a>
            </li>
        </ul>
    </div>

    <a name="uno" id="bar"></a>
    <div class="q-py-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_pelu" id="bar">
              <tr>
                  <td>

                      <h6 class="peluqueria q-mt-none">Bar / Comedor</h6>
                      <p class="q-mt-md"><strong>Martes a sábado:</strong>10:00 a 23:00</p>
                      <p class="q-mt-md"><strong>Domingos y feriados:</strong>10:00 a 23:00</p>
                      <p class="q-mt-md"><strong>Cierre de cocina:</strong>30 min antes del cierre general.</p>
                      <hr class="hr_restaurante">

                    <ul class="wrp_actions_center_restaurante">
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Carta</strong>
                            </li>
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Políticas</strong>
                            </li>
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Reserva</strong>
                            </li>
                        </ul>
                  </td>
                  <td>
                      <img src="../../assets/HazteSocio/socio02.png" />
                  </td>
              </tr>
          </table>
        </div>
    </div>
    <a name="dos" id="terraza"></a>
    <div class="q-py-md all_width gris_home wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_pelu">
              <tr>
                  <td>
                      <img src="../../assets/HazteSocio/socio02.png" />
                  </td>
                  <td>
                      <h6 class="peluqueria q-mt-none">Terraza</h6>
                      <p class="q-mt-md"><strong>Martes a sábado:</strong>10:00 a 23:00</p>
                      <p class="q-mt-md"><strong>Domingos y feriados:</strong>10:00 a 23:00</p>
                      <p class="q-mt-md"><strong>Cierre de cocina:</strong>30 min antes del cierre general.</p>
                      <hr class="hr_restaurante">

                    <ul class="wrp_actions_center_restaurante">
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Carta</strong>
                            </li>
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Políticas</strong>
                            </li>
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Reserva</strong>
                            </li>
                        </ul>
                  </td>
              </tr>
          </table>
        </div>
    </div>
    <a name="uno" id="pub"></a>
    <div class="q-py-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_pelu">
              <tr>
                  <td>
                      <h6 class="peluqueria q-mt-none">PUB</h6>
                      <p class="q-mt-md"><strong>Martes a sábado:</strong>10:00 a 23:00</p>
                      <p class="q-mt-md"><strong>Domingos y feriados:</strong>10:00 a 23:00</p>
                      <p class="q-mt-md"><strong>Cierre de cocina:</strong>30 min antes del cierre general.</p>
                      <hr class="hr_restaurante">

                    <ul class="wrp_actions_center_restaurante">
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Carta</strong>
                            </li>
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Políticas</strong>
                            </li>
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Reserva</strong>
                            </li>
                        </ul>
                  </td>
                  <td>
                      <img src="../../assets/HazteSocio/socio02.png" />
                  </td>
              </tr>
          </table>
        </div>
    </div>
     <a name="tres" id="sports"></a>
    <div class="q-py-md all_width gris_home wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_pelu">
              <tr>
                  <td>
                      <img src="../../assets/HazteSocio/socio02.png" />
                  </td>
                  <td>
                      <h6 class="peluqueria q-mt-none">Sports Café</h6>
                      <p class="q-mt-md"><strong>Martes a sábado:</strong>10:00 a 23:00</p>
                      <p class="q-mt-md"><strong>Domingos y feriados:</strong>10:00 a 23:00</p>
                      <p class="q-mt-md"><strong>Cierre de cocina:</strong>30 min antes del cierre general.</p>
                      <hr class="hr_restaurante">

                    <ul class="wrp_actions_center_restaurante">
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Carta</strong>
                            </li>
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Políticas</strong>
                            </li>
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Reserva</strong>
                            </li>
                        </ul>
                  </td>
              </tr>
          </table>
        </div>
    </div>
    <a name="cuatro" id="pasada"></a>
    <div class="q-py-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_pelu">
              <tr>
                  <td>
                      <h6 class="peluqueria q-mt-none">Pasada de Golf</h6>
                      <p class="q-mt-md"><strong>Martes a sábado:</strong>10:00 a 23:00</p>
                      <p class="q-mt-md"><strong>Domingos y feriados:</strong>10:00 a 23:00</p>
                      <p class="q-mt-md"><strong>Cierre de cocina:</strong>30 min antes del cierre general.</p>
                      <hr class="hr_restaurante">

                    <ul class="wrp_actions_center_restaurante">
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Carta</strong>
                            </li>
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Políticas</strong>
                            </li>
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Reserva</strong>
                            </li>
                        </ul>
                  </td>
                  <td>
                      <img src="../../assets/HazteSocio/socio02.png" />
                  </td>
              </tr>
          </table>
        </div>
    </div>
    <a name="cinco" id="gazebo"></a>
   <div class="q-py-md all_width gris_home wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_pelu">
              <tr>
                  <td>
                      <img src="../../assets/HazteSocio/socio02.png" />
                  </td>
                  <td>
                      <h6 class="peluqueria q-mt-none">Gazebo</h6>
                      <p class="q-mt-md"><strong>Martes a sábado:</strong>10:00 a 23:00</p>
                      <p class="q-mt-md"><strong>Domingos y feriados:</strong>10:00 a 23:00</p>
                      <p class="q-mt-md"><strong>Cierre de cocina:</strong>30 min antes del cierre general.</p>
                      <hr class="hr_restaurante">

                    <ul class="wrp_actions_center_restaurante">
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Carta</strong>
                            </li>
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Políticas</strong>
                            </li>
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Reserva</strong>
                            </li>
                        </ul>
                  </td>
              </tr>
          </table>
        </div>
    </div>
    <a name="seis" id="work"></a>
    <div class="q-py-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_pelu">
              <tr>
                  <td>
                      <h6 class="peluqueria q-mt-none">Co - Work</h6>
                      <p class="q-mt-md"><strong>Martes a sábado:</strong>10:00 a 23:00</p>
                      <p class="q-mt-md"><strong>Domingos y feriados:</strong>10:00 a 23:00</p>
                      <p class="q-mt-md"><strong>Cierre de cocina:</strong>30 min antes del cierre general.</p>
                      <hr class="hr_restaurante">

                    <ul class="wrp_actions_center_restaurante">
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Carta</strong>
                            </li>
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Políticas</strong>
                            </li>
                            <li>
                                <img src="../../assets/MiClub/i-gps.svg">
                                <strong>Reserva</strong>
                            </li>
                        </ul>
                  </td>
                  <td>
                      <img src="../../assets/HazteSocio/socio02.png" />
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
  name: 'Restaurantes',
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
