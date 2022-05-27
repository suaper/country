<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menucultura currentItem="/cultura/biblioteca"/>
    <div class="q-pb-md all_width gris_home view_danzas q-mt-xl q-mb-md">
        <div class="setenta  centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Buscador de Libros</div>
            <div class="back"> <q-btn to="/cultura/biblioteca" round color="white" icon="west" />Volver</div>
        </div>
    </div>
    <div class="q-py-md w_1200 centrar flex_escuelas flex_obras justify-center">
        <div class="row_search">
            <div class="wrp_search flex">
                <h5>Buscador de Libros</h5>
                <q-input
                    outlined
                    v-model="filter"
                    lazy-rules
                    class="bg_ww"
                    :rules="[ val => val && val.length > 3 || 'Debe escribir más de 3 letras']"
                    @input="setFilter()"
                />
                 <q-icon name="search"></q-icon>
            </div>
            <div class="radio">
                <p>Filtros</p>
                <div class="vertical">
                    <q-radio v-model="shape" val="ingles" color="orange" label="Inglés" @input="setFilterLanguage"/>
                    <q-radio v-model="shape" val="español" color="orange"  label="Español" @input="setFilterLanguage"/>
                </div>
            </div>
        </div>
    </div>

    <div class="q-pb-xl all_width bg_amarillo wrp_club hazte_socio" v-if="filtersSeted">
        <div class="centrar w_1200">
        <div class="text-left q-mb-none q-mt-xl titulos wrp_gallery_biblioteca">Resultados de Búsqueda</div>

            <div class="row fit justify-between items-center q-gutter-xs q-col-gutter wrap wwsearcing">
                <div class="treintaydos_general search_box" v-for="(book, keyBook) in booksFilter" :key="keyBook">
                    <table class="galeri_event">
                        <tr>
                            <td class="center">
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
      filter: '',
      shape: '',
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
      apellido: '',
      booksFilter: [],
      filtersSeted: false
    }
  },
  created () {
    this.getBooks()
  },
  methods: {
    setFilter () {
      var _this = this
      if (this.filter.length > 3) {
        _this.booksFilter = []
        this.books.map((item, key) => {
          if (item.title.toLowerCase().includes(this.filter) || item.body.toLowerCase().includes(this.filter) || item.field_autor.toLowerCase().includes(this.filter) || item.field_categoria_libro.toLowerCase().includes(this.filter)) {
            _this.booksFilter.push(item)
          }
        })
        _this.filtersSeted = true
      }
    },
    setFilterLanguage () {
      var _this = this
      _this.booksFilter = []
      this.books.map((item, key) => {
        if (item.field_idioma_libro.toLowerCase() === _this.shape) {
          _this.booksFilter.push(item)
        }
      })
      _this.filtersSeted = true
    },
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
    getBooks () {
      var _this = this
      configServices.loadData(this, '/libros/json', {
        callBack: (data) => {
          _this.books = data
          _this.$q.loading.hide()
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
