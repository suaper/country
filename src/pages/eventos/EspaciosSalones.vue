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
            <div class="center text-center q-my-lg titulos">Espacios y Salones</div>
        </div>
        <div class="browse_salones centrar w_1000">
            <div class="card_espacios w_30 q-card" v-for="(item, key) in eventTypes" :key="key">
                <div class="q-card__section q-card__section--vert">
                    <div class="card-ul">
                        <ul>
                            <li><img :src="urlSite + item.field_imagen_espacios" /></li>
                            <li><h5>{{ item.title }}</h5></li>
                            <li v-html="'Capacidad: ' + item.field_capacidad_espacios"></li>
                            <li><q-btn outline class="azul q-my-md centrar sin_borde" label="Ver más" icon-right="arrow_right_alt"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menueventos from 'pages/submenus/Menueventos'
import configServices from '../../services/config'

export default {
  name: 'Espaciossalones',
  components: {
    Menueventos
  },
  data () {
    return {
      sliders: true,
      slide: 0,
      info: {
        title: [
          { value: '' }
        ],
        field_banner_seccion: [
          {}
        ],
        body: [
          { value: '' }
        ],
        field_cotiza: [
          { uri: '' }
        ]
      },
      pop_consultar: false,
      urlSite: 'https://pwccdev.mkbk.digital/',
      eventTypes: []
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/118?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_banner_seccion[0].target_uuid
        }
      })

      configServices.loadData(this, '/espacios-salones/json', {
        callBack: (data) => {
          for (const item of data) {
            item.slide = 0
            _this.eventTypes.push(item)
          }

          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
