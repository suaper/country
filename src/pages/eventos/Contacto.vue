<template>
  <q-page class="flex flex-center gris_home view_hijos_socios view_fitness">
  <Menueventos currentItem="/gastronomia/contacto"/>

    <div class="q-py-md q-my-xl all_width gris_home wrp_club">
      <h6 class="title centrar text-center q-py-md ">Contacto</h6>
        <div class="q-py-md centrar text-center w_1200">
          <div class="row_2 fitnes_last">
              <div class="form_fitness sin_borde">
                  <p class="text-left">Diligencie este formulario para recibir más información:</p>
                  <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                  >
                      <q-input
                          outlined
                          v-model="name"
                          label="Nombres y Apellidos *"
                          lazy-rules
                          :rules="[ val => val && val.length > 0 || 'Please type something']"
                      />
                      <q-input
                          outlined
                          v-model="telefono"
                          label="Número de contacto *"
                      />
                      <q-input outlined v-model="email" type="Correo electrónico" label="Correo electrónico *" />
                      <q-input
                          outlined
                          v-model="telefono"
                          label="Rut *"
                      />
                      <div class="text-left">
                          <q-btn outline @click="pop_form_socio = true" class="azul q-my-md bg_white_i border_blue" label="Enviar" icon-right="arrow_right_alt"/>
                      </div>
                  </q-form>
              </div>
              <div class="img_contacto">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5578739053026!2d-74.05875988593355!3d4.6726203966059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b3802c5b6e1%3A0x7ecf37db912a7617!2sClub%20Country%20Tower!5e0!3m2!1ses!2sco!4v1649261423109!5m2!1ses!2sco" width="500" height="340" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <ul class="q-pa-none">
                    <li class="flex flex-start items-center text_gry">
                        <img src="../../assets/MiClub/i-gps.svg"> <span>Las Arañas 1901, La Reina, Santiago, Chile</span>
                    </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
  </q-page>
</template>

<script>
import Menueventos from 'pages/submenus/Menueventos'

export default {
  name: 'Contactogastronomia',
  components: {
    Menueventos
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {},
      pop_consultar: false
    }
  }
}
</script>
