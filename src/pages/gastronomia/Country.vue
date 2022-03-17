<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
    <Menugastronomia/>
    <div class="q-pt-xl all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Country al día</div>
        </div>
    </div>

    <div class="q-py-md all_width gris_home wrp_club hazte_socio">
        <div class="centrar q-pb-xl  w_1200">
            <div class="wrp_gallery_country">
                <q-carousel
                v-model="slidecontent"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                navigation
                animated
                control-color="primary"
                padding
                arrows
                height="383px"
                class="galeria_country"
                >
                <q-carousel-slide :name="1" class="column no-wrap">
                    <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                        <div class="country_slider">
                            <div class="item_galeria">
                                <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                <div class="info_bottom">
                                    <span class="fecha" >DD Mes/AAAA</span>
                                    <p class="desc">Descripción breve descripción.</p>
                                    <q-btn class="text_azul centrar bg_white btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                </div>
                            </div>
                        </div>
                        <div class="country_slider">
                            <div class="item_galeria">
                                <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                <div class="info_bottom">
                                    <span class="fecha" >DD Mes/AAAA</span>
                                    <p class="desc">Descripción breve descripción.</p>
                                    <q-btn class="text_azul centrar bg_white btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                </div>
                            </div>
                        </div>
                        <div class="country_slider">
                            <div class="item_galeria">
                                <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                <div class="info_bottom">
                                    <span class="fecha" >DD Mes/AAAA</span>
                                    <p class="desc">Descripción breve descripción.</p>
                                    <q-btn class="text_azul centrar bg_white btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                </div>
                            </div>
                        </div>
                        <div class="country_slider">
                            <div class="item_galeria">
                                <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                <div class="info_bottom">
                                    <span class="fecha" >DD Mes/AAAA</span>
                                    <p class="desc">Descripción breve descripción.</p>
                                    <q-btn class="text_azul centrar bg_white btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                </div>
                            </div>
                        </div>
                        <div class="country_slider">
                            <div class="item_galeria">
                                <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                <div class="info_bottom">
                                    <span class="fecha" >DD Mes/AAAA</span>
                                    <p class="desc">Descripción breve descripción.</p>
                                    <q-btn class="text_azul centrar bg_white btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" class="column no-wrap">
                    <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                        <div class="country_slider">
                            <div class="item_galeria">
                                <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                <div class="info_bottom">
                                    <span class="fecha" >DD Mes/AAAA</span>
                                    <p class="desc">Descripción breve descripción.</p>
                                    <q-btn class="text_azul centrar bg_white btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                </div>
                            </div>
                        </div>
                        <div class="country_slider">
                            <div class="item_galeria">
                                <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                <div class="info_bottom">
                                    <span class="fecha" >DD Mes/AAAA</span>
                                    <p class="desc">Descripción breve descripción.</p>
                                    <q-btn class="text_azul centrar bg_white btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                </div>
                            </div>
                        </div>
                        <div class="country_slider">
                            <div class="item_galeria">
                                <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                <div class="info_bottom">
                                    <span class="fecha" >DD Mes/AAAA</span>
                                    <p class="desc">Descripción breve descripción.</p>
                                    <q-btn class="text_azul centrar bg_white btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                </div>
                            </div>
                        </div>
                        <div class="country_slider">
                            <div class="item_galeria">
                                <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                <div class="info_bottom">
                                    <span class="fecha" >DD Mes/AAAA</span>
                                    <p class="desc">Descripción breve descripción.</p>
                                    <q-btn class="text_azul centrar bg_white btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                </div>
                            </div>
                        </div>
                        <div class="country_slider">
                            <div class="item_galeria">
                                <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                <div class="info_bottom">
                                    <span class="fecha" >DD Mes/AAAA</span>
                                    <p class="desc">Descripción breve descripción.</p>
                                    <q-btn class="text_azul centrar bg_white btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </q-carousel-slide>
                </q-carousel>
                <div class="row justify-center botones">
                    <q-btn-toggle
                        glossy
                        v-model="slidecontent"
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="q-py-xl all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_fitness">
              <tr>
                  <td>
                      <h6 class="title_text">Entrevistas</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget posuere nisl. Fusce tincidunt massa pulvinar est lobortis, at pellentesque ante accumsan. Aenean condimentum neque a libero sollicitudin, a pretium massa auctor.</p>
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
  name: 'Country',
  components: {
    Menugastronomia
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {},
      pop_consultar: false,
      slidecontent: 1
    }
  }
}
</script>
