<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menucultura/>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
        autoplay="autoplay"
      >
        <q-carousel-slide :name="1" img-src="../../assets/Home/banner-home.png" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Biblioteca</div>
            <table class="des_biblioteca">
                <tr>
                    <td>
                        <p><strong>Martes a sábado:</strong> 10:00 a 23:00 </p>
                        <p><strong>Domingos y feriados:</strong>10:00 a 20:00 </p>
                    </td>
                    <td>
                        <p class="intro text-center">
                            En el corazón del Club House se encuentra el tradicional living que alberga nuestra biblioteca con más de xx ejemplares de libros en español e inglés. Para arrendar un libro solo debes ser socio del club y nuestra bibliotecaria Raquel Celis te puede recomendar de acuerdo a tus gustos el mejor libro.
                        </p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div class="franja_azul full-width row wrap justify-center items-center content-center bg_azul">
        <h5 class="text-white">Buscador de Libros</h5>
          <q-btn outline click="pop_form_socio = true" class="btn_bg_beige" label="Ver Libros Disponibles" icon-right="arrow_right_alt"/>
    </div>

    <div class="q-pb-xl all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
        <div class="text-left q-mb-none q-mt-xl titulos">Los más leídos</div>
            <div class="wrp_gallery_biblioteca q-mt-md">
                <q-carousel
                v-model="slidecontent"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="primary"
                padding
                arrows
                height="320px"
                class="galeria_beneficios"
                >
                <q-carousel-slide :name="1" class="column no-wrap">
                    <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                        <div class="treintaydos_general">
                            <table class="galeri_event">
                                <tr>
                                    <td>
                                        <img class="img_biblioteca" src="../../assets/HazteSocio/socio01.png" />
                                        <h5 class="name_event">Nombre del Libro</h5>
                                        <p class="desc_event text-center">Sinopsis corta, breve texto que describa el género.</p>
                                        <q-btn class="btn_bg_beige centrar  btn_centrar" label="Online"/>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="treintaydos_general">
                            <table class="galeri_event">
                                <tr>
                                    <td>
                                        <img class="img_biblioteca" src="../../assets/HazteSocio/socio01.png" />
                                        <h5 class="name_event">Nombre del Libro</h5>
                                        <p class="desc_event text-center">Sinopsis corta, breve texto que describa el género.</p>
                                        <q-btn class="btn_bg_beige centrar  btn_centrar" label="Online"/>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="treintaydos_general">
                            <table class="galeri_event">
                                <tr>
                                    <td>
                                        <img class="img_biblioteca" src="../../assets/HazteSocio/socio01.png" />
                                        <h5 class="name_event">Nombre del Libro</h5>
                                        <p class="desc_event">Sinopsis corta, breve texto que describa el género.</p>
                                        <q-btn class="btn_bg_beige centrar  btn_centrar" label="Online"/>
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
                                <tr>
                                    <td>
                                        <img class="img_biblioteca" src="../../assets/HazteSocio/socio01.png" />
                                        <h5 class="name_event">Nombre del Libro</h5>
                                        <p class="desc_event">Sinopsis corta, breve texto que describa el género.</p>
                                        <q-btn class="btn_bg_beige centrar  btn_centrar" label="Online"/>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="treintaydos_general">
                            <table class="galeri_event">
                                <tr>
                                    <td>
                                        <img class="img_biblioteca" src="../../assets/HazteSocio/socio01.png" />
                                        <h5 class="name_event">Nombre del Libro</h5>
                                        <p class="desc_event text-center">Sinopsis corta, breve texto que describa el género.</p>
                                        <q-btn class="btn_bg_beige centrar  btn_centrar" label="Online"/>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="treintaydos_general">
                            <table class="galeri_event">
                                 <tr>
                                    <td>
                                        <img class="img_biblioteca" src="../../assets/HazteSocio/socio01.png" />
                                        <h5 class="name_event">Nombre del Libro</h5>
                                        <p class="desc_event text-center">Sinopsis corta, breve texto que describa el género.</p>
                                        <q-btn class="btn_bg_beige centrar  btn_centrar" label="Online"/>
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
    <div class="q-pb-xl all_width bg_gris wrp_club hazte_socio">
        <div class="centrar w_1200">
        <div class="text-left q-mb-none q-mt-xl titulos">Literatura Infantil</div>
            <div class="wrp_gallery_biblioteca q-mt-md">
                <q-carousel
                v-model="slidecontent"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="primary"
                padding
                arrows
                height="320px"
                class="galeria_beneficios"
                >
                <q-carousel-slide :name="1" class="column no-wrap">
                    <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                        <div class="treintaydos_general">
                            <table class="galeri_event">
                                <tr>
                                    <td>
                                        <img class="img_biblioteca" src="../../assets/HazteSocio/socio01.png" />
                                        <h5 class="name_event">Nombre del Libro</h5>
                                        <p class="desc_event text-center">Sinopsis corta, breve texto que describa el género.</p>
                                        <q-btn class="btn_bg_beige centrar  btn_centrar" label="Online"/>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="treintaydos_general">
                            <table class="galeri_event">
                                <tr>
                                    <td>
                                        <img class="img_biblioteca" src="../../assets/HazteSocio/socio01.png" />
                                        <h5 class="name_event">Nombre del Libro</h5>
                                        <p class="desc_event text-center">Sinopsis corta, breve texto que describa el género.</p>
                                        <q-btn class="btn_bg_beige centrar  btn_centrar" label="Online"/>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="treintaydos_general">
                            <table class="galeri_event">
                                <tr>
                                    <td>
                                        <img class="img_biblioteca" src="../../assets/HazteSocio/socio01.png" />
                                        <h5 class="name_event">Nombre del Libro</h5>
                                        <p class="desc_event">Sinopsis corta, breve texto que describa el género.</p>
                                        <q-btn class="btn_bg_beige centrar  btn_centrar" label="Online"/>
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
                                <tr>
                                    <td>
                                        <img class="img_biblioteca" src="../../assets/HazteSocio/socio01.png" />
                                        <h5 class="name_event">Nombre del Libro</h5>
                                        <p class="desc_event">Sinopsis corta, breve texto que describa el género.</p>
                                        <q-btn class="btn_bg_beige centrar  btn_centrar" label="Online"/>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="treintaydos_general">
                            <table class="galeri_event">
                                <tr>
                                    <td>
                                        <img class="img_biblioteca" src="../../assets/HazteSocio/socio01.png" />
                                        <h5 class="name_event">Nombre del Libro</h5>
                                        <p class="desc_event text-center">Sinopsis corta, breve texto que describa el género.</p>
                                        <q-btn class="btn_bg_beige centrar  btn_centrar" label="Online"/>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="treintaydos_general">
                            <table class="galeri_event">
                                 <tr>
                                    <td>
                                        <img class="img_biblioteca" src="../../assets/HazteSocio/socio01.png" />
                                        <h5 class="name_event">Nombre del Libro</h5>
                                        <p class="desc_event text-center">Sinopsis corta, breve texto que describa el género.</p>
                                        <q-btn class="btn_bg_beige centrar  btn_centrar" label="Online"/>
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

    <div class="q-py-xl all_width gris_home wrp_club wrp_staff_biblioteca">
        <div class="centrar w_1200 items-center">
            <h4 class="subtitle sin_margen">Staff</h4>
            <ul class="contacto_footer w_1200 flex justify-between items-center">
                <li>
                    <div class="staff_biblioteca">
                        <table class="datos_staff_biblioteca">
                            <tr>
                                <td>
                                    <img class="raius" src="../../assets/HazteSocio/socio01.png" />
                                </td>
                                <td>
                                    <p class="text-center"><strong> Nombres y apellidos  </strong></p>
                                    <hr class="hr_amarillo noventaycinco">
                                    <p class="text-center"><strong> Cargo </strong></p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </li>
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
  </q-page>
</template>

<script>
import Menucultura from 'pages/submenus/Menucultura'
import configServices from '../../services/config'

export default {
  name: 'Biblioteca',
  components: {
    Menucultura
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      slidecontent: 1,
      info: {},
      urlSite: 'https://pwccdev.mkbk.digital/',
      multimediaHome: [],
      pop_reservar_spa: false
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
          console.log(data)
          for (const item in data) {
            _this.multimediaHome.push(data[item])
          }
          _this.$q.loading.hide()
        }
      })
    },
    openItem (multimedia) {
      console.log(multimedia)
      if (multimedia.field_tipo_de_multimedia === 'Imagen') {
        this.$router.push('/multimedia/' + multimedia.field_multimedia_enlace)
      } else {
        var currentVideo = multimedia.field_video_youtube.split('=')
        this.currentVideo = currentVideo[0]
        this.video = true
      }
    }
  }
}
</script>
