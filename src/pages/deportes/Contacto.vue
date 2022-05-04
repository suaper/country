 <template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno />
    <div class="q-pb-md all_width bg_gris">
        <div class="centrar w_1100">
            <div class="center text-center q-my-lg titulos">Categorías</div>
            <Anclas />
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo">
        <div class="centrar w_1100 fila_separador ">
            <div class="w_55">
                <h5 class="style_title q-my-lg" >Damas</h5>
                <TablaClasificacion />
            </div>
            <div class="w_35">
                <SoloTexto />
            </div>
        </div>
    </div>
    <div class="q-py-xl all_width bg_gris">
        <div class="centrar w_1100 fila_separador ">
            <div class="w_55">
                <h5 class="style_title q-my-lg ">Varones</h5>
                <TablaClasificacion />
            </div>
            <div class="w_35">
                <SoloTexto />
            </div>
        </div>
    </div>
    <div class="q-py-xl all_width bg_amarillo">
        <div class="centrar w_1100">
            <h5 class="style_title q-my-lg" >Reglamentos</h5>
            <ListaReglamentos />
        </div>
    </div>
  </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import TablaClasificacion from 'pages/componentes/TableClasificacion'
import ListaReglamentos from 'pages/componentes/ListaReglamentos'
import SoloTexto from 'pages/componentes/SoloTexto'

export default {
  name: 'Categorias',
  components: {
    MenuDeporteInterno,
    TablaClasificacion,
    SoloTexto,
    ListaReglamentos
  },
  data () {
    return {
      sliders: true,
      urlSite: 'https://pwccdev.mkbk.digital/'
    }
  }
}
</script>
