<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness view_restaurantes">
    <Menugastronomia currentItem="/gastronomia/restaurantes"/>
    <div class="q-py-none all_width"></div>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center q-pt-md text-center q-my-lg titulos">Restaurantes</div>
        </div>
        <ul class="wrp_actions_center_peluqueria">
            <li v-for="(item, key) in items" :key="key">
                <a href="#" @click="goToAnchor($event, '#' + item.title.replaceAll(' ', '-').replaceAll('/','').toLowerCase())">{{ item.title }}</a>
            </li>
        </ul>
    </div>

    <div :id="item.title.replaceAll(' ', '-').replaceAll('/','').toLowerCase()" v-for="(item, key) in items" :key="key" :class="key % 2 === 0 ? 'q-py-md all_width bg_amarillo wrp_club hazte_socio' : 'q-py-md all_width gris_home wrp_club hazte_socio'">
        <div class="centrar w_1200">
          <table class="contenido_pelu" id="bar">
              <tr v-show="key % 2 === 0">
                  <td>
                    <h6 class="peluqueria q-mt-none">{{ item.title }}</h6>
                    <p class="q-mt-md" v-html="item.body"></p>
                    <hr class="hr_restaurante">

                    <ul class="wrp_actions_center_restaurante">
                      <li v-for="(subItem, subKey) in item.items" :key="subKey">
                          <a href="#" @click="goToAction($event, subItem)" ><img :src="urlSite + subItem.icon"></a>
                          <strong>{{ subItem.type }}</strong>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <img :src="urlSite + item.image" />
                  </td>
              </tr>
              <tr v-show="key % 2 !== 0">
                  <td>
                    <img :src="urlSite + item.image" />
                  </td>
                  <td>
                    <h6 class="peluqueria q-mt-none">{{ item.title }}</h6>
                    <p class="q-mt-md" v-html="item.body"></p>
                    <hr class="hr_restaurante">

                    <ul class="wrp_actions_center_restaurante">
                      <li v-for="(subItem, subKey) in item.items" :key="subKey">
                          <a href="#" @click="goToAction($event, subItem)" ><img :src="urlSite + subItem.icon"></a>
                          <strong>{{ subItem.type }}</strong>
                      </li>
                    </ul>
                  </td>
              </tr>
          </table>
        </div>
    </div>
    <q-dialog v-model="text" persistent>
      <q-card>
        <q-card-section class="row items-center resta">
         <q-btn icon="close volando" flat round dense v-close-popup />
          <h3>{{ currentTitle }}</h3>
          <p v-html="currentText"></p>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import Menugastronomia from 'pages/submenus/Menugastronomia'
import configServices from '../../services/config'

export default {
  name: 'Restaurantes',
  components: {
    Menugastronomia
  },
  data () {
    return {
      text: false,
      CartaImg: false,
      currentText: '',
      currentTitle: '',
      sliders: true,
      slide: 1,
      items: [],
      urlSite: 'https://pwccdev.mkbk.digital/',
      pop_consultar: false
    }
  },
  mounted () {
    this.getItems()
  },
  methods: {
    goToAction (e, item) {
      e.preventDefault()
      switch (item.type) {
        case 'Carta':
          window.open(this.urlSite + item.pdf)
          break
        case 'Políticas':
          this.currentText = item.info
          this.currentTitle = item.title
          this.text = true
          break
        case 'Reservas':
          window.open(item.link)
          break
      }
    },
    goToAnchor (e, item) {
      e.preventDefault()
      const el = document.querySelector(item)
      el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    getItems () {
      var _this = this
      configServices.loadData(this, '/restaurantes/json', {
        callBack: (data) => {
          data.map((item, key) => {
            var restaurant = {
              title: item.title,
              body: item.body,
              image: item.field_image,
              items: []
            }

            var subItem = {
              type: item.field_tipo_de_elemento,
              pdf: item.field_archivo_pdf,
              link: item.field_enlace_item,
              icon: item.field_icono_item,
              info: item.field_informacion_item,
              title: item.field_titulo_item_restaurante
            }
            restaurant.items.push(subItem)

            if (_this.items.length === 0) {
              _this.items.push(restaurant)
            } else {
              const isFound = _this.items.find((element, index) => {
                if (element.title === item.title) {
                  _this.items.splice(index, 1)
                  return element
                }
              })

              if (typeof isFound !== 'undefined') {
                isFound.items.push(subItem)
                _this.items.push(isFound)
              } else {
                _this.items.push(restaurant)
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
