<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
    <Menuspa currentItem="/spa/multimedia"/>
    <div class="q-pt-xl all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Multimedia</div>
        </div>
    </div>

    <div class="q-py-xl all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar q-pb-xl  w_1200">
            <div class="cincuenta q-pd-md centrar text-center">
              <div class="center text-center titulos">Fotos</div>
            </div>
            <div class="wrp_gallery_multimedia">
                <q-carousel
                v-model="slidecontent"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="primary"
                padding
                arrows
                height="250px"
                class="galeria_multimedia"
                >
                <q-carousel-slide :name="1" class="column no-wrap">
                    <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                        <div class="multimedia_slider">
                            <div class="item_galeria">
                                <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                <div class="info_bottom">
                                    <p class="desc">Titulo</p>
                                    <q-btn class="text_white centrar btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                </div>
                            </div>
                        </div>
                        <div class="multimedia_slider">
                            <div class="item_galeria">
                                <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                <div class="info_bottom">
                                    <p class="desc">Titulo</p>
                                    <q-btn class="text_white centrar btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                </div>
                            </div>
                        </div>

                        <div class="multimedia_slider">
                            <div class="item_galeria">
                                <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                <div class="info_bottom">
                                    <p class="desc">Titulo</p>
                                    <q-btn class="text_white centrar btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" class="column no-wrap">
                    <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                        <div class="multimedia_slider">
                            <div class="item_galeria">
                                <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                <div class="info_bottom">
                                    <p class="desc">Titulo</p>
                                    <q-btn class="text_white centrar btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                </div>
                            </div>
                        </div>
                        <div class="multimedia_slider">
                            <div class="item_galeria">
                                <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                <div class="info_bottom">
                                    <p class="desc">Titulo</p>
                                    <q-btn class="text_white centrar btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                </div>
                            </div>
                        </div>

                        <div class="multimedia_slider">
                            <div class="item_galeria">
                                <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                <div class="info_bottom">
                                    <p class="desc">Titulo</p>
                                    <q-btn class="text_white centrar btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
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
                        :options="options"
                    />
                </div>
            </div>
        </div>
    </div>
    <div class="q-py-md all_width gris_home">
        <div class="w_1200 q-py-md centrar text-center">
        <div class="center text-center q-my-md titulos">Videos</div>
            <div class="wrp_gallery_video">
                <q-carousel
                v-model="slidevideo"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                navigation
                animated
                control-color="primary"
                padding
                arrows
                height="470px"
                class="galeria_video"
                >
                <q-carousel-slide :name="1" class="column no-wrap">
                    <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                        <table class="item_cien">
                            <tr>
                                <td class="first" rowspan="0">
                                    <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                    <div class="info_bottom text-center">
                                        <p class="desc">Titulo</p>
                                        <span> lorem ipsum dolor </span>
                                    </div>
                                </td>
                                <td class="othet">
                                    <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                    <div class="info_bottom text-center">
                                        <p class="desc">Titulo</p>
                                        <span> lorem ipsum dolor </span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="othet">
                                    <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                    <div class="info_bottom text-center">
                                        <p class="desc">Titulo</p>
                                        <span> lorem ipsum dolor </span>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" class="column no-wrap">
                    <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                        <table class="item_cien">
                        <tr>
                            <td class="first" rowspan="0">
                                <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                <div class="info_bottom">
                                    <p class="desc">Titulo</p>
                                    <q-btn class="text_white centrar btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                </div>
                            </td>
                            <td class="othet">
                                <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                <div class="info_bottom">
                                    <p class="desc">Titulo</p>
                                    <q-btn class="text_white centrar btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="othet">
                                <img src="../../assets/Gastronomia/i_contry_f.jpeg" />
                                <div class="info_bottom">
                                    <p class="desc">Titulo</p>
                                    <q-btn class="text_white centrar btn_centrar" label="Leer más" icon-right="arrow_right_alt"/>
                                </div>
                            </td>
                        </tr>
                        </table>
                    </div>
                </q-carousel-slide>

                </q-carousel>
                <div class="row justify-center botones">
                    <q-btn-toggle
                        glossy
                        v-model="slidevideo"
                    />
                </div>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menuspa from 'pages/submenus/Menuspa'
import configServices from '../../services/config'

export default {
  name: 'MultimediaSpa',
  components: {
    Menuspa
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {},
      pop_consultar: false,
      slidecontent: 1,
      slidevideo: 1,
      options: [
        {
          label: 1,
          key: 1
        },
        {
          label: 2,
          key: 2
        }
      ]
    }
  },
  methods: {
    getMultimedia () {
      var _this = this
      configServices.loadData(this, '/multimedia-secciones/Spa & Wellness/json', {
        callBack: (data) => {
          console.log(data)
          for (const item in data) {
            _this.multimediaHome.push(data[item])
          }
          _this.$q.loading.hide()
        }
      })
    },
    getOptions () {
      var _this = this
      this.slidersContent.map((item, key) => {
        var n = {
          label: key + 1,
          value: key
        }

        _this.options.push(n)
      })
    }
  }
}
</script>
