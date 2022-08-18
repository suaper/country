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
        <q-carousel-slide v-for="(banner, key) in info.field_banner_seccion" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Experience</div>
            <p class="intro text-center" v-html="info.body[0].value"></p>
        </div>
        <div class="w_1100 q-my-xl q-py-xl flex centrar justify-between row_1_experience">
            <iframe v-for="(item, key) in info.field_video_youtube" :key="key" width="400" height="300" :src="'https://www.youtube.com/embed/' + item.video_id" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>

    <q-dialog v-model="video" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + currentVideo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cerrar" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
      video: false,
      currentVideo: '',
      info: {},
      urlSite: 'https://obt3.cl/',
      multimediaHome: [],
      contactInfo: [],
      pop_consultar: false,
      slidecontent: 1
    }
  },
  created () {
    this.getInfo()
    this.getMultimediaHome()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/164?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_banner_seccion[0].target_uuid
        }
      })

      configServices.loadData(this, '/node/401?_format=json', {
        callBack: (data) => {
          _this.contactInfo = data
        }
      })
    },
    getMultimediaHome () {
      var _this = this
      configServices.loadData(this, 'multimedia-secciones/country-experience/json', {
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
