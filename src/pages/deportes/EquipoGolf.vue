<template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno :currentItem="'/deportes/' + path + '/equipo'"/>
    <div class="q-pb-md all_width bg_gris">
        <div class="centrar q-py-md w_1100">
            <div class="center text-center q-pt-md q-my-md titulos">Equipo</div>
            <Anclas :items="filters" :path="path" :goAnchor="goToAnchor"/>
        </div>
        <div class="centrar w_1200 q-pb-xl" id="comite-golf">
            <h4 class="subtitle">Comité de golf</h4>
            <DescRama :content="personalComiteGolf" v-if="loadedComiteGolf"/>
            <StaffView :info="personalComiteGolf" v-if="loadedComiteGolf"/>
        </div>
    </div>
    <div class="q-pb-md all_width bg_amarillo" id="comite-cancha">
        <div class="centrar w_1200 q-pb-xl">
            <h4 class="subtitle">Comité de Cancha</h4>
            <DescRama :content="personalCancha" v-if="loadedComiteCancha"/>
            <StaffView :info="personalCancha" v-if="loadedComiteCancha"/>
        </div>
    </div>
    <div class="q-pb-md all_width bg_gris" id="profesores">
        <div class="centrar w_1200 q-pb-xl">
            <h4 class="subtitle">Profesores</h4>
            <DescRama :content="personalProfesores" v-if="loadedPersonalProfesores"/>
            <StaffView :info="personalProfesores" v-if="loadedPersonalProfesores"/>
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
      urlSite: 'https://obt3.cl',
      personalComiteGolf: [],
      pop_reservar_spa: false,
      loadedComiteGolf: false,
      personalCancha: [],
      loadedComiteCancha: false,
      personalProfesores: [],
      loadedPersonalProfesores: false
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
      configServices.loadData(this, '/personal-staff-deportes-filters/' + _this.path + '/comite-de-golf', {
        callBack: (data) => {
          data[0].body = data[0].field_descripcion_servicio
          _this.personalComiteGolf = data
          _this.loadedComiteGolf = true
          _this.key = _this.key + 1
          _this.$q.loading.hide()
        }
      })

      configServices.loadData(this, '/personal-staff-deportes-filters/' + _this.path + '/comite-de-cancha', {
        callBack: (data) => {
          data[0].body = data[0].field_descripcion_servicio
          _this.personalCancha = data
          _this.loadedComiteCancha = true
          _this.key = _this.key + 1
          _this.$q.loading.hide()
        }
      })

      configServices.loadData(this, '/personal-staff-deportes-filters/' + _this.path + '/profesores', {
        callBack: (data) => {
          data[0].body = data[0].field_descripcion_servicio
          _this.personalProfesores = data
          _this.loadedPersonalProfesores = true
          _this.key = _this.key + 1
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
