<template>
    <q-page class="flex flex-center view_quienes_somos">
      <MenuDeporteInterno :currentItem="'/deportes/' + path + '/contacto'"/>
      <div class="q-py-xl all_width bg_gris">
          <div class="centrar w_1200 fila_separador">
              <div class="w_45 q-mt-xl form_100">
                  <h5 class="style_title q-my-lg" >Información general</h5>
                  <FormContacto />
              </div>
              <div class="w_45 q-mt-xl fitnes_last">
                  <h5 class="style_title q-my-lg" >Staff</h5>
                  <Staff :info="personal" v-if="loadedPersonal"/>
              </div>
          </div>
      </div>
    </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import FormContacto from 'pages/componentes/SieteContacto'
import Staff from 'pages/componentes/OchoStaff'
import configServices from '../../services/config'

export default {
  name: 'Contacto',
  components: {
    MenuDeporteInterno,
    Staff,
    FormContacto
  },
  data () {
    return {
      sliders: true,
      urlSite: 'https://obt3.cl',
      personal: {
        field_imagen_perfil: ''
      },
      loadedPersonal: false
    }
  },
  created () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
    this.subPath = currentPath[3]
    localStorage.setItem('sport', this.path)

    this.getInfo()
  },
  methods: {
    onReset () {

    },
    onSubmit () {
      var _this = this
      var data = {
        type: 'sendEmailReserva',
        service: 'Charlas Culturales',
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
    getInfo () {
      var _this = this

      configServices.loadData(this, '/personal-staff/' + _this.subPath + '-' + _this.path, {
        callBack: (data) => {
          _this.personal = data
          _this.loadedPersonal = true
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
