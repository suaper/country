<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menucultura currentItem="/cultura/biblioteca"/>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
        autoplay="autoplay"
      >
        <q-carousel-slide v-for="(banner, key) in info.field_slider_home" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Biblioteca</div>
            <table class="des_biblioteca">
                <tr>
                    <td v-html="info.field_horario[0].value"></td>
                    <td>
                        <p class="intro text-center" v-html="info.body[0].value"></p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div class="franja_azul full-width row wrap justify-center items-center content-center bg_azul">
        <h5 class="text-white">Buscador de Libros</h5>
        <q-btn to="/cultura/buscador-libros" outline  class="btn_bg_beige" label="Ver Libros Disponibles" icon-right="arrow_right_alt"/>
    </div>

    <div class="q-pb-xl all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
        <div class="text-left q-mb-none q-mt-xl titulos">Recomendados del Mes</div>
            <div class="wrp_gallery_biblioteca q-mt-md">
                <q-carousel
                v-model="slideMoreReads"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="primary"
                padding
                arrows
                height="320px"
                class="galeria_beneficios"
                >
                <q-carousel-slide :name="key" class="column no-wrap" v-for="(item, key) in booksMoreReads" :key="key">
                    <div class="row fit flex-start items-center q-gutter-xs q-col-gutter no-wrap">
                        <div class="treintaydos_general" v-for="(book, keyBook) in item" :key="keyBook">
                            <table class="galeri_event">
                                <tr>
                                    <td>
                                        <img class="img_biblioteca" :src="urlSite + book.field_imagen_libro" />
                                        <h5 class="name_event">{{ book.title }}</h5>
                                        <p class="desc_event text-center" v-html="book.body"></p>
                                        <q-btn class="btn_bg_beige centrar  btn_centrar" :label="book.field_tipo_de_libro" @click="openDetail(book)"/>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </q-carousel-slide>
                </q-carousel>
                <div class="row justify-center botones">
                  <q-btn-toggle
                      glossy
                      v-model="slideMoreReads"
                      :options="[]"
                  />
                </div>
            </div>
        </div>
    </div>
    <q-dialog v-model="detalle">
        <q-card style="width: 700px; max-width: 80vw;" class="pop_mi_c pob_biblioteca bg_beige">
            <q-card-section class="row items-center q-pb-none relative ">
                <q-btn class="btn_cerrar" icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="pop_club bg_white libro_icn">
                <span class="desc_club">{{ currentBook.title }}</span><br>
                <span class="autor bold">{{ currentBook.field_autor }}</span>
            </q-card-section>
            <q-card-section class="pop_descargar bg_white list_biblioteca">
              <ul>
                <li><p v-html="currentBook.body"></p></li>
              </ul>
              <q-btn @click="openPopForm()" outline class="azul q-my-md centrar sin_borde" label="Reservar" icon-right="arrow_right_alt"/>
            </q-card-section>
        </q-card>
    </q-dialog>

    <q-dialog v-model="formulario" >
        <q-card style="width: 700px; max-width: 80vw;" class="pop_mi_c pob_biblioteca bg_beige">
            <q-card-section class="row items-center q-pb-none relative ">
                <q-btn class="btn_cerrar" icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="pop_club bg_white libro_icn">
              <span class="desc_club">Reserva de Libro de la Biblioteca</span><br>
              <span class="desc_club">{{ currentBook.title }}</span><br>
              <span class="autor bold">{{ currentBook.field_autor }}</span>
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

                  <div class="fila">
                    <q-input
                        outlined
                        v-model="telefono"
                        label="Número de contacto *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
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
    <!--<div class="q-pb-xl all_width bg_gris wrp_club hazte_socio">
        <div class="centrar w_1200">
        <div class="text-left q-mb-none q-mt-xl titulos">Literatura Infantil</div>
            <div class="wrp_gallery_biblioteca q-mt-md">
                <q-carousel
                v-model="slideChild"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="primary"
                padding
                arrows
                height="320px"
                class="galeria_beneficios"
                >
                <q-carousel-slide :name="key" class="column no-wrap" v-for="(item, key) in booksChild" :key="key">
                    <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                        <div class="treintaydos_general" v-for="(book, keyBook) in item" :key="keyBook">
                            <table class="galeri_event">
                                <tr>
                                    <td>
                                        <img class="img_biblioteca" :src="urlSite + book.field_imagen_libro" />
                                        <h5 class="name_event">{{ book.title }}</h5>
                                        <p class="desc_event text-center" v-html="book.body"></p>
                                        <q-btn class="btn_bg_beige centrar  btn_centrar" :label="book.field_tipo_de_libro" @click="openDetail(book)"/>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </q-carousel-slide>
                </q-carousel>
                <div class="row justify-center botones">
                    <q-btn-toggle
                        glossy
                        v-model="slideChild"
                        :options="[]"
                    />
                </div>
            </div>
        </div>
    </div>-->

    <div class="q-py-xl all_width gris_home wrp_club wrp_staff_biblioteca">
        <div class="centrar w_1200 items-center">
            <h4 class="subtitle sin_margen">Staff</h4>
            <ul class="contacto_footer w_1200 flex justify-between items-center">
                <li>
                    <div class="staff_biblioteca">
                        <table class="datos_staff_biblioteca">
                            <tr>
                                <td>
                                    <img class="raius" :src="urlSite + personal.field_imagen_perfil" />
                                </td>
                                <td>
                                    <p class="text-center"><strong>{{ personal.field_nombre_staff }}</strong></p>
                                    <hr class="hr_amarillo noventaycinco">
                                    <p class="text-center"><strong> {{ personal.field_cargo_staff }} </strong></p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </li>
                <li class="mail">
                    <img src="../../assets/HazteSocio/i-correo.svg" />
                    <span>{{ personal.field_correo_staff }}</span>
                </li>
                <!--<li class="tel">
                    <img src="../../assets/HazteSocio/i-phone.svg" />
                    <span>{{ personal.field_numero_staff }}</span>
                </li>-->
            </ul>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menucultura from 'pages/submenus/Menucultura'
