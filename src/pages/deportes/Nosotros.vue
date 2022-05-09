 <template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno currentItem="/deportes/hockey/nosotros"/>
    <Banner :banner="info" :bannerSlide="slide" v-if="loadedInfo"/>

    <div class="q-pb-md all_width bg_gris">
        <div class="centrar w_1100">
            <div class="center text-center q-my-lg titulos">Nosotros</div>
            <Historia :content="content" v-if="loadedContent" />
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo">
        <div class="centrar w_1100 fila_separador ">
            <div class="w_45">
                <h5 class="style_title">Comité</h5>
                <Comite :content="comite" :path="path" v-if="loadedComite"/>
            </div>
            <div class="w_45">
                <h5 class="style_title">Declaración Espíritu Amarillo</h5>
                <Declaracion :content="espiritu" v-if="loadedEspiritu" />
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import configServices from '../../services/config'

import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Banner from 'pages/componentes/Uno'
import Historia from 'pages/componentes/SoloTexto'
import Comite from 'pages/componentes/ImagenBoton'
import Declaracion from 'pages/componentes/FondoBlanco'

export default {
  name: 'Charlasculturales',
  components: {
    MenuDeporteInterno,
    Banner,
    Historia,
    Comite,
    Declaracion
  },
  data () {
    return {
      sliders: true,
      urlSite: 'https://pwccdev.mkbk.digital/',
      path: '',
      subPath: '',
      info: {},
      loadedInfo: false,
      content: {},
      loadedContent: false,
      comite: {},
      loadedComite: false,
      espiritu: {},
      loadedEspiritu: false
    }
  },
  mounted () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
    this.subPath = currentPath[3]

    this.getInfo()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/slider-deportes/' + _this.subPath + '-' + _this.path + '/json', {
        callBack: (data) => {
          _this.info = data[0]
          _this.slide = data[0].field_slider_sport[0].target_uuid
          _this.loadedInfo = true
        }
      })

      configServices.loadData(this, '/intro-internas-deportes/' + _this.subPath + '-' + _this.path + '/json', {
        callBack: (data) => {
          console.log(data)
          _this.content = data[0]
          _this.loadedContent = true
        }
      })

      configServices.loadData(this, '/comite-internas-deportes/' + _this.subPath + '-' + _this.path + '/json', {
        callBack: (data) => {
          _this.comite = data
          _this.loadedComite = true
        }
      })

      configServices.loadData(this, '/espiritu-deportes/' + _this.subPath + '-' + _this.path + '/json', {
        callBack: (data) => {
          _this.espiritu = data[0]
          _this.loadedEspiritu = true
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
