<template>
    <div class="wrp_table_clasificacion">
        <table>
            <tr>
                <th>Entrenamiento</th>
                <th>Horarios</th>
                <th>Profesor/a</th>
            </tr>
            <tr v-for="(item, key) in info[0].subServices" :key="key">
                <td>{{ item.training }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.teacher }}</td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
  name: 'TablaClasificacion',
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
