 <template>
  <q-page class="flex flex-center view_quienes_somos">
    <MenuDeporteInterno />
    <div class="q-pb-md all_width bg_gris">
        <div class="centrar q-py-md w_1100">
            <div class="center text-center q-pt-md q-my-md titulos">Staff</div>
            <Anclas />
        </div>
        <div class="centrar w_1200 q-pb-xl">
            <StaffView />
        </div>
    </div>
  </q-page>
</template>

<script>
import MenuDeporteInterno from 'pages/componentes/MenuDeportesInterno'
import Anclas from 'pages/componentes/Anclas'
import StaffView from 'pages/componentes/StaffView'

export default {
  name: 'Categorias',
  components: {
    MenuDeporteInterno,
    Anclas,
    StaffView
  },
  data () {
    return {
      sliders: true,
      urlSite: 'https://pwccdev.mkbk.digital/'
    }
  }
}
</script>
