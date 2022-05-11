<template>
    <div class="wrp_table_ranking">
        <div class="wrp_table_ranking">
            <table>
                <tr>
                    <th>Posición</th>
                    <th>Equipo</th>
                    <th>PJ</th>
                    <th>G</th>
                    <th>E</th>
                    <th>p</th>
                </tr>
                <tr v-for="(item, key) in info" :key="key">
                    <td>{{ item.field_posicion }}</td>
                    <td>{{ item.field_equipo }}</td>
                    <td>{{ item.field_pj }}</td>
                    <td>{{ item.field_g }}</td>
                    <td>{{ item.field_e }}</td>
                    <td>{{ item.field_p }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>

export default {
  name: 'TableRankingFutbol',
  props: {
    items: Array
  },
  data () {
    return {
      info: this.items
    }
  }
}
</script>
