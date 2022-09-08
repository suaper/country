<template>
  <q-page class="flex flex-center view_hijos_socios view_danzas">
    <q-form @submit="irSiguiente()">
      <div class="q-pb-xl all_width gris_home" >
        <div class="setenta q-pd-md centrar text-center relative">
          <div class="center text-center q-my-lg titulos">Hijos (Hasta 25 años)</div>
          <div class="back"> <q-btn to="/es" round color="white" icon="west" />Volver</div>
        </div>
      </div>
      <div class="hijo-container" v-for="(item, hijoKey) in hijos" :key="hijoKey">

        <div class="q-pb-xl all_width gris_home" >
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
                    v-model="hijos[hijoKey].nombre"
                  />
                </div>
                <div class="sin_estilos">
                  <span class="label_strong">Apellido Completo</span>
                  <q-input
                    outlined
                    label="Apellido del Postulante*"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                    v-model="hijos[hijoKey].apellido"
                  />
                </div>
              </div>

              <div class="ancho50 item-1">
                <span class="label_strong">Sexo</span>
                <div class="flexline">
                  <div class="ancho50 items-2">
                    <q-radio v-model="hijos[hijoKey].sexo"  color="orange-4" val="Masculino" label="Masculino" />
                    <q-radio v-model="hijos[hijoKey].sexo" color="orange-4" val="Femenino" label="Femenino" />
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
                  v-model="hijos[hijoKey].ciudad"
                />
              </div>
              <div class="ancho50 items-1">
                <span class="label_strong">Fecha de Nacimiento</span>
                <q-input outlined v-model="hijos[hijoKey].cumpple" mask="date" :rules="['date']">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-date v-model="hijos[hijoKey].cumpple">
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
                <q-file outlined v-model="hijos[hijoKey].foto" @input="uploadPhoto(hijoKey)" accept="image/*" @rejected="onRejected">
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
            <div class="center text-center q-my-lg titulos">Estudios</div>
            <div class="colegios" v-for="(item, cKey) in hijos[hijoKey].colegios" :key="cKey + '-cole'">
              <div class="roww">
                <div class="ancho50">
                  <span class="label_strong">Secundarios: Colegios</span>
                  <q-input
                    outlined
                    label="Nombre del Colegio"
                    lazy-rules
                    v-model="hijos[hijoKey].colegios[cKey].nombre"
                  />
                </div>

                <div class="ancho50 ">
                  <span class="label_strong">Lugar</span>
                  <q-input
                    outlined
                    label="Dirección del Colegio"
                    lazy-rules
                    v-model="hijos[hijoKey].colegios[cKey].direccion"
                  />
                </div>
              </div>

              <div class="roww">
                <div class="ancho50 items-1">
                  <span class="label_strong">Años Cursados</span>
                  <q-input
                    outlined
                    label="Digite los años cursados en este colegio"
                    lazy-rules
                    v-model="hijos[hijoKey].colegios[cKey].years"
                    />
                </div>

                <div class="ancho50 item-2">
                  <div class="sin_estilo ancho50">
                    <span class="label_strong">Desde</span>
                    <q-input outlined v-model="hijos[hijoKey].colegios[cKey].desde" mask="date">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                            <q-date v-model="hijos[hijoKey].colegios[cKey].desde">
                              <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
                  </div>
                  <div class="sin_estilo ancho50">
                    <span class="label_strong">Hasta</span>
                    <q-input outlined v-model="hijos[hijoKey].colegios[cKey].hasta" mask="date">
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                            <q-date v-model="hijos[hijoKey].colegios[cKey].hasta">
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
              </div>
              <div class="roww">
                <div class="ancho50 items-1">
                  <span class="label_strong">Año que cursa actualmente</span>
                  <q-input
                    outlined
                    label="Año que cursa actualmente"
                    lazy-rules
                    v-model="hijos[hijoKey].colegios[cKey].current"
                  />
                </div>
              </div>
              <hr class="form_linea">
            </div>
            <q-btn outline class="azul centrar mt_10 bg_white_home" label="Agregar más Colegios" icon-right="add" @click="addColegio(hijoKey)"/>

            <div class="universidades" v-for="(item, uKey) in hijos[hijoKey].universidades" :key="uKey + '-uni'">
              <div class="roww">
                <div class="ancho50 items-1">
                  <span class="label_strong">Universitarios: Universidad</span>
                  <q-input
                    outlined
                    label="Nombre de la universidad"
                    lazy-rules
                    v-model="hijos[hijoKey].universidades[uKey].nombre"
                  />
                </div>

                <div class="ancho50 item-1">
                  <span class="label_strong">Sede</span>
                  <q-input
                    outlined
                    label="Ciudad"
                    lazy-rules
                    v-model="hijos[hijoKey].universidades[uKey].ciudad"
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
                    v-model="hijos[hijoKey].universidades[uKey].carrera"
                  />
                </div>

                <div class="ancho50 items-1">
                  <span class="label_strong">Título</span>
                  <q-input
                    outlined
                    label="Título que recibió"
                    lazy-rules
                    v-model="hijos[hijoKey].universidades[uKey].titulo"
                  />
                </div>
              </div>
              <div class="roww">
                <div class="ancho50 items-1">
                  <span class="label_strong">Año / Semestre que cursa actualmente</span>
                  <q-input
                    outlined
                    label="Año / Semestre que cursa actualmente"
                    lazy-rules
                    v-model="hijos[hijoKey].universidades[uKey].year"
                  />
                </div>
              </div>
              <hr class="form_linea">
            </div>
            <q-btn outline class="azul centrar mt_10 bg_white_home" label="Agregar más Universidades" icon-right="add" @click="addUniversidad(hijoKey)"/>

            <div class="otros_estudios">
              <div class="roww" v-for="(item, oKey) in hijos[hijoKey].otrosEstudios" :key="oKey + '-otro'">
                <div class="items-1">
                  <span class="label_strong">Otros estudios</span>
                  <q-input
                    outlined
                    label="Indicar Institución, Carrera, Título, años estudio, etc."
                    lazy-rules
                    v-model="hijos[hijoKey].otrosEstudios[oKey].nombre"
                  />
                </div>
              </div>
              <q-btn outline @click="addOtrosEstudios(hijoKey)" class="azul centrar mt_10 bg_white_home" label="Agregar más Estudios" icon-right="add"/>
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
                    v-model="hijos[hijoKey].deportes"
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
                    v-model="hijos[hijoKey].otros_intereses"
                    :rules="[ val => val && val.length > 0 || 'Digite el número de personas']"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr class="form_linea">
        </div>
      </div>
      <div class="q-pb-xl all_width gris_home">
        <div class="q-py-md w_1200 centrar view_form_cotizar justify-center">
          <div class="action_next">
            <q-btn outline @click="addChild" class="azul centrar mt_10 bg_white_home" label="Añadir Hijo" icon-right="add"/>
            <q-btn outline type="submit" class="azul centrar mt_10 bg_white_home" label="Continuar" icon-right="add"/>
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
import configServices from '../../services/config'

