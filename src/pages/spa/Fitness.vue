<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
    <Menuspa currentItem="/spa/fitness"/>
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
            <div class="center text-center q-my-lg titulos">Fitness</div>
            <p class="intro text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget posuere nisl. Fusce tincidunt massa pulvinar est lobortis, at pellentesque ante accumsan. Aenean condimentum neque a libero sollicitudin, a pretium massa auctor.</p>
        </div>
        <ul class="wrp_actions_center_spa">
            <li>
                <img src="../../assets/MiClub/i-gps.svg">
                <strong>Horarios</strong>
                <a href="#" icon-right="arrow_right_alt">Ver más  <span>-></span></a>
            </li>
            <li>
                <img src="../../assets/MiClub/i-gps.svg">
                <strong>Actividades</strong>
                <a href="#" icon-right="arrow_right_alt">Ver más  <span>-></span></a>
            </li>
        </ul>
    </div>

    <div class="q-pb-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="table_fitnes">
              <tr class="sin_fondo">
                  <th class="text-right">Gimnasio</th>
                  <th class="align_center">Vs.</th>
                  <th class="text-center">Fitness Funcional</th>
              </tr>
              <tr>
                  <td class="align_right">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel gravida metus. Etiam pretium feugiat tempor. Proin consectetur accumsan nunc bibendum.
                  </td>
                  <td class="center">
                      Descripción
                  </td>
                  <td class="align_left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel gravida metus. Etiam pretium feugiat tempor. Proin consectetur accumsan nunc bibendum congue. Morbi nisi nisi.
                  </td>
              </tr>
              <tr>
                  <td class="align_right">
                    <ul>
                        <li>• Gimnasio convencional </li>
                        <li>• Máquinas </li>
                        <li>• Pesas</li>
                    </ul>
                  </td>
                  <td class="center">
                      Materiales
                  </td>
                  <td class="align_left">
                      <ul>
                          <li>• Elementos personales </li>
                          <li>• El propio peso del cuerpo </li>
                      </ul>
                  </td>
              </tr>
              <tr>
                  <td class="align_right">
                    <ul>
                        <li><strong>Jornada A.M. (6:00 - 12:00) </strong></li>
                        <li>• Camila Jurado</li>
                        <li>• Mauricio Rodríguez </li>
                        <li><strong>Jornada P.M. (12:00 - 18:00)</strong></li>
                        <li>• Andrés Guerrero</li>
                        <li>• Valentina Lizcano</li>
                    </ul>
                  </td>
                  <td class="center">
                      Profesores
                  </td>
                  <td class="align_left">
                      <ul>
                          <li><strong>Jornada A.M. (6:00 - 12:00) </strong></li>
                          <li>• Camila Jurado</li>
                          <li>• Mauricio Rodríguez </li>
                          <li><strong>Jornada P.M. (12:00 - 18:00)</strong></li>
                          <li>• Andrés Guerrero</li>
                          <li>• Valentina Lizcano</li>
                      </ul>
                  </td>
              </tr>
              <tr>
                  <td class="align_right">

                  </td>
                  <td class="center">
                      Horarios
                  </td>
                  <td class="align_left">
                      <ul>
                          <li><strong>Apertura: <span> 6:00 </span></strong></li>
                          <li><strong>Cierre: <span>18:00 </span></strong></li>
                      </ul>
                  </td>
              </tr>
          </table>
        </div>
    </div>

    <div class="q-pb-md all_width gris_home wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_fitness">
              <tr>
                  <td>
                      <h6 class="title_text">Gimnasio</h6>
                      <p>Nulla eget posuere nisl. Fusce tincidunt massa pulvinar est lobortis, at pellentesque ante accumsan.</p>
                      <p class="q-mt-md"><strong>Martes a sábado:</strong>10:00 a 23:00</p>

                      <p class="q-mt-md"><strong>Domingos y feriados:</strong>10:00 a 20:00</p>

                      <q-btn outline class="azul q-my-md centrar bg_white_i" label="Reserva" icon-right="arrow_right_alt"/>
                  </td>
                  <td>
                      <img src="../../assets/HazteSocio/socio01.png" />
                  </td>
              </tr>
          </table>
        </div>
    </div>
    <div class="q-pb-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_fitness">
              <tr>
                  <td>
                      <img src="../../assets/HazteSocio/socio02.png" />
                  </td>
                  <td>
                      <h6 class="title_text">Fitness Funcional</h6>
                      <p>Nulla eget posuere nisl. Fusce tincidunt massa pulvinar est lobortis, at pellentesque ante accumsan.</p>
                      <p class="q-mt-md"><strong>Martes a sábado:</strong>10:00 a 23:00</p>

                      <p class="q-mt-md"><strong>Domingos y feriados:</strong>10:00 a 20:00</p>
                      <q-btn outline class="azul q-my-md centrar bg_white_i" label="Reserva" icon-right="arrow_right_alt"/>
                  </td>
              </tr>
          </table>
        </div>
    </div>
    <div class="q-pb-md all_width gris_home wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_fitness">
              <tr>
                  <td>
                      <h6 class="title_text">Entrenador Personal</h6>
                      <p>Nulla eget posuere nisl. Fusce tincidunt massa pulvinar est lobortis, at pellentesque ante accumsan.</p>
                      <p class="q-mt-md"><strong>Objetivo</strong></p>

                      <p>Nulla eget posuere nisl. Fusce tincidunt massa pulvinar est lobortis, at pellentesque ante accumsan</p>

                      <q-btn outline class="azul q-my-md centrar bg_white_i" label="Reserva" icon-right="arrow_right_alt"/>
                  </td>
                  <td>
                      <img src="../../assets/HazteSocio/socio01.png" />
                  </td>
              </tr>
          </table>
        </div>
    </div>

    <div class="q-py-md all_width bg_amarillo wrp_club">
        <div class="q-py-md centrar text-center w_1200">
          <div class="row_2 fitnes_last">
              <div class="form_fitness">
                  <h6 class="title_text">Contacto</h6>
                  <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                  >
                      <q-input
                          outlined
                          v-model="name"
                          label="Nombres y Apellidos *"
                          lazy-rules
                          :rules="[ val => val && val.length > 0 || 'Please type something']"
                      />
                      <q-input
                          outlined
                          v-model="telefono"
                          label="Número de contacto *"
                      />
                      <q-input outlined v-model="email" type="Correo electrónico" label="Correo electrónico *" />
                      <q-input
                          outlined
                          v-model="telefono"
                          label="Rut *"
                      />
                      <div class="text-left">
                          <q-btn outline @click="pop_form_socio = true" class="azul q-my-md bg_white_i" label="Enviar" icon-right="arrow_right_alt"/>
                      </div>
                  </q-form>
              </div>
              <div class="staff">
              <h6 class="title_text">Entrenador Personal</h6>
                <table class="datos_staff">
                    <tr>
                        <td>
                            <img class="raius" src="../../assets/HazteSocio/socio01.png" />
                        </td>
                        <td>
                            <p>
                                David Godoy
                            </p>
                            <span class="border_40"></span>
                            <strong>Coordinador</strong>
                        </td>
                    </tr>
                </table>
                <ul class="contacto_footer">
                    <li class="mail">
                        <img src="../../assets/HazteSocio/i-correo.svg" />
                        <span>mvaldivia@pwcc.cl</span>
                    </li>
                    <li class="tel">
                        <img src="../../assets/HazteSocio/i-phone.svg" />
                        <span>+56 9 98215362</span>
                    </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
  </q-page>
</template>

<script>
import Menuspa from 'pages/submenus/Menuspa'

export default {
  name: 'Fitness',
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
