<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
    <Menuspa currentItem="/spa/peluqueria"/>
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
            <div class="center text-center q-my-lg titulos">Peluquería</div>
            <p class="intro text-center" v-html="info.body[0].value"></p>
        </div>
        <ul class="wrp_actions_center_peluqueria">
            <li>
                <a href="#" @click="goToAnchor($event, '#mujeres-item')" icon-right="arrow_right_alt">Mujeres</a>
            </li>
            <li>
                <a href="#" @click="goToAnchor($event, '#hombres-item')" icon-right="arrow_right_alt">Hombres</a>
            </li>
        </ul>
    </div>
    <a href="" id="mujeres-item"></a>
    <div class="q-py-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_pelu" v-if="womanServices.length !== 0">
              <tr>
                  <td>
                        <h6 class="peluqueria q-mt-none">Mujeres</h6>
                        <table class="datos_peluqueria" v-for="item in womanServices" :key="item.nid">
                            <tr>
                                <th colspan="2">{{ item.title }}</th>
                            </tr>
                            <tr v-for="(subItem) in item.subServices" :key="subItem.title" v-show="subItem.price !== ''">
                                <td> {{ subItem.title }} </td>
                                <td>$ {{ addCommas(subItem.price) }} </td>
                            </tr>
                            <tr v-for="(subItem, subKey) in item.subServices" :key="subKey" v-show="subItem.price === ''">
                                <td colspan="2">Está sujeto a evaluación de pelo, largo y cantidad.</td>
                            </tr>
                        </table>
                  </td>
                  <td>
                      <img :src="info.field_imagenes_mujer[0].url" /><img :src="info.field_imagenes_mujer[1].url" /><img :src="info.field_imagenes_mujer[2].url" />
                  </td>
              </tr>
          </table>
        </div>
    </div>
    <a href="" id="hombres-item"></a>
    <div class="q-py-md all_width gris_home wrp_club hazte_socio">
        <div class="centrar w_1200">
          <table class="contenido_pelu">
              <tr>
                  <td>
                      <img :src="info.field_imagenes_hombre[0].url" /><img :src="info.field_imagenes_hombre[1].url" /><img :src="info.field_imagenes_hombre[2].url" />
                  </td>
                  <td>
                    <h6 class="peluqueria q-mt-none">Hombres</h6>
                    <table class="datos_peluqueria" v-for="item in menServices" :key="item.nid">
                        <tr>
                            <th colspan="2">{{ item.title }}</th>
                        </tr>
                        <tr v-for="(subItem) in item.subServices" :key="subItem.title" v-show="subItem.price !== ''">
                            <td> {{ subItem.title }} </td>
                            <td>$ {{ addCommas(subItem.price) }} </td>
                        </tr>
                        <tr v-for="(subItem, subKey) in item.subServices" :key="subKey" v-show="subItem.price === ''">
                            <td colspan="2">Está sujeto a evaluación de pelo, largo y cantidad.</td>
                        </tr>
                    </table>
                  </td>
              </tr>
          </table>
        </div>
        <div class="fitnes_last w_1200 centrar q-pt-xl">
          <div class="staff">
              <h6 class="title_text">Staff</h6>
              <div class="flex">
                  <table class="datos_staff_contacto">
                      <tr>
                          <td>
                              <img class="raius" src="https://pwccdev.mkbk.digital/administrador/sites/default/files/2022-06/Mabel-Ferna%CC%81ndez.png" />
                          </td>
                          <td>
                              <p><strong>Mabel Fernández</strong></p>
                              <p><strong> Esteticista Cosmetologa </strong></p>
                              <p>+56 2 2757 5736</p>
                              <p>Coreeo@ff.com</p>
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
  name: 'Fitness',
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
        ],
        field_imagenes_mujer: [
          {
            url: ''
          },
          {
            url: ''
          },
          {
            url: ''
          }
        ],
        field_imagenes_hombre: [
          {
            url: ''
          },
          {
            url: ''
          },
          {
            url: ''
          }
        ]
      },
      pop_consultar: false,
      menServices: [],
      womanServices: []
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    goToAnchor (e, item) {
      e.preventDefault()
      const el = document.querySelector(item)
      el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    addCommas (x) {
      if (typeof x !== 'undefined') {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.')
      }
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/259?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
        }
      })
      configServices.loadData(this, 'servicios-peluqueria/json', {
        callBack: (data) => {
          data.map((item, key) => {
            var service = {
              nid: item.nid,
              title: item.title,
              subServices: [
                {
                  title: item.field_nombre_item,
                  price: item.field_valor
                }
              ]
            }
            if (item.field_genero === 'Mujer') {
              const isFound = _this.womanServices.find((element, index) => {
                if (element.title === item.title) {
                  _this.womanServices.splice(index, 1)
                  return index
                }
              })

              if (isFound) {
                isFound.subServices.push({
                  title: item.field_nombre_item,
                  price: item.field_valor
                })

                _this.womanServices.push(isFound)
              } else {
                _this.womanServices.push(service)
              }
            }
            if (item.field_genero === 'Hombre') {
              const isFound = _this.menServices.find((element, index) => {
                if (element.title === item.title) {
                  _this.menServices.splice(index, 1)
                  return index
                }
              })

              if (isFound) {
                isFound.subServices.push({
                  title: item.field_nombre_item,
                  price: item.field_valor
                })

                _this.menServices.push(isFound)
              } else {
                _this.menServices.push(service)
              }
            }
          })

          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
