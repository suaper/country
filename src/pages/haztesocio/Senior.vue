<template>
  <q-page class="flex flex-center view_hijos_socios">
    <Menuhaztesocio currentItem="/hazte-socio/senior"/>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
      >
        <q-carousel-slide v-for="(banner, key) in info[0].field_banner_seccion" :key="key" :name="key" :img-src="urlSite + banner.trim()" />
      </q-carousel>
    </div>

    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Senior sin Cargas</div>
            <p class="intro text-center" v-html="info[0].body"></p>
        </div>
    </div>

    <div class="q-pb-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
            <h4 class="subtitle">Requisitos</h4>
            <p class="intro text-left" v-html="info[0].field_requisitos"></p>
        </div>
    </div>

    <div class="q-pb-xl all_width gris_home wrp_club hazte_socio">
        <div class="centrar w_1200">
            <h4 class="subtitle">Cuota Trimestral</h4>
            <p class="intro text-left" v-html="info[0].field_cuota_trimestral"></p>
            <q-btn outline @click="pop_consultar = true" class="azul q-my-md centrar bg_white_i" label="Revisar el valor correspondiente aquí" icon-right="arrow_right_alt"/>
        </div>
    </div>
    <q-dialog v-model="pop_consultar" >
        <q-card class="wrp_pop_consulta">
            <q-card-section class="row text-center q-pb-none">
                <q-space />
                <q-btn class="close_top" icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="q-py-none">
                <h4 class="subtitle_center mt_20_negativo">Cuotas Sociales</h4>
                <table class="table_consulta">
                    <tr>
                        <th class="treinta">Categoría</th>
                        <th class="veinte">Cuota</th>
                        <th class="cuarenta">Requisitos</th>
                    </tr>
                    <tr v-for="(item, key) in info" :key="key">
                        <td>{{ item.field_categoria_cuota }}</td>
                        <td>$ {{ addCommas(item.field_cuota) }}</td>
                        <td>{{ item.field_tipo_de_cuota_trimestral }}</td>
                    </tr>
                </table>
            </q-card-section>
        </q-card>
    </q-dialog>
    <!--<div class="q-py-md all_width bg_amarillo wrp_club">
        <div class="q-py-md centrar text-center w_1200">
            <q-btn outline @click="pop_consultar = true" class="text_white  centrar bg_orange btn_centrar" label="Postule Aquí" icon-right="arrow_right_alt"/>
        </div>
    </div>-->
  </q-page>
</template>

<script>
import Menuhaztesocio from 'pages/submenus/Menuhaztesocio'
import configServices from '../../services/config'

export default {
  name: 'Senior',
  components: {
    Menuhaztesocio
  },
  data () {
    return {
      sliders: true,
      slide: 0,
      info: [
        {
          field_banner_seccion: ''
        }
      ],
      pop_consultar: false,
      urlSite: 'https://pwccdev.mkbk.digital/'
    }
  },
  created () {
    this.$q.loading.show()
    this.getInfo()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/subseccion-socios/108/json', {
        callBack: (data) => {
          _this.info = data
          _this.info[0].field_banner_seccion = _this.info[0].field_banner_seccion.split(',')
          _this.$q.loading.hide()
        }
      })
    },
    addCommas (x) {
      if (typeof x !== 'undefined') {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.')
      }
    }
  }
}
</script>
