<template>
  <q-page class="flex flex-center view_hijos_socios view_kids">
    <Menusomos currentItem="/quienes-somos/administracion" />
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
    <div class="q-pb-xl all_width gris_home">
        <div class="setenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Administración</div>
        </div>
        <div class="row_wrap no-wrap">
            <div class="staff_general">
                 <div class="flex" style="justify-content: space-between;">
                    <table class="datos_staff_contacto">
                        <tr>
                            <td><img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/staff-play6.png" class="raius"></td>
                            <td>
                                <p><strong>Denise Maringer Durán  </strong></p>
                                <p><strong>Gerente de Deportes</strong></p>
                                <p>correo@pwcc.cl</p>
                            </td>
                        </tr>
                    </table>
                    <table class="datos_staff_contacto">
                        <tr>
                            <td><img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/staff-play6.png" class="raius"></td>
                            <td>
                                <p><strong>Denise Maringer Durán  </strong></p>
                                <p><strong>Gerente de Deportes</strong></p>
                                <p>correo@pwcc.cl</p>
                            </td>
                        </tr>
                    </table>
                    <table class="datos_staff_contacto">
                        <tr>
                            <td><img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/staff-play6.png" class="raius"></td>
                            <td>
                                <p><strong>Denise Maringer Durán  </strong></p>
                                <p><strong>Gerente de Deportes</strong></p>
                                <p>correo@pwcc.cl</p>
                            </td>
                        </tr>
                    </table>
                    <table class="datos_staff_contacto">
                        <tr>
                            <td><img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/staff-play6.png" class="raius"></td>
                            <td>
                                <p><strong>Denise Maringer Durán  </strong></p>
                                <p><strong>Gerente de Deportes</strong></p>
                                <p>correo@pwcc.cl</p>
                            </td>
                        </tr>
                    </table>
                    <table class="datos_staff_contacto">
                        <tr>
                            <td><img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/staff-play6.png" class="raius"></td>
                            <td>
                                <p><strong>Denise Maringer Durán  </strong></p>
                                <p><strong>Gerente de Deportes</strong></p>
                                <p>correo@pwcc.cl</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="q-py-md row_wrap no-wrap">
            <div class="staff_general">
                 <div class="flex" style="justify-content: space-between;">
                    <table class="datos_staff_contacto">
                        <tr>
                            <td><img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/staff-play6.png" class="raius"></td>
                            <td>
                                <p><strong>Denise Maringer Durán  </strong></p>
                                <p><strong>Gerente de Deportes</strong></p>
                                <p>correo@pwcc.cl</p>
                            </td>
                        </tr>
                    </table>
                    <table class="datos_staff_contacto">
                        <tr>
                            <td><img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/staff-play6.png" class="raius"></td>
                            <td>
                                <p><strong>Denise Maringer Durán  </strong></p>
                                <p><strong>Gerente de Deportes</strong></p>
                                <p>correo@pwcc.cl</p>
                            </td>
                        </tr>
                    </table>
                    <table class="datos_staff_contacto">
                        <tr>
                            <td><img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/staff-play6.png" class="raius"></td>
                            <td>
                                <p><strong>Denise Maringer Durán  </strong></p>
                                <p><strong>Gerente de Deportes</strong></p>
                                <p>correo@pwcc.cl</p>
                            </td>
                        </tr>
                    </table>
                    <table class="datos_staff_contacto">
                        <tr>
                            <td><img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/staff-play6.png" class="raius"></td>
                            <td>
                                <p><strong>Denise Maringer Durán  </strong></p>
                                <p><strong>Gerente de Deportes</strong></p>
                                <p>correo@pwcc.cl</p>
                            </td>
                        </tr>
                    </table>
                    <table class="datos_staff_contacto">
                        <tr>
                            <td><img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/staff-play6.png" class="raius"></td>
                            <td>
                                <p><strong>Denise Maringer Durán  </strong></p>
                                <p><strong>Gerente de Deportes</strong></p>
                                <p>correo@pwcc.cl</p>
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
import Menusomos from 'pages/submenus/Menusomos'
import configServices from '../../services/config'

export default {
  name: 'Administracion',
  components: {
    Menusomos
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
      personal: [],
      secondPersonal: [],
      urlSite: 'https://pwccdev.mkbk.digital/',
      multimediaHome: []
    }
  },

  created () {
    this.getInfo()
    this.getMultimediaHome()
  },
  methods: {
    getMultimediaHome () {
      var _this = this
      configServices.loadData(this, '/multimedia-secciones/playroom/json', {
        callBack: (data) => {
          for (const item in data) {
            _this.multimediaHome.push(data[item])
          }
          _this.$q.loading.hide()
        }
      })
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/365?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
        }
      })

      configServices.loadData(this, '/personal-staff/playroom', {
        callBack: (data) => {
          _this.personal = data
        }
      })
    },
    openItem (e, multimedia) {
      e.preventDefault()
      if (multimedia.field_tipo_de_multimedia === 'Imagen') {
        localStorage.setItem('multimediaId', multimedia.nid)
        this.$router.push('/detalle-multimedia')
      } else {
        var currentVideo = multimedia.field_video_youtube.split('=')
        this.currentVideo = currentVideo[1]
        this.video = true
      }
    }
  }
}
</script>
