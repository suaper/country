<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
    <Menueventos currentItem="/eventos/espacios-salones"/>
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
                            <li><q-btn @click="openPopup(item)" outline class="azul q-my-md centrar sin_borde" label="Ver más" icon-right="arrow_right_alt"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <q-dialog v-model="video" persistent>
      <q-card>
        <q-card-section class="row items-center relative salones">
          <q-btn icon="close volando" flat round dense v-close-popup />
          <div class="row">
            <div class="col-12 image">
              <img :src="urlSite + itemPopup.field_imagen_espacios" alt="">
            </div>
            <div class="col-12 title">
              <h3>{{ itemPopup.title }}</h3>
            </div>
          </div>
          <table>
            <tr>
              <td><strong>Ubicación</strong></td>
              <td v-html="itemPopup.field_ubicacion_espacio"></td>
            </tr>
            <tr>
              <td><strong>Ocasión</strong></td>
              <td v-html="itemPopup.field_ocasion_espacios"></td>
            </tr>
            <tr>
              <td><strong>Capacidad</strong></td>
              <td v-html="itemPopup.field_capacidad_espacios"></td>
            </tr>
            <tr>
              <td><strong>Servicios</strong></td>
              <td v-html="itemPopup.field_servicios_espacios"></td>
            </tr>
          </table>
        </q-card-section>

        <!--<q-card-actions align="right">
          <q-btn flat label="Cotiza tu evento" color="primary" v-close-popup />
        </q-card-actions> -->
      </q-card>
    </q-dialog>
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
        field_cotiza: [
          { uri: '' }
        ]
      },
      pop_consultar: false,
      urlSite: 'https://www.pwcc.cl',
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
