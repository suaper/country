<template>
  <div class="new_wrap">
    <div class="buscador_general">
      <Transition name="slide-fade">
        <q-input
          v-model="search"
          filled
          placeholder="Buscar"
          v-if="textSearch"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </Transition>
      <q-btn class="peque" round color="white" icon="search" @click="searchClick()"/>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Buscador',
  props: {
    currentItem: String
  },
  data () {
    return {
      current: this.currentItem,
      search: '',
      textSearch: false
    }
  },
  methods: {
    searchClick () {
      if (this.search === '') {
        if (this.textSearch) {
          this.textSearch = false
        } else {
          this.textSearch = true
        }
      } else {
        localStorage.setItem('search', this.search)
        this.$router.push('/vista-buscador')
      }
    }
  }
}
</script>
