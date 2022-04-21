<template>
  <q-page class="flex flex-center view_hijos_socios view_danzas">

    <div class="q-pb-xl all_width gris_home">
        <div class="setenta q-pd-md centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Compañias</div>
            <div class="back"> <q-btn round color="white" onclick="history.back()" icon="west" />Volver</div>
        </div>
        <div class="q-py-md w_1000 centrar flex_companias justify-center">
            <table class="datos_staff_contacto" v-for="(item, key) in info" :key="key">
                <tr>
                    <td>
                        <img :src="urlSite + item.field_imagen_1_compania" class="raius"></td>
                    <td>
                        <p><strong>{{ item.title }}</strong></p>
                        <p>{{ item.field_edad }}</p>
                        <q-btn class="q-ml-lg sin_borde" @click="openDetalle(item)" outline color="indigo-10" icon-right="east" label="Ver más" />
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <q-dialog v-model="card">
      <q-card class="my-card pop_compania">
        <q-img :src="urlSite + currentItem.field_imagen_2_compania" />
        <q-card-section class="q-pt-none desc_pop">
          <strong> {{ currentItem.field_nombre_y_apellidos }}</strong>
          <strong>{{ currentItem.field_categoria }}</strong>
          <span>{{ currentItem.field_edad }}</span>
          <div class="text-caption text-grey" v-html="currentItem.field_intro_"></div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat class="text-blue" label="Cerrar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import configServices from '../../services/config'

export default {
  name: 'Compania',
  data () {
    return {
      urlSite: 'https://pwccdev.mkbk.digital/',
      info: [],
      card: false,
      currentItem: {}
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    openDetalle (item) {
      this.currentItem = item
      this.card = true
    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/companias/json', {
        callBack: (data) => {
          _this.info = data
          console.log(_this.info)
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
