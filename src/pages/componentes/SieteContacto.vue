 <template>
    <div class="form_fitness">
      <h4 class="subtitle text-left">Contacto</h4>
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
                :rules="[ val => val && val.length > 0 || 'Por favor diligencie el campo']"
            />
            <q-input
                outlined
                v-model="telefono"
                label="Número de contacto *"
            />
            <q-input outlined v-model="email" type="Correo electrónico" label="Correo electrónico *" />
            <q-input
                outlined
                v-model="category"
                label="Rut *"
            />
            <q-input
              outlined
              v-model="mensaje"
              label="Mensaje *"
            />
            <div class="text-left">
                <q-btn outline type="submit" class="azul q-my-md bg_white_i" label="Enviar" icon-right="arrow_right_alt"/>
            </div>
        </q-form>
    </div>
</template>

<script>
import configServices from '../../services/config'

export default {
  name: 'SieteContacto',
  data () {
    return {
      pop_reservar_spa: false,
      name: '',
      email: '',
      telefono: '',
      category: '',
      path: '',
      mensaje: ''
    }
  },
  created () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
  },
  methods: {
    onReset () {

    },
    onSubmit () {
      var _this = this
      var data = {
        type: 'sendEmailDeportes',
        sport: this.path,
        email: this.email,
        name: this.name,
        lastname: '',
        phone: this.telefono,
        // category: this.category,
        message: this.mensaje
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
          // this.category = ''
          this.pop_reservar_spa = false
        }
      })
    }
  }
}
</script>
