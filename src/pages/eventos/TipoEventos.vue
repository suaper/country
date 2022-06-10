<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
  <Menueventos currentItem="/eventos/tipo-eventos"/>
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
          <div class="center text-center q-my-lg titulos">{{ info.title[0].value }}</div>
          <p class="intro text-center" v-html="info.body[0].value"></p>
      </div>
  </div>

  <!--<div class="q-py-xl all_width bg_amarillo wrp_club hazte_socio">
      <div class="centrar w_1200">
          <ul class="list_tipos_eventos">
              <li v-for="(item, key) in services" :key="key">
                  <div class="wrpleft">
                    <img :src="urlSite + item.field_icono_servicio_evento">
                  </div>
                  <div class="wrpright">
                      <strong>{{ item.title }}</strong>
                      <a href="#" @click="goDetalle(item)">Ver mas</a>
                  </div>
              </li>
          </ul>
      </div>
    </div>-->

  <div :class="(key % 2 === 0) ? 'q-py-xl all_width gris_home wrp_club hazte_socio' : 'q-py-xl all_width bg_amarillo wrp_club hazte_socio'" v-for="(item, key) in eventTypes" :key="key">
        <div class="centrar w_1200">
          <table class="contenido_fitness q-my-md">
              <tr v-show="key % 2 === 0">
                  <td>
                      <h6 class="title_text">{{ item.title }}</h6>
                      <p v-html="item.body"></p>
                      <q-btn type="a"  @click="goCotizador(item)" outline class="azul q-my-md centrar bg_white_i" label="Reserva aquí" icon-right="arrow_right_alt"/>
                  </td>
                  <td>
                      <div class="prueba"  :name="keyImage" v-for="(image, keyImage) in item.field_galeria_tipos_eventos" :key="keyImage">
                        <img :src="urlSite + image.trim()" />
                    </div>
                  </td>
              </tr>
              <tr v-show="key % 2 !== 0">
                  <td>
                    <div class="prueba" :name="keyImage" v-for="(image, keyImage) in item.field_galeria_tipos_eventos" :key="keyImage">
                      <img :src="urlSite + image.trim()" />
                    </div>
                  </td>
                  <td>
                      <h6 class="title_text">{{ item.title }}</h6>
                      <p v-html="item.body"></p>
                      <q-btn type="a" @click="goCotizador(item)" outline class="azul q-my-md centrar bg_white_i" label="Reserva aquí" icon-right="arrow_right_alt"/>
                  </td>
              </tr>
          </table>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menueventos from 'pages/submenus/Menueventos'
import configServices from '../../services/config'

export default {
  name: 'Staff',
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
      eventTypes: [],
      services: []
    }
  },
  created () {
    localStorage.setItem('service', '')
    this.getInfo()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/399?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_banner_seccion[0].target_uuid
        }
      })

      configServices.loadData(this, '/servicios-eventos/json', {
        callBack: (data) => {
          _this.services = data
        }
      })

      configServices.loadData(this, '/tipos-eventos/json', {
        callBack: (data) => {
          for (const item of data) {
            item.field_galeria_tipos_eventos = item.field_galeria_tipos_eventos.split(',')
            item.slide = 0
            _this.eventTypes.push(item)
          }

          _this.$q.loading.hide()
        }
      })
    },
    goDetalle (item) {
      localStorage.setItem('service', JSON.stringify(item))
      this.$router.push('/eventos/detalle-servicio')
    },
    goCotizador () {
      this.$router.push('/eventos/cotizador')
    }
  }
}
</script>
