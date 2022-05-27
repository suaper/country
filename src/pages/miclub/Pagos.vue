<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menumiclub currentItem="/mi-club/cuotas-reglamento" />
    <div class="q-pb-md all_width gris_home etiquetas">
        <br>
        <div class="center text-center q-my-lg titulos q-mt-2">Pagos</div>
        <div class="centrar w_1200 pagos">
            <div class="left text-left q-my-lg titulos">Pago de Cuota de Incorporación</div>
            <div class="q-pa-md row items-start q-gutter-md no-flex">
                <p>Corporación Principe de Gales</p>
                <p>Rut 12123223123</p>
                <p>Corporación Principe de Gales</p>
                <p>Rut 12123223123</p>
                <p>Rut 12123223123</p>
            </div>
            <div class="text-right">
                <q-btn outline class="azul q-my-md centrar bg_white_i" label="Ver Bases" icon-right="arrow_right_alt"/>
                <img src="https://pwccdev.mkbk.digital/administrador/sites/default/files/2022-05/bancobice.png">
            </div>
            <div class="left text-left q-my-lg titulos">Pago de Cuota de Incorporación</div>
            <div class="q-pa-md row items-start q-gutter-md no-flex">
                <p>Corporación Principe de Gales</p>
                <p>Rut 12123223123</p>
                <p>Corporación Principe de Gales</p>
                <p>Rut 12123223123</p>
                <p>Rut 12123223123</p>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menumiclub from 'pages/submenus/Menumiclub'

export default {
  name: 'Pagos',
  components: {
    Menumiclub
  }
}
</script>
