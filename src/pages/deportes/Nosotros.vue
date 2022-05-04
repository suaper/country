 <template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno />
    <Banner />

    <div class="q-pb-md all_width bg_gris">
        <div class="centrar w_1100">
            <div class="center text-center q-my-lg titulos">Nosotros</div>
            <Historia />
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo">
        <div class="centrar w_1100 fila_separador ">
            <div class="w_45">
                <h5 class="style_title">Comité</h5>
                <Comite />
            </div>
            <div class="w_45">
                <h5 class="style_title">Declaración Espíritu Amarillo</h5>
                <Declaracion />
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Banner from 'pages/componentes/Uno'
import Historia from 'pages/componentes/SoloTexto'
import Comite from 'pages/componentes/ImagenBoton'
import Declaracion from 'pages/componentes/FondoBlanco'

export default {
  name: 'Charlasculturales',
  components: {
    MenuDeporteInterno,
    Banner,
    Historia,
    Comite,
    Declaracion
  },
  data () {
    return {
      sliders: true,
      urlSite: 'https://pwccdev.mkbk.digital/'
    }
  }
}
</script>
