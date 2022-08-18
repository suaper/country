 <template>
    <div class="staff deportestaff dep_mvil">
        <div class="flex">
            <table class="datos_staff_contacto" v-for="(personal, key) in personal" :key="key">
              <tr>
                  <td>
                      <img class="raius" :src="urlSite + personal.field_imagen_perfil" />
                  </td>
                  <td>
                      <p><strong>{{ personal.field_nombre_y_apellidos }}</strong></p>
                      <p><strong> {{ personal.field_cargo_staff }} </strong></p>
                  </td>
              </tr>
          </table>
        </div>
    </div>
</template>

<script>

export default {
  name: 'StaffView',
  props: {
    info: Array
  },
  data () {
    return {
      urlSite: 'https://obt3.cl/',
      personal: this.info
    }
  }
}
</script>
