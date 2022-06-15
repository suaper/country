 <template>
  <q-page class="flex flex-center view_quienes_somos view_ramas">
  <MenuDeporteInterno currentItem="/deportes/natacion/master" />
   <div class="q-py-xl all_width bg_gris wrp_club hazte_socio">
        <div class="centrar w_1100">
            <div class="center text-center q-my-lg titulos">Ramas</div>
               <p>Si eres NUEVO completa el formulario llenando todos los campos que está más abajo, no olvides aceptar los términos y condiciones para que tu solicitud de inscripción sea recibida por el área de deportes. </p>
               <p> Si eres alumno o jugador ANTIGUO, solicita tu inscripción directamente a deportes@pwcc.cl.</p>
               <p> Para los jugadores antiguos de Hockey y Rugby directamente al email de coordinación. Para el Rugby es sgarrido@pwcc.cl y para Hockey, hockey@pwcc.cl. </p>
               <p> Espera nuestra confirmación vía mail con el valor total, para que puedas pagar la inscripción.</p>
        </div>
    </div>
    <div class="q-pb-xl all_width bg_gris wrp_club hazte_socio">
        <div class="centrar w_1100 bg_gris q-pb-xl">
            <h4 class="subtitle q-my-xl">Formulario de Registro a Ramas</h4>
            <form class="form_ramas">
                <h5>Cantidad de Participantes</h5>
                <div class="wrp_busca_mes w_500">
                    <q-select outlined label="Cantidad de Participantes" v-model="personas" />
                </div>
                <h5>Selección del Deporte</h5>
                <div class="wrp_check">
                    <div class="wrp_one">
                        <q-checkbox keep-color v-model="cyan" label="Cyan" color="orange-4" />
                        <q-checkbox keep-color v-model="cyan" label="Cyan" color="orange-4" />
                        <q-checkbox keep-color v-model="cyan" label="Cyan" color="orange-4" />
                        <q-checkbox keep-color v-model="cyan" label="Cyan" color="orange-4" />
                    </div>
                    <div class="wrp_one">
                        <q-checkbox keep-color v-model="cyan" label="Cyan" color="orange-4" />
                        <q-checkbox keep-color v-model="cyan" label="Cyan" color="orange-4" />
                        <q-checkbox keep-color v-model="cyan" label="Cyan" color="orange-4" />
                        <q-checkbox keep-color v-model="cyan" label="Cyan" color="orange-4" />
                    </div>
                    <div class="wrp_one">
                        <q-checkbox keep-color v-model="cyan" label="Cyan" color="orange-4" />
                        <q-checkbox keep-color v-model="cyan" label="Cyan" color="orange-4" />
                        <q-checkbox keep-color v-model="cyan" label="Cyan" color="orange-4" />
                        <q-checkbox keep-color v-model="cyan" label="Cyan" color="orange-4" />
                    </div>
                </div>

                <h5>Información de Participantes</h5>

                <div class="wrp_campos">
                    <strong>Participante 1</strong>
                    <div class="row_2">
                        <div class="wrp_uno">
                            <q-input
                                outlined
                                v-model="rut"
                                label="RUT"
                            />
                        </div>
                        <div class="wrp_uno">
                            <q-input
                                outlined
                                v-model="nombre"
                                label="Nombre Completo"
                            />
                        </div>
                    </div>
                    <div class="row_2">
                        <div class="wrp_dos between">
                            <span>Fecha de nacimiento</span>
                            <div class="tipedate">
                                <q-input filled v-model="date" mask="date" :rules="['date']">
                                <template v-slot:append>
                                    <q-icon name="event" class="cursor-pointer">
                                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="date">
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
                                v-model="seguro"
                                label="Seguro Médico"
                            />
                        </div>
                    </div>

                    <div class="row_2 align_center">
                        <div class="wrp_uno">
                            <q-input
                                outlined
                                v-model="colegio"
                                label="Colegio / Universidad"
                            />
                        </div>
                        <div class="wrp_dos radios">
                            <span>Socio</span>
                            <div class="q-gutter-sm">
                                <q-radio left-label v-model="socio" color="orange-4" val="si" label="Si" />
                                <q-radio left-label v-model="socio" color="orange-4" val="no" label="No" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row-actions between flex">
                    <div class="left terms">
                        <q-checkbox v-model="terminos" color="orange-4" label="Acepto Términos y Condiciones" />
                    </div>
                      <div class="right ok">
                        <q-btn outline class="azul q-my-md centrar bg_white_i" label="Enviar Datos"  icon-right="arrow_right_alt"/>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'

export default {
  name: 'Ramas',
  components: {
    MenuDeporteInterno
  },
  data () {
    return {
      cyan: true,
      urlSite: 'https://pwccdev.mkbk.digital/',
      date: '2019/02/01',
      socio: 'line',
      terminos: '',
      info: {}
    }
  }
}
</script>
