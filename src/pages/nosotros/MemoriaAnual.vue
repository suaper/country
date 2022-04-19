<template>
  <q-page class="flex flex-center view_hijos_socios view_kids">
    <Menusomos currentItem="/quienes-somos/memoria-anual" />
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
      >
        <q-carousel-slide v-for="(banner, key) in info.field_slider_home" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
    <div class="q-pb-xl all_width gris_home">
        <div class="setenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Memoría Anual</div>
            <p class="text-center centrar w_800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum interdum viverra. Nulla feugiat quam erat, ut faucibus sapien faucibus et. Suspendisse feugiat placerat dignissim. Nullam elementum faucibus eros at sollicitudin. Sed vestibulum quis eros a sollicitudin. Nullam rhoncus condimentum mi, vel luctus nunc consectetur a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam pharetra, massa a sodales luctus, magna justo tincidunt diam, ac scelerisque libero diam sed libero.</p>
        </div>
        <div class="q-py-xl q-my-xl row centrar w_800 flex justify-between q-gutter-md">
            <div class="box_download q-ma-none m_left_20 q-mt-md flex bg_white">
                <img src="../../assets/MiClub/i-pdf.svg">
                <div class="text">
                    <span class="bold">Memoria Anual 2021</span>
                    <a href="#" target="_blank"><span>Ver o descargar</span></a>
                </div>
            </div>
            <div class="box_download q-ma-none m_left_20 q-mt-md flex bg_white">
                <img src="../../assets/MiClub/i-pdf.svg">
                <div class="text">
                    <span class="bold">Memoria Anual 2020</span>
                    <a href="#" target="_blank"><span>Ver o descargar</span></a>
                </div>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menusomos from 'pages/submenus/Menusomos'
import configServices from '../../services/config'

export default {
  name: 'Administracion',
  components: {
    Menusomos
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {
        body: [
          { value: '' }
        ]
      },
      personal: [],
      secondPersonal: [],
      urlSite: 'https://pwccdev.mkbk.digital/',
      multimediaHome: []
    }
  },

  created () {
    this.getInfo()
    this.getMultimediaHome()
  },
  methods: {
    getMultimediaHome () {
      var _this = this
      configServices.loadData(this, '/multimedia-secciones/playroom/json', {
        callBack: (data) => {
          for (const item in data) {
            _this.multimediaHome.push(data[item])
          }
          _this.$q.loading.hide()
        }
      })
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/365?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
        }
      })

      configServices.loadData(this, '/personal-staff/playroom', {
        callBack: (data) => {
          _this.personal = data
        }
      })
    },
    openItem (e, multimedia) {
      e.preventDefault()
      if (multimedia.field_tipo_de_multimedia === 'Imagen') {
        localStorage.setItem('multimediaId', multimedia.nid)
        this.$router.push('/detalle-multimedia')
      } else {
        var currentVideo = multimedia.field_video_youtube.split('=')
        this.currentVideo = currentVideo[1]
        this.video = true
      }
    }
  }
}
</script>
