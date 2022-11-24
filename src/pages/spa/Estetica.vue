<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness table_table">
    <Menuspa currentItem="/spa/centro-de-estetica"/>
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
            <div class="center text-center q-my-lg titulos">Centro de Estética</div>
            <p class="intro text-center" v-html="info.body[0].value"></p>
        </div>
        <ul class="wrp_actions_center_peluqueria">
            <li>
                <a href="#" @click="goToAnchor($event, '#masajes-item')" icon-right="arrow_right_alt">Masajes</a>
            </li>
            <li>
                <a href="#" @click="goToAnchor($event, '#depilacion-item')" icon-right="arrow_right_alt">Depilación</a>
            </li>
            <li>
                <a href="#" @click="goToAnchor($event, '#cosmetologia-item')" icon-right="arrow_right_alt">Cosmetología</a>
            </li>
            <li>
                <a href="#" @click="goToAnchor($event, '#manicure-item')" icon-right="arrow_right_alt">Manicure</a>
            </li>
            <li>
                <a href="#" @click="goToAnchor($event, '#pedicure-item')" icon-right="arrow_right_alt">Pedicure</a>
            </li>
        </ul>
    </div>

    <div class="q-py-md all_width bg_amarillo wrp_club hazte_socio" id="masajes-item">
        <div class="centrar w_1000">
        <h6 class="peluqueria q-mt-none">Masajes</h6>
          <table class="contenido_pelu">
              <tr>
                  <td>
                    <table class="datos_peluqueria" v-for="item in services" :key="item.nid" v-show="item.nid === '271'">
                        <tr>
                            <th>Tipo</th>
                            <th>Tiempo</th>
                            <th>Precio</th>
                        </tr>
                        <tr v-for="(subItem, key) in item.subServices" :key="key">
                            <td :class="(subItem.duplicate) ? 'sin_borde' : ''">{{ (!subItem.duplicate) ? subItem.title : ''}}</td>
                            <td>{{ subItem.time }} Minutos</td>
                            <td>{{ addCommas(subItem.price) }}</td>
                        </tr>
                    </table>
                  </td>
                  <td>
                      <img :src="urlSite + imageMasajes" />
                  </td>
              </tr>
          </table>
        </div>
    </div>

    <div class="q-py-md all_width gris_home wrp_club hazte_socio" id="depilacion-item">
        <div class="centrar w_1000">
        <h6 class="peluqueria q-mt-none">Depilación</h6>
          <table class="contenido_pelu">
              <tr>
                  <td>
                      <img :src="urlSite + imageDepilacion" />
                  </td>
                  <td>
                    <table class="datos_peluqueria" v-for="item in services" :key="item.nid" v-show="item.nid === '272'">
                        <tr>
                            <th>Zona</th>
                            <th>Precio</th>
                        </tr>
                        <tr v-for="(subItem, key) in item.subServices" :key="key">
                            <td>{{ subItem.title }}</td>
                            <td>{{ addCommas(subItem.price) }}</td>
                        </tr>
                    </table>
                  </td>
              </tr>
          </table>
        </div>
    </div>
    <div class="q-py-md all_width bg_amarillo wrp_club hazte_socio" id="cosmetologia-item">
        <div class="centrar w_1000">
        <h6 class="peluqueria q-mt-none">Cosmetología</h6>
            <table class="contenido_pelu">
              <tr>
                  <td>
                    <table class="datos_peluqueria" v-for="item in services" :key="item.nid" v-show="item.nid === '273'">
                        <tr>
                            <th>Procedimiento</th>
                            <th>Precio</th>
                        </tr>
                        <tr v-for="(subItem, key) in item.subServices" :key="key">
                            <td>{{ subItem.title }}</td>
                            <td>{{ addCommas(subItem.price) }}</td>
                        </tr>
                    </table>
                  </td>
                  <td>
                      <img :src="urlSite + imageCosmeto" />
                  </td>
              </tr>
          </table>
        </div>
    </div>
    <div class="q-py-md all_width gris_home wrp_club hazte_socio" id="manicure-item">
        <div class="centrar w_1000">
        <h6 class="peluqueria q-mt-none">Manicure</h6>
            <table class="contenido_pelu">
              <tr>
                  <td>
                      <img :src="urlSite + imageManicure" />
                  </td>
                  <td>
                    <table class="datos_peluqueria" v-for="item in services" :key="item.nid" v-show="item.nid === '274'">
                        <tr>
                            <th>Procedimiento</th>
                            <th>Precio</th>
                        </tr>
                        <tr v-for="(subItem, key) in item.subServices" :key="key">
                            <td>{{ subItem.title }}</td>
                            <td>{{ addCommas(subItem.price) }}</td>
                        </tr>
                    </table>
                  </td>
              </tr>
          </table>
        </div>
    </div>
   <div class="q-py-md all_width bg_amarillo wrp_club hazte_socio" id="pedicure-item">
        <div class="centrar w_1000">
        <h6 class="peluqueria q-mt-none">Pedicure</h6>
            <table class="contenido_pelu">
              <tr>
                  <td>
                     <table class="datos_peluqueria" v-for="item in services" :key="item.nid" v-show="item.nid === '298'">
                        <tr>
                            <th>Procedimiento</th>
                            <th>Precio</th>
                        </tr>
                        <tr v-for="(subItem, key) in item.subServices" :key="key">
                            <td>{{ subItem.title }}</td>
                            <td>{{ addCommas(subItem.price) }}</td>
                        </tr>
                    </table>
                  </td>
                  <td>
                       <img :src="urlSite + imagePedicure" />
                  </td>
              </tr>
          </table>
        </div>
        <div class="fitnes_last w_1200 centrar q-pt-xl">
          <div class="staff">
              <h6 class="title_text">Staff</h6>
              <div class="flex">
                  <table class="datos_staff_contacto" v-for="(personal, key) in personal" :key="key">
                      <tr>
                          <td>
                              <img class="raius" :src="urlSite + personal.field_imagen_perfil" />
                          </td>
                          <td>
                              <p><strong>{{ personal.field_nombre_staff }}</strong></p>
                              <p><strong> {{ personal.field_cargo_staff }} </strong></p>
                              <p>{{ personal.field_correo_staff }}</p>
                              <p>{{ personal.field_numero_staff }}</p>
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
import Menuspa from 'pages/submenus/Menuspa'
import configServices from '../../services/config'

