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
            <div class="center text-center q-my-lg titulos">Senior sin cargas</div>
            <p class="intro text-center">Todo aquel postulante soltero o casado que esté interesado en ser parte del Club,<strong> mayor de 55 años </strong>que no tenga hijos menores de 25 años o que postule sin ellos.</p>
        </div>
    </div>

    <div class="q-pb-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
            <h4 class="subtitle">Requisitos</h4>
            <p class="intro text-left">Todo aquel postulante soltero o casado (mayores de 55 años) que esté interesado en ser parte del Club y sus actividades. No debe tener cargas activas y puede postular a esta categoría con valores preferenciales y cupos limitados.</p>
            <p class="intro text-left"> Las postulaciones a socio se presentan en formularios especiales y necesitan ser acompañados de 2 cartas de presentación firmadas por dos socios que tengan más de cinco años de antigüedad en el Club, que no sean familiares directos y que no tengan relación comercial con el postulante.</p>
        </div>
    </div>

    <div class="q-pb-md all_width gris_home wrp_club hazte_socio">
        <div class="centrar w_1200">
            <h4 class="subtitle">Cuota Trimestral</h4>
            <p class="intro text-left">El monto de la cuota trimestral corresponde a la categoría Senior sin cargas.</p>
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
  name: 'Senior',
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
