<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
    <Menueventos currentItem="/eventos/matrimonios"/>
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
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">{{ info.title[0].value }}</div>
            <p class="intro text-center" v-html="info.body[0].value"></p>
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_fitness q-my-md">
              <tr>
                <td class="w_cuarenta">
                  <h6 class="title_text">Matrimonio</h6>
                  <p v-html="info.field_descripcion_servicio[0].value"></p>
                  <q-btn outline class="azul q-my-md centrar bg_white_i" label="Cotiza tu evento" icon-right="arrow_right_alt"/>
                </td>
                <td class="w_sesenta">
                  <div class="q-pa-md">
                    <q-carousel
                      animated
                      v-model="slidecontent"
                      arrows
                      navigation
                      infinite
                      height="350px"
                    >
                      <q-carousel-slide :name="key" :img-src="item.url" v-for="(item, key) in info.field_galeria_tipos_eventos" :key="key"/>
                    </q-carousel>
                  </div>
                </td>
              </tr>
          </table>
        </div>
    </div>
    <div class="q-py-xl all_width gris_home wrp_club">
        <div class="centrar w_1200 flex justify-between items-center">
            <h4 class="subtitle sin_margen">Contáctanos</h4>
            <ul class="contacto_footer">
                <li class="mail">
                    <img src="../../assets/HazteSocio/i-correo.svg" />
                    <span>{{ contactInfo.field_correo_electronico[0].value }}</span>
                </li>
                <li class="tel">
                    <img src="../../assets/HazteSocio/i-phone.svg" />
                    <span>{{ contactInfo.field_numero[0].value }}</span>
                </li>
                <li class="tel">
                    <img src="../../assets/HazteSocio/i-phone.svg" />
                    <span>{{ contactInfo.field_contacto_2[0].value }}</span>
                </li>
            </ul>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menueventos from 'pages/submenus/Menueventos'
import configServices from '../../services/config'

export default {
  name: 'Matrimonios',
  components: {
    Menueventos
  },
  data () {
    return {
      sliders: true,
      slide: 0,
      slidecontent: 0,
      itemPopup: [],
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
        field_descripcion_servicio: [
          { value: '' }
        ]
      },
      contactInfo: {
        field_correo_electronico: [
          { value: '' }
        ],
        field_numero: [
          { value: '' }
        ],
        field_contacto_2: [
          { value: '' }
        ]
      },
      pop_consultar: false,
      urlSite: 'https://pwccdev.mkbk.digital/',
      eventTypes: [],
      video: false,
      currentVideo: ''
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    openPopup (item) {
      this.itemPopup = item
      this.video = true
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/490?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
        }
      })

      configServices.loadData(this, '/node/489?_format=json', {
        callBack: (data) => {
          _this.contactInfo = data
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
