<template>
    <div>
        <table>
            <tr>
                <td>
                    <h4 class="subtitle q-my-md">{{ info[0].title[0].value }}</h4>
                </td>
                <td class="texto_normal q-pl-md" v-html="info[0].body[0].value"></td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
  name: 'TituloLateral',
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
