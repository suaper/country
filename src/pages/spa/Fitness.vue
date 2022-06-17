<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
    <Menuspa currentItem="/spa/fitness"/>
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
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Fitness</div>
            <p class="intro text-center" v-html="info.body[0].value"></p>
        </div>
        <ul class="wrp_actions_center_spa">
            <li v-for="(item, key) in items" :key="key">
                <img :src="urlSite + item.field_icono_item">
                <strong>{{ item.field_titulo_item }}</strong>
                <a @click="goItem($event, item.field_titulo_item.toLowerCase())" target="_blank" icon-right="arrow_right_alt">Ver más  <span>-></span></a>
            </li>
        </ul>
    </div>

    <div class="q-pb-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="table_fitnes">
              <tr class="sin_fondo">
                  <th class="text-right">Gimnasio</th>
                  <th class="align_center">Vs.</th>
                  <th class="text-center">Fitness Funcional</th>
              </tr>
              <tr v-for="(item, key) in itemsCorporativo" :key="key">
                  <td class="align_right" v-html="item.field_texto_uno"></td>
                  <td class="center">
                      {{ item.field_titulo_comparativo }}
                  </td>
                  <td class="align_left" v-html="item.field_texto_dos"></td>
              </tr>
          </table>
        </div>
    </div>

    <div :class="(key % 2 === 0) ? 'q-pb-md all_width gris_home wrp_club hazte_socio' : 'q-pb-md all_width bg_amarillo wrp_club hazte_socio'" v-for="(item, key) in fitnessTypes" :key="key">
        <div class="centrar w_1200">
          <table class="contenido_fitness">
              <tr v-if="(key % 2 === 0)">
                  <td>
                      <h6 class="title_text">{{ item.title }}</h6>
                      <p v-html="item.body"></p>

                      <!--<q-btn outline class="azul q-my-md centrar bg_white_i" label="Reserva" icon-right="arrow_right_alt"/>-->
                  </td>
                  <td>
                      <img :src="urlSite + item.field_imagen_fitness" />
                  </td>
              </tr>
              <tr v-if="(key % 2 !== 0)">
                  <td>
                      <img :src="urlSite + item.field_imagen_fitness" />
                  </td>
                  <td>
                      <h6 class="title_text">{{ item.title }}</h6>
                      <p v-html="item.body"></p>

                      <!--<q-btn :to="item.field_reservar" outline class="azul q-my-md centrar bg_white_i" label="Reserva" icon-right="arrow_right_alt"/>-->
                  </td>
              </tr>
          </table>
        </div>
    </div>

    <div class="q-py-md all_width bg_amarillo wrp_club">
        <div class="q-py-md centrar text-center w_1200">
          <div class="row_2 fitnes_last">
              <div class="form_fitness">
                  <h6 class="title_text">Contacto</h6>
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
                          :rules="[ val => val && val.length > 0 || 'Please type something']"
                      />
                      <q-input
                          outlined
                          v-model="telefono"
                          label="Número de contacto *"
                      />
                      <q-input outlined v-model="email" type="Correo electrónico" label="Correo electrónico *" />
                      <q-input
                          outlined
                          v-model="rut"
                          label="Rut *"
                      />
                      <div class="text-left">
                          <q-btn outline type="submit" class="azul q-my-md bg_white_i" label="Enviar" icon-right="arrow_right_alt"/>
                      </div>
                  </q-form>
              </div>
              <div class="staff">
              <h6 class="title_text">Staff</h6>
                <table class="datos_staff">
                  <tr>
                    <td>
                        <img class="raius" :src="urlSite + personal.field_imagen_perfil" />
                    </td>
                    <td>
                        <p>
                          {{ personal.field_nombre_staff }}
                        </p>
                        <span class="border_40"></span>
                        <strong class="color_p">{{ personal.field_cargo_staff }}</strong>
                    </td>
                  </tr>
                </table>
                <ul class="contacto_footer">
                  <li class="mail">
                      <img src="../../assets/HazteSocio/i-correo.svg" />
                      <span>{{ personal.field_correo_staff }}</span>
                  </li>
                  <li class="tel">
                      <img src="../../assets/HazteSocio/i-phone.svg" />
                      <span>{{ personal.field_numero_staff }}</span>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
  </q-page>
</template>

<script>
import Menuspa from 'pages/submenus/Menuspa'
import configServices from '../../services/config'

export default {
  name: 'Fitness',
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
      pop_consultar: false,
      name: '',
      telefono: '',
      email: '',
      urlSite: 'https://pwccdev.mkbk.digital/',
      items: [],
      itemsCorporativo: [],
      fitnessTypes: [],
      personal: {
        field_imagen_perfil: ''
      },
      rut: ''
    }
  },
  created () {
    this.$q.loading.show()
    this.getInfo()
    this.getItems()
    this.getCorporativo()
    this.getFitnessType()
  },
  methods: {
    onSubmit () {
      var _this = this
      var data = {
        type: 'sendEmailReserva',
        service: 'Fitness',
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
    onReset () {

    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/230?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
        }
      })

      configServices.loadData(this, '/personal-staff/fitness', {
        callBack: (data) => {
          _this.personal = data[0]
        }
      })
    },
    getItems () {
      var _this = this
      configServices.loadData(this, '/fitness/json', {
        callBack: (data) => {
          _this.items = data
        }
      })
    },
    getCorporativo () {
      var _this = this
      configServices.loadData(this, '/fitness-corporativo/json', {
        callBack: (data) => {
          _this.itemsCorporativo = data
        }
      })
    },
    getFitnessType () {
      var _this = this
      configServices.loadData(this, '/tipos-fitness/json', {
        callBack: (data) => {
          _this.fitnessTypes = data
          _this.$q.loading.hide()
        }
      })
    },
    goItem (e, item) {
      e.preventDefault()
      this.$router.push('/spa/' + item + '/')
    }
  }
}
</script>
