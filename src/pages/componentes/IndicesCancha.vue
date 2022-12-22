<template>
    <div class="row flex flex-start indicies_canchas q-py-md">
        <div class="left">
            <h5>Ventajas</h5>
            <h5 class="text_normal">{{ items[0].field_intro_ventaja_cancha }}</h5>
        </div>
        <div class="info flex flex-start">
            <table :class="getClass(key)" v-for="(item, key) in items" :key="key">
                <tr>
                    <th>{{ item.field_selecc }}</th>
                </tr>
                <tr>
                    <td>{{ item.field_valor_rango }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>

export default {
  name: 'IndicesCancha',
  props: {
    info: Array
  },
  data () {
    return {
      items: this.info,
      urlSite: 'https://www.pwcc.cl',
      itemKey: 0
    }
  },
  methods: {
    getClass (key) {
      key = key + 1
      var result = key % 3
      result = result.toFixed(1)
      result = parseFloat(result)
      if (result === 1) {
        return 't_azul'
      } else if (result === 2) {
        return 't_blanca'
      } else {
        return 't_roja'
      }
    }
  }
}
</script>