export default {
  name: 'Estetica',
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
      services: [],
      urlSite: 'https://obt3.cl',
      imageMasajes: '',
      imageDepilacion: '',
      imageCosmeto: '',
      imageManicure: '',
      imagePedicure: '',
      personal: []
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    goToAnchor (e, item) {
      e.preventDefault()
      const el = document.querySelector(item)
      var top = el.offsetTop
      window.scrollTo({
        top: top,
        left: 0,
        behavior: 'smooth'
      })
      // el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    addCommas (x) {
      if (typeof x !== 'undefined') {
        const formatter = new Intl.NumberFormat('es-CO', {
          style: 'currency',
          currency: 'COP',

          // These options are needed to round to whole numbers if that's what you want.
          minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
          maximumFractionDigits: 0 // (causes 2500.99 to be printed as $2,501)
        })
        return formatter.format(parseInt(x))
      }
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/300?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
          _this.$q.loading.hide()
        }
      })
      configServices.loadData(this, '/personal-staff/centro-de-estetica', {
        callBack: (data) => {
          _this.personal = data
        }
      })
      configServices.loadData(this, 'servicios-estetica/json', {
        callBack: (data) => {
          data.map((item, key) => {
            switch (item.nid) {
              case '298':
                _this.imagePedicure = item.field_imagen_servicio
                break
              case '274':
                _this.imageManicure = item.field_imagen_servicio
                break
              case '273':
                _this.imageCosmeto = item.field_imagen_servicio
                break
              case '272':
                _this.imageDepilacion = item.field_imagen_servicio
                break
              case '271':
                _this.imageMasajes = item.field_imagen_servicio
                break
            }
            var service = {
              nid: item.nid,
              title: item.title,
              image: item.field_imagen_servicio,
              subServices: [
                {
                  title: item.field_nombre_item,
                  price: item.field_valor,
                  time: item.field_tiempo
                }
              ]
            }

            const isFound = _this.services.find((element, index) => {
              const isSubFound = element.subServices.find((subElement, subIndex) => {
                if (typeof subElement !== 'undefined') {
                  if (item.field_nombre_item === subElement.title) {
                    subElement.duplicate = true
                  }
                }
              })

              if (typeof isSubFound !== 'undefined') {
                element.subServices.push(isSubFound)
              }
              if (element.title === item.title) {
                _this.services.splice(index, 1)
                return element
              }
            })

            if (typeof isFound !== 'undefined') {
              isFound.subServices.push({
                title: item.field_nombre_item,
                price: item.field_valor,
                time: item.field_tiempo
              })

              _this.services.push(isFound)
            } else {
              _this.services.push(service)
            }
          })

          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
