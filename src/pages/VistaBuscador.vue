<template>
  <q-page class="flex flex-center view_quienes_somos">
    <div class="q-pb-md all_width gris_home view_danzas q-mt-xl q-mb-md">
        <div class="setenta  centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Buscador</div>
            <div class="back"> <q-btn to="/cultura" round color="white" icon="west" />Volver</div>
        </div>
    </div>
    <div class="q-py-md w_1200 centrar flex_escuelas flex_obras justify-center">
        <div class="row_search">
            <div class="wrp_search vista flex">
                <h5>Buscador</h5>
                <q-input
                    outlined
                    v-model="filter"
                    lazy-rules
                    class="bg_ww"
                />
                  <q-btn round color="white" class="relative" icon="search" @click="getInfo()" />
            </div>
        </div>
    </div>

    <div class="q-pb-xl all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
        <div class="text-left q-mb-none q-mt-xl titulos wrp_gallery_biblioteca">Resultados de búsqueda para <strong>{{ filter }}</strong></div>
            <div class="row fit justify-between items-center q-gutter-xs q-col-gutter wrap wwsearcing" v-if="loadedInfo">
                <div class="w_100 v_buscador">
                    <table class="lista_resultados">
                        <tr v-for="(item, key) in info" :key="key">
                            <td class="text-left">
                                <h5 class="name_event">{{ item.title[0].value }}</h5>
                                <p class="desc_event text-left" v-html="item.body[0].value"></p>
                                <q-btn class="btn_bg_beige centrar  btn_centrar" label="Ver más" @click="goToPage(item)"/>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import configServices from '../services/config'

export default {
  name: 'Buscador',

  data () {
    return {
      urlSite: 'https://obt3.cl',
      filter: '',
      info: [],
      loadedInfo: false
    }
  },
  created () {
    this.filter = localStorage.getItem('search')
    this.getInfo()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/buscador/' + _this.filter + '/json', {
        callBack: (data) => {
          data.map((item, key) => {
            if (typeof item.body === 'undefined' && item.type[0].target_id === 'spa_eventos') {
              item.body = []
              item.body.push(
                { value: item.field_detalle_evento[0].value }
              )
            }

            if (typeof item.body === 'undefined' || item.body.length === 0) {
              item.body = []
              item.body.push(
                { value: '' }
              )
            }
          })
          _this.info = data
          _this.loadedInfo = true
          _this.$q.loading.hide()
        }
      })
    },
    goToPage (item) {
      console.log(item.nid[0].value)
      console.log(item.type[0].target_id)
      switch (item.type[0].target_id) {
        case 'pagos_club':
          this.$router.push('/mi-club/pagos')
          break
        case 'campeones_deportes':
          this.$router.push('/deportes/golf/campeones')
          break
        case 'libros_biblioteca':
          this.$router.push('/cultura/biblioteca')
          break
        case 'directorio':
          this.$router.push('/quienes-somos/directorio')
          break
        case 'personal_administracion':
          this.$router.push('/quienes-somos/administracion')
          break
        case 'campeonato_actual':
          this.$router.push('/deportes/golf')
          break
        case 'multimedia_general':
          localStorage.setItem('multimediaId', item.nid[0].value)
          this.$router.push('/detalle-multimedia')
          break
        case 'noticias':
          localStorage.setItem('noticeId', item.nid[0].value)
          this.$router.push('/detalle-noticia')
          break
        case 'seccion_mision':
          this.$router.push('/quienes-somos/mision')
          break
        case 'escuela_deportes':
          if (item.field_mostra_en_[0].value === 'golf') {
            this.$router.push('/deportes/golf/escuelas')
          } else {
            this.$router.push('/deportes/escuelas')
          }
          break
        default:
          var mostrarEn = item.field_mostra_en_[0].value.split(' ')
          if (mostrarEn.length > 1) {
            this.$router.push('/deportes/' + mostrarEn[1].toLowerCase() + '/' + mostrarEn[0].toLowerCase())
          } else {
            if (typeof item.field_seleccionar_deporte !== 'undefined') {
              this.$router.push('/deportes/' + item.field_mostra_en_[0].value)
            } else {
              this.$router.push('/' + item.field_mostra_en_[0].value)
            }
          }
          break
      }
    }
  }
}
</script>