export default {
  name: 'Formulariohijo',
  data () {
    return {
      video: false,
      detalleObras: false,
      pop_consultar: false,
      date: '2019/03/01',
      colegio: {
        nombre: '',
        direccion: '',
        years: '',
        desde: '',
        hasta: '',
        current: ''
      },
      colegios: [],
      itemUniversitario: {
        nombre: '',
        ciudad: '',
        carrera: '',
        titulo: '',
        year: ''
      },
      universidades: [],
      postgrados: [],
      otrosEstudios: [],
      hijos: [
        {
          colegios: [],
          universidades: [],
          otrosEstudios: []
        }
      ]
    }
  },
  created () {
    var data = localStorage.getItem('dataSocioForm')
    this.data = JSON.parse(data)
    this.data.hijos = []
    this.addColegio(0)
    this.addUniversidad(0)
    this.addOtrosEstudios(0)
  },
  methods: {
    addChild () {
      var hijo = {
        colegios: [{
          nombre: '',
          direccion: '',
          years: '',
          desde: '',
          hasta: '',
          current: ''
        }],
        universidades: [{
          nombre: '',
          ciudad: '',
          carrera: '',
          titulo: '',
          year: ''
        }],
        otrosEstudios: [{ nombre: '' }]
      }
      this.hijos.push(hijo)
    },
    irSiguiente () {
      this.data.hijos = this.hijos
      localStorage.setItem('dataSocioForm', JSON.stringify(this.data))
      this.$router.push('/hazte-socio/enviarpostulacion')
    },
    convertToJson (item) {
      var jsonItem = JSON.stringify(item)
      return JSON.parse(jsonItem)
    },
    addColegio (key) {
      var item = this.convertToJson(this.colegio)
      this.hijos[key].colegios.push(item)
    },
    addOtrosEstudios (key) {
      this.hijos[key].otrosEstudios.push({ nombre: '' })
    },
    addUniversidad (key) {
      var item = this.convertToJson(this.itemUniversitario)
      this.hijos[key].universidades.push(item)
    },
    uploadPhoto (key) {
      var _this = this
      var reader = new FileReader()

      reader.readAsDataURL(this.hijos[key].foto)

      reader.onload = function () {
        var base64result = reader.result.split(',')[1]
        var data = {
          type: 'saveImage',
          data: base64result,
          mime: _this.hijos[key].foto.type,
          name: _this.hijos[key].foto.name
        }
        configServices.consumerStandar(_this, 'pwcc-rest/post', data, {
          callBack: (data) => {
            if (data.status === 200) {
              _this.hijos[key].foto_encoded = data.url
              _this.$q.loading.hide()
            }
          }
        })
      }

      reader.onerror = function () {
        console.log(reader.error)
      }
    },
    onRejected (rejectedEntries) {
      this.$q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      })
    }
  }
}
</script>
