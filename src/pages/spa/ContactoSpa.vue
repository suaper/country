<template>
  <q-page class="flex flex-center gris_home view_hijos_socios view_fitness">
    <Menuspa currentItem="/spa/contacto"/>

      <div class="q-py-md q-my-xl all_width gris_home wrp_club">
        <div class="q-py-md centrar text-center w_1200">
          <div class="row_2 fitnes_last">
              <div class="form_fitness">
                  <h6 class="title_text">Contacto</h6>
                  <p class="text-left">Nulla eget posuere nisl. Fusce tincidunt massa pulvinar est lobortis, at pellentesque ante accumsan. Aenean condimentum neque a libero, a pretium massa auctor.</p>
              </div>
              <div class="staff">
              <h6 class="title_text">Staff</h6>
                 <div class="flex">
                    <table class="datos_staff_contacto" v-for="(personal, key) in personal" :key="key">
                        <tr>
                            <td>
                                <img class="raius" :src="urlSite + personal.field_imagen_perfil" />
                            </td>
                            <td>
                                <p><strong>{{ personal.field_nombre_staff }}</strong></p>
                                <p><strong> {{ personal.field_cargo_staff }} </strong></p>
                                <p>{{ personal.field_correo_staff }}</p>
                                <p>{{ personal.field_numero_staff }}</p>
                            </td>
                        </tr>
                    </table>
                </div>
              </div>
          </div>
        </div>
      </div>
  </q-page>
</template>

<script>
import Menuspa from 'pages/submenus/Menuspa'
import configServices from '../../services/config'

export default {
  name: 'Contactospa',
  components: {
    Menuspa
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {},
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

      configServices.loadData(this, '/personal-staff/spa-&-wellness', {
        callBack: (data) => {
          _this.personal = data
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
