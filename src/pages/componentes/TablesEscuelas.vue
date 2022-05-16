<template>
    <div class="wrp_table_ranking">
        <div class="wrp_table_ranking">
            <table class="bg_white">
                <tr>
                    <th v-if="permisos.categ">Categoría</th>
                    <th v-if="permisos.edad">Edad</th>
                    <th v-if="permisos.horario">Horarios</th>
                    <th v-if="permisos.staff">Staff</th>
                    <th v-if="permisos.resena">Reseña</th>
                </tr>
                <tr>
                </tr>
                <tr v-for="(item, key) in info" :key="key">
                    <td v-if="permisos.categ">{{ item.field_categ }}</td>
                    <td v-if="permisos.edad">{{ item.field_edad }}</td>
                    <td v-if="permisos.horario" v-html="item.field_horario"></td>
                    <td v-if="permisos.staff" v-html="item.field_staff_sport"></td>
                    <td v-if="permisos.resena" v-html="item.field_resena"></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>

export default {
  name: 'TableEscuelas',
  props: {
    items: Array,
    permissions: Object
  },
  data () {
    return {
      info: this.items,
      permisos: this.permissions
    }
  }
}
</script>
