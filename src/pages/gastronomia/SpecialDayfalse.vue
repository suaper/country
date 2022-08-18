<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
    <Menugastronomia currentItem="/gastronomia/special-day"/>
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
            <div class="center text-center q-my-lg titulos">Special Days</div>
            <p class="intro text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget posuere nisl. Fusce tincidunt massa pulvinar est lobortis, at pellentesque  massa pulvinar est loborti ante accumsan. Aenean condimentum neque a libero sollicitudin, a pretium massa auctor.</p>
        </div>
    </div>

    <div class="q-py-none all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
        <div class="text-left q-mb-none q-mt-xl titulos">Próximos Eventos</div>
            <div class="wrp_gallery_beneficios">
                <q-carousel
                v-model="slidecontent"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="primary"
                padding
                arrows
                height="300px"
                class="galeria_beneficios"
                >
                <q-carousel-slide :name="1" class="column no-wrap">
                    <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                        <div class="treintaydos_general">
                            <table class="galeri_event">
                                <tr class="th_top">
                                    <th class="fecha" >DD Mes/AAAA</th>
                                    <th class="hora" >13:30 p.m.</th>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <h5 class="name_event">Nombre del Evento</h5>
                                        <p class="desc_event">Descripción breve descripción breve descripción breve descripción breve.</p>
                                        <q-btn class="text_azul centrar bg_white btn_centrar" label="Ver más" icon-right="arrow_right_alt"/>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="treintaydos_general">
                            <table class="galeri_event">
                                <tr class="th_top">
                                    <th class="fecha" >DD Mes/AAAA</th>
                                    <th class="hora" >13:30 p.m.</th>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <h5 class="name_event">Nombre del Evento</h5>
                                        <p class="desc_event">Descripción breve descripción breve descripción breve descripción breve.</p>
                                        <q-btn class="text_azul centrar bg_white btn_centrar" label="Ver más" icon-right="arrow_right_alt"/>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="treintaydos_general">
                            <table class="galeri_event">
                                <tr class="th_top">
                                    <th class="fecha" >DD Mes/AAAA</th>
                                    <th class="hora" >13:30 p.m.</th>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <h5 class="name_event">Nombre del Evento</h5>
                                        <p class="desc_event">Descripción breve descripción breve descripción breve descripción breve.</p>
                                        <q-btn class="text_azul centrar bg_white btn_centrar" label="Ver más" icon-right="arrow_right_alt"/>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </q-carousel-slide>
                <q-carousel-slide  :name="2" class="column no-wrap">
                    <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                        <div class="treintaydos_general">
                            <table class="galeri_event">
                                <tr class="th_top">
                                    <th class="fecha" >DD Mes/AAAA</th>
                                    <th class="hora" >13:30 p.m.</th>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <h5 class="name_event">Nombre del Evento</h5>
                                        <p class="desc_event">Descripción breve descripción breve descripción breve descripción breve.</p>
                                        <q-btn class="text_azul centrar bg_white btn_centrar" label="Ver más" icon-right="arrow_right_alt"/>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="treintaydos_general">
                            <table class="galeri_event">
                                <tr class="th_top">
                                    <th class="fecha" >DD Mes/AAAA</th>
                                    <th class="hora" >13:30 p.m.</th>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <h5 class="name_event">Nombre del Evento</h5>
                                        <p class="desc_event">Descripción breve descripción breve descripción breve descripción breve.</p>
                                        <q-btn class="text_azul centrar bg_white btn_centrar" label="Ver más" icon-right="arrow_right_alt"/>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="treintaydos_general">
                            <table class="galeri_event">
                                <tr class="th_top">
                                    <th class="fecha" >DD Mes/AAAA</th>
                                    <th class="hora" >13:30 p.m.</th>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <h5 class="name_event">Nombre del Evento</h5>
                                        <p class="desc_event">Descripción breve descripción breve descripción breve descripción breve.</p>
                                        <q-btn class="text_azul centrar bg_white btn_centrar" label="Ver más" icon-right="arrow_right_alt"/>
                                    </td>
                                </tr>
                            </table>
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

    <div class="q-py-xl all_width gris_home wrp_club hazte_socio">
        <div class="centrar w_1200">
        <div class="center text-center q-mb-lg titulos">Momentos</div>
        <hr class="hr_amarillo">
          <table class="contenido_fitness q-my-md">
              <tr>
                  <td>
                      <h6 class="title_text">Happy Hour</h6>
                      <p>Nulla eget posuere nisl. Fusce tincidunt massa pulvinar est lobortis, at pellentesque  massa pulvinar est loborti ante accumsan.</p>
                      <p class="q-mt-md"><strong>Martes a sábado:</strong>10:00 a 23:00</p>

                      <p class="q-mt-md"><strong>Domingos y feriados:</strong>10:00 a 20:00</p>

                      <q-btn outline class="azul q-my-md centrar bg_white_i" label="Reserva aquí" icon-right="arrow_right_alt"/>
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
                      <h6 class="title_text">Sunset</h6>
                      <p>Nulla eget posuere nisl. Fusce tincidunt massa pulvinar est lobortis, at pellentesque  massa pulvinar est loborti ante accumsan.</p>
                      <p class="q-mt-md"><strong>Martes a sábado:</strong>10:00 a 23:00</p>

                      <p class="q-mt-md"><strong>Domingos y feriados:</strong>10:00 a 20:00</p>

                      <q-btn outline class="azul q-my-md centrar bg_white_i" label="Reserva aquí" icon-right="arrow_right_alt"/>
                  </td>
              </tr>
          </table>
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
            <div class="row_wrap no-wrap flex justify-start">
                <h3 class="q-my-none">Multimedia</h3>
                <q-btn class="q-ml-lg" outline color="indigo-10" icon-right="east" label="Ver más" />
            </div>
            <div class="row_wrap no-wrap flex justify-between fsecond_row_home">
                <div class="q-py-md">
                <table class="esquma_inferior" v-if="multimediaHome.length">
                    <tr>
                    <td class="tg-0pky" rowspan="2">
                        <a href="#" @click="openItem(multimediaHome[4])"><img class="q-mx-none" alt="img1" :src="urlSite + multimediaHome[4].field_galeria_home"></a>
                    </td>
                    <td class="tg-0pky"><a href="#" @click="openItem(multimediaHome[2])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[2].field_galeria_home"></a></td>
                    <td class="tg-0pky" rowspan="2"><a href="#" @click="openItem(multimediaHome[1])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[1].field_galeria_home"></a></td>
                    <td class="tg-0pky" rowspan="2"><a href="#" @click="openItem(multimediaHome[0])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[0].field_galeria_home"></a></td>
                    </tr>
                    <tr>
                    <td class="tg-0pky"><a href="#" @click="openItem(multimediaHome[0])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[3].field_galeria_home"></a></td>
                    </tr>
                </table>
                </div>
            </div>
        </div>
    </div>
    <div class="q-py-xl all_width gris_home wrp_club">
        <div class="centrar w_1200 flex justify-between items-center">
            <h4 class="subtitle sin_margen">Contáctanos</h4>
            <ul class="contacto_footer">
                <li class="mail">
                    <img src="../../assets/HazteSocio/i-correo.svg" />
                    <span>mvaldivia@pwcc.cl</span>
                </li>
                <li class="tel">
                    <img src="../../assets/HazteSocio/i-phone.svg" />
                    <span>+56 9 98215362</span>
                </li>
                <li class="tel">
                    <img src="../../assets/HazteSocio/i-phone.svg" />
                    <span>+56 2 2757 5700 </span>
                </li>
            </ul>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menugastronomia from 'pages/submenus/Menugastronomia'
import configServices from '../../services/config'

export default {
  name: 'Specialday',
  components: {
    Menugastronomia
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {},
      urlSite: 'https://obt3.cl/',
      multimediaHome: [],
      pop_consultar: false,
      slidecontent: 1
    }
  },
  created () {
    this.getMultimediaHome()
  },
  methods: {
    getMultimediaHome () {
      var _this = this
      configServices.loadData(this, 'multimedia-home/json', {
        callBack: (data) => {
          for (const item in data) {
            _this.multimediaHome.push(data[item])
          }
          _this.$q.loading.hide()
        }
      })
    },
    openItem (multimedia) {
      if (multimedia.field_tipo_de_multimedia === 'Imagen') {
        this.$router.push('/multimedia/' + multimedia.field_multimedia_enlace)
      } else {
        var currentVideo = multimedia.field_video_youtube.split('=')
        this.currentVideo = currentVideo[1]
        this.video = true
      }
    }
  }
}
</script>
