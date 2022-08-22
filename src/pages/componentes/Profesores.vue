 <template>
    <div class="staff deportestaff flex-start">
        <div class="flex flex-start">
            <table class="datos_staff_contacto" v-for="(item, key) in info" :key="key">
              <tr>
                  <td>
                      <img class="raius" :src="urlSite + item.field_imagen_profesor" />
                  </td>
                  <td>
                      <p><strong>{{ item.field_nombre_y_apellidos }}</strong></p>
                    <div class="text-center">
                        <q-btn @click="teacherContent = item; teacher = true" outline type="submit" class="azul q-my-md bg_white_i" label="Ver Más" icon-right="arrow_right_alt"/>
                    </div>
                  </td>
              </tr>
            </table>
        </div>
        <q-dialog v-model="teacher" persistent>
          <q-card>
            <q-card-section class="row items-center">
              <img :src="urlSite + teacherContent.field_imagen_profesor" >
              <h2>{{ teacherContent.field_nombre_y_apellidos }}</h2>
              <strong>{{ teacherContent.field_cargo_staff }}</strong>
              <p v-html="teacherContent.field_descripcion"></p>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Cerrar" color="primary" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
    </div>
</template>

<script>

export default {
  name: 'Profesores',
  props: {
    items: Array
  },
  data () {
    return {
      info: this.items,
      urlSite: 'https://obt3.cl',
      teacherContent: {},
      teacher: false
    }
  }
}
</script>
