<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menukids/>
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
        <q-carousel-slide :name="1" img-src="../assets/Home/banner-home.png" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">kids</div>
            <p class="intro text-center">El éxito es solo el resultado del duro entrenamiento. Por ello, el deporte forma parte de nuestra idiosincrasia y cultura.</p>
        </div>
        <div class="w_1200 enlaces centrar">
            <ul class="list_img_link centrer">
                <li>
                    <img src="http://www.pwcc.markablanka.com//sites/default/files/2022-03/ewt.png" alt="">
                    <h6 class="title">Summer Activities</h6>
                    <a href="#">Ir a <span class="material-icons">arrow_right_alt</span></a>
                </li>
                <li>
                    <img src="http://www.pwcc.markablanka.com//sites/default/files/2022-03/ewt.png" alt="">
                    <h6 class="title">Summer Activities</h6>
                    <a href="#">Ir a <span class="material-icons">arrow_right_alt</span></a>
                </li>
                <li>
                    <img src="http://www.pwcc.markablanka.com//sites/default/files/2022-03/ewt.png" alt="">
                    <h6 class="title">Summer Activities</h6>
                    <a href="#">Ir a <span class="material-icons">arrow_right_alt</span></a>
                </li>
                <li>
                    <img src="http://www.pwcc.markablanka.com//sites/default/files/2022-03/ewt.png" alt="">
                    <h6 class="title">Summer Activities</h6>
                    <a href="#">Ir a <span class="material-icons">arrow_right_alt</span></a>
                </li>
                <li>
                    <img src="http://www.pwcc.markablanka.com//sites/default/files/2022-03/ewt.png" alt="">
                    <h6 class="title">Summer Activities</h6>
                    <a href="#">Ir a <span class="material-icons">arrow_right_alt</span></a>
                </li>
            </ul>
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
    <div class="q-py-none all_width bg_gris wrp_club">
        <div class="row_wrap no-wrap flex justify-start">
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
              <h6 class="title_text">Staff</h6>
                 <div class="flex">
                    <table class="datos_staff_contacto">
                        <tr>
                            <td>
                                <img class="raius" src="../assets/HazteSocio/socio01.png" />
                            </td>
                            <td>
                                <p><strong> Nombres y apellidos  </strong></p>
                                <p><strong> Cargo </strong></p>
                                <p>correo@pwcc.cl </p>
                                <p>123123123</p>
                            </td>
                        </tr>
                    </table>
                    <table class="datos_staff_contacto">
                        <tr>
                            <td>
                                <img class="raius" src="../assets/HazteSocio/socio01.png" />
                            </td>
                            <td>
                                <p><strong> Nombres y apellidos  </strong></p>
                                <p><strong> Cargo </strong></p>
                                <p>correo@pwcc.cl </p>
                                <p>123123123</p>
                            </td>
                        </tr>
                    </table>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Menukids from 'pages/submenus/Menukids'
import configServices from '../services/config'

export default {
  name: 'Kids',
  components: {
    Menukids
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {},
      urlSite: 'http://www.pwcc.markablanka.com/',
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
