<template>
  <q-page class="flex flex-center view_quienes_somos view_cotizar">
    <div class="q-pb-md all_width gris_home view_danzas q-mt-xl q-mb-none">
        <div class="setenta  centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Cotizar</div>
            <div class="back"> <q-btn to="/eventos/tipo-eventos" round color="white" icon="west" />Volver</div>
        </div>
    </div>
    <div class="q-py-md w_1100 centrar justify-center">
        <ul class="pasos">
            <li :class="(firstStep) ? 'active' : 'normal'">
                <div class="sub_caja">
                    <span class="caja">01</span>
                </div>
                <div class="sub_wrap">
                    <span class="paso">PASO 1</span>
                    <p class="azul">Información de la Reserva</p>
                </div>
            </li>
            <li :class="(secondStep) ? 'active' : 'normal'">
                <div class="sub_caja">
                    <span class="caja">02</span>
                </div>
                <div class="sub_wrap">
                    <span class="paso">PASO 2 </span>
                    <p class="azul">Fecha y hora</p>
                </div>
            </li>
            <li :class="(thirdStep) ? 'active' : 'normal'">
            <div class="sub_caja">
                <span class="caja">03</span>
            </div>
            <div class="sub_wrap">
                <span class="paso">PASO 3 </span>
                <p class="azul">Datos personales</p>
            </div>
            </li>
            <li :class="(fourthStep) ? 'active' : 'normal'">
                <div class="sub_caja">
                    <span class="caja">04</span>
                 </div>
                <div class="sub_wrap">
                    <span class="paso">PASO 4</span>
                    <p class="azul">Confirmación</p>
                </div>
            </li>
        </ul>
    </div>

    <div class="row jusify-beetwen text_adicional w_1000 centrar q-py-xl">
        <q-form>
            <div class="form_cotizar w_1000 row_2 paso1" v-if="firstStep">
                <strong class="w_100">Información de la reserva</strong>
                <div class="w_47">
                    <q-select outlined label="Seleccione el Servicio a Cotizar" :options="services" v-model="reserva.service" :rules="[val => !!val || 'Campo requerido']"/>
                    <q-input
                        outlined
                        label="Cantidad de Personas *"
                        lazy-rules
                        v-model="reserva.person"
                        :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                    />
                </div>
                <div class="w_47">
                    <q-select outlined label="Seleccione el Salón" v-model="reserva.salon" :options="salones" :rules="[val => !!val || 'Campo requerido']"/>
                </div>
                <div class="w_100 text_left">
                    <q-btn outline class="azul q-my-md centrar bg_white_i" label="Continuar" @click="nextStep()" icon-right="arrow_right_alt"/>
                </div>
            </div>
            <div class="form_cotizar w_1000 row_2 paso1 paso2" v-if="secondStep">
                <div class="w_47">
                <q-date
                    v-model="reserva.date"
                    minimal
                />
                </div>
                <div class="w_47">
                    <p><q-icon name="info"></q-icon>La disponibilidad de horas se mostrará al elegir el día del evento.</p>
                    <div class="wrp_busca_mes w_500 centrar">
                        <q-select outlined label="Seleccione la hora" v-model="reserva.hour" :options="hours"/>
                    </div>
                </div>
                <div class="w_100 text_center centrar_botones">
                    <q-btn outline class="azul q-my-md centrar btn_bg_beige" label="volver" icon="arrow_right_alt" @click="previousStep()"/>
                    <q-btn outline class="azul q-my-md centrar bg_white_i" label="Continuar" @click="nextStep()" icon-right="arrow_right_alt"/>
                </div>
            </div>

            <div class="form_cotizar w_1000 row_2 paso1 paso3" v-if="thirdStep">
                <strong class="w_100">Datos personales</strong>
                <div class="w_47">
                    <div class="fila_2 flex">
                        <q-input
                            outlined
                            label="Nombres"
                            v-model="reserva.nombres"
                        />
                        <q-input
                            outlined
                            label="Apellidos"
                            v-model="reserva.apellidos"

                        />
                    </div>
                    <q-input
                        outlined
                        label="RUT"
                            v-model="reserva.rut"

                    />
                    <q-input
                        outlined
                        label="Empresa ( no obligatorio)"
                        v-model="reserva.empresa"

                    />
                </div>
                <div class="w_47">
                    <q-input
                        outlined
                        label="Correo Electrónico"
                        v-model="reserva.email"

                    />
                    <q-input
                        outlined
                        label="(+56 9) Teléfono"
                        v-model="reserva.telefono"

                    />
                </div>
                <div class="w_100 text_center centrar_botones">
                    <q-btn outline class="azul q-my-md centrar btn_bg_beige" label="volver" icon="arrow_right_alt" @click="previousStep()"/>
                    <q-btn outline class="azul q-my-md centrar bg_white_i" label="Continuar" @click="nextStep()" icon-right="arrow_right_alt"/>
                </div>
            </div>
            <div class="form_cotizar w_1000 row_2 paso1 paso4 confirmacion" v-if="fourthStep">
                <div class="wrap w_80 centrar">
                    <div class="w_30 separador">
                        <h6>{{ reserva.service.label }} {{ reserva.salon.label }}</h6>
                        <strong>{{ reserva.hour.label }} | {{ reserva.date }} {{ reserva.person }} personas</strong>
                    </div>
                    <div class="w_58">
                        <table class="table_confirmacion">
                            <tr>
                                <td>Nombres</td>
                                <td>{{ reserva.nombres }} {{ reserva.apellidos }}</td>
                            </tr>
                            <tr>
                                <td>RUT</td>
                                <td>{{ reserva.rut }}</td>
                            </tr>
                            <tr v-if="reserva.empresa !== ''">
                                <td>Empresa</td>
                                <td>{{ reserva.empresa }}</td>
                            </tr>
                            <tr>
                                <td>Mail</td>
                                <td>{{ reserva.email }}</td>
                            </tr>
                            <tr>
                                <td>Teléfono</td>
                                <td>{{ reserva.telefono }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="w_100 text_center centrar_botones">
                    <q-btn outline class="azul q-my-md centrar btn_bg_beige" label="volver" icon="arrow_right_alt" @click="previousStep()"/>
                    <q-btn outline class="azul q-my-md centrar bg_white_i" label="Finalizar" @click="onSubmit()" type="submit" icon-right="arrow_right_alt"/>
                </div>
            </div>
        </q-form>
        <q-dialog
            v-model="finaliza"
            class="pop_finaliza"
            >
            <q-card style="width: 300px">
                <q-card-section>
                    <div class="text-center">¡Tu solicitud de reserva se ha enviado con éxito!</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                 <p>Nos contactaremos muy pronto para terminar con el proceso de reserva.</p>
                </q-card-section>

                <q-card-actions align="center" class="bg-white text-teal">
                    <q-btn outline class="azul q-my-md centrar btn_bg_beige" label="Aceptar" icon-right="arrow_right_alt"/>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
  </q-page>
</template>

<script>
import configServices from '../../services/config'

export default {
  name: 'cotizador',
  data () {
    return {
      date: '2019/02/01',
      hora: '',
      finaliza: false,
      services: [],
      reserva: {},
      firstStep: true,
      secondStep: false,
      thirdStep: false,
      fourthStep: false,
      salones: [],
      hours: [
        { id: '07:00am', label: '07:00am' },
        { id: '08:00am', label: '08:00am' },
        { id: '09:00am', label: '09:00am' },
        { id: '10:00am', label: '10:00am' },
        { id: '11:00am', label: '11:00am' },
        { id: '12:00pm', label: '12:00pm' },
        { id: '13:00pm', label: '13:00pm' },
        { id: '14:00pm', label: '14:00pm' },
        { id: '15:00pm', label: '15:00pm' },
        { id: '16:00pm', label: '16:00pm' },
        { id: '17:00pm', label: '17:00pm' },
        { id: '18:00pm', label: '18:00pm' },
        { id: '19:00pm', label: '19:00pm' },
        { id: '20:00pm', label: '20:00pm' },
        { id: '21:00pm', label: '21:00pm' },
        { id: '22:00pm', label: '22:00pm' },
        { id: '23:00pm', label: '23:00pm' },
        { id: '24:00am', label: '24:00am' }
      ]
    }
  },
  created () {
    this.getServices()
  },
  methods: {
    previousStep () {
      if (this.secondStep) {
        this.secondStep = false
        this.firstStep = true
      } else if (this.thirdStep) {
        this.thirdStep = false
        this.secondStep = true
      } else if (this.fourthStep) {
        this.fourthStep = false
        this.thirdStep = true
      }
    },
    nextStep () {
      if (this.firstStep) {
        if (typeof this.reserva.service === 'undefined' || typeof this.reserva.salon === 'undefined' || typeof this.reserva.person === 'undefined') {
          return this.$swal('Diligencie todo el formulario por favor')
        }

        this.firstStep = false
        this.secondStep = true
      } else if (this.secondStep) {
        if (typeof this.reserva.date === 'undefined' || typeof this.reserva.hour === 'undefined') {
          return this.$swal('Diligencie todo el formulario por favor')
        }

        this.secondStep = false
        this.thirdStep = true
      } else if (this.thirdStep) {
        if (typeof this.reserva.nombres === 'undefined' || typeof this.reserva.apellidos === 'undefined' || typeof this.reserva.rut === 'undefined' || typeof this.reserva.email === 'undefined' || typeof this.reserva.telefono === 'undefined') {
          return this.$swal('Diligencie todo el formulario por favor')
        }

        this.thirdStep = false
        this.fourthStep = true
      }
    },
    onSubmit () {
      if (this.fourthStep) {
        var _this = this
        var data = {
          type: 'sendEmailEventos',
          reserva: this.reserva
        }
        configServices.consumerStandar(this, 'pwcc-rest/post', data, {
          callBack: (data) => {
            if (data.status) {
              _this.$swal('Hemos registrado su solicitud pronto nos contactaremos')
            } else {
              _this.$swal('Estamos presentando problemas técnicos intente nuevamente más tarde')
            }

            this.firstStep = true
            this.fourthStep = false
            this.reserva = {}
          }
        })
      }
    },
    getServices () {
      var _this = this
      configServices.loadData(this, '/servicios-eventos/json', {
        callBack: (data) => {
          data.map((item, key) => {
            var service = {
              id: item.title,
              label: item.title
            }

            _this.services.push(service)
          })
        }
      })

      configServices.loadData(this, '/espacios-salones/json', {
        callBack: (data) => {
          data.map((item, key) => {
            var service = {
              id: item.title,
              label: item.title
            }

            _this.salones.push(service)
          })

          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
