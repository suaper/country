<template>
    <div class="wrp_table_clasificacion">
        <table>
            <tr>
                <th>Entrenamiento</th>
                <th v-if="subPath === 'natacion-para-bebes'">Edad</th><!-- validar para que salga solo en natacion para bebes-->
                <th>Horarios</th>
                <th>Profesor/a</th>
            </tr>
            <tr v-for="(item, key) in info[0].subServices" :key="key">
                <td>{{ item.training }}</td>
                <td v-if="subPath === 'natacion-para-bebes'">1</td><!-- validar para que salga solo en natacion para bebes-->
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
    items: Array,
    path: String
  },
  data () {
    return {
      info: this.items,
      subPath: this.path
    }
  }
}
</script>
