<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
    <div class="q-pt-xl all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Multimedia</div>
        </div>
    </div>

    <div class="q-py-xl all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar q-pb-xl w_1200">
            <div class="cincuenta q-pd-md centrar text-center">
              <div class="center text-center titulos">{{ data.title[0].value }}</div>
            </div>
            <div class="wrp_gallery_multimedia">
                <q-carousel
                v-model="slidecontent"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="primary"
                padding
                arrows
                height="250px"
                class="galeria_multimedia"
                >
                <q-carousel-slide class="column no-wrap" :name="key" v-for="(item, key) in info" :key="key">
                    <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                        <div class="multimedia_slider" v-for="(subItem, subKey) in item" :key="subKey">
                            <div class="item_galeria">
                                <img :src="subItem.url" />
                            </div>
                        </div>
                    </div>
                </q-carousel-slide>
                </q-carousel>
                <div class="row justify-center botones">
                    <q-btn-toggle
                        glossy
                        v-model="slidecontent"
                        :options="[]"
                    />
                </div>
            </div>
        </div>
    </div>
    <!--<div class="q-py-md all_width gris_home">
        <div class="w_1200 q-py-md centrar text-center">
        <div class="center text-center q-my-md titulos">Videos</div>
            <div class="wrp_gallery_video">
                <q-carousel
                v-model="slidevideo"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="primary"
                padding
                arrows
                height="470px"
                class="galeria_video"
                >
                <q-carousel-slide class="column no-wrap" :name="key" v-for="(item, key) in slidersContentImages" :key="key">
                    <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                        <table class="item_cien">
                            <tr>
                                <td class="first" rowspan="0">
                                    <img :src="urlSite + item[0].field_portada_multimedia" />
                                    <div class="info_bottom text-center">
                                        <p class="desc">{{ item[0].title }}</p>
                                        <span v-html="item[0].body"></span>
                                    </div>
                                </td>
                                <td class="othet">
                                    <img :src="urlSite + item[1].field_portada_multimedia" />
                                    <div class="info_bottom text-center">
                                        <p class="desc">{{ item[1].title }}</p>
                                        <span v-html="item[1].body"></span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="othet">
                                    <img :src="urlSite + item[2].field_portada_multimedia" />
                                    <div class="info_bottom text-center">
                                        <p class="desc">{{ item[2].title }}</p>
                                        <span v-html="item[2].body"></span>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </q-carousel-slide>

                </q-carousel>
                <div class="row justify-center botones">
                    <q-btn-toggle
                        glossy
                        v-model="slidevideo"
                        :options="optionsVideo"
                    />
                </div>
            </div>
        </div>
    </div>-->
  </q-page>
</template>

<script>
import configServices from '../services/config'

export default {
  name: 'Detallemultimedia',
  data () {
    return {
      sliders: true,
      slidecontent: 0,
      autoplay: true,
      info: [],
      data: [],
      urlSite: 'https://pwccdev.mkbk.digital/',
      pop_cuota: false,
      cuotas: [],
      id: ''
    }
  },
  created () {
    this.id = localStorage.getItem('multimediaId')
    this.getInfo()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/' + _this.id + '?_format=json', {
        callBack: (data) => {
          const n = 3
          _this.data = data
          _this.info = new Array(Math.ceil(data.field_galeria_.length / n))
            .fill()
            .map(_ => data.field_galeria_.splice(0, n))

          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
