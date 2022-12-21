<template>
  <q-page class="view_directorio gris_home">
    <div class="wrp_submenu">
     <Menusomos currentItem="/quienes-somos/directorio" />
    </div>
  <h2 class="center title">
      Directorio
  </h2>
  <div class="row_director bg_amarillo" v-if="directory.length">
      <ul>
          <li>
              <div class="wrp_foto">
                <img class="cien" :src="urlSite + president.field_imagen_persona">
              </div>
              <div class="nombre">
                  <span class="name">{{ president.title }}</span>
                  <span class="cargo">{{ president.field_cargo }}</span>
              </div>
          </li>
      </ul>
  </div>
  <div class="content">
    <div class="list_directivos" v-if="directory.length">
      <ul>
        <li v-for="(item, key) in directory" :key="key">
            <div class="wrp_foto">
              <img class="cien" :src="urlSite + item.field_imagen_persona">
            </div>
            <div class="nombre">
                <span class="name">{{ item.title }}</span>

            </div>
        </li>

        <li>
            <div class="wrp_foto">
              <img class="cien" :src="urlSite + gerent.field_imagen_persona">
            </div>
            <div class="nombre">
                <span class="name">{{ gerent.title }}</span>
                  <span class="cargo">{{ gerent.field_cargo }}</span>
            </div>
        </li>
      </ul>
    </div>
  </div>

  </q-page>
</template>

<script>
import Menusomos from '../../pages/submenus/Menusomos'
import configServices from '../../services/config'

export default {
  name: 'Directorio',
  components: {
    Menusomos
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      autoplay: true,
      directory: [],
      urlSite: 'https://www.pwcc.cl',
      president: [],
      gerent: []
    }
  },
  created () {
    this.$q.loading.show()
    this.getDirectory()
  },
  methods: {
    getDirectory () {
      var _this = this
      configServices.loadData(this, '/directorio/json', {
        callBack: (data) => {
          var president = data.filter(item => {
            if (item.field_cargo === 'Presidente') {
              return true
            }
          })

          _this.president = president[0]

          _this.directory = data.filter(item => {
            if (item.field_cargo !== 'Presidente' && item.field_cargo !== 'Gerente General') {
              return true
            }
          })

          var gerente = data.filter(item => {
            if (item.field_cargo === 'Gerente General') {
              return true
            }
          })

          _this.gerent = gerente[0]
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
