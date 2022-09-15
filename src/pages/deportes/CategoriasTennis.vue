 <template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno :currentItem="'/deportes/' + path + '/categorias'"/>
    <Banner :banner="info" :bannerSlide="slide" v-if="loadedInfo"/>

    <div class="q-pb-md all_width bg_gris">
        <div class="centrar w_1100">
            <div class="center text-center q-my-lg titulos">Categorías</div>
        <div class="row_2 centrar flex-center cat_mov">
            <div class="w_35 q-mx-md">
                <div class="wrp_busca_mes w_100 centrar select">
                  <span class=" label_select">Seleccione una categoría:</span>
                  <q-select outlined class="q-mb-md" label="Escuela" v-model="escuela" :options="escuelas"/>
                </div>
            </div>
            <div class="w_35 q-mx-md">
                <div class="wrp_busca_mes w_100 centrar select">
                  <span class=" label_select">Seleccione un nivel:</span>
                  <q-select outlined class="q-mb-xl" label="Iniciación" v-model="nivel" :options="niveles" @input="getItemsByNivel(nivel)" />
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo collapsa_mo" v-if="loadedIniciacion">
        <div class="centrar w_1100 fila_separador ">
            <TituloLateral :items="iniciacion" :key="keyIniciacion" v-if="loadedIniciacion"/>
        </div>
    </div>
    <div class="q-py-xl all_width bg_gris collapsa_mo" v-if="loadedProfesores">
        <div class="centrar w_1100 ">
            <div class="all_width">
                <h5 class="style_title q-my-lg" >Profesores</h5>
                <Profesores :items="profesores" :key="keyProfesores" v-if="loadedProfesores"/>
            </div>
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo collapsa_an" v-if="loadedHorarios">
        <div class="centrar w_1100">

          <div class="row_2 centrar flex">
              <div class="w_35 q-mx-md">
              <h5 class="style_title q-my-lg" >Horarios e Inscripción</h5>
                  <TablaHorarios :items="horarios" :key="keyHorarios" v-if="loadedHorarios" :path="path"/>
              </div>
              <div class="w_65 q-mx-md">
                  <Imagen :content="horarios" :key="keyHorarios" v-if="loadedHorarios" :path="subPath + '-' + path"/>
              </div>
          </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Banner from 'pages/componentes/Uno'
import TituloLateral from 'pages/componentes/TituloLateral'
import Profesores from 'pages/componentes/Profesores'
import TablaHorarios from 'pages/componentes/TablaHorarios'
import Imagen from 'pages/componentes/ImagenBoton'

import configServices from '../../services/config'

export default {
  name: 'Categorias',
  components: {
    MenuDeporteInterno,
    Banner,
    TituloLateral,
    Profesores,
    TablaHorarios,
    Imagen
  },
  data () {
    return {
      sliders: true,
      slide: '0',
      urlSite: 'https://obt3.cl',
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
      escuelas: [],
      niveles: [],
      escuela: '',
      nivel: '',
      keyIniciacion: 0,
      keyProfesores: 0,
      keyHorarios: 0,
      iniciacion: [],
      profesores: [],
      horarios: [],
      loadedIniciacion: false,
      loadedProfesores: false,
      loadedHorarios: false
    }
  },
  created () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
    this.subPath = currentPath[3]

    this.getInfo()
    this.$q.loading.hide()
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

      configServices.loadData(this, '/niveles-tennis/json', {
        callBack: (data) => {
          data.map((item, key) => {
            var level = {
              id: item.tid,
              label: item.name
            }

            _this.niveles.push(level)
          })
        }
      })

      configServices.loadData(this, '/escuelas-tennis/json', {
        callBack: (data) => {
          data.map((item, key) => {
            var level = {
              id: item.tid,
              label: item.name
            }

            _this.escuelas.push(level)
          })
        }
      })
    },
    getItemsByEscuela (escuela) {
      var _this = this
      configServices.loadData(this, '/intro-categorias-deportes-escuelas/' + _this.subPath + '-' + _this.path + '/json/' + escuela.id, {
        callBack: (data) => {
          _this.iniciacion = data
          _this.keyIniciacion = _this.keyIniciacion + 1
          _this.loadedIniciacion = true
        }
      })

      configServices.loadData(this, '/profesores-deportes-escuelas/' + _this.subPath + '-' + _this.path + '/json/' + escuela.id, {
        callBack: (data) => {
          _this.profesores = data
          _this.keyProfesores = _this.keyProfesores + 1
          _this.loadedProfesores = true
        }
      })

      configServices.loadData(this, '/horarios-inscripciones-escuelas/' + _this.subPath + '-' + _this.path + '/json/' + escuela.id, {
        callBack: (data) => {
          _this.horarios = data
          _this.keyHorarios = _this.keyHorarios + 1
          _this.loadedHorarios = true
        }
      })

      this.$q.loading.hide()
    },
    getItemsByNivel (escuela) {
      console.log(this.escuela)
      var _this = this
      configServices.loadData(this, '/intro-categorias-deportes-niveles/' + _this.subPath + '-' + _this.path + '/json/' + escuela.id + '/' + this.escuela.id, {
        callBack: (data) => {
          _this.iniciacion = data
          _this.keyIniciacion = _this.keyIniciacion + 1
          _this.loadedIniciacion = true
        }
      })

      configServices.loadData(this, '/profesores-deportes-nivel/' + _this.subPath + '-' + _this.path + '/json/' + escuela.id + '/' + this.escuela.id, {
        callBack: (data) => {
          _this.profesores = data
          _this.keyProfesores = _this.keyProfesores + 1
          _this.loadedProfesores = true
        }
      })

      configServices.loadData(this, '/horarios-inscripciones-niveles/' + _this.subPath + '-' + _this.path + '/json/' + escuela.id + '/' + this.escuela.id, {
        callBack: (data) => {
          _this.horarios = data
          _this.keyHorarios = _this.keyHorarios + 1
          _this.loadedHorarios = true
        }
      })

      this.$q.loading.hide()
    }
  }
}
</script>
