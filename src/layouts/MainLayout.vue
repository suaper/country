
<template>
  <q-layout view="hHh lpr fff" class="home" id="home">

    <q-header class="bg-white text-white" height-hint="98">
      <div class="wrap_top center">
        <img class="q-mt-lg" alt="img2" src="../assets/Home/logo-country-club.png">
        <div class="btn_right_top">
          <q-btn class="solomovil" v-if="!desktop" flat @click="drawerRight = !drawerRight" round dense icon="menu" />
        </div>
      </div>
      <q-tabs v-if="desktop" class="center nav_principal">
        <q-route-tab to="/" label="Inicio" />
        <q-route-tab to="/quienes-somos" @click="IrQuienesSomos()" label="Quiénes Somos" />
        <q-route-tab to="/mi-club" @click="IrMiClub()" label="Mi Club" />
        <q-route-tab to="/hazte-socio" @click="IrHazteSocio()" label="Hazte Socio" />
        <q-route-tab to="/gastronomia" label="Gastronomía" />
        <q-route-tab to="/eventos" label="Eventos" />
        <q-route-tab to="/special-days" label="Special Days" />
        <q-route-tab to="/deportes" label="Deportes" />
        <q-route-tab to="/kids" label="Kids" />
        <q-route-tab to="/cultura" label="Cultura" />
        <q-route-tab to="/spa" label="Spa & Wellness" />
        <q-route-tab to="/noticias" label="Noticias" />
        <q-route-tab to="/calendario" label="Calendario" />
      </q-tabs>
    </q-header>
    <q-drawer
      side="right"
      v-model="drawerRight"
      v-if="!desktop"
      show-if-above
      bordered
      :width="200"
      :breakpoint="500"
      class="bg-grey-3 wrp_nav_movil"
    >
      <q-scroll-area class="fit pruenamovil">
       <q-btn class="solomovil_dos" flat @click="drawerRight = !drawerRight" round dense icon="close" />
        <div class="q-pa-sm movil_nav">
          <q-tabs class="vertical">
            <q-route-tab to="/" label="Inicio" />
            <q-route-tab to="/quienes-somos" @click="IrQuienesSomos()" label="Quiénes Somos" />
            <q-route-tab to="/mi-club" @click="IrMiClub()" label="Mi Club" />
            <q-route-tab to="/hazte-socio" @click="IrHazteSocio()" label="Hazte Socio" />
            <q-route-tab to="/gastronomia" label="Gastronomía" />
            <q-route-tab to="/eventos" label="Eventos" />
            <q-route-tab to="/special-days" label="Special Days" />
            <q-route-tab to="/deportes" label="Deportes" />
            <q-route-tab to="/kids" label="Kids" />
            <q-route-tab to="/cultura" label="Cultura" />
            <q-route-tab to="/spa" label="Spa & Wellness" />
            <q-route-tab to="/noticias" label="Noticias" />
            <q-route-tab to="/calendario" label="Calendario" />
          </q-tabs>
        </div>
      </q-scroll-area>
    </q-drawer>
   <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer bordered class="bg-grey-8 text-white">
      <div class="fixed_redes">
        <ul>
          <li>
            <a @click="goToAnchor($event, '#home')" href="#"> <img class="q-mt-lg" alt="img2" src="../assets/Home/i-boton-subir.svg"></a>
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com/pages/PWCC-Prince-of-Wales-Country-Club/185321531516457"> <img class="q-mt-lg" alt="img2" src="../assets/Home/i-facebook.svg"></a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/countryclubchile/"> <img class="q-mt-lg" alt="img2" src="../assets/Home/i-instagram.svg"></a>
          </li>
        </ul>
      </div>
      <div class="q-py-md all_width bg_azul">
        <div class="row_wrap no-wrap flex justify-between" v-if="loadedInfo">
          <ul>
            <li>
              <strong>Dirección</strong>
              <p v-html="info.field_info[0].value"></p>
            </li>
            <li>
              <strong>Contáctenos</strong>
              <p v-html="info.body[0].value"></p>
            </li>
            <li>
              <strong>Cómo llegar</strong>
              <table  v-if="loadedEnlaces">
                <tr>
                  <td v-for="(item, key) in enlacesMaps" :key="key">
                    <a :href="item.field_enlace_map[0].uri" target="_blank">
                      <img class="q-mx-none" alt="img2" :src="item.field_ima[0].url">
                    </a>
                  </td>
                </tr>
              </table>
            </li>
            <li>
              <table>
                <tr>
                  <td>
                    <a target="_blank" :href="info.field_enlace[0].uri">
                      <img class="q-mx-none" alt="img2" :src="info.field_imagen_pago[0].url">
                    </a>
                  </td>
                </tr>
              </table>
            </li>
            <li>
              <table>
                <tr>
                  <td>
                    <strong>{{ info.field_titulo_desarrollador_[0].value }}</strong>
                  </td>
                  <td>
                    <a href="http://www.obg.cl/" target="_blank"><img class="q-mx-none" alt="img2" :src="info.field_imagen_desarrolll[0].url"></a>
                  </td>
                </tr>
              </table>
            </li>
          </ul>
        </div>
      </div>
    </q-footer>

  </q-layout>
</template>

<script>
import configServices from '../services/config'
import { Platform } from 'quasar'

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      info: {},
      loadedInfo: false,
      enlacesMaps: [],
      loadedEnlaces: false,
      drawerRight: false,
      desktop: false
    }
  },
  created () {
    if (Platform.is.desktop) {
      this.desktop = true
    }

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
      configServices.loadData(this, '/node/81?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.info.field_enlaces_maps.map((item, key) => {
            configServices.loadData(this, '/entity/paragraph/' + item.target_id + '?_format=json', {
              callBack: (data) => {
                _this.enlacesMaps.push(data)
                _this.loadedEnlaces = true
              }
            })
          })
          _this.loadedInfo = true
          _this.$q.loading.hide()
        }
      })
    },
    IrQuienesSomos () {
      this.$router.push('/quienes-somos')
    },
    IrMiClub () {
      this.$router.push('/mi_club/pagos')
    },
    IrHazteSocio () {
      this.$router.push('/hazte_socio')
    },
    IrCultura () {
      this.$router.push('/cultura')
    }
  }
}
</script>
