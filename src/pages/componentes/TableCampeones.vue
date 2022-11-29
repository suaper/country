<template>
    <div class="wrp_table_ranking">
        <div class="wrp_table_ranking">
            <table>
                <tr>
                    <th>Año</th>
                    <th>Nombre</th>
                </tr>
                <tr v-for="(item, key) in info[current - 1]" :key="key" v-show="item.field_nombre_y_apellidos !== ''">
                    <td>{{ item.field_ano }}</td>
                    <td>{{ item.field_nombre_y_apellidos }}</td>
                </tr>
            </table>
            <q-pagination
              v-model="current"
              :max="max"
              direction-links
              boundary-links
              icon-first="skip_previous"
              icon-last="skip_next"
              icon-prev="fast_rewind"
              icon-next="fast_forward"
            />
        </div>
    </div>
</template>

<script>

export default {
  name: 'TableCampeones',
  props: {
    currentItem: Number,
    items: Array,
    itemMax: Number
  },
  data () {
    return {
      subPath: this.path,
      month: '',
      info: this.items,
      current: 1,
      max: this.itemMax
    }
  }
}
</script>
