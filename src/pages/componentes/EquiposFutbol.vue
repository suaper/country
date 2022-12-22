 <template>
    <div class="staff deportestaff flex-start">
        <div class="flex flex-start">
            <table class="datos_staff_contacto" v-for="(item, key) in info" :key="key">
              <tr>
                  <td>
                    <a href="#" class="wrp_equipos_futbol">
                        <img class="raius" :src="urlSite + item.image" />
                    </a>
                  </td>
                  <td>
                    <div class="text-center">
                        <q-btn @click="showLineUp(item)" outline type="submit" class="azul q-my-md bg_white_i" label="Ver Más" icon-right="arrow_right_alt"/>
                    </div>
                  </td>
              </tr>
            </table>
        </div>
        <q-dialog v-model="popupLineup" >
          <q-card style="width: 700px; max-width: 80vw;" class="pop_mi_c pob_biblioteca bg_beige pop_escuelas">
            <q-card-section class="row items-center q-pb-none relative ">
                <q-btn class="btn_cerrar" icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="pop_club bg_white centrar">
              <table class="centrar">
                <tbody>
                  <tr>
                    <td colspan="2"><img class="raius" :src="urlSite + item.image" /></td>
                  </tr>
                  <tr v-for="(subItem, key) in item.subServices" :key="key">
                    <td><strong>{{ subItem.field_cargo_staff }}</strong></td>
                    <td>{{ subItem.field_nombre_staff }}</td>
                  </tr>
                </tbody>
              </table>
            </q-card-section>
          </q-card>
        </q-dialog>
    </div>
</template>

<script>

export default {
  name: 'EquiposFutbol',
  props: {
    path: String,
    subPath: String,
    items: Array
  },
  data () {
    return {
      month: '',
      urlSite: 'https://www.pwcc.cl',
      info: this.items,
      popupLineup: false,
      item: {}
    }
  },
  methods: {
    showLineUp (item) {
      this.item = item
      this.popupLineup = true
    }
  }
}
</script>
