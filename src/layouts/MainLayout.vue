
<template>
  <q-layout view="hHh lpr fff" class="home">

    <q-header class="bg-white text-white" height-hint="98">
      <div class="wrap_top center">
        <img class="q-mt-lg" alt="img2" src="../assets/Home/logo-country-club.png">
        <div class="btn_right_top">
          <a href=""><span class="icono"></span> <span class="enlace">Ingresa si eres socio </span></a>
        </div>
      </div>
      <q-tabs align="center">
        <q-route-tab to="/" label="Inicio" />
        <q-route-tab to="/quienes_somos" @click="IrQuienesSomos()" label="Quiénes Somos" />
        <q-route-tab to="/mi_club" @click="IrMiClub()" label="Mi Club" />
        <q-route-tab to="/hazte_socio" @click="IrHazteSocio()" label="Hazte Socio" />
        <q-route-tab to="/Eventos" label="Eventos" />
        <q-route-tab to="/Deportes" label="Deportes" />
        <q-route-tab to="/Gastronomía" label="Gastronomía" />
        <q-route-tab to="/Multimedia" label="Multimedia" />
        <q-route-tab to="/Contacto" label="Contacto" />
      </q-tabs>
    </q-header>
   <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer bordered class="bg-grey-8 text-white">
      <div class="q-py-md all_width bg_azul">
        <div class="row_wrap no-wrap flex justify-between">
          <ul>
            <li>
              <strong>Dirección</strong>
              <p>Las Arañas 1901, La Reina</p>
              <p>Santiago de Chile, Chile</p>
            </li>
            <li>
              <strong>Contáctenos</strong>
              <p>Teléfono: +56 2 2757 5700</p>
              <p>Email: info@pwcc.dl</p>
            </li>
            <li>
              <strong>Como llegar</strong>
              <table>
                <tr>
                  <td>
                    <img class="q-mx-none" alt="img2" src="../assets/Home/waze-logo-white.png">
                  </td>
                  <td>
                    <img class="q-mx-none" alt="img2" src="../assets/Home/google-maps.png">
                  </td>
                </tr>
              </table>
            </li>
            <li>
              <table>
                <tr>
                  <td>
                    <strong>Desarrollado</strong>
                  </td>
                  <td>
                    <img class="q-mx-none" alt="img2" src="../assets/Home/logo-obg.png">
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

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    IrQuienesSomos () {
      this.$router.push('/quienes_somos')
    },
    IrMiClub () {
      this.$router.push('/mi_club')
    },
    IrHazteSocio () {
      this.$router.push('/hazte_socio')
    }
  }
}
</script>
