<template>
    <div class="wrp_table_clasificacion">
        <div class="wrp_busca_mes w_100 centrar">
            <q-select outlined label="Seleccione el Torneo" v-model="tournament" :options="tournaments" @input="obtainPositions(tournament)"/>
        </div>
        <div v-if="path === 'squash'" class="wrp_table_clasificacion">
          <tr>
            <th>Ranking</th>
            <th>Cambio</th>
            <th>Nombre</th>
            <th>Puntaje</th>
          </tr>
          <tr v-for="(item, key) in itemsPositions" :key="key">
              <td>{{ item.field_posicion }}</td>
              <td>{{ item.field_equipo }}</td>
              <td>{{ item.field_ganados }}</td>
              <td>{{ item.field_perdidos }}</td>
          </tr>
        </div>
        <div v-if="path !== 'squash'" class="wrp_table_clasificacion">
            <table>
                <tr>
                  <th>Posición</th>
                  <th>Equipo</th>
                  <th>Ganados</th>
                  <th>Perdidos</th>
                  <th>Empatados</th>
                </tr>
                <tr v-for="(item, key) in itemsPositions" :key="key">
                  <td>{{ item.field_posicion }}</td>
                  <td>{{ item.field_equipo }}</td>
                  <td>{{ item.field_ganados }}</td>
                  <td>{{ item.field_perdidos }}</td>
                  <td>{{ item.field_empatados }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>

export default {
  name: 'TablaClasificacion',
  props: {
    items: Array,
    obtainPositions: Function,
    positions: Array
  },
  data () {
    return {
      tournaments: this.items,
      tournament: '',
      itemsPositions: this.positions
    }
  }
}
</script>
