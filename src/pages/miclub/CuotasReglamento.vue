<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menumiclub currentItem="/mi-club/cuotas-reglamento" />
    <div class="q-pb-md all_width gris_home etiquetas">
        <br>
        <div class="center text-center q-my-lg titulos q-mt-2">Country Club</div>
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

    <div class="q-pb-md all_width bg_amarillo cuotas">
        <div class="centrar w_1200">
            <div class="left text-left q-my-lg titulos">Reglamento</div>
            <div class="q-pa-md row items-start q-gutter-md">
                <div class="box_download flex bg_white">
                    <img src="../../assets/MiClub/i-pdf.svg">
                    <div class="text">
                        <span class="bold">Reglamento del Club</span>
                        <a :href="info.field_descargar_archivo[0].url" target="_blank"><span>Ver o descargar</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <q-dialog v-model="pop_cuota" >
        <q-card style="width: 700px; max-width: 80vw;">
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
                        <th>Cuota Trimestral</th>
                    </tr>
                    <tr v-for="(item, key) in cuotas" :key="key">
                        <td>{{ item.field_categoria_cuota }}</td>
                        <td>{{ item.field_cuota }}</td>
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
      urlSite: 'https://pwccdev.mkbk.digital/',
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
          _this.$q.loading.hide()
        }
      })
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
