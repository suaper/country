<template>
  <q-page class="flex flex-center view_hijos_socios view_kids">
    <Menukids currentItem="/kids/motor-skills"/>
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
        <div class="setenta q-pd-md q-mb-xl centrar text-center ma_to_30 ma_bo_30">
            <div class="center text-center q-my-lg titulos">Motor Skills</div>
            <p class="intro text-center" v-html="info.body[0].value"></p>

            <div class="right sesenta q-mb-xl centrar wrp_table ma_to_50">
                <table class="bg_white">
                    <tr>
                        <th class="treinta">Categoría</th>
                        <th class="cuarenta">Horarios</th>
                        <th class="treinta">Staff</th>
                    </tr>
                    <tr v-for="(item, key) in cronograma" :key="key">
                        <td><p class="weight_bold">{{ item.field_categoria }}</p></td>
                        <td><p class="weight_normal" v-html="item.field_horario"></p></td>
                        <td><p class="weight_normal">{{ item.field_staff }}</p></td>
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
      info: {
        body: [
          { value: '' }
        ],
        field_descargar_archivo: [
          { url: '' }
        ]
      },
      cronograma: [],
      urlSite: 'https://pwccdev.mkbk.digital/',
      multimediaHome: []
    }
  },

  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/385?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
        }
      })

      configServices.loadData(this, '/motor-sport-kids/385/json', {
        callBack: (data) => {
          _this.cronograma = data
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
