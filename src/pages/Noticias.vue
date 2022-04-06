<template>
  <q-page class="flex flex-center view_quienes_somos view_danza">
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Noticias</div>
        </div>
        <div class="centrar w_1200">
        <ul class="wrp_actions_center_peluqueria menos_p">
            <li>
                <a href="#" icon-right="arrow_right_alt">Todas las noticias</a>
            </li>
            <li>
                <a href="#" icon-right="arrow_right_alt">Mi Club</a>
            </li>
            <li>
                <a href="#" icon-right="arrow_right_alt">Hazte Socio</a>
            </li>
            <li>
                <a href="#" icon-right="arrow_right_alt">Eventos</a>
            </li>
            <li>
                <a href="#" icon-right="arrow_right_alt">Deportes</a>
            </li>
            <li>
                <a href="#" icon-right="arrow_right_alt">Spa & Wellness</a>
            </li>
            <li>
                <a href="#" icon-right="arrow_right_alt">Vivamos el Club</a>
            </li>
            <li>
                <a href="#" icon-right="arrow_right_alt">Gastronomía</a>
            </li>
        </ul>
            <div class="q-py-md all_width gris_home wrp_club hazte_socio">
                <div class="centrar q-pb-xl  w_1200">
                    <div class="wrp_gallery_noticias">
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
                        height="400px"
                        class="galeria_noticias"
                        >
                        <q-carousel-slide :name="1" class="column no-wrap">
                            <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                                <div class="noticia_slider">
                                    <div class="item_galeria">
                                        <img src="../assets/Gastronomia/i_contry_f.jpeg" />
                                        <div class="info_bottom">
                                            <span class="fecha" >DD Mes/AAAA</span>
                                            <p class="desc">Descripción breve descripción.</p>
                                            <q-btn class="text_azul centrar bg_white btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="noticia_slider">
                                    <div class="item_galeria">
                                        <img src="../assets/Gastronomia/i_contry_f.jpeg" />
                                        <div class="info_bottom">
                                            <span class="fecha" >DD Mes/AAAA</span>
                                            <p class="desc">Descripción breve descripción.</p>
                                            <q-btn class="text_azul centrar bg_white btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="noticia_slider">
                                    <div class="item_galeria">
                                        <img src="../assets/Gastronomia/i_contry_f.jpeg" />
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
                                <div class="noticia_slider">
                                    <div class="item_galeria">
                                        <img src="../assets/Gastronomia/i_contry_f.jpeg" />
                                        <div class="info_bottom">
                                            <span class="fecha" >DD Mes/AAAA</span>
                                            <p class="desc">Descripción breve descripción.</p>
                                            <q-btn class="text_azul centrar bg_white btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="noticia_slider">
                                    <div class="item_galeria">
                                        <img src="../assets/Gastronomia/i_contry_f.jpeg" />
                                        <div class="info_bottom">
                                            <span class="fecha" >DD Mes/AAAA</span>
                                            <p class="desc">Descripción breve descripción.</p>
                                            <q-btn class="text_azul centrar bg_white btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="noticia_slider">
                                    <div class="item_galeria">
                                        <img src="../assets/Gastronomia/i_contry_f.jpeg" />
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
        </div>
    </div>
  </q-page>
</template>

<script>

import configServices from '../services/config'

export default {
  name: 'Noticias',
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {},
      slidecontent: 1,
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
