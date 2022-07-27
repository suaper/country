 <template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno :currentItem="'/deportes/' + path + '/ramas'"/>
    <div class="q-pb-md all_width bg_gris">
        <div class="centrar q-py-md w_1100">
            <div class="center text-center q-pt-md q-my-md titulos">Rama</div>
            <Anclas :items="filters" :path="path" :goAnchor="goToAnchor"/>
        </div>
        <div class="centrar w_1200 q-pb-xl" id="rama-masculina">
            <h4 class="subtitle">Rama Masculina Plantel</h4>
            <DescRama :content="personalMasculino" v-if="loadedPersonalMasculino"/>
            <StaffView :info="personalMasculino" v-if="loadedPersonalMasculino"/>
        </div>
    </div>
    <div class="q-pb-md all_width bg_amarillo" id="rama-femenina">
        <div class="centrar w_1200 q-pb-xl">
            <h4 class="subtitle">Rama Femenina Plantel</h4>
            <DescRama :content="personalFemenino" v-if="loadedPersonalFemenino"/>
            <StaffView :info="personalFemenino" v-if="loadedPersonalFemenino"/>
        </div>
    </div>
  </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Anclas from 'pages/componentes/Anclas'
import StaffView from 'pages/componentes/StaffView'
import DescRama from 'pages/componentes/SoloTexto'
import configServices from '../../services/config'

export default {
  name: 'Categorias',
  components: {
    MenuDeporteInterno,
    Anclas,
    StaffView,
    DescRama
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      key: 0,
      info: {},
      slidecontent: 0,
      notices: [],
      filters: [],
      urlSite: 'https://pwccdev.mkbk.digital/',
      personalFemenino: [],
      pop_reservar_spa: false,
      loadedPersonalFemenino: false,
      personalMasculino: [],
      loadedPersonalMasculino: false
    }
  },
  created () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
    this.subPath = currentPath[3]
    this.getStaff()
  },
  methods: {
    goToAnchor (e, item) {
      e.preventDefault()
      const el = document.querySelector(item)
      var top = el.offsetTop
      window.scrollTo({
        top: top,
        left: 0,
        behavior: 'smooth'
      })
      // el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    getStaff () {
      var _this = this
      configServices.loadData(this, '/personal-staff-deportes-filters/' + _this.subPath + '-' + _this.path + '/rama-femenina', {
        callBack: (data) => {
          data[0].body = data[0].field_descripcion_servicio
          _this.personalFemenino = data
          _this.loadedPersonalFemenino = true
          _this.key = _this.key + 1
          _this.$q.loading.hide()
        }
      })

      configServices.loadData(this, '/personal-staff-deportes-filters/' + _this.subPath + '-' + _this.path + '/rama-masculina', {
        callBack: (data) => {
          data[0].body = data[0].field_descripcion_servicio
          _this.personalMasculino = data
          _this.loadedPersonalMasculino = true
          _this.key = _this.key + 1
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
