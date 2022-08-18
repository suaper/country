<template>
    <div class="row flex flex-start indicies_canchas q-py-md">
        <div class="left">
            <h5>Ventajas</h5>
            <h5 class="text_normal">{{ items[0].field_intro_ventaja_cancha }}</h5>
        </div>
        <div class="info flex flex-start">
            <table :class="getClass(key)" v-for="(item, key) in items" :key="key">
                <tr>
                    <th>Slope</th>
                </tr>
                <tr>
                    <td>123.00</td>
                </tr>
            </table>
            <table class="t_roja">
                <tr>
                    <th>Slope</th>
                </tr>
                <tr>
                    <td>123.00</td>
                </tr>
            </table>
            <table class="t_blanca">
                <tr>
                    <th>Slope</th>
                </tr>
                <tr>
                    <td>123.00</td>
                </tr>
            </table>
            <table  class="t_azul">
                <tr>
                    <th>Rating</th>
                </tr>
                <tr>
                    <td>123.00</td>
                </tr>
            </table>
            <table  class="t_roja">
                <tr>
                    <th>Rating</th>
                </tr>
                <tr>
                    <td>123.00</td>
                </tr>
            </table>
            <table  class="t_blanca">
                <tr>
                    <th>Rating</th>
                </tr>
                <tr>
                    <td>123.00</td>
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
      urlSite: 'https://obt3.cl/'
    }
  },
  methods: {
    getClass (key) {
      key = key + 1
      var result = key / 3
      result = result.toFixed(1)
      result = parseFloat(result)
      if (result === 1) {
        return 't_roja'
      } else if (result === 0.3) {
        return 't_azul'
      } else {
        return 't_blanca'
      }
    }
  }
}
</script>
