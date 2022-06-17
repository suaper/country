
<template>
  <q-layout view="hHh lpr fff" class="home">

    <q-header class="bg-white text-white" height-hint="98">
      <div class="wrap_top center">
        <img class="q-mt-lg" alt="img2" src="../assets/Home/logo-country-club.png">
        <div class="btn_right_top">
          <q-btn class="solomovil" flat @click="drawerRight = !drawerRight" round dense icon="menu" />
        </div>
      </div>
      <q-tabs align="center nav_principal">
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
      show-if-above
      bordered
      :width="200"
      :breakpoint="500"
      class="bg-grey-3"
    >
      <q-scroll-area class="fit pruenamovil">
       <q-btn class="solomovil" flat @click="drawerRight = !drawerRight" round dense icon="close" />
        <div class="q-pa-sm">
          <div v-for="n in 20" :key="n">Drawer {{ n }} / 50</div>
        </div>
      </q-scroll-area>
    </q-drawer>
   <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer bordered class="bg-grey-8 text-white">
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
                    <img class="q-mx-none" alt="img2" :src="info.field_imagen_desarrolll[0].url">
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

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      info: {},
      loadedInfo: false,
      enlacesMaps: [],
      loadedEnlaces: false,
      drawerRight: false
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
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
