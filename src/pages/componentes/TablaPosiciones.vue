<template>
    <div class="wrp_table_clasificacion">
        <div class="wrp_busca_mes w_100 centrar">
            <q-select outlined label="Seleccione el Torneo" v-model="tournament" :options="tournaments" @input="obtainPositions(tournament)"/>
        </div>
        <div v-if="path === 'squash'" class="wrp_table_clasificacion revisando">
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
        <div v-if="path === 'hockey'" class="wrp_table_clasificacion sidebe">
          <table class="agrande">
            <tr>
              <th>Pos</th>
              <th>Equipo</th>
              <th>PTS</th>
              <th>PJ</th>
              <th>PG</th>
              <th>PE</th>
              <th>PP</th>
            </tr>
            <tr v-for="(item, key) in itemsPositions" :key="key">
                <td>{{ item.field_posicion }}</td>
                <td>{{ item.field_equipo }}</td>
                <td>{{ item.field_puntos }}</td>
                <td>{{ item.field_pj }}</td>
                <td>{{ item.field_ganados }}</td>
                <td>{{ item.field_empatados }}</td>
                <td>{{ item.field_perdidos }}</td>
            </tr>
          </table>
        </div>
        <div v-if="path !== 'squash' && path !== 'hockey'" class="wrp_table_clasificacion nodebe">
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
    positions: Array,
    path: String
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
