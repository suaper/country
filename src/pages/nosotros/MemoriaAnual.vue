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
            <div class="center text-center q-my-lg titulos ">{{ info.title[0].value }}</div>
            <p class="text-center centrar w_800" v-html="info.body[0].value"></p>
        </div>
        <div class="q-py-xl q-my-xl row centrar w_900 flex q-gutter-md nueva_alineacion">
            <div class="box_download q-ma-none m_left_20 q-mt-md flex bg_white" v-for="(item, key) in memorial" :key="key">
                <img src="../../assets/MiClub/i-pdf.svg">
                <div class="text">
                    <span class="bold">{{ item.field_titulo_item }}</span>
                    <a :href="urlSite + item.field_archivo_pdf" target="_blank"><span>Ver o descargar</span></a>
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
  name: 'Memorial',
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
        ],
        title: [
          { value: '' }
        ]
      },
      memorial: [],
      secondPersonal: [],
      urlSite: 'https://obt3.cl',
      multimediaHome: []
    }
  },

  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/486?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
        }
      })

      configServices.loadData(this, '/memorial-pdfs/json', {
        callBack: (data) => {
          _this.memorial = data
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
