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
        <div class="setenta q-pd-md q-mb-xl centrar text-center ma_to_30 ma_bo_30">
            <div class="center text-center q-my-lg titulos">Sport Kids</div>
            <p class="intro text-center ma_bo_30">Desde la diversión y el aprendizaje de las habilidades físicas de los niños, este grupo tiene como fin entregar herramientas sociales y motrices desde la práctica de los múltiples deportes de nuestro club, por medio de la experiencia y diversificación de ellos, en torno a la socialización con sus pares.</p>

            <div class="right sesenta q-mb-xl centrar wrp_table ma_to_50">
                <table class="bg_white">
                    <tr>
                        <th class="treinta">Categoría</th>
                        <th class="cuarenta">Horarios</th>
                        <th class="treinta">Staff</th>
                    </tr>
                    <tr>
                        <td><p class="weight_bold">2 a 3 años</p></td>
                        <td><p class="weight_normal">Martes a Viernes <br>14:30 a 16:30</p></td>
                        <td><p class="weight_normal">Camila Cortez <br> Francisco Mendoza</p></td>
                    </tr>
                    <tr>
                        <td class="border_top"><p class="weight_bold">4 a 5 años</p></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menukids from 'pages/submenus/Menukids'
import configServices from '../../services/config'

export default {
  name: 'Playroom',
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
