<template>
  <q-page class="flex flex-center view_quienes_somos view_danza">
    <Menucultura/>
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
        <q-carousel-slide :name="1" img-src="../../assets/Home/banner-home.png" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Danza</div>
            <p class="intro text-center">El ballet clásico o danza clásica es una forma de danza cuyos movimientos están basados en el control total y absoluto del cuerpo, se recomienda empezar desde temprana edad debido a su grado de dificultad. A diferencia de otras danzas, en el ballet cada paso está codificado. Participan invariablemente las manos, brazos, tronco, cabeza, pies, rodillas, todo el cuerpo en una conjunción simultánea de dinámica muscular y mental que debe expresarse en total armonía de movimientos.</p>
        </div>
        <div class="setenta centrar">
            <ul class="wrp_actions_center_spa">
               <li><img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-03/i-compania_0.png"><strong>Escuelas</strong><a href="" target="_blank" icon-right="arrow_right_alt">Ver más  <span>-&gt;</span></a></li>
                 <li><img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-03/i-compania_0.png"><strong>Compañía</strong><a href="" target="_blank" icon-right="arrow_right_alt">Ver más  <span>-&gt;</span></a></li>
                 <li><img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-03/i-obras_0.png"><strong>Obras</strong><a href="" target="_blank" icon-right="arrow_right_alt">Ver más  <span>-&gt;</span></a></li>
            </ul>
        </div>
    </div>

    <div class="q-pb-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
            <h4 class="subtitle">Noticias</h4>
            <div class="row flex justify-center  items-start">
                <table class="sesenta">
                    <tr>
                        <td>
                            <img src="../../assets/HazteSocio/socio01.png" />
                        </td>
                        <td>
                            <h5 class="titulo_noticias">Título de la principal noticia de esta sección, texto falso.</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum tellus a nibh volutpat ultricies. Sed iaculis, erat a tristique vestibulum, urna ipsum aliquet…</p>
                            <q-btn outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                </table>
                <table class="treintaycinco">
                    <tr>
                        <td>
                            <h5 class="titulo_noticias">Título de noticias secundarias, texto falso.</h5>
                            <p>Sed iaculis, erat a tristique vestibulum, urna ipsum aliquet lorem…</p>
                            <q-btn outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5 class="titulo_noticias">Título de noticias secundarias, texto falso.</h5>
                            <p>Cras rutrum tellus a nibh volutpat ultricies. Sed iaculis, erat a tristique…</p>
                            <q-btn outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

    <div class="q-py-xl all_width gris_home wrp_club">
        <div class="row_wrap no-wrap flex justify-start">
            <h3 class="q-my-none">Multimedia</h3>
            <q-btn class="q-ml-lg" outline color="indigo-10" icon-right="east" label="Ver más" />
      </div>

      <div class="row_wrap no-wrap flex justify-between fsecond_row_home">
        <div class="q-py-md">
          <table class="esquma_inferior" v-if="multimediaHome.length">
            <tr>
              <td class="tg-0pky" rowspan="2">
                <a href="#" @click="openItem(multimediaHome[4])"><img class="q-mx-none" alt="img1" :src="urlSite + multimediaHome[4].field_galeria_home"></a>
              </td>
              <td class="tg-0pky"><a href="#" @click="openItem(multimediaHome[2])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[2].field_galeria_home"></a></td>
              <td class="tg-0pky" rowspan="2"><a href="#" @click="openItem(multimediaHome[1])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[1].field_galeria_home"></a></td>
              <td class="tg-0pky" rowspan="2"><a href="#" @click="openItem(multimediaHome[0])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[0].field_galeria_home"></a></td>
            </tr>
            <tr>
              <td class="tg-0pky"><a href="#" @click="openItem(multimediaHome[0])"><img class="q-mx-none" alt="img2" :src="urlSite + multimediaHome[3].field_galeria_home"></a></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="q-py-none all_width bg_amarillo wrp_club">
        <div class="row_wrap no-wrap flex justify-start">
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
                          v-model="telefono"
                          label="Rut *"
                      />
                      <div class="text-left">
                          <q-btn outline @click="pop_form_socio = true" class="azul q-my-md bg_white_i" label="Enviar" icon-right="arrow_right_alt"/>
                      </div>
                  </q-form>
              </div>
              <div class="staff">
                <span>
                aca va el widget de twitter, por favor borrar el texto cuando se coloque el widgec</span>

              </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Menucultura from 'pages/submenus/Menucultura'
import configServices from '../../services/config'

export default {
  name: 'Danza',
  components: {
    Menucultura
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {},
      urlSite: 'https://pwccdev.mkbk.digital/',
      multimediaHome: [],
      pop_reservar_spa: false
    }
  },
  created () {
    this.getMultimediaHome()
  },
  methods: {
    getMultimediaHome () {
      var _this = this
      configServices.loadData(this, 'multimedia-home/json', {
        callBack: (data) => {
          console.log(data)
          for (const item in data) {
            _this.multimediaHome.push(data[item])
          }
          _this.$q.loading.hide()
        }
      })
    },
    openItem (multimedia) {
      console.log(multimedia)
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
