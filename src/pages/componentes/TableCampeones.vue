<template>
    <div class="wrp_table_ranking">
        <div class="wrp_table_ranking">
            <table>
                <tr>
                    <th>Año</th>
                    <th>Nombre</th>
                </tr>
                <tr>
                    <td>1996</td>
                    <td>Matías Dominguez</td>
                </tr>
                <tr>
                    <td>1996</td>
                    <td>Matías Dominguez</td>
                </tr>
                <tr>
                    <td>1996</td>
                    <td>Matías Dominguez</td>
                </tr>
                <tr>
                    <td>1996</td>
                    <td>Matías Dominguez</td>
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
