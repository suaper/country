 <template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno />
    <Banner />

    <div class="q-pb-md all_width bg_gris">
        <div class="centrar w_1100">
            <div class="center text-center q-my-lg titulos">Calendario</div>
            <Anclas />
            <h3 class="text-center">aca va el componente CincoProximos</h3>
        </div>
    </div>

    <div class="q-py-xl all_width bg_amarillo">
        <div class="centrar w_1100 fila_separador ">
            <div class="w_55">
                <h5 class="style_title q-my-lg ">Tabla de posiciones</h5>
                <TablaClasificacion />
            </div>
            <div class="w_35">
                <h5 class="style_title q-my-lg ">Palmarés</h5>
                <Palmares />
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Banner from 'pages/componentes/Uno'
import Anclas from 'pages/componentes/Anclas'
import TablaClasificacion from 'pages/componentes/TableClasificacion'
import Palmares from 'pages/componentes/Palmares'

export default {
  name: 'Categorias',
  components: {
    MenuDeporteInterno,
    Banner,
    Anclas,
    TablaClasificacion,
    Palmares
  },
  data () {
    return {
      sliders: true,
      urlSite: 'https://pwccdev.mkbk.digital/'
    }
  }
}
</script>
