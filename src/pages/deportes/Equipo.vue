 <template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno :currentItem="'/deportes/' + path + '/equipo'"/>
    <div class="q-pb-md all_width bg_gris">
        <div class="centrar q-py-md w_1100">
            <div class="center text-center q-pt-md q-my-md titulos">Equipo</div>
            <Anclas :items="filters" :path="path" :goAnchor="filterStaff"/>
        </div>
        <div class="centrar w_1200 q-pb-xl">
            <StaffView :info="personal" :key="key" v-if="loadedPersonal" />
        </div>
    </div>
  </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Anclas from 'pages/componentes/Anclas'
import StaffView from 'pages/componentes/StaffView'
import configServices from '../../services/config'

export default {
  name: 'Categorias',
  components: {
    MenuDeporteInterno,
    Anclas,
    StaffView
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
      urlSite: 'https://obt3.cl',
      multimediaHome: [],
      pop_reservar_spa: false,
      loadedPersonal: false
    }
  },
  created () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
    this.getStaff()
  },
  methods: {
    filterStaff (e, item) {
      e.preventDefault()
      if (item === 'all') {
        this.getStaff()
      } else {
        var filter = item.replaceAll(' ', '-').toLowerCase()
        var _this = this
        configServices.loadData(this, '/personal-staff-deportes-filters/' + _this.path + '/' + filter, {
          callBack: (data) => {
            _this.personal = data
            _this.loadedPersonal = true
            _this.key = _this.key + 1
            _this.$q.loading.hide()
          }
        })
      }
    },
    getStaff () {
      var _this = this
      configServices.loadData(this, '/personal-staff-deportes/' + _this.path, {
        callBack: (data) => {
          data.map((item, key) => {
            var filter = {
              title: item.field_categoria_cargo
            }
            const isFound = _this.filters.find((element, index) => {
              if (element.title === item.field_categoria_cargo) {
                _this.filters.splice(index, 1)
                return element
              }
            })

            if (typeof isFound !== 'undefined') {
              _this.filters.push(filter)
            } else {
              _this.filters.push(filter)
            }
          })

          _this.personal = data
          _this.loadedPersonal = true
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
