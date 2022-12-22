<template>
  <q-page class="flex flex-center view_hijos_socios view_danzas">

    <div class="q-pb-xl all_width gris_home">
        <div class="setenta q-pd-md centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Categorías</div>
            <div class="back"> <q-btn to="/cultura/danza" round color="white" icon="west" />Volver</div>
        </div>
        <div class="q-py-md w_1200 centrar flex_escuelas justify-center">
            <div class="wrp_img_escuelas" v-for="(item, key) in info" :key="key">
                <q-img :src="urlSite + item.field_imagen_escuela">
                    <div class="absolute-bottom text-subtitle1 text-center">
                        {{ item.title }}
                    </div>
                    <div class="absolute-full text-subtitle2 flex flex-center hover">
                        <ul>
                            <li>
                                <h6>{{ item.title }}</h6>
                            </li>
                            <li>
                                <strong>Edad</strong>
                                <span>{{ item.field_edad_ }}</span>
                            </li>
                            <li>
                                <strong>Horas semanales</strong>
                                <span>{{ item.field_horas_semanales }}</span>
                            </li>
                            <li>
                                <strong>Jornadas</strong>
                                <span>{{ item.field_jornada }}</span>
                            </li>
                            <li>
                                <q-btn outline class="azul q-my-md centrar bg_white_i" @click="openPopForm(item)" label="Más Información" icon-right="arrow_right_alt"/>
                            </li>
                        </ul>
                    </div>
                </q-img>
            </div>
        </div>
    </div>
    <q-dialog v-model="formulario" >
        <q-card style="width: 700px; max-width: 80vw;" class="pop_mi_c pob_biblioteca bg_beige pop_escuelas">
            <q-card-section class="row items-center q-pb-none relative ">
                <q-btn class="btn_cerrar" icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="pop_club bg_white libro_icn">
              <span class="autor bold">Reserva de Servicios</span>
              <span class="autor bold">{{ currentItem.title }}</span>
            </q-card-section>
            <q-card-section class="pop_descargar bg_white list_biblioteca">
              <q-form
                  @submit="onSubmit"
                  @reset="onReset"
                  class="q-gutter-md form_biblioteca"
                  >

                  <div class="row_2">
                    <q-input
                        outlined
                        v-model="name"
                        label="Nombre *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Por favor diligencie el campo']"
                    />
                    <q-input
                        outlined
                        v-model="apellido"
                        label="Apellidos *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Por favor diligencie el campo']"
                    />
                  </div>

                  <div class="fila">
                    <q-input
                        outlined
                        v-model="telefono"
                        label="Número de contacto *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Por favor diligencie el campo']"
                    />
                  </div>

                  <div class="fila">
                    <q-input
                        outlined
                        v-model="correo"
                        label="Correo electrónico*"
                    />
                  </div>

                  <div class="fila">
                    <q-input
                        outlined
                        v-model="rut"
                        label="Rut"
                    />
                  </div>
                  <div class="fila">
                      <q-btn outline type="submit" class="azul text_white mt_10 bg_white" label="Reservar" icon-right="arrow_right_alt"/>
                  </div>
              </q-form>
            </q-card-section>
        </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import configServices from '../../services/config'

export default {
  name: 'Escuelas',
  data () {
    return {
      urlSite: 'https://www.pwcc.cl',
      info: [],
      formulario: false,
      name: '',
      correo: '',
      telefono: '',
      rut: '',
      apellido: '',
      currentItem: {}
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    openPopForm (item) {
      this.currentItem = item
      this.formulario = true
    },
    onReset () {

    },
    onSubmit () {
      var _this = this
      var data = {
        type: 'sendEmailReserva',
        service: 'Danza - Escuelas - ' + _this.title,
        email: this.correo,
        name: this.name,
        lastname: this.apellido,
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
          this.formulario = false
        }
      })
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/escuelas/json', {
        callBack: (data) => {
          _this.info = data
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
