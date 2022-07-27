 <template>
  <q-page class="flex flex-center view_quienes_somos">
   <MenuDeporteInterno currentItem="/deportes/natacion/actividades" />
   <Banner :banner="info" :bannerSlide="slide" v-if="loadedInfo"/>
   <div class="q-pb-md all_width bg_gris wrp_club hazte_socio">
        <div class="centrar w_1200">
            <div class="center text-center q-my-lg titulos">Actividades</div>
            <h4 class="subtitle">Eventos</h4>
            <Eventos :info="events" v-if="loadedEvents"/>
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1100 bg_amarillo">
            <h4 class="subtitle q-my-md">Descargables</h4>
            <Descargables :info="descargables" v-if="loadedDescargables" />
        </div>
    </div>
  </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Banner from 'pages/componentes/Uno'
import Eventos from 'pages/componentes/CincoProximos.vue'
import Descargables from 'pages/componentes/Descargables'
import configServices from '../../services/config'

export default {
  name: 'NatacionBebes',
  components: {
    MenuDeporteInterno,
    Banner,
    Eventos,
    Descargables
  },
  data () {
    return {
      sliders: true,
      slide: '0',
      urlSite: 'https://pwccdev.mkbk.digital/',
      path: '',
      subPath: '',
      info: {},
      loadedInfo: false,
      content: {},
      loadedContent: false,
      comite: {},
      loadedComite: false,
      loadedEvents: false,
      events: [],
      espiritu: {},
      loadedEspiritu: false,
      categories: [],
      menCategories: [],
      descargables: [],
      loadedDescargables: false
    }
  },
  mounted () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
    this.subPath = currentPath[3]

    this.getInfo()
    this.getDownloads()
    this.getEvents()
    this.$q.loading.hide()
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
    getInfo () {
      var _this = this
      configServices.loadData(this, '/slider-deportes/' + _this.subPath + '-' + _this.path + '/json', {
        callBack: (data) => {
          _this.info = data[0]
          _this.slide = data[0].field_slider_sport[0].target_uuid
          _this.loadedInfo = true
        }
      })
    },
    getEvents () {
      var _this = this
      configServices.loadData(this, '/eventos/' + _this.subPath + '-' + _this.path + '/json', {
        callBack: (data) => {
          const n = 3
          _this.events = new Array(Math.ceil(data.length / n))
            .fill()
            .map(_ => data.splice(0, n))
          _this.loadedEvents = true
        }
      })
    },
    getDownloads () {
      var _this = this
      configServices.loadData(this, '/descargables-deportes/' + _this.subPath + '-' + _this.path + '/json', {
        callBack: (data) => {
          data.map((item, key) => {
            var service = {
              title: item.title,
              image: item.field_imagen_item_1,
              subServices: [
                {
                  field_archivo_pdf: item.field_archivo_pdf,
                  field_descripcion_pdf_1: item.field_descripcion_pdf_1,
                  title: item.field_titulo_pdf
                }
              ]
            }
            const isFound = _this.descargables.find((element, index) => {
              if (element.title === item.title) {
                _this.descargables.splice(index, 1)
                return element
              }
            })

            if (isFound && typeof isFound !== 'undefined') {
              isFound.subServices.push({
                field_archivo_pdf: item.field_archivo_pdf,
                field_descripcion_pdf_1: item.field_descripcion_pdf_1,
                title: item.field_titulo_pdf
              })

              _this.descargables.push(isFound)
            } else {
              _this.descargables.push(service)
            }
          })

          _this.loadedDescargables = true
        }
      })
    }
  }
}
</script>
