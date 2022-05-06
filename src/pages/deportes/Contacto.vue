<template>
    <q-page class="flex flex-center view_quienes_somos">
      <MenuDeporteInterno />
      <div class="q-py-xl all_width bg_gris">
          <div class="centrar w_1100 fila_separador">
              <div class="w_45 q-mt-xl form_100">
                  <h5 class="style_title q-my-lg" >Información general</h5>
                  <FormContacto />
              </div>
              <div class="w_45 q-mt-xl">
                  <h5 class="style_title q-my-lg" >Staff</h5>
                  <Staff />
              </div>
          </div>
      </div>
      <div class="q-py-xl all_width bg_amarillo">
          <div class="centrar w_1100 sin_separador ">
              <div class="w_60">
                  <Imagen />
              </div>
              <div class="w_30">
                  <Horario />
              </div>
          </div>
      </div>
    </q-page>
  </template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import FormContacto from 'pages/componentes/SieteContacto'
import Staff from 'pages/componentes/OchoStaff'
import Imagen from 'pages/componentes/ImagenBoton'
import Horario from 'pages/componentes/HorariosBtnDescargar'

export default {
  name: 'Contacto',
  components: {
    MenuDeporteInterno,
    //   Contacto,
    Staff,
    Imagen,
    Horario,
    FormContacto
  },
  data () {
    return {
      sliders: true,
      urlSite: 'https://pwccdev.mkbk.digital/'
    }
  }
}
</script>
