<template>
  <q-page class="flex flex-center view_hijos_socios view_kids">
    <Menukids/>
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
    <div class="q-pb-xl all_width gris_home">
        <div class="setenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Winter Activities</div>
            <p class="intro text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit et libero varius egestas. Morbi ultricies consequat orci, eu lobortis nisl maximus nec. Mauris id nunc id libero tempus vehicula. Donec id erat tempor, tincidunt orci et, commodo magna. Fusce porta libero viverra sem facilisis, eget consectetur tortor euismod. Phasellus varius odio quis risus feugiat tempus.</p>
        </div>
        <div class="row_2 flex w_850 centrar q-pt-xl justify-between">
            <div class="left cuarentaycinco wrp_fechas">
                <h5 class="txt_norm">Fechas</h5>
                <ul>
                    <li>
                        <p><strong>Enero 1</strong></p>
                        <span>3 al 14 de enero</span>
                    </li>
                    <li>
                        <p><strong>Enero 1</strong></p>
                        <span>3 al 14 de enero</span>
                    </li>
                    <li>
                        <p><strong>Enero 1</strong></p>
                        <span>3 al 14 de enero</span>
                    </li>
                </ul>

                <div class="q-pa-none q-my-xl row items-start q-gutter-md">
                    <div class="box_download q-ma-none m_left_20 flex bg_white">
                        <img src="../../assets/MiClub/i-pdf.svg">
                        <div class="text">
                            <span class="bold">Programa Summer</span>
                            <a href="#" target="_blank"><span>Actividades</span></a>
                        </div>
                    </div>
                </div>

                <q-btn outline @click="pop_consultar = true" class="azul q-my-md centrar bg_white_i" label="Inscribirse" icon-right="arrow_right_alt"/>
            </div>

            <div class="right cuarentaycinco wrp_table">
                <table class="bg_white">
                    <tr>
                        <th>Edades</th>
                        <th>Grupos</th>
                    </tr>
                    <tr>
                        <td>2 a 3 años</td>
                        <td>Playgroup</td>
                    </tr>
                    <tr>
                        <td>2 a 3 años</td>
                        <td>Playgroup</td>
                    </tr>
                    <tr>
                        <td>2 a 3 años</td>
                        <td>Playgroup</td>
                    </tr>
                    <tr>
                        <td>2 a 3 años</td>
                        <td>Playgroup</td>
                    </tr>
                    <tr>
                        <td>2 a 3 años</td>
                        <td>Playgroup</td>
                    </tr>
                    <tr>
                        <td>2 a 3 años</td>
                        <td>Playgroup</td>
                    </tr>
                    <tr>
                        <td>2 a 3 años</td>
                        <td>Playgroup</td>
                    </tr>
                    <tr>
                        <td>2 a 3 años</td>
                        <td>Playgroup</td>
                    </tr>
                    <tr>
                        <td>2 a 3 años</td>
                        <td>Playgroup</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo wrp_club">
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
    <div class="q-py-xl all_width gris_home wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_fitness">
              <tr>
                  <td>
                      <img class="q-mr-md" src="../../assets/HazteSocio/socio01.png" />
                  </td>
                  <td>
                      <h6 class="title_text">Cómo inscribirse a las Summer Activities</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit et libero varius egestas. Morbi ultricies consequat orci, eu lobortis nisl maximus nec. Mauris id nunc id libero tempus vehicula. Donec id erat tempor, tincidunt orci et, commodo magna. Fusce porta libero viverra sem facilisis, eget consectetur tortor euismod. Phasellus varius odio quis risus feugiat tempus.</p>
                  </td>
              </tr>
          </table>
        </div>
    </div>
    <div class="q-pb-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
            <h4 class="subtitle">Noticias</h4>
            <div class="row flex justify-center  items-start">
                <table class="sesenta">
                    <tr>
                        <td>
                            <img src="../../assets/HazteSocio/socio01.png" />
                        </td>
                        <td>
                            <h5 class="titulo_noticias">Título de la principal noticia de esta sección, texto falso.</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum tellus a nibh volutpat ultricies. Sed iaculis, erat a tristique vestibulum, urna ipsum aliquet…</p>
                            <q-btn outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                </table>
                <table class="treintaycinco">
                    <tr>
                        <td>
                            <h5 class="titulo_noticias">Título de noticias secundarias, texto falso.</h5>
                            <p>Sed iaculis, erat a tristique vestibulum, urna ipsum aliquet lorem…</p>
                            <q-btn outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5 class="titulo_noticias">Título de noticias secundarias, texto falso.</h5>
                            <p>Cras rutrum tellus a nibh volutpat ultricies. Sed iaculis, erat a tristique…</p>
                            <q-btn outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                </table>
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
            </ul>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menukids from 'pages/submenus/Menukids'
import configServices from '../../services/config'

export default {
  name: 'Winteractivities',
  components: {
    Menukids
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {},
      urlSite: 'https://pwccdev.mkbk.digital/',
      multimediaHome: []
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
