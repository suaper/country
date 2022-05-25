<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menucultura currentItem="/cultura/biblioteca"/>
    <div class="q-pb-md all_width gris_home view_danzas q-my-xl">
        <div class="setenta  centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Buscador de Libros</div>
            <div class="back"> <q-btn to="/cultura/danza" round color="white" icon="west" />Volver</div>
        </div>
    </div>
    <div class="q-py-md w_1200 centrar flex_escuelas flex_obras justify-center">
        <div class="row_search">
            <div class="wrp_search flex">
                <h5>Buscador de Libros</h5>
                <q-select
                filled
                v-model="model"
                use-input
                input-debounce="0"
                label="Simple filter"
                :options="options"
                @filter="filterFn"
                style="width: 250px"
                behavior="menu"
            >
                <template v-slot:no-option>
                <q-item>
                    <q-item-section class="text-grey">
                    No results
                    </q-item-section>
                </q-item>
                </template>
            </q-select>
            </div>
            <div class="radio">
                <p>Filtros</p>
                <div class="q-pa-md vertical">
                    <q-radio v-model="shape" val="ingles" color="orange" label="Inglés" />
                    <q-radio v-model="shape" val="espaniol" color="orange"  label="Español" />
                </div>
            </div>
        </div>
    </div>

    <div class="q-pb-xl all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
        <div class="text-left q-mb-none q-mt-xl titulos wrp_gallery_biblioteca">Resultados de Búsqueda</div>

            <div class="row fit justify-between items-center q-gutter-xs q-col-gutter wrap wwsearcing">
                <div class="treintaydos_general search_box">
                    <table class="galeri_event">
                        <tr>
                            <td class="center">
                                <img class="img_biblioteca" src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-03/libro01.png" />
                                <h5 class="name_event">Libro 5</h5>
                                <p class="desc_event text-center">Lorem ipsum dolor sit amet consectetur </p>
                                <a href="#">Reservar<q-icon name="arrow_right_alt" class="cursor-pointer"></q-icon></a>
                            </td>
                        </tr>
                    </table>
                </div>
              <div class="treintaydos_general search_box">
                    <table class="galeri_event">
                        <tr>
                            <td class="center">
                                <img class="img_biblioteca" src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-03/libro01.png" />
                                <h5 class="name_event">Libro 5</h5>
                                <p class="desc_event text-center">Lorem ipsum dolor sit amet consectetur </p>
                                <a href="#">Reservar<q-icon name="arrow_right_alt" class="cursor-pointer"></q-icon></a>
                            </td>
                        </tr>
                    </table>
                </div>
              <div class="treintaydos_general search_box">
                    <table class="galeri_event">
                        <tr>
                            <td class="center">
                                <img class="img_biblioteca" src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-03/libro01.png" />
                                <h5 class="name_event">Libro 5</h5>
                                <p class="desc_event text-center">Lorem ipsum dolor sit amet consectetur </p>
                                <a href="#">Reservar<q-icon name="arrow_right_alt" class="cursor-pointer"></q-icon></a>
                            </td>
                        </tr>
                    </table>
                </div>
              <div class="treintaydos_general search_box">
                    <table class="galeri_event">
                        <tr>
                            <td class="center">
                                <img class="img_biblioteca" src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-03/libro01.png" />
                                <h5 class="name_event">Libro 5</h5>
                                <p class="desc_event text-center">Lorem ipsum dolor sit amet consectetur </p>
                                <a href="#">Reservar<q-icon name="arrow_right_alt" class="cursor-pointer"></q-icon></a>
                            </td>
                        </tr>
                    </table>
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
              <span class="desc_club">Nombre del Libro</span><br>
              <span class="autor bold">Autor</span>
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
    <div class="q-pb-xl all_width bg_gris wrp_club hazte_socio">
        <div class="centrar w_1200">
        <div class="text-left q-mb-none q-mt-xl titulos">Literatura Infantil</div>
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
        </div>
    </div>

  </q-page>
</template>

<script>
import Menucultura from 'pages/submenus/Menucultura'
import configServices from '../../services/config'

const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]

export default {
  setup () {
    const options = stringOptions

    return {
      model: null,
      stringOptions,
      options,

      filterFn (val, update) {
        if (val === '') {
          update(() => {
            options.value = stringOptions
          })
          return
        }

        update(() => {
          const needle = val.toLowerCase()
          options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
      }
    }
  },
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
      shape: 'ingles',
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
      formulario: false
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
