<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menumiclub currentItem="/mi-club"/>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
        :autoplay="autoplay"
      >
        <q-carousel-slide v-for="(banner, key) in info.field_banner_seccion" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="center text-center q-my-lg titulos">Clubes de Intercambio</div>
    </div>
    <div class="q-pb-md all_width bg_amarillo wrp_club">
        <div class="centrar w_1200">
            <h4 class="subtitle">Convenios de intercambio con otros Clubes Nacionales</h4>
            <div class="flex flex-center items-start w_1200">
                <div class="table_clubes cincuenta">
                    <table>
                        <tr>
                            <th class="text-left">
                                Club
                            </th>
                            <th class="text-left">
                                <img src="../assets/MiClub/i-gps.svg">
                            </th>
                        </tr>
                        <tr v-for="(item, key) in clubsN" :key="key">
                            <td>
                                <span class="openpop" @click="openMediumPopup(item)">{{ item.field_nombre_club }}</span>
                            </td>
                            <td>{{ item.field_ciudad_club }}</td>
                        </tr>
                    </table>
                </div>
                <div class="img_clubes">
                <img class="cien" src="../assets/MiClub/club01.png">
                </div>
            </div>
        </div>
        <q-dialog v-model="medium" >
            <q-card class="pop_mi_c" style="width: 700px; max-width: 80vw;">
                <q-card-section class="row items-center q-pb-none">
                    <div class="text-h6">{{ itemMedium.field_nombre_club }}</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>

                <q-card-section class="flex pop_club">
                    <span class="desc_club">{{ itemMedium.field_direccion_club }}</span>
                    <span class="enlace"><a :href="itemMedium.field_web_club" target="_blank">{{ itemMedium.field_web_club }}</a></span>
                    </q-card-section>
            </q-card>
        </q-dialog>
    </div>

    <div class="q-pb-md all_width gris_home wrp_club">
        <div class="centrar w_1200">
            <h4 class="subtitle">Convenios de intercambio con otros Clubes Internacionales</h4>
            <div class="flex flex-center items-start w_1200">
                <div class="img_clubes left text-left q-mr-md">
                    <img class="cien" src="../assets/MiClub/club02.png">
                </div>
                <div class="table_clubes sesenta">
                    <table>
                        <tr>
                            <th class="text-left">
                                País
                            </th>
                            <th class="text-left">
                                Club
                            </th>
                            <th class="text-left">
                                <img src="../assets/MiClub/i-gps.svg">
                            </th>
                        </tr>
                        <tr v-for="(item, key) in clubsI" :key="key">
                            <td class="f_normal">{{ item.field_pais_club }}</td>
                            <td class="strong">
                                <span class="openpop" @click="openMediumTwoPopup(item)">{{ item.field_nombre_club }}</span>
                            </td>
                            <td>{{ item.field_ciudad_club }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <q-dialog v-model="medium2" >
            <q-card style="width: 700px; max-width: 80vw;" class="pop_mi_c">
                <q-card-section class="row items-center q-pb-none">
                    <div class="text-h6">{{ itemTwoMedium.field_nombre_club }}</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>

                <q-card-section class="flex pop_club">
                    <span class="desc_club">{{ itemTwoMedium.field_direccion_club }}</span>
                    <span class="enlace"><a :href="itemTwoMedium.field_web_club" target="_blank">{{ itemTwoMedium.field_web_club }}</a></span>
                </q-card-section>
                <q-card-section class="flex flex-start pop_descargar">
                    <h4>Reglamento</h4>
                    <div class="box_download flex">
                        <a :href="urlSite + itemTwoMedium.field_descargar_archivo" target="_blank"><img src="../assets/MiClub/i-pdf.svg">
                        <div class="text">
                            <span class="bold">Reglamento del Club</span>
                            <span>Ver o descargar</span>
                        </div>
                        </a>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
        <!--<q-dialog v-model="medium2" >
            <q-card style="width: 700px; max-width: 80vw;">
                <q-card-section class="row items-center q-pb-none">
                    <div class="text-h6">Club Naval de Campo Las Salinas</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>

                <q-card-section class="flex pop_club">
                    <span class="desc_club"> Juan S. Fernández 386 - (1642) | San Isidro - Buenos Aires - Argentina</span>
                    <span class="enlace">https://www.clubdegolf.com </span>
                </q-card-section>
                <q-card-section class="flex flex-start wrp_list_pop">
                    <h4>Condiciones</h4>
                    <div class="list_detail flex">
                        <ul>
                        <li>Abierto de los jueves</li>
                        <li>Suspendidos </li>
                        <li>Semiabiertos(Abertura, Clasusura, La Familiia) </li>
                        <li> $6000 Sabados / $5000 Domingos</li>
                        <li>Semi aberto Damas</li>
                        </ul>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>-->
    </div>
  </q-page>
</template>

<script>
import Menumiclub from 'pages/submenus/Menumiclub'
import configServices from '../services/config'

export default {
  name: 'Miclub',
  components: {
    Menumiclub
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      autoplay: true,
      info: {},
      clubsI: [],
      clubsN: [],
      urlSite: 'https://pwccdev.mkbk.digital/',
      medium: false,
      medium2: false,
      itemMedium: {},
      itemTwoMedium: {}
    }
  },
  created () {
    this.$q.loading.show()
    this.getInfo()
    this.getClubsI()
    this.getClubsN()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/74?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_banner_seccion[0].target_uuid
        }
      })
    },
    getClubsI () {
      var _this = this
      configServices.loadData(this, 'clubes-internacionales/json', {
        callBack: (data) => {
          _this.clubsI = data
        }
      })
    },
    getClubsN () {
      var _this = this
      configServices.loadData(this, '/clubes-nacionales/json', {
        callBack: (data) => {
          _this.clubsN = data
          _this.$q.loading.hide()
        }
      })
    },
    openMediumPopup (item) {
      this.itemMedium = item
      this.medium = true
    },
    openMediumTwoPopup (item) {
      this.itemTwoMedium = item
      this.medium2 = true
    }
  }
}
</script>
