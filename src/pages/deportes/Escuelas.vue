 <template>
    <q-page class="flex flex-center view_quienes_somos">
        <MenuDeporteInterno :currentItem="'/deportes/' + path + '/staff'"/>
        <div class="q-pb-md all_width bg_gris">
            <div class="centrar q-py-md w_1100 escuelas">
                <div class="center text-center q-pt-md q-my-md titulos">Escuelas</div>
                <Anclas :items="filters" :path="path" :goAnchor="filterStaff"/>
            </div>
        </div>
        <div class="q-pb-md all_width bg_amarillo">
            <div class="centrar q-py-md w_1100 escuelas">
                <div class="style_title q-my-lg flex flex-staf align-center">
                    <h5 class="q-my-none">Golf</h5>
                    <q-btn class="azul q-my-none q-mx-md bg_white_i" label="Contacto" icon-right="arrow_right_alt"/>
                </div>
                <TablesEscuelas />
            </div>
        </div>
        <div class="q-pb-md all_width bg_gris">
            <div class="centrar q-py-md w_1100 escuelas">
                <div class="style_title q-my-lg flex flex-staf align-center">
                    <h5 class="q-my-none">Golf</h5>
                    <q-btn class="azul q-my-none q-mx-md bg_white_i" label="Contacto" icon-right="arrow_right_alt"/>
                </div>
                <TablesEscuelas />
            </div>
        </div>
        <div class="q-pb-md all_width bg_amarillo">
            <div class="centrar q-py-md w_1100 escuelas">
                <div class="style_title q-my-lg flex flex-staf align-center">
                    <h5 class="q-my-none">Golf</h5>
                    <q-btn class="azul q-my-none q-mx-md bg_white_i" label="Contacto" icon-right="arrow_right_alt"/>
                </div>
                <TablesEscuelas />
            </div>
        </div>
    </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Anclas from 'pages/componentes/Anclas'
import TablesEscuelas from 'pages/componentes/TablesEscuelas'
import configServices from '../../services/config'

export default {
  name: 'EscuelasFutbol',
  components: {
    MenuDeporteInterno,
    Anclas,
    TablesEscuelas
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