import configServices from '../../services/config'

export default {
  name: 'Biblioteca',
  components: {
    Menucultura
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      slideMoreReads: 0,
      currentBook: {},
      slideChild: 0,
      info: {
        body: [
          { value: '' }
        ],
        field_horario: [
          { value: '' }
        ]
      },
      urlSite: 'https://pwccdev.mkbk.digital/',
      multimediaHome: [],
      pop_reservar_spa: false,
      booksMoreReads: [],
      booksChild: [],
      personal: [],
      detalle: false,
      formulario: false,
      telefono: '',
      correo: '',
      name: '',
      rut: '',
      apellido: ''
    }
  },
  created () {
    this.getInfo()
    this.getMultimediaHome()
    this.getBooksMoreReads()
    this.getBooksChild()
  },
  methods: {
    onSubmit () {
      var _this = this
      var data = {
        type: 'sendEmailReserva',
        service: 'Biblioteca: Libro ' + _this.currentBook.title,
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
    onReset () {
      // reset
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/201?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
        }
      })

      configServices.loadData(this, '/personal-staff/biblioteca', {
        callBack: (data) => {
          _this.personal = data[0]
        }
      })
    },
    openDetail (book) {
      this.currentBook = book
      this.detalle = true
    },
    openPopForm () {
      this.detalle = false
      this.formulario = true
    },
    cerrarFormulario () {
      this.formulario = false
    },
    getMultimediaHome () {
      var _this = this
      configServices.loadData(this, 'multimedia-home/json', {
        callBack: (data) => {
          for (const item in data) {
            _this.multimediaHome.push(data[item])
          }
          _this.$q.loading.hide()
        }
      })
    },
    getBooksMoreReads () {
      var _this = this
      configServices.loadData(this, '/libros/50/json', {
        callBack: (data) => {
          const n = 3
          _this.booksMoreReads = new Array(Math.ceil(data.length / n))
            .fill()
            .map(_ => data.splice(0, n))
        }
      })
    },
    getBooksChild () {
      var _this = this
      configServices.loadData(this, '/libros/49/json', {
        callBack: (data) => {
          const n = 3
          _this.booksChild = new Array(Math.ceil(data.length / n))
            .fill()
            .map(_ => data.splice(0, n))
        }
      })
    },
    openItem (multimedia) {
      if (multimedia.field_tipo_de_multimedia === 'Imagen') {
        this.$router.push('/multimedia/' + multimedia.field_multimedia_enlace)
      } else {
        var currentVideo = multimedia.field_video_youtube.split('=')
        this.currentVideo = currentVideo[0]
        this.video = true
      }
    }
  }
}
</script>
