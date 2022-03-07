<template>
  <q-page class="view_directorio gris_home q-pb-xl">
    <div class="wrp_submenu">
     <Menusomos currentItem="/quienes-somos/expresidentes" />
    </div>
  <h2 class="center title">
      Ex-Presidentes
  </h2>
  <div class="wrp_expresidentes" v-if="presidents.length">
    <div class="caja_directivos bg-white">
        <ul class="list_expresidentes">
            <li v-for="(item, key) in presidents" :key="key">
                <span class="fecha">{{ item.field_fecha_inicio + ' - ' + item.field_fecha_fin }}</span>
                <span class="separador"></span>
                <span class="nombre">{{ item.field_nombre_presidente }}</span>
            </li>
        </ul>
    </div>
    <div class="actiones_scroll" >
        <ul>
            <li> <span class="up" @click="scrollUp"> </span></li>
            <li> <span class="down" @click="scrollDown"> </span> </li>
        </ul>
    </div>
  </div>

  </q-page>
</template>

<script>
import Menusomos from '../../pages/submenus/Menusomos'
import configServices from '../../services/config'

export default {
  name: 'Expresidentes',
  components: {
    Menusomos
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      autoplay: true,
      presidents: []
    }
  },
  created () {
    this.$q.loading.show()
    this.getPresidents()
  },
  methods: {
    getPresidents () {
      var _this = this
      configServices.loadData(this, '/expresidentes/json', {
        callBack: (data) => {
          _this.presidents = data
          _this.$q.loading.hide()
        }
      })
    },
    scrollUp () {
      const content = this.$el.querySelector('.caja_directivos')
      content.scrollTop -= 50
    },
    scrollDown () {
      const content = this.$el.querySelector('.caja_directivos')
      content.scrollTop += 40
    }
  }
}
</script>
