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
        <q-carousel-slide :name="1" img-src="../../assets/Home/banner-home.png" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home etiquetas">
        <div class="centrar w_1200">
        <div class="left text-left q-my-lg titulos">Country Club</div>
        <p class="intro">El monto de la cuota trimestral depende de la edad y estado civil del postulante.</p>
            <div class="q-pa-md row items-start q-gutter-md">
                <q-btn outline
                    class="azul q-my-md bg_white"
                    label="Revisa el valor correspondiente aquí"
                    icon-right="arrow_right_alt"
                    @click="pop_cuota = true"
                />
            </div>
        </div>
    </div>

    <div class="q-pb-md all_width bg_amarillo cuotas">
        <div class="centrar w_1200">
            <div class="left text-left q-my-lg titulos">Reglamento</div>
            <div class="q-pa-md row items-start q-gutter-md">
                <div class="box_download flex bg_white">
                    <img src="../../assets/MiClub/i-pdf.svg">
                    <div class="text">
                        <span class="bold">Reglamento del Club</span>
                        <span>Ver o descargar</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <q-dialog v-model="pop_cuota" >
        <q-card style="width: 700px; max-width: 80vw;">
            <q-card-section class="row items-center q-pb-none">
                <div class="text-h6 open">Cuota Trimestral</div>
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="flex pop_club">
                <table class="table_cuota_trimestral">
                    <tr>
                        <th>Categoría</th>
                        <th>Cuota Trimestral</th>
                        <th>Cuota Trimestral</th>
                    </tr>
                    <tr>
                        <td>Jefe de Familia</td>
                        <td>735.888</td>
                        <td>Jefe de Familia</td>
                    </tr>
                    <tr>
                        <td>Senior sin carga mayor 55 años</td>
                        <td>735.888</td>
                        <td>Jefe de Familia</td>
                    </tr>
                </table>
            </q-card-section>
        </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import Menumiclub from 'pages/submenus/Menumiclub'

export default {
  name: 'CuotasReglamento',
  components: {
    Menumiclub
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      autoplay: true,
      info: {},
      pop_cuota: false
    }
  }
}
</script>
