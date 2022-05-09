 <template>
    <div class="staff deportestaff">
      <h4 class="subtitle text-left" v-if="name === ''">Staff</h4>
      <h4 class="subtitle text-left" v-if="name !== ''">{{ name }}</h4>
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
    info: Array,
    title: String
  },
  data () {
    return {
      name: this.title,
      personal: this.info,
      urlSite: 'https://pwccdev.mkbk.digital/'
    }
  }
}
</script>
