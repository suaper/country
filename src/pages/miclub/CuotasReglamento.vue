<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menumiclub currentItem="/mi-club/cuotas-reglamento" />
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
        autoplay
      >
        <q-carousel-slide v-for="(banner, key) in info.field_slider_home" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home etiquetas">
        <br>
        <div class="center text-center q-my-lg titulos q-mt-2">Cuotas Sociales</div>
        <div class="centrar w_1200">
        <div class="left text-left q-my-lg titulos">Cuota Trimestral</div>
        <p class="intro" v-html="info.field_cuota_trimestral[0].value" />
            <div class="q-pa-md row items-start q-gutter-md">
                <q-btn outline
                    class="azul q-my-md bg_white"
                    label="Revisa el valor correspondiente aquí"
                    icon-right="arrow_right_alt"
                    @click="pop_cuota = true"
                />
            </div>
        </div>
    </div>

    <q-dialog v-model="pop_cuota" >
        <q-card class="pop_cuotas" style="width: 700px; max-width: 80vw;">
            <q-card-section class="row items-center q-pb-none">
                <div class="text-h6 open">Cuota Trimestral</div>
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="flex pop_club">
                <table class="table_cuota_trimestral">
                    <tr>
                        <th>Categoría</th>
                        <th>Cuota Trimestral</th>
                        <th>Requisito</th>
                    </tr>
                    <tr v-for="(item, key) in cuotas" :key="key">
                        <td>{{ item.field_categoria_cuota }}</td>
                        <td>$ {{ addCommas(item.field_cuota) }}</td>
                        <td>{{ item.field_tipo_de_cuota_trimestral }}</td>
                    </tr>
                </table>
            </q-card-section>
        </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import Menumiclub from 'pages/submenus/Menumiclub'
import configServices from '../../services/config'

export default {
  name: 'CuotasReglamento',
  components: {
    Menumiclub
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      autoplay: true,
      info: {
        field_cuota_trimestral: [
          {}
        ]
      },
      urlSite: 'https://obt3.cl',
      pop_cuota: false,
      cuotas: []
    }
  },
  created () {
    this.$q.loading.show()
    this.getInfo()
    this.getCuotas()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/128?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
          _this.$q.loading.hide()
        }
      })
    },
    addCommas (x) {
      if (typeof x !== 'undefined') {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.')
      }
    },
    getCuotas () {
      var _this = this
      configServices.loadData(this, '/cuotas/json', {
        callBack: (data) => {
          _this.cuotas = data
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
