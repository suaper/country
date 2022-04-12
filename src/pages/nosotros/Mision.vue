<template>
  <q-page class="flex flex-center view_mision">
    <Menusomos currentItem="/quienes-somos/mision" />
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
    <div class="q-py-md all_width gris_home">
         <div class="rwo_1 row_wrap setenta">
            <div class="text-h6 text-center q-my-lg">Misión</div>
            <p class="destacado text-center azul" v-html="info.body[0].value"></p>
        </div>
        <div class="rwo_1 row_wrap setenta q-py-xl">
            <ul class="content_mision">

                <li :class="isOdd(key)" v-for="(item, key) in items" :key="key">
                    <img :src="urlSite + item.field_imagen_item">
                    <div class="content_text">
                        <hr>
                        <p v-html="item.field_texto_item"></p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menusomos from '../../pages/submenus/Menusomos'
import configServices from '../../services/config'

export default {
  name: 'Historia',
  components: {
    Menusomos
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      autoplay: true,
      info: {
        body: [
          {
            value: ''
          }
        ]
      },
      items: [],
      urlSite: 'https://pwccdev.mkbk.digital/'
    }
  },
  created () {
    this.$q.loading.show()
    this.getMisionItems()
    this.getInfo()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/112?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_banner_seccion[0].target_uuid
          _this.$q.loading.hide()
        }
      })
    },
    getMisionItems () {
      var _this = this
      configServices.loadData(this, '/mision-items/json', {
        callBack: (data) => {
          _this.items = data
        }
      })
    },
    isOdd (key) {
      if (key % 2) {
        return 'right'
      }
      return 'left'
    }
  }
}
</script>
