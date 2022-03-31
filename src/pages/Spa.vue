<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menuspa currentItem="/spa"/>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
        autoplay
      >
        <q-carousel-slide v-for="(banner, key) in info.field_slider_home" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Spa & Wellness</div>
            <p class="intro text-center" v-html="info.body[0].value"></p>
             <q-btn outline  @click="pop_reservar_spa = true" class="azul q-my-md centrar bg_white_i" label="Reserva" icon-right="arrow_right_alt"/>
        </div>
    </div>
    <q-dialog v-model="pop_reservar_spa" >
        <q-card class="flex pop_reserva_spa">
            <div class="wrp_midle">
                <q-card-section class="row items-center q-pb-none">
                    <div class="vertical">
                        <div class="text-h6 open">Reserva de Servicios</div>
                        <div class="text-h6 open">Spa & Wellness</div>
                    </div>
                    <q-space />
                    <q-btn class="close_top" icon="close" flat round dense v-close-popup />
                </q-card-section>

                <q-card-section class="flex">
                    <q-form
                        @submit="onSubmit"
                        @reset="onReset"
                        class="q-gutter-md"
                        >
                        <div class="row_2 flex">
                            <q-input
                                outlined
                                v-model="name"
                                label="Nombres *"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Please type something']"
                            />
                            <q-input
                                outlined
                                v-model="apellido"
                                label="Apellidos *"
                                lazy-rules
                                :rules="[ val => val && val.length > 0 || 'Please type something']"
                            />
                        </div>
                        <q-input
                            outlined
                            v-model="telefono"
                            label="Número de contacto *"
                            :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />

                        <q-input outlined v-model="email" type="Correo electrónico" label="Correo electrónico *" :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                        <q-input
                            outlined
                            v-model="rut"
                            label="Rut *"
                            :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <div>
                            <q-btn outline type="submit" class="text_white mt_10 centrar bg_orange" label="Reservar" icon-right="arrow_right_alt"/>
                        </div>
                    </q-form>
                </q-card-section>
            </div>
        </q-card>
    </q-dialog>

    <div class="q-py-xl all_width bg_amarillo wrp_club">
        <div class="row_wrap no-wrap flex justify-start">
            <h3 class="q-my-none">Multimedia</h3>
            <q-btn class="q-ml-lg" outline color="indigo-10" icon-right="east" label="Ver más" />
      </div>

      <div class="row_wrap no-wrap flex justify-between fsecond_row_home">
        <div class="q-py-md">
          <table class="esquma_inferior" v-if="multimediaHome.length">
            <tr>
              <td class="tg-0pky" rowspan="2">
                <a href="#" @click="openItem(multimediaHome[4])"><img class="q-mx-none" alt="img1" :src="urlSite + multimediaHome[4].field_portada_multimedia"></a>
              </td>
              <td class="tg-0pky"><a href="#" @click="openItem(multimediaHome[2])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[2].field_portada_multimedia"></a></td>
              <td class="tg-0pky" rowspan="2"><a href="#" @click="openItem(multimediaHome[1])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[1].field_portada_multimedia"></a></td>
              <td class="tg-0pky" rowspan="2"><a href="#" @click="openItem(multimediaHome[0])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[0].field_portada_multimedia"></a></td>
            </tr>
            <tr>
              <td class="tg-0pky"><a href="#" @click="openItem(multimediaHome[0])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[3].field_portada_multimedia"></a></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Menuspa from 'pages/submenus/Menuspa'
import configServices from '../services/config'

export default {
  name: 'Spa',
  components: {
    Menuspa
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {
        body: [
          { value: '' }
        ]
      },
      urlSite: 'https://pwccdev.mkbk.digital/',
      multimediaHome: [],
      pop_reservar_spa: false,
      telefono: '',
      email: '',
      apellido: '',
      name: '',
      rut: ''
    }
  },
  created () {
    this.getInfo()
    this.getMultimediaHome()
  },
  methods: {
    onSubmit () {
      var _this = this
      var data = {
        type: 'sendEmailReserva',
        service: 'Spa & Wellness',
        email: this.email,
        name: this.name,
        lastname: this.apellido,
        phone: this.telefono,
        rut: this.rut
      }
      configServices.consumerStandar(this, 'pwcc-rest/post', data, {
        callBack: (data) => {
          console.log(data)
          if (data.status) {
            _this.$swal('Hemos registrado su solicitud pronto nos contactaremos')
          } else {
            _this.$swal('Estamos presentando problemas técnicos intente nuevamente más tarde')
          }

          this.email = ''
          this.name = ''
          this.apellido = ''
          this.telefono = ''
          this.rut = ''
          this.pop_reservar_spa = false
        }
      })
    },
    onReset () {

    },
    getMultimediaHome () {
      var _this = this
      configServices.loadData(this, '/multimedia-secciones/Spa & Wellness/json', {
        callBack: (data) => {
          console.log(data)
          for (const item in data) {
            _this.multimediaHome.push(data[item])
          }
          _this.$q.loading.hide()
        }
      })
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/224?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
        }
      })
    },
    openItem (multimedia) {
      if (multimedia.field_tipo_de_multimedia === 'Imagen') {
        this.$router.push('/multimedia/' + multimedia.nid)
      } else {
        var currentVideo = multimedia.field_video_youtube.split('=')
        this.currentVideo = currentVideo[0]
        this.video = true
      }
    }
  }
}
</script>
