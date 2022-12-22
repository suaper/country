<template>
    <div class="w_900 wrap_botones_co">
        <ul class="wrp_actions_center_spa">
            <li v-for="(item, key) in descargables" :key="key">
              <img :src="urlSite + item.image">
              <strong>{{ item.title }}</strong>
              <a href="#" @click="showReglamentos($event, item.subServices)" icon-right="arrow_right_alt">Ver más  <span>-&gt;</span></a>
            </li>
        </ul>
        <q-dialog v-model="loadedReglamentos" >
            <q-card style="width: 700px; max-width: 80vw;" class="pop_mi_c">
                <q-card-section class="row items-center q-pb-none">
                    <ListaReglamentos :content="reglamentos" v-if="loadedReglamentos" :key="key"/>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import ListaReglamentos from 'pages/componentes/ListaReglamentos'

export default {
  name: 'Descargables',
  props: {
    info: Array
  },
  components: {
    ListaReglamentos
  },
  data () {
    return {
      descargables: this.info,
      urlSite: 'https://www.pwcc.cl',
      reglamentos: [],
      loadedReglamentos: false,
      key: 0
    }
  },
  methods: {
    showReglamentos (e, items) {
      e.preventDefault()
      this.reglamentos = items
      this.key = this.key + 1
      this.loadedReglamentos = true
    }
  }
}
</script>
