<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menumiclub currentItem="/mi-club/beneficios-socios"/>
    <div class="q-py-xl all_width gris_home beneficios">
        <div class="centrar w_1200">
        <div class="text-center q-my-lg titulos">Beneficios de los Socios</div>
        <p class="intro text-center" v-html="info.body"></p>
            <div class="q-pa-md">
                <div class="wrp_gallery_beneficios">
                    <q-carousel
                    v-model="slide"
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    swipeable
                    animated
                    control-color="primary"
                    padding
                    arrows
                    height="300px"
                    class="galeria_beneficios"
                    >
                    <q-carousel-slide :name="key" class="column no-wrap" v-for="(item, key) in slidersContent" :key="key">
                        <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                            <div class="treintaydos" v-for="(subItem, subKey) in item" :key="subKey">
                                <q-img class="rounded-borders col-6 full-height" :src="urlSite + subItem.field_imagen_convenio" />
                                <div class="q-mt-md text-center text-black">
                                    <span class="azul_galery">{{ subItem.field_titulo_convenio }}</span>
                                    <span class="tex_galery" v-html="subItem.field_texto_convenio"></span>
                                </div>
                            </div>
                        </div>
                    </q-carousel-slide>
                    </q-carousel>
                    <div class="row justify-center botones">
                        <q-btn-toggle
                            glossy
                            v-model="slide"
                            :options="options"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menumiclub from 'pages/submenus/Menumiclub'
import configServices from '../../services/config'

export default {
  name: 'BeneficiosSocios',
  components: {
    Menumiclub
  },
  data () {
    return {
      sliders: true,
      slide: 0,
      autoplay: true,
      urlSite: 'http://www.pwcc.markablanka.com/',
      info: {
        body: [
          {
            value: ''
          }
        ]
      },
      slidersContent: [],
      options: []
    }
  },
  created () {
    this.$q.loading.show()
    this.getInfo()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/beneficios/json', {
        callBack: (data) => {
          _this.info = data[0]
          const n = 3
          _this.slidersContent = new Array(Math.ceil(data.length / n))
            .fill()
            .map(_ => data.splice(0, n))
          _this.getOptions()
          _this.$q.loading.hide()
        }
      })
    },
    getOptions () {
      var _this = this
      this.slidersContent.map((item, key) => {
        var n = {
          label: key + 1,
          value: key
        }

        console.log(n)

        _this.options.push(n)
      })

      console.log(this.options)
    }
  }
}
</script>
