 <template>
  <q-page class="flex flex-center view_quienes_somos view_ramas">
  <Menudeportes currentItem="/deportes/ramas"/>
   <div class="q-py-xl all_width bg_gris wrp_club hazte_socio">
        <div class="centrar w_1100 enla" v-if="loadedInfo">
            <div class="center text-center q-my-lg titulos">{{ info.title[0].value }}</div>
               <p v-html="info.body[0].value"></p>
        </div>
    </div>
    <div class="q-pb-xl all_width bg_gris wrp_club hazte_socio">
        <div class="centrar w_1100 bg_gris q-pb-xl">
            <h4 class="subtitle q-my-xl">Formulario de Registro a Ramas</h4>
              <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="form-ramas"
              >
                <h5>Cantidad de Participantes</h5>
                <div class="wrp_busca_mes w_500">
                    <q-select outlined label="Cantidad de Participantes" v-model="quantity" :options="[1,2,3,4,5,6]" @input="setQuantity()" />
                </div>
                <h5>Selección del Deporte</h5>
                <div class="wrp_check">
                    <div class="wrp_one">
                        <q-checkbox keep-color v-model="deporte" val="Golf" label="Golf" color="orange-4" />
                        <q-checkbox keep-color v-model="deporte" val="Hockey" label="Hockey" color="orange-4" />
                        <q-checkbox keep-color v-model="deporte" val="Rugby" label="Rugby" color="orange-4" />
                        <q-checkbox keep-color v-model="deporte" val="Natación" label="Natación" color="orange-4" />
                        <q-checkbox keep-color v-model="deporte" val="Natación" label="Danza" color="orange-4" />
                    </div>
                    <div class="wrp_one">
                        <q-checkbox keep-color v-model="deporte" val="Squash" label="Squash" color="orange-4" />
                        <q-checkbox keep-color v-model="deporte" val="Paddle" label="Paddle" color="orange-4" />
                        <q-checkbox keep-color v-model="deporte" val="Tennis" label="Tennis" color="orange-4" />
                        <q-checkbox keep-color v-model="deporte" val="Fútbol" label="Fútbol" color="orange-4" />
                    </div>
                </div>

                <h5 v-show="quantity !== ''">Información de Participantes</h5>

                <div class="wrp_campos" v-for="(item, key) in personas" :key="key" v-show="quantity !== ''">
                    <strong>Participante {{ key + 1 }}</strong>
                    <div class="row_2">
                        <div class="wrp_uno">
                            <q-input
                                outlined
                                v-model="personas[key].rut"
                                label="RUT"
                                :rules="[val => !!val || 'Campo requerido']" />
                        </div>
                        <div class="wrp_uno">
                            <q-input
                                outlined
                                v-model="personas[key].nombre"
                                label="Nombre Completo"
                                :rules="[val => !!val || 'Campo requerido']" />
                        </div>
                    </div>
                    <div class="row_2">
                        <div class="wrp_dos between">
                            <span>Fecha de nacimiento</span>
                            <div class="tipedate">
                                <q-input filled v-model="personas[key].date" mask="date" :rules="['date']">
                                <template v-slot:append>
                                    <q-icon name="event" class="cursor-pointer">
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="personas[key].date">
                                        <div class="row items-center justify-end">
                                            <q-btn v-close-popup label="Close" color="primary" flat />
                                        </div>
                                        </q-date>
                                    </q-popup-proxy>
                                    </q-icon>
                                </template>
                                </q-input>
                            </div>
                        </div>
                        <div class="wrp_uno">
                            <q-input
                                outlined
                                v-model="personas[key].seguro"
                                label="Seguro Médico"
                                :rules="[val => !!val || 'Campo requerido']" />
                        </div>
                    </div>

                    <div class="row_2 align_center">
                        <div class="wrp_uno">
                            <q-input
                                outlined
                                v-model="personas[key].colegio"
                                label="Colegio / Universidad"
                                :rules="[val => !!val || 'Campo requerido']" />
                        </div>
                        <div class="wrp_dos radios">
                            <span>Socio</span>
                            <div class="q-gutter-sm">
                                <q-radio left-label v-model="personas[key].socio" color="orange-4" val="si" label="Si" />
                                <q-radio left-label v-model="personas[key].socio" color="orange-4" val="no" label="No" />
                            </div>
                        </div>
                    </div>
                    <q-separator color="orange-4" />
                    <br>
                </div>
                <div class="row-actions between flex">
                    <div class="left terms">
                        <!--<q-checkbox required v-model="terminos" color="orange-4" label="Acepto Términos y Condiciones" :rules="[val => !!val || 'Campo requerido']" /> -->
                    </div>
                      <div class="right ok">
                        <q-btn type="submit" outline class="azul q-my-md centrar bg_white_i" label="Enviar Datos"  icon-right="arrow_right_alt"/>
                    </div>
                </div>
            </q-form>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menudeportes from 'pages/submenus/Menudeportes'
import configServices from '../../services/config'

export default {
  name: 'Ramas',
  components: {
    Menudeportes
  },
  data () {
    return {
      deporte: [],
      urlSite: 'https://www.pwcc.cl',
      date: '2019/02/01',
      socio: 'line',
      terminos: false,
      info: {},
      loadedInfo: false,
      quantity: '',
      personas: []
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    onReset () {

    },
    onSubmit () {
      var _this = this

      // if (!this.terminos) {
      //   return _this.$swal('Debe aceptar los términos y condiciones')
      // }

      if (this.quantity === '') {
        return _this.$swal('Debe seleccionar la cantidad de participantes')
      }

      if (this.deporte.length === 0) {
        return _this.$swal('Debe seleccionar al menos un deporte')
      }
      var data = {
        type: 'sendEmailRamas',
        deportes: this.deporte,
        personas: this.personas
      }
      configServices.consumerStandar(this, 'pwcc-rest/post', data, {
        callBack: (data) => {
          if (data.status) {
            _this.$swal('Hemos registrado su solicitud pronto nos contactaremos')
          } else {
            _this.$swal('Estamos presentando problemas técnicos intente nuevamente más tarde')
          }

          this.personas = []
          this.quantity = ''
          this.terminos = false
          this.deportes = []
        }
      })
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/740?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.loadedInfo = true
          _this.$q.loading.hide()
        }
      })
    },
    setQuantity () {
      this.personas = []

      for (let index = 0; index < this.quantity; index++) {
        var person = {
          nombre: '',
          rut: '',
          date: '',
          seguro: '',
          socio: ''
        }

        this.personas.push(person)
      }
    }
  }
}
</script>
