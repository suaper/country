<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menumiclub />
    <div class="q-pb-md all_width gris_home">
        <div class="center text-center q-my-lg titulos">Clubes de intercambio</div>
    </div>
    <div class="q-pb-md all_width bg_amarillo wrp_club">
        <div class="centrar w_1200">
            <h4 class="subtitle">Convenios de intercambio con otros Clubes Nacionales</h4>
        </div>
    </div>

    <div class="q-pb-md all_width gris_home wrp_club">
        <div class="centrar w_1200">
                <ul>
                    <li><h3>Contáctanos</h3></li>
                </ul>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import Men  umiclub from 'pages/submenus/Menumiclub'

export default {
  name: 'Miclub',
  components: {
    Menumiclub
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {}
    }
  }
}
</script>
