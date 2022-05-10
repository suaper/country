<template>
    <div class="wrp_table_ranking">
        <div class="wrp_table_ranking">
            <table>
                <tr>
                    <th>Ranking</th>
                    <th>Cambio</th>
                    <th>Nombre</th>
                    <th>Puntaje</th>
                </tr>
                <tr v-for="(item, key) in info[0].subServices" :key="key">
                    <td>{{ item.field_ranking }}</td>
                    <td><span :class="(item.field_sube_baja === 'Sube') ? 'material-icons-outlined upp' : 'material-icons-outlined down'"></span>{{ item.field_cambio }}</td>
                    <td>{{ item.field_nombre_y_apellidos }}</td>
                    <td>{{ item.field_puntaje }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>

export default {
  name: 'TableRanking',
  props: {
    path: String,
    items: Array
  },
  data () {
    return {
      subPath: this.path,
      month: '',
      info: this.items
    }
  },
  created () {
    console.log(this.info)
  }
}
</script>
