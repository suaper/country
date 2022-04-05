<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
    <Menueventos/>
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
            <div class="center text-center q-my-lg titulos">Experience</div>
            <p class="intro text-center">Nulla eget posuere nisl. Fusce tincidunt massa pulvinar est lobortis, at pellentesque ante accumsan. Aenean condimentum neque a libero, a pretium massa auctor.</p>
        </div>
        <div class="w_1100 q-my-xl q-py-xl flex centrar justify-between row_1_experience">
            <img src="../../assets/HazteSocio/socio01.png" />
            <img src="../../assets/HazteSocio/socio01.png" />
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
import Menueventos from 'pages/submenus/Menueventos'
import configServices from '../../services/config'

export default {
  name: 'Specialday',
  components: {
    Menueventos
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {},
      urlSite: 'https://pwccdev.mkbk.digital/',
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
