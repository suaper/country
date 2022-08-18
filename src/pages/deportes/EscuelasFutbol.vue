 <template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno currentItem="/deportes/futbol/escuela"/>
    <Banner :banner="info" :bannerSlide="slide" v-if="loadedInfo"/>

    <div class="q-pb-md all_width bg_gris ece_fut">
        <div class="centrar w_1100">
            <div class="center text-center q-my-lg titulos">Escuelas</div>

            <div class="row_2 centrar flex all_width">
                <div class="w_25 q-mx-md">
                    <ImagenPublicitaria :content="horarios" :path="path" v-if="loadedHorarios"/>
                </div>
                <div class="w_70 q-mx-md">
                    <h5 class="style_title q-my-lg" >Horarios e Inscripción</h5>
                    <div class="row_2 centrar flex">
                        <div class="w_45">
                            <h5 class="text_normal">Rama Femenina</h5>
                            <TablaHorarios :items="horariosWoman" v-if="loadedHorarios" path="Escuelas - Rama Femenina"/>
                        </div>
                        <div class="w_45">
                            <h5 class="text_normal">Rama Masculina</h5>
                            <TablaHorarios :items="horariosMen" v-if="loadedHorarios" path="Escuelas - Rama Masculina"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Banner from 'pages/componentes/Uno'
import ImagenPublicitaria from 'pages/componentes/ImagenPublicitaria'
import TablaHorarios from 'pages/componentes/TablaHorarios'
import configServices from '../../services/config'

export default {
  name: 'Categorias',
  components: {
    MenuDeporteInterno,
    Banner,
    ImagenPublicitaria,
    TablaHorarios
  },
  data () {
    return {
      sliders: true,
      slide: '0',
      urlSite: 'https://obt3.cl/',
      path: '',
      subPath: '',
      info: {},
      loadedInfo: false,
      content: {},
      loadedContent: false,
      comite: {},
      loadedComite: false,
      espiritu: {},
      loadedEspiritu: false,
      womanCategories: [],
      menCategories: [],
      reglamentos: {},
      loadedReglamentos: false,
      horarios: [],
      loadedHorarios: false,
      horariosMen: [],
      horariosWoman: []
    }
  },
  mounted () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
    this.subPath = currentPath[3]

    this.getInfo()
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

      configServices.loadData(this, '/horarios-inscripciones-escuelas-seccion/' + _this.subPath + '-' + _this.path + '/json', {
        callBack: (data) => {
          _this.horarios = data

          data.map((item, key) => {
            if (item.field_titulo_tabla === 'Rama Masculina') {
              _this.horariosMen.push(item)
            } else {
              _this.horariosWoman.push(item)
            }
          })

          _this.loadedHorarios = true
        }
      })

      _this.$q.loading.hide()
    }
  }
}
</script>
