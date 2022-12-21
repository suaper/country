 <template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno :currentItem="'/deportes/' + path + '/staff'" v-if="path !== 'futbol'"/>
    <MenuDeporteInterno :currentItem="'/deportes/' + path + '/equipo'" v-if="path === 'futbol'"/>
    <div class="q-pb-md all_width bg_gris">
        <div class="centrar q-py-md w_1100">
            <div class="center text-center q-pt-md q-my-md titulos">Staff</div>
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
      urlSite: 'https://www.pwcc.cl',
      multimediaHome: [],
      pop_reservar_spa: false,
      loadedPersonal: false
    }
  },
  created () {
    var _this = this
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
    this.getStaff()

    if (this.path === 'futbol') {
      configServices.loadData(this, '/personal-staff-deportes-filters/' + _this.path + '/escuela', {
        callBack: (data) => {
          console.log(data)
          _this.personal = data
          _this.loadedPersonal = true
          _this.key = _this.key + 1
          _this.$q.loading.hide()
        }
      })
    }
  },
  methods: {
    addCurrentClass (e) {
      const collection = document.getElementsByClassName('anchor')
      for (let index = 0; index < collection.length; index++) {
        collection[index].classList.remove('anchor-active')
      }
      e.currentTarget.classList.add('anchor-active')
    },
    filterStaff (e, item) {
      e.preventDefault()
      this.addCurrentClass(e)

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

          if (this.path !== 'futbol' && this.path !== 'tennis') {
            _this.personal = data
            _this.loadedPersonal = true
            _this.$q.loading.hide()
          }
        }
      })
    }
  }
}
</script>
