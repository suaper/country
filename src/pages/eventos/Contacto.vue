<template>
  <q-page class="flex flex-center gris_home view_hijos_socios view_fitness">
  <Menueventos currentItem="/eventos/contacto"/>

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
                          v-model="rut"
                          label="Rut *"
                      />
                      <div class="text-left">
                          <q-btn outline type="submit" class="azul q-my-md bg_white_i" label="Enviar" icon-right="arrow_right_alt"/>
                      </div>
                  </q-form>
              </div>
              <div class="img_contacto">
                <div class="iframe" v-html="info.field_mapa_contacto[0].value"></div>
                <ul class="q-pa-none">
                    <li class="flex flex-start items-center text_gry">
                        <img src="../../assets/MiClub/i-gps.svg"> <span>{{ info.field_direccion[0].value }}</span>
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
import configServices from '../../services/config'

export default {
  name: 'Contactogastronomia',
  components: {
    Menueventos
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {
        field_mapa_contacto: [
          { value: '' }
        ],
        field_direccion: [
          { value: '' }
        ]
      },
      pop_consultar: false,
      telefono: '',
      email: '',
      urlSite: 'https://pwccdev.mkbk.digital/',
      name: '',
      rut: '',
      personal: []
    }
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      var _this = this

      configServices.loadData(this, '/node/173?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.$q.loading.hide()
        }
      })
    },
    onSubmit () {
      var _this = this
      var data = {
        type: 'sendEmailReserva',
        service: 'Spa & Wellness',
        email: this.email,
        name: this.name,
        lastname: '',
        phone: this.telefono,
        rut: this.rut
      }
      configServices.consumerStandar(this, 'pwcc-rest/post', data, {
        callBack: (data) => {
          if (data.status) {
            _this.$swal('Hemos registrado su solicitud pronto nos contactaremos')
          } else {
            _this.$swal('Estamos presentando problemas técnicos intente nuevamente más tarde')
          }

          this.email = ''
          this.name = ''
          this.telefono = ''
          this.rut = ''
          this.pop_reservar_spa = false
        }
      })
    },
    onReset () {
      // reset
    }
  }
}
</script>
