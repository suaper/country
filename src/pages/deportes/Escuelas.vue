 <template>
    <q-page class="flex flex-center view_quienes_somos">
      <Menudeportes currentItem="/deportes/escuelas" v-if="path !== 'golf'"/>
      <MenuDeporteInterno currentItem="/deportes/golf/escuelas" v-if="path === 'golf'" />

      <Banner :banner="info" :bannerSlide="slide" v-if="loadedInfo"/>
      <div class="q-pb-md all_width bg_gris">
          <div class="centrar q-py-md w_1100 escuelas">
              <div class="center text-center q-pt-md q-my-md titulos">Escuelas</div>
              <Anclas :items="filters" :path="path" :goAnchor="goToAnchor" v-if="path !== 'golf'"/>
          </div>
      </div>
      <div class="q-pb-md all_width bg_amarillo" v-for="(item, key) in personal" :key="'not-golf-'+key" :id="item.title.toLowerCase()" v-show="path !== 'golf'">
          <div class="centrar q-py-md w_1100 escuelas">
              <div class="style_title q-my-lg flex flex-staf align-center">
                  <h5 class="q-my-none">{{ item.title }}</h5>
                  <q-btn class="azul q-my-none q-mx-md bg_white_i" label="Contacto" icon-right="arrow_right_alt"/>
              </div>
              <TablesEscuelas :items="item.subServices" :permissions="item.permissions"/>
          </div>
      </div>
      <div class="q-pb-md all_width bg_gris" v-for="(item, key) in personal" :key="'golf-'+key" :id="item.title.toLowerCase()" v-show="path === 'golf' && item.title === 'Golf'">
          <div class="centrar q-py-md w_1100 escuelas">
              <div class="style_title q-my-lg flex flex-staf align-center">
                  <h5 class="q-my-none">{{ item.title }}</h5>
                  <!--<q-btn class="azul q-my-none q-mx-md bg_white_i" label="Contacto" icon-right="arrow_right_alt"/>-->
              </div>
              <TablesEscuelas :items="item.subServices" :permissions="item.permissions"/>
          </div>
      </div>
    </q-page>
</template>

<script>
import Menudeportes from 'pages/submenus/Menudeportes'
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Anclas from 'pages/componentes/Anclas'
import Banner from 'pages/componentes/Uno'
import TablesEscuelas from 'pages/componentes/TablesEscuelas'
import configServices from '../../services/config'

export default {
  name: 'EscuelasFutbol',
  components: {
    Menudeportes,
    MenuDeporteInterno,
    Anclas,
    Banner,
    TablesEscuelas
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      key: 0,
      info: {},
      slidecontent: 0,
      personal: [],
      filters: [],
      urlSite: 'https://obt3.cl/',
      multimediaHome: [],
      pop_reservar_spa: false,
      loadedPersonal: false,
      loadedInfo: false,
      subPath: ''
    }
  },
  created () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
    this.subPath = currentPath[3]

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
    goToAnchor (e, item) {
      e.preventDefault()
      const el = document.querySelector('#' + item.toLowerCase())
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
      configServices.loadData(this, '/slider-deportes/' + _this.path + '/json', {
        callBack: (data) => {
          _this.info = data[0]
          _this.slide = data[0].field_slider_sport[0].target_uuid
          _this.loadedInfo = true
        }
      })

      configServices.loadData(this, '/escuelas/' + _this.path + '/json', {
        callBack: (data) => {
          data.map((item, key) => {
            var filter = {
              title: item.title
            }
            const isFound = _this.filters.find((element, index) => {
              if (element.title === item.title) {
                _this.filters.splice(index, 1)
                return element
              }
            })

            if (typeof isFound !== 'undefined') {
              _this.filters.push(filter)
            } else {
              _this.filters.push(filter)
            }

            var categ = true

            if (item.field_categ === '') {
              categ = false
            }

            var edad = true

            if (item.field_edad === '') {
              edad = false
            }

            var horario = true

            if (item.field_horario === '') {
              horario = false
            }

            var resena = true

            if (item.field_resena === '') {
              resena = false
            }

            var staff = true

            if (item.field_staff === '') {
              staff = false
            }

            var service = {
              title: item.title,
              permissions: {
                categ: categ,
                edad: edad,
                horario: horario,
                resena: resena,
                staff: staff
              },
              subServices: [
                {
                  field_categ: item.field_categ,
                  field_edad: item.field_edad,
                  field_horario: item.field_horario,
                  field_resena: item.field_resena,
                  field_staff_sport: item.field_staff_sport
                }
              ]
            }

            const isFounded = _this.personal.find((element, index) => {
              if (element.title === item.title) {
                _this.personal.splice(index, 1)
                return element
              }
            })

            if (isFounded && typeof isFounded !== 'undefined') {
              isFounded.subServices.push({
                field_categ: item.field_categ,
                field_edad: item.field_edad,
                field_horario: item.field_horario,
                field_resena: item.field_resena,
                field_staff_sport: item.field_staff_sport
              })

              _this.personal.push(isFounded)
            } else {
              _this.personal.push(service)
            }
          })

          _this.loadedPersonal = true
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
