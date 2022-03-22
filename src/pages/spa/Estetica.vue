<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
    <Menuspa currentItem="/spa/estetica"/>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
      >
        <q-carousel-slide v-for="(banner, key) in info.field_slider_home" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Peluquería</div>
            <p class="intro text-center" v-html="info.body[0].value"></p>
        </div>
        <ul class="wrp_actions_center_peluqueria">
            <li>
                <a href="#" icon-right="arrow_right_alt">Masajes</a>
            </li>
            <li>
                <a href="#" icon-right="arrow_right_alt">Depilación</a>
            </li>
            <li>
                <a href="#" icon-right="arrow_right_alt">Cosmetología</a>
            </li>
            <li>
                <a href="#" icon-right="arrow_right_alt">Manicure</a>
            </li>
            <li>
                <a href="#" icon-right="arrow_right_alt">Pedicure</a>
            </li>
        </ul>
    </div>

    <div class="q-py-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_pelu">
              <tr>
                  <td>
                    <h6 class="peluqueria q-mt-none">Masajes</h6>
                    <table class="datos_peluqueria">
                        <tr>
                            <th>Peluquería</th>
                            <th>Tiempo</th>
                            <th>Precio</th>
                        </tr>
                        <tr>
                            <td>Reductor</td>
                            <td></td>
                            <td>$2.000 </td>
                        </tr>
                        <tr>
                            <td class="sin_borde">Relajación</td>
                            <td>45 Minutos</td>
                            <td>$25.000 </td>
                        </tr>
                        <tr>
                            <td class="borde"></td>
                            <td>60 Minutos</td>
                            <td>$30.000 </td>
                        </tr>

                        <tr>
                            <td class="sin_borde">Descontracturante</td>
                            <td>45 Minutos</td>
                            <td>$25.000 </td>
                        </tr>
                        <tr>
                            <td class="borde"></td>
                            <td>60 Minutos</td>
                            <td>$30.000 </td>
                        </tr>

                        <tr>
                            <td class="sin_borde">Descontracturante con toallas calientes</td>
                            <td>45 Minutos</td>
                            <td>$25.000 </td>
                        </tr>
                        <tr>
                            <td class="borde"></td>
                            <td>60 Minutos</td>
                            <td>$30.000 </td>
                        </tr>

                        <tr>
                            <td class="sin_borde">Drenaje Linfático</td>
                            <td>45 Minutos</td>
                            <td>$25.000 </td>
                        </tr>
                        <tr>
                            <td class="borde"></td>
                            <td>60 Minutos</td>
                            <td>$30.000 </td>
                        </tr>

                        <tr>
                            <td class="sin_borde">Piedras Calientes</td>
                            <td>45 Minutos</td>
                            <td>$25.000 </td>
                        </tr>
                        <tr>
                            <td class="borde"></td>
                            <td>60 Minutos</td>
                            <td>$30.000 </td>
                        </tr>
                        <tr>
                            <td>Masaje Spa Doble · Terapia de parejas</td>
                            <td>90 Minutos</td>
                            <td>$90.000 </td>
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
        <h6 class="peluqueria q-mt-none">Depilación</h6>
          <table class="contenido_pelu">
              <tr>
                  <td>
                      <img src="../../assets/HazteSocio/socio02.png" />
                  </td>
                  <td>
                    <table class="datos_peluqueria">
                        <tr>
                            <th>Zona</th>
                            <th>Precio</th>
                        </tr>
                        <tr>
                            <td>Completo con rebaje simple</td>
                            <td>$2.000 </td>
                        </tr>
                        <tr>
                            <td>Media pierna</td>
                            <td>$3.000 </td>
                        </tr>

                        <tr>
                            <td>Pierna completa</td>
                            <td>$10.000 </td>
                        </tr>

                        <tr>
                            <td>Axila </td>
                            <td>$5.000 </td>
                        </tr>
                        <tr>
                            <td>Rebaje</td>
                            <td>$4.000 | $8.000 | $12.000</td>
                        </tr>

                        <tr>
                            <td>Brazos</td>
                            <td>$5.000 | $10.000</td>
                        </tr>
                        <tr>
                            <td>Depilación completa largo </td>
                            <td>$5.000 | $10.000</td>
                        </tr>
                        <tr>
                            <td>Espalda </td>
                            <td>$5.000 </td>
                        </tr>
                        <tr>
                            <td>Abdomen </td>
                            <td>$5.000 </td>
                        </tr>
                        <tr>
                            <td>Glúteos </td>
                            <td>$5.000 </td>
                        </tr>
                    </table>
                  </td>
              </tr>
          </table>
        </div>
    </div>
    <div class="q-py-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
        <h6 class="peluqueria q-mt-none">Cosmetología</h6>
            <table class="contenido_pelu">
              <tr>
                  <td>
                    <table class="datos_peluqueria">
                        <tr>
                            <th>Procedimiento</th>
                            <th>Precio</th>
                        </tr>
                        <tr>
                            <td>Completo con rebaje simple</td>
                            <td>$2.000 </td>
                        </tr>
                        <tr>
                            <td>Media pierna</td>
                            <td>$3.000 </td>
                        </tr>

                        <tr>
                            <td>Pierna completa</td>
                            <td>$10.000 </td>
                        </tr>

                        <tr>
                            <td>Axila </td>
                            <td>$5.000 </td>
                        </tr>
                        <tr>
                            <td>Rebaje</td>
                            <td>$4.000 | $8.000 | $12.000</td>
                        </tr>

                        <tr>
                            <td>Brazos</td>
                            <td>$5.000 | $10.000</td>
                        </tr>
                        <tr>
                            <td>Depilación completa largo </td>
                            <td>$5.000 | $10.000</td>
                        </tr>
                        <tr>
                            <td>Espalda </td>
                            <td>$5.000 </td>
                        </tr>
                        <tr>
                            <td>Abdomen </td>
                            <td>$5.000 </td>
                        </tr>
                        <tr>
                            <td>Glúteos </td>
                            <td>$5.000 </td>
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
        <h6 class="peluqueria q-mt-none">Manicure</h6>
            <table class="contenido_pelu">
              <tr>
                  <td>
                      <img src="../../assets/HazteSocio/socio02.png" />
                  </td>
                  <td>
                    <table class="datos_peluqueria">
                        <tr>
                            <th>Procedimiento</th>
                            <th>Precio</th>
                        </tr>
                        <tr>
                            <td>Completo con rebaje simple</td>
                            <td>$2.000 </td>
                        </tr>
                        <tr>
                            <td>Media pierna</td>
                            <td>$3.000 </td>
                        </tr>

                        <tr>
                            <td>Pierna completa</td>
                            <td>$10.000 </td>
                        </tr>

                        <tr>
                            <td>Axila </td>
                            <td>$5.000 </td>
                        </tr>
                        <tr>
                            <td>Rebaje</td>
                            <td>$4.000 | $8.000 | $12.000</td>
                        </tr>

                        <tr>
                            <td>Brazos</td>
                            <td>$5.000 | $10.000</td>
                        </tr>
                        <tr>
                            <td>Depilación completa largo </td>
                            <td>$5.000 | $10.000</td>
                        </tr>
                        <tr>
                            <td>Espalda </td>
                            <td>$5.000 </td>
                        </tr>
                        <tr>
                            <td>Abdomen </td>
                            <td>$5.000 </td>
                        </tr>
                        <tr>
                            <td>Glúteos </td>
                            <td>$5.000 </td>
                        </tr>
                    </table>
                  </td>
              </tr>
          </table>
        </div>
    </div>
   <div class="q-py-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
        <h6 class="peluqueria q-mt-none">Pedicure</h6>
            <table class="contenido_pelu">
              <tr>
                  <td>
                    <table class="datos_peluqueria">
                        <tr>
                            <th>Procedimiento</th>
                            <th>Precio</th>
                        </tr>
                        <tr>
                            <td>Completo con rebaje simple</td>
                            <td>$2.000 </td>
                        </tr>
                        <tr>
                            <td>Media pierna</td>
                            <td>$3.000 </td>
                        </tr>

                        <tr>
                            <td>Pierna completa</td>
                            <td>$10.000 </td>
                        </tr>

                        <tr>
                            <td>Axila </td>
                            <td>$5.000 </td>
                        </tr>
                        <tr>
                            <td>Rebaje</td>
                            <td>$4.000 | $8.000 | $12.000</td>
                        </tr>

                        <tr>
                            <td>Brazos</td>
                            <td>$5.000 | $10.000</td>
                        </tr>
                        <tr>
                            <td>Depilación completa largo </td>
                            <td>$5.000 | $10.000</td>
                        </tr>
                        <tr>
                            <td>Espalda </td>
                            <td>$5.000 </td>
                        </tr>
                        <tr>
                            <td>Abdomen </td>
                            <td>$5.000 </td>
                        </tr>
                        <tr>
                            <td>Glúteos </td>
                            <td>$5.000 </td>
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
  </q-page>
</template>

<script>
import Menuspa from 'pages/submenus/Menuspa'
import configServices from '../../services/config'

export default {
  name: 'Estetica',
  components: {
    Menuspa
  },
  data () {
    return {
      sliders: true,
      slide: 0,
      info: {
        body: [
          { value: '' }
        ]
      },
      pop_consultar: false
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    goToAnchor (e, item) {
      e.preventDefault()
      const el = document.querySelector(item)
      el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/300?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
