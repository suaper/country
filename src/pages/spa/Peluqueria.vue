<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
    <Menuspa/>
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
            <div class="center text-center q-my-lg titulos">Peluquería</div>
            <p class="intro text-center">Horario de atención desde las <strong>10:00</strong> a las <strong>19:00</strong> horario continuado.</p>
        </div>
        <ul class="wrp_actions_center_peluqueria">
            <li>
                <a href="#" icon-right="arrow_right_alt">Mujeres</a>
            </li>
            <li>
                <a href="#" icon-right="arrow_right_alt">Hombres</a>
            </li>
        </ul>
    </div>

    <div class="q-py-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_pelu">
              <tr>
                  <td>
                        <h6 class="peluqueria q-mt-none">Mujeres</h6>
                        <table class="datos_peluqueria">
                            <tr>
                                <th colspan="2">Peluquería</th>
                            </tr>
                            <tr>
                                <td> Lavado pelo corto </td>
                                <td>$2.000 </td>
                            </tr>
                            <tr>
                                <td> Lavado pelo largo </td>
                                <td>$3.000 </td>
                            </tr>

                            <tr>
                                <td> Corte de pelo </td>
                                <td>$10.000 </td>
                            </tr>

                            <tr>
                                <td> Recorte </td>
                                <td>$5.000 </td>
                            </tr>
                            <tr>
                                <td> Flequillo (chasquilla) </td>
                                <td>$3.000 </td>
                            </tr>

                            <tr>
                                <td> Corte de niño- niñas pequeños</td>
                                <td>$6.000</td>
                            </tr>
                        </table>

                        <table class="datos_peluqueria">
                            <tr>
                                <th colspan="2">Color / Tintura</th>
                            </tr>
                            <tr>
                                <td> Pelo corto </td>
                                <td>$2.000 </td>
                            </tr>
                            <tr>
                                <td> Pelo largo Reflejos</td>
                                <td>$3.000 </td>
                            </tr>

                            <tr>
                                <td>PReflejos </td>
                                <td>$10.000 </td>
                            </tr>
                        </table>

                        <table class="datos_peluqueria">
                            <tr>
                                <th colspan="2">Masaje capilar, crema y ampolla <br> <span class="italic">No incluye peinado</span> </th>
                            </tr>
                            <tr>
                                <td>Pelo corto y mediano </td>
                                <td>$2.000 </td>
                            </tr>
                            <tr>
                                <td> Pelo mediano a largo</td>
                                <td>$3.000 </td>
                            </tr>
                        </table>

                        <table class="datos_peluqueria">
                            <tr>
                                <th colspan="2">Peinados</th>
                            </tr>
                            <tr>
                                <td>Pelo corto, incluye lavado </td>
                                <td>$2.000 </td>
                            </tr>
                            <tr>
                                <td>Pelo largo, incluye lavado</td>
                                <td>$3.000 </td>
                            </tr>
                        </table>
                        <table class="datos_peluqueria">
                            <tr>
                                <th colspan="2">Alisado</th>
                            </tr>
                            <tr>
                                <td colspan="2">Está sujeto a evaluación de pelo, largo y cantidad.</td>
                            </tr>
                        </table>
                  </td>
                  <td>
                      <img src="../../assets/HazteSocio/socio02.png" />
                  </td>
              </tr>
          </table>
        </div>
    </div>

    <div class="q-py-md all_width gris_home wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_pelu">
              <tr>
                  <td>
                      <img src="../../assets/HazteSocio/socio02.png" />
                  </td>
                  <td>
                    <h6 class="peluqueria q-mt-none">Hombres</h6>
                    <table class="datos_peluqueria">
                        <tr>
                            <th colspan="2">Peluquería</th>
                        </tr>
                        <tr>
                            <td> Lavado pelo corto </td>
                            <td>$2.000 </td>
                        </tr>
                        <tr>
                            <td> Lavado pelo largo </td>
                            <td>$3.000 </td>
                        </tr>

                        <tr>
                            <td> Corte de pelo </td>
                            <td>$10.000 </td>
                        </tr>

                        <tr>
                            <td> Recorte </td>
                            <td>$5.000 </td>
                        </tr>
                        <tr>
                            <td> Flequillo (chasquilla) </td>
                            <td>$3.000 </td>
                        </tr>

                        <tr>
                            <td> Corte de niño- niñas pequeños</td>
                            <td>$6.000</td>
                        </tr>
                    </table>

                    <table class="datos_peluqueria">
                        <tr>
                            <th colspan="2">Color / Tintura</th>
                        </tr>
                        <tr>
                            <td> Pelo corto </td>
                            <td>$2.000 </td>
                        </tr>
                        <tr>
                            <td> Pelo largo Reflejos</td>
                            <td>$3.000 </td>
                        </tr>

                        <tr>
                            <td>PReflejos </td>
                            <td>$10.000 </td>
                        </tr>
                    </table>

                    <table class="datos_peluqueria">
                        <tr>
                            <th colspan="2">Masaje capilar, crema y ampolla <br> <span class="italic">No incluye peinado</span> </th>
                        </tr>
                        <tr>
                            <td>Pelo corto y mediano </td>
                            <td>$2.000 </td>
                        </tr>
                        <tr>
                            <td> Pelo mediano a largo</td>
                            <td>$3.000 </td>
                        </tr>
                    </table>

                    <table class="datos_peluqueria">
                        <tr>
                            <th colspan="2">Peinados</th>
                        </tr>
                        <tr>
                            <td>Pelo corto, incluye lavado </td>
                            <td>$2.000 </td>
                        </tr>
                        <tr>
                            <td>Pelo largo, incluye lavado</td>
                            <td>$3.000 </td>
                        </tr>
                    </table>
                    <table class="datos_peluqueria">
                        <tr>
                            <th colspan="2">Alisado</th>
                        </tr>
                        <tr>
                            <td colspan="2">Está sujeto a evaluación de pelo, largo y cantidad.</td>
                        </tr>
                    </table>
                  </td>
              </tr>
          </table>
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
