<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
    <Menuspa currentItem="/spa/kinesiologia"/>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
      >
        <q-carousel-slide v-for="(banner, key) in info.field_slider_home" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
        <div class="cincuenta q-pb-xl centrar text-center">
            <div class="center text-center q-my-lg titulos">Kinesiología</div>
            <p class="intro text-center" v-html="info.body[0].value"></p>
             <q-btn outline type="a" :href="info.field_enlace[0].uri" target="_blank" class="azul q-my-md centrar bg_white_i" label="Reserva aquí" icon-right="arrow_right_alt"/>
        </div>
        <q-dialog v-model="formulario" >
        <q-card style="width: 700px; max-width: 80vw;" class="pop_mi_c pob_biblioteca bg_beige pop_escuelas">
            <q-card-section class="row items-center q-pb-none relative ">
                <q-btn class="btn_cerrar" icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="pop_club bg_white libro_icn">
              <span class="autor bold">Reserva de Servicios</span>
              <span class="autor bold">Kinesiología</span>
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
                        v-model="email"
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
                      <q-btn outline type="submit" class="azul text_white mt_10 bg_white" label="Inscribirse" icon-right="arrow_right_alt"/>
                  </div>
              </q-form>
            </q-card-section>
        </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import Menuspa from 'pages/submenus/Menuspa'
import configServices from '../../services/config'

export default {
  name: 'Kinesiologia',
  components: {
    Menuspa
  },
  data () {
    return {
      sliders: true,
      slide: 0,
      info: {
        body: [
          { value: '' }
        ]
      },
      formulario: false,
      currentVideo: '',
      name: '',
      email: '',
      telefono: '',
      rut: '',
      apellido: ''
    }
  },
  created () {
    this.$q.loading.show()
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
        service: 'Kinesiología',
        email: this.email,
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
          this.pop_reservar_spa = false
        }
      })
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/278?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
