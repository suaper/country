<template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno :currentItem="'/deportes/' + path + '/campeones'"/>
    <Banner :banner="info" :bannerSlide="slide" v-if="loadedInfo"/>
    <div class="q-py-none all_width bg_gris wrp_club campeones">
    <div class="center text-center q-my-lg titulos">Campeones</div>
        <div class="no-wrap flex justify-between centrar w_1200">
            <div class="row_2 fitnes_last" v-if="loadedVarones">
                <h4 class="subtitle q-my-xl all_width text-center">Varones</h4>
                <img :src="urlSite + varonesCampeones[0][0].field_imagen_campeon" alt="">
                <TableCampeones :items="varonesCampeones" :currentItem="currentItem" :itemMax="maxVarones"/>
            </div>
            <div class="row_2 fitnes_last" v-if="loadedDamas">
                <h4 class="subtitle q-my-xl all_width text-center">Damas</h4>
                <img :src="urlSite + damasCampeones[0][0].field_imagen_campeon" alt="">
                <TableCampeones :items="damasCampeones" :currentItem="currentItem" :itemMax="maxDamas"/>
            </div>
        </div>
    </div>
    </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import TableCampeones from 'pages/componentes/TableCampeones'
import Banner from 'pages/componentes/Uno'
import configServices from '../../services/config'

export default {
  name: 'Rugby',
  components: {
    MenuDeporteInterno,
    Banner,
    TableCampeones
  },
  data () {
    return {
      sliders: true,
      video: false,
      currentVideo: '',
      slide: '1',
      slidecontent: 0,
      image: [],
      loadedImage: false,
      info: {
        body: [
          { value: '' }
        ]
      },
      urlSite: 'https://pwccdev.mkbk.digital/',
      multimediaHome: [
        { field_portada_multimedia: '' },
        { field_portada_multimedia: '' },
        { field_portada_multimedia: '' },
        { field_portada_multimedia: '' },
        { field_portada_multimedia: '' }
      ],
      pop_reservar_spa: false,
      name: '',
      email: '',
      telefono: '',
      rut: '',
      personal: {
        field_imagen_perfil: ''
      },
      ranking: [],
      currentItem: 1,
      dtevento: false,
      event: {},
      images: {},
      loadedInfo: false,
      loadedVarones: false,
      loadedDamas: false,
      content: {},
      notices: [],
      loadedNotices: false,
      path: '',
      player: {},
      loadedPlayer: false,
      loadedEvents: false,
      loadedRanking: false,
      bannerDeportes: [],
      loadedBannerDeportes: false,
      damasCampeones: [],
      varonesCampeones: [],
      filterCategories: [],
      temporada: '',
      tournament: '',
      key: 0,
      filterItems: [],
      maxVarones: 0,
      maxDamas: 0
    }
  },
  created () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
    this.subPath = currentPath[3]

    localStorage.setItem('sport', this.path)

    this.getRanking()
  },
  methods: {
    getRanking () {
      var _this = this
      configServices.loadData(this, '/slider-deportes/' + _this.subPath + '-' + _this.path + '/json', {
        callBack: (data) => {
          _this.info = data[0]
          _this.slide = data[0].field_slider_sport[0].target_uuid
          _this.loadedInfo = true
        }
      })

      configServices.loadData(this, '/campeones/' + _this.path + '/json/damas', {
        callBack: (data) => {
          const n = 10
          _this.maxDamas = Math.ceil(data.length / n)

          _this.damasCampeones = new Array(Math.ceil(data.length / n))
            .fill()
            .map(_ => data.splice(0, n))
          _this.loadedDamas = true

          _this.$q.loading.hide()
        }
      })

      configServices.loadData(this, '/campeones/' + _this.path + '/json/varones', {
        callBack: (data) => {
          const n = 10
          _this.maxVarones = Math.ceil(data.length / n)
          console.log(_this.maxVarones)

          _this.varonesCampeones = new Array(Math.ceil(data.length / n))
            .fill()
            .map(_ => data.splice(0, n))

          _this.loadedVarones = true

          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
