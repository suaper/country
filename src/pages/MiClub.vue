<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menumiclub />
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
        <q-carousel-slide :name="1" img-src="../assets/Home/banner-home.png" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="center text-center q-my-lg titulos">Clubes de intercambio</div>
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
                        <tr>
                            <td>
                                <span class="openpop" @click="medium = true">  Club Naval de Campo Las Salinas</span>
                            </td>
                            <td>Viña del Mar</td>
                        </tr>
                        <tr>
                            <td>Granadilla Country Club</td>
                            <td>Viña del Mar</td>
                        </tr>
                        <tr>
                            <td>Club de Campo La Posada</td>
                            <td>Concepción</td>
                        </tr>
                        <tr>
                            <td>Club de Campo de Osorno</td>
                            <td>Osorno</td>
                        </tr>
                        <tr>
                            <td>Club de Golf Santa Elvira</td>
                            <td>Valdivia</td>
                        </tr>
                        <tr>
                            <td>Frontera Country Club</td>
                            <td>Temuco</td>
                        </tr>
                        <tr>
                            <td>Club de Golf Santa Elvira</td>
                            <td>Punta Arenas</td>
                        </tr>
                        <tr>
                            <td>Club Hacienda de Chicureo</td>
                            <td>Santiago</td>
                        </tr>
                    </table>
                    <q-btn outline class="azul q-my-md" label="Cuotas Sociales y Reglamento" icon-right="arrow_right_alt"/>
                </div>
                <div class="img_clubes">
                <img class="cien" src="../assets/MiClub/club01.png">
                </div>
            </div>
        </div>
        <q-dialog v-model="medium" >
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

                    <q-card-actions align="right" class="bg-white text-teal">
                    <q-btn flat label="OK" v-close-popup />
                </q-card-actions>
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
                        <tr>
                            <td>Argentina</td>
                            <td>
                                <span class="openpop" @click="medium2 = true">  San Isidro Golf Club</span>
                            </td>
                            <td>Buenos Aires</td>
                        </tr>
                        <tr>
                            <td>Argentina</td>
                            <td>
                                <span class="openpop" @click="medium2 = true">  San Isidro Golf Club</span>
                            </td>
                            <td>Buenos Aires</td>
                        </tr>
                        <tr>
                            <td>Argentina</td>
                            <td>
                                <span class="openpop" @click="medium2 = true">  San Isidro Golf Club</span>
                            </td>
                            <td>Buenos Aires</td>
                        </tr>
                        <tr>
                            <td>Argentina</td>
                            <td>
                                <span class="openpop" @click="medium2 = true">  San Isidro Golf Club</span>
                            </td>
                            <td>Buenos Aires</td>
                        </tr>
                        <tr>
                            <td>Argentina</td>
                            <td>
                                <span class="openpop" @click="medium2 = true">  San Isidro Golf Club</span>
                            </td>
                            <td>Buenos Aires</td>
                        </tr>
                        <tr>
                            <td>Argentina</td>
                            <td>
                                <span class="openpop" @click="medium2 = true">  San Isidro Golf Club</span>
                            </td>
                            <td>Buenos Aires</td>
                        </tr>
                        <tr>
                            <td>Argentina</td>
                            <td>
                                <span class="openpop" @click="medium2 = true">  San Isidro Golf Club</span>
                            </td>
                            <td>Buenos Aires</td>
                        </tr>
                        <tr>
                            <td>Argentina</td>
                            <td>
                                <span class="openpop" @click="medium2 = true">  San Isidro Golf Club</span>
                            </td>
                            <td>Buenos Aires</td>
                        </tr>
                        <tr>
                            <td>Argentina</td>
                            <td>
                                <span class="openpop" @click="medium2 = true">  San Isidro Golf Club</span>
                            </td>
                            <td>Buenos Aires</td>
                        </tr>
                        <tr>
                            <td>Argentina</td>
                            <td>
                                <span class="openpop" @click="medium2 = true">  San Isidro Golf Club</span>
                            </td>
                            <td>Buenos Aires</td>
                        </tr>
                        <tr>
                            <td>Argentina</td>
                            <td>
                                <span class="openpop" @click="medium2 = true">  San Isidro Golf Club</span>
                            </td>
                            <td>Buenos Aires</td>
                        </tr>
                        <tr>
                            <td>Argentina</td>
                            <td>
                                <span class="openpop" @click="medium2 = true">  San Isidro Golf Club</span>
                            </td>
                            <td>Buenos Aires</td>
                        </tr>
                        <tr>
                            <td>Argentina</td>
                            <td>
                                <span class="openpop" @click="medium2 = true">  San Isidro Golf Club</span>
                            </td>
                            <td>Buenos Aires</td>
                        </tr>
                        <tr>
                            <td>Argentina</td>
                            <td>
                                <span class="openpop" @click="medium2 = true">  San Isidro Golf Club</span>
                            </td>
                            <td>Buenos Aires</td>
                        </tr>
                        <tr>
                            <td>Argentina</td>
                            <td>
                                <span class="openpop" @click="medium2 = true">  San Isidro Golf Club</span>
                            </td>
                            <td>Buenos Aires</td>
                        </tr>
                        <tr>
                            <td>Argentina</td>
                            <td>
                                <span class="openpop" @click="medium2 = true">  San Isidro Golf Club</span>
                            </td>
                            <td>Buenos Aires</td>
                        </tr>
                        <tr>
                            <td>Argentina</td>
                            <td>
                                <span class="openpop" @click="medium2 = true">  San Isidro Golf Club</span>
                            </td>
                            <td>Buenos Aires</td>
                        </tr>
                        <tr>
                            <td>Argentina</td>
                            <td>
                                <span class="openpop" @click="medium = true">  San Isidro Golf Club</span>
                            </td>
                            <td>Buenos Aires</td>
                        </tr>
                    </table>
                    <q-btn outline class="azul q-my-md" label="Cuotas Sociales y Reglamento" icon-right="arrow_right_alt"/>
                </div>
            </div>
        </div>
        <q-dialog v-model="medium" >
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
                <q-card-section class="flex flex-start pop_descargar">
                    <h4>Reglamento</h4>
                    <div class="box_download flex">
                        <img src="../assets/MiClub/i-pdf.svg">
                        <div class="text">
                            <span class="bold">Reglamento del Club</span>
                            <span>Ver o descargar</span>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
        <q-dialog v-model="medium2" >
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
        </q-dialog>
    </div>
  </q-page>
</template>

<script>
import Menumiclub from 'pages/submenus/Menumiclub'

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
      medium: false,
      medium2: false
    }
  }
}
</script>
