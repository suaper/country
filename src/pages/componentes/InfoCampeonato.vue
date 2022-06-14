<template>
    <div class="wrp_table_clasificacion campeonato_golf">
        <h5 class="text_normal">{{ this.info.title[0].value }}</h5>
        <div class="row">
            <ul class="fecha_campeonato">
                <li>
                     <q-icon name="date_range"></q-icon> <span>{{ date[2] }}</span>
                </li>
                <li><span>{{ date[1] }}</span></li>
                <li><span>{{ date[0] }}</span></li>
            </ul>
            <ul class="hora_campeonato">
                <li>
                    <q-icon name="watch_later"></q-icon>
                    <span>{{ hour[0] + ':' + hour[1] }}</span>
                </li>
            </ul>
        </div>
        <ul class="list_palmaresFutbol q-py-md list_info_campeonatos flex flex-start">
            <li v-for="(item, key) in links" :key="key">
                <div class="box_download q-ma-none m_left_20 flex bg_white">
                  <a class="ajust" :href="item.field_enlace_item_torneo[0].uri">
                    <img :src="item.field_icono_item[0].url">
                    <div class="text">
                        <span class="bold">{{ item.field_titulo_campo[0].value }}</span>
                        <span>{{ item.field_estado_torneo[0].value }}</span>
                    </div>
                  </a>
                </div>
            </li>
        </ul>
        <q-btn outline class="azul q-my-md centrar bg_white_i" label="Ver Bases" icon-right="arrow_right_alt"/>
    </div>
</template>

<script>
import configServices from '../../services/config'

export default {
  name: 'CampeonatoActual',
  props: {
    data: Object
  },
  data () {
    return {
      info: this.data,
      date: '',
      hour: '',
      links: []
    }
  },
  created () {
    var _this = this
    this.info.field_inscripcion_campeonato.map((item, key) => {
      configServices.loadData(this, '/entity/paragraph/' + item.target_id + '?_format=json', {
        callBack: (data) => {
          _this.links.push(data)
          _this.$q.loading.hide()
        }
      })
    })
    var date = this.info.field_fecha_campeonato[0].value.split('T')
    this.date = date[0].split('-')

    var hour = this.info.field_fecha_campeonato[0].value.split('T')
    this.hour = hour[1].split(':')
  }
}
</script>
