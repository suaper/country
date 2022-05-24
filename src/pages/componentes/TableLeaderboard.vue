<template>
    <div class="wrp_table_ranking leaderboard text-left">
        <div class="wrp_table_ranking q-mb-md">
            <table>
                <tr>
                    <th>Pos</th>
                    <th>Nombre</th>
                    <th>A par</th>
                    <th>Hor</th>
                    <th>Total</th>
                </tr>
                <tr v-for="(item, key) in leaderboard" :key="key" v-show="key <= 9">
                    <td>{{ item.field_pos[0].value }}</td>
                    <td>{{ item.field_nombre_y_apellidos[0].value }}</td>
                    <td>{{ item.field_a_par[0].value }}</td>
                    <td>{{ item.field_hor[0].value }}</td>
                    <td>{{ item.field_total[0].value }}</td>
                </tr>
            </table>
        </div>
        <q-btn outline @click="popup = true" class="azul q-my-md centrar bg_white_i" label="Ver más" icon-right="arrow_right_alt"/>
    <q-dialog v-model="popup" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <table>
            <tr>
                <th>Pos</th>
                <th>Nombre</th>
                <th>A par</th>
                <th>Hor</th>
                <th>Total</th>
            </tr>
            <tr v-for="(item, key) in leaderboard" :key="key">
                <td>{{ item.field_pos[0].value }}</td>
                <td>{{ item.field_nombre_y_apellidos[0].value }}</td>
                <td>{{ item.field_a_par[0].value }}</td>
                <td>{{ item.field_hor[0].value }}</td>
                <td>{{ item.field_total[0].value }}</td>
            </tr>
            </table>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cerrar" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    </div>
</template>

<script>
import configServices from '../../services/config'

export default {
  name: 'TableLeaderBoard',
  props: {
    data: Object
  },
  data () {
    return {
      info: this.data,
      date: '',
      hour: '',
      popup: false,
      leaderboard: []
    }
  },
  created () {
    var _this = this
    this.info.field_tabla_leaderboard.map((item, key) => {
      configServices.loadData(this, '/entity/paragraph/' + item.target_id + '?_format=json', {
        callBack: (data) => {
          _this.leaderboard.push(data)
          _this.sortItems()

          _this.$q.loading.hide()
        }
      })
    })
  },
  methods: {
    sortItems () {
      this.leaderboard.sort(function (a, b) {
        return parseInt(a.field_pos[0].value) - parseInt(b.field_pos[0].value)
      })
    }
  }
}
</script>
