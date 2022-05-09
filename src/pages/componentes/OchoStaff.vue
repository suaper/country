 <template>
    <div class="staff deportestaff">
        <h6 class="title_text">Staff</h6>
        <div class="flex">
            <table class="datos_staff_contacto" v-for="(personal, key) in personal" :key="key">
                <tr>
                    <td>
                        <img class="raius" :src="urlSite + personal.field_imagen_perfil" />
                    </td>
                    <td>
                        <p><strong>{{ personal.field_nombre_staff }}</strong></p>
                        <p><strong> {{ personal.field_cargo_staff }} </strong></p>
                        <p>{{ personal.field_correo_staff }}</p>
                        <p>{{ personal.field_numero_staff }}</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>

export default {
  name: 'OchoStaff',
  props: {
    info: Array
  },
  data () {
    return {
      personal: this.info,
      urlSite: 'https://pwccdev.mkbk.digital/'
    }
  }
}
</script>
