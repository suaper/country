<template>
  <q-page class="flex flex-center view_hijos_socios view_danzas">
    <div class="q-pb-xl all_width gris_home view_form_cotizar">
        <div class="setenta q-pd-md centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Enviar Postulación</div>
            <div class="back"> <q-btn to="/cultura/danza" round color="white" icon="west" />Volver</div>
        </div>
        <div class="q-py-md w_1100 centrar flex_escuelas flex_obras justify-center view_form_cotizar is_hijo">
        <q-form
        @submit="irSiguiente">
            <div class="roww">
                <div class="ancho50 items-1">
                    <span class="label_strong">Firma de autorización</span>
                    <q-file outlined v-model="data.firmafoto" @input="uploadPhoto()" accept="image/*" @rejected="onRejected">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" />
                      </template>
                    </q-file>
                </div>
                <div class="ancho50 items-1">
                    <q-checkbox v-model="terminos" label="Acepto términos y Condiciones y tratamiento de datos." />
                </div>
            </div>
            <div class="action_next">
                <q-btn outline @click="irSiguiente" class="azul centrar mt_10 bg_white_home" label="Enviar" icon-right="add"/>
            </div>
        </q-form>
        </div>
    </div>
  </q-page>
</template>

<script>
import configServices from '../../services/config'

export default {
  name: 'enviarPostulacion',
  data () {
    return {
      eshijos: '',
      terminos: false,
      data: {}
    }
  },
  created () {
    var data = localStorage.getItem('dataSocioForm')
    this.data = JSON.parse(data)
  },
  methods: {
    irSiguiente () {
      var _this = this
      var data = {
        type: 'saveSocioForm',
        data: this.data
      }
      configServices.consumerStandar(this, 'pwcc-rest/post', data, {
        callBack: (data) => {
          if (data.status) {
            _this.$swal('¡Tu postulación para ser Socio se ha enviado con Exito! <br>Nos contactaremos muy pronto contigo.')
          } else {
            _this.$swal('Estamos presentando problemas técnicos intente nuevamente más tarde')
          }

          localStorage.setItem('dataSocioForm', {})
          _this.$router.push('hazte-socio')
        }
      })
    },
    uploadPhoto () {
      var _this = this
      var reader = new FileReader()
      reader.readAsDataURL(this.data.firmafoto)

      reader.onload = function () {
        var base64result = reader.result.split(',')[1]
        var data = {
          type: 'saveImage',
          data: base64result,
          mime: _this.data.firmafoto.type,
          name: _this.data.firmafoto.name
        }
        configServices.consumerStandar(_this, 'pwcc-rest/post', data, {
          callBack: (data) => {
            if (data.status === 200) {
              _this.data.postulacion_foto = data.url
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
