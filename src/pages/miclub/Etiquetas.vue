<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menumiclub currentItem="/mi-club/normas-de-convivencia" />
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
        :autoplay="autoplay"
      >
        <q-carousel-slide v-for="(banner, key) in info.field_banner_seccion" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home etiquetas">
        <div class="center text-center q-my-lg titulos">Normas de Convivencia</div>
        <div class="centrar w_1200">
            <p class="intro text-center" v-html="info.body[0].value" />

            <div class="q-pa-md row q-gutter-md" v-if="tags.length != 0">
                <q-card class="card_etiquetas w_30" v-for="(item, key) in tags" :key="key">
                  <q-card-section>
                      <h5>{{ item.title }}</h5>
                      <div class="card-ul" v-html="item.body" />
                  </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menumiclub from 'pages/submenus/Menumiclub'
import configServices from '../../services/config'

export default {
  name: 'Etiquetas',
  components: {
    Menumiclub
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      autoplay: true,
      info: {
        body: [
          {}
        ]
      },
      tags: []
    }
  },
  created () {
    this.$q.loading.show()
    this.getInfo()
    this.getTags()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/91?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_banner_seccion[0].target_uuid
        }
      })
    },
    getTags () {
      var _this = this
      configServices.loadData(this, '/etiquetas/json', {
        callBack: (data) => {
          _this.tags = data
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
