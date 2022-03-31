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
            <div class="center text-center q-my-lg titulos">Motor Skills</div>
            <p class="intro text-center ma_bo_30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit et libero varius egestas. Morbi ultricies consequat orci, eu lobortis nisl maximus nec. Mauris id nunc id libero tempus vehicula. Donec id erat tempor, tincidunt orci et, commodo magna. Fusce porta libero viverra sem facilisis, eget consectetur tortor euismod. Phasellus varius odio quis risus feugiat tempus.</p>

            <div class="right sesenta q-mb-xl centrar wrp_table ma_to_50">
                <table class="bg_white">
                    <tr>
                        <th class="treinta">Categoría</th>
                        <th class="cuarenta">Horarios</th>
                        <th class="treinta">Staff</th>
                    </tr>
                    <tr>
                        <td><p class="weight_bold">2 a 3 años</p></td>
                        <td><p class="weight_normal">Martes y Jueves o Miércoles y Viernes 16:30 a 17:30 17:30 a 18:30</p></td>
                        <td><p class="weight_normal">Camila Cortez</p></td>
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
