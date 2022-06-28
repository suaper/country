<template>
  <q-page class="flex flex-center view_hijos_socios view_danzas">
    <q-form>
    <div class="q-pb-xl all_width gris_home">
        <div class="setenta q-pd-md centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Hijos (Hasta 25 años)</div>
            <div class="back"> <q-btn to="/cultura/danza" round color="white" icon="west" />Volver</div>
        </div>
        <div class="q-py-md w_1200 centrar flex_escuelas flex_obras justify-center view_form_cotizar">
                <div class="roww">
                    <div class="ancho50 items-2">
                        <div class="sin_estilos">
                            <span class="label_strong">Nombre Completo</span>
                            <q-input
                                outlined
                                label="Nombre del Postulante"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                        <div class="sin_estilos">
                            <span class="label_strong">Apellido Completo</span>
                            <q-input
                                outlined
                                label="Apellido del Postulante*"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                         </div>
                    </div>

                    <div class="ancho50 item-1">
                        <span class="label_strong">Sexo</span>
                         <div class="flexline">
                            <div class="ancho50 items-2">
                                <q-radio v-model="masculino"  color="orange-4" val="si" label="Masculino" />
                                <q-radio v-model="femenico" color="orange-4" val="si" label="Femenino" />
                            </div>
                         </div>

                    </div>
                </div>
                <div class="roww">
                    <div class="ancho50 items-1">
                        <span class="label_strong">Lugar de Nacimiento</span>
                        <q-input
                            outlined
                            label="Ciudad de nacimiento"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                        />
                    </div>
                    <div class="ancho50 items-1">
                        <span class="label_strong">Fecha de Nacimiento</span>
                        <q-input outlined mask="date" :rules="['date']">
                          <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-date>
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
                <div class="roww">
                    <div class="ancho50 items-1">
                        <span class="label_strong">Foto</span>
                        <q-file outlined>
                          <template v-slot:prepend>
                            <q-icon name="attach_file" />
                          </template>
                        </q-file>
                    </div>
                </div>
            </div>
        </div>
        <div class="q-pb-xl all_width bg_amarillo view_form_cotizar">
            <div class="q-py-md w_1200 centrar">
                <div class="center text-left q-my-lg titulos">Estudios</div>
                <div class="colegios">
                    <div class="roww">
                        <div class="ancho50">
                            <span class="label_strong">Secundarios: Colegios</span>
                            <q-input
                                outlined
                                label="Nombre del Colegio"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>

                        <div class="ancho50 ">
                            <span class="label_strong">Lugar</span>
                            <q-input
                                outlined
                                label="Dirección del Colegio"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>

                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Cursos rendidos</span>
                            <q-input
                                outlined
                                label="Cursos rendidos"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>

                        <div class="ancho50 item-2">
                            <div class="sin_estilo ancho50">
                                <span class="label_strong">Desde</span>
                                <q-btn icon="event" round color="primary">
                                    <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="date">
                                        <div class="row items-center justify-end q-gutter-sm">
                                            <q-btn label="Cancel" color="primary" flat v-close-popup />
                                            <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                                        </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-btn>
                            </div>
                            <div class="sin_estilo ancho50">
                                <span class="label_strong">Hasta</span>
                                <q-btn icon="event" round color="primary">
                                    <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="date">
                                        <div class="row items-center justify-end q-gutter-sm">
                                            <q-btn label="Cancel" color="primary" flat v-close-popup />
                                            <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                                        </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-btn>
                            </div>
                        </div>
                    </div>
                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Año que cursa actualmente</span>
                            <q-input
                                outlined
                                label="Año que cursa actualmente"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>
                    <q-btn outline type="submit" class="azul centrar mt_10 bg_white_home" label="Agregar más Colegios" icon-right="add"/>
                </div>
                <hr class="form_linea">

                <div class="universidades">
                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Universitarios: Universidad</span>
                            <q-input
                                outlined
                                label="Nombre de la universidad"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>

                        <div class="ancho50 item-1">
                            <span class="label_strong">Sede</span>
                            <q-input
                                outlined
                                label="Ciudad"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>

                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Carrera</span>
                            <q-input
                                outlined
                                label="Carrera profesional"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>

                        <div class="ancho50 item-2">
                            <div class="sin_estilo ancho50">
                                <span class="label_strong">Desde</span>
                                <q-btn icon="event" round color="primary">
                                    <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="date">
                                        <div class="row items-center justify-end q-gutter-sm">
                                            <q-btn label="Cancel" color="primary" flat v-close-popup />
                                            <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                                        </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-btn>
                            </div>
                            <div class="sin_estilo ancho50">
                                <span class="label_strong">Hasta</span>
                                <q-btn icon="event" round color="primary">
                                    <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
                                        <q-date v-model="date">
                                        <div class="row items-center justify-end q-gutter-sm">
                                            <q-btn label="Cancel" color="primary" flat v-close-popup />
                                            <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                                        </div>
                                        </q-date>
                                    </q-popup-proxy>
                                </q-btn>
                            </div>
                        </div>
                    </div>
                    <div class="roww">
                        <div class="ancho50 items-1">
                            <span class="label_strong">Título</span>
                            <q-input
                                outlined
                                label="Título que recibió"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                        <div class="ancho50 items-1">
                            <span class="label_strong">Año / Semestre que cursa actualmente</span>
                            <q-input
                                outlined
                                label="Año / Semestre que cursa actualmente"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>
                    <q-btn outline type="submit" class="azul centrar mt_10 bg_white_home" label="Agregar más Universidades" icon-right="add"/>
                </div>
                <hr class="form_linea">

                <hr class="form_linea">
                <div class="otros_estudios">
                    <div class="roww">
                        <div class="items-1">
                            <span class="label_strong">Otros estudios</span>
                            <q-input
                                outlined
                                label="Indicar Institución, Carrera, Título, años estudio, etc."
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>
                    <q-btn outline type="submit" class="azul centrar mt_10 bg_white_home" label="Agregar más Estudios" icon-right="add"/>
                </div>
            </div>
        </div>

        <div class="q-pb-xl all_width gris_home">
            <div class="q-py-md w_1200 centrar view_form_cotizar justify-center">
                <div class="otros_cargos">
                    <div class="center text-left q-my-lg titulos">Información adicional</div>
                    <div class="roww">
                        <div class="ancho100 items-1">
                            <span class="label_strong">Deportes que practica</span>
                            <q-input
                                outlined
                                label="Deportes que práctica"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>
                    <div class="roww">
                        <div class="ancho100 items-1">
                            <span class="label_strong">Otros Intereses</span>
                            <q-input
                                outlined
                                label="Otros Intereses"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                            />
                        </div>
                    </div>
                </div>
                <div class="action_next">
                    <q-btn outline type="submit" @click="irSiguiente()"  class="azul centrar mt_10 bg_white_home" label="Continuar" icon-right="add"/>
                    <span class="nota center">
                        * Cualquier cambio de esta información debe ser avisado al Club, dentro de 60 días.
                    </span>
                </div>
            </div>
        </div>
    </q-form>
  </q-page>
</template>

<script>

export default {
  name: 'Formulariohijo',
  data () {
    return {
      video: false,
      detalleObras: false,
      pop_consultar: false,
      date: '2019/03/01'
    }
  },
  methods: {
    irSiguiente () {
      this.$router.push('enviarpostulacion')
    }
  }
}
</script>
