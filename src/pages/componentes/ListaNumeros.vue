<template>
    <ul class="list_numeros q-py-md">
        <li v-for="(item, key) in info" :key="key">
            <span class="contador"> {{ key++ + 1 }} </span>
            <h6>{{ item.field_titulo_campo }}</h6>
            <p v-html="item.field_descripcion"></p>
        </li>
    </ul>
</template>

<script>

export default {
  name: 'Video',
  props: {
    items: Array
  },
  data () {
    return {
      info: this.items,
      urlSite: 'https://www.pwcc.cl'
    }
  }
}
</script>
