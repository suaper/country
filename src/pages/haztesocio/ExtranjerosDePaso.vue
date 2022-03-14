<template>
  <q-page class="flex flex-center view_hijos_socios">
    <Menuhaztesocio/>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
      >
        <q-carousel-slide :name="1" img-src="../../assets/Home/banner-home.png" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Extranjeros de paso</div>
            <p class="intro text-center">Extranjeros de paso en Chile con fecha limitada de regreso a su país de origen u otro no pagan cuota de incorporación.</p>
        </div>
    </div>

    <div class="q-pb-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
            <h4 class="subtitle">Requisitos</h4>
            <p class="intro text-left">Las postulaciones a socio Extranjero de Paso se presentan en formularios especiales y es necesario acompañar el Currículum Vitae del postulante.</p>
            <p class="intro text-left">El proceso de postulación consiste en una entrevista de conocimiento del postulante y su cónyuge con un Director del Club, quien es responsable de la postulación y presenta luego el caso al Directorio. Una vez que el Directorio haya analizado y aprobado la postulación presentada, ésta es resuelta por la Junta Calificadora, organismo anónimo y autónomo que acepta o rechaza la postulación.</p>
        </div>
    </div>

    <div class="q-pb-md all_width gris_home wrp_club hazte_socio">
        <div class="centrar w_1200">
            <h4 class="subtitle">Cuota Trimestral</h4>
            <p class="intro text-left">Los extranjeros de paso no pagan cuota de incorporación al Club, sí una trimestralidad por grupo familiar diferente.</p>
            <q-btn outline @click="pop_consultar = true" class="azul q-my-md centrar bg_white_i" label="Revisar el valor correspondiente aquí" icon-right="arrow_right_alt"/>
        </div>
    </div>
    <q-dialog v-model="pop_consultar" >
        <q-card class="wrp_pop_consulta">
            <q-card-section class="row text-center q-pb-none">
                <q-space />
                <q-btn class="close_top" icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="q-py-none">
                <h4 class="subtitle_center mt_20_negativo">Cuotas Sociales</h4>
                <table class="table_consulta">
                    <tr>
                        <th class="treinta">Categoría</th>
                        <th class="veinte">Cuota</th>
                        <th class="cuarenta">Requisitos</th>
                    </tr>
                    <tr>
                        <td>Jefe de Familia</td>
                        <td>$ 697.614</td>
                        <td>Mayor de 30 años.</td>
                    </tr>
                    <tr>
                        <td>Jefe de Familia</td>
                        <td>$ 697.614</td>
                        <td>Mayor de 30 años.</td>
                    </tr>
                    <tr>
                        <td>Jefe de Familia</td>
                        <td>$ 697.614</td>
                        <td>Mayor de 30 años.</td>
                    </tr>
                    <tr>
                        <td>Jefe de Familia</td>
                        <td>$ 697.614</td>
                        <td>Mayor de 30 años. Mayor de 30 años. Mayor de 30 años.</td>
                    </tr>
                </table>
            </q-card-section>
        </q-card>
    </q-dialog>
    <div class="q-py-md all_width bg_amarillo wrp_club">
        <div class="q-py-md centrar text-center w_1200">
            <q-btn outline @click="pop_consultar = true" class="text_white  centrar bg_orange btn_centrar" label="Postule Aquí" icon-right="arrow_right_alt"/>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menuhaztesocio from 'pages/submenus/Menuhaztesocio'

export default {
  name: 'Extranjerosdepaso',
  components: {
    Menuhaztesocio
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {},
      pop_consultar: false
    }
  }
}
</script>
