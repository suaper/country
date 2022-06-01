<template>
  <q-page class="flex justify-between view_quienes_somos">
    <div class="q-pb-md all_width gris_home etiquetas">
        <div class="center text-center q-my-lg titulos q-mt-2">Noticias</div>
        <div class="centrar w_1200">
          <div class="center text-center q-my-lg titulo2 q-mt-2">{{ info.title[0].value }}</div>
        </div>
        <div class="img_noticia centrar w_1200 text-center" v-if="info.field_imagen_noticia_2[0].url !== ''"><img :src="info.field_imagen_noticia[0].url" alt="#"></div>
        <div class="centrar w_1200 text_noticias" v-html="info.body[0].value"></div>
        <div class="centrar w_1200 text_noticias">
          <table class="noticias">
            <tr>
              <td v-if="info.field_imagen_noticia_2[0].url !== ''"><img :src="info.field_imagen_noticia_2[0].url" alt="#"></td>
              <td v-html="info.field_bloque_2_noticias[0].value"></td>
            </tr>
          </table>
        </div>
    </div>
    <!--<div class="q-pa-md all_width bg_white logos_footer">
      <div class="centrar w_1200">
        <ul class="q-pd-none">
            <li class="flex flex-start">
                <img src="https://cdn.quasar.dev/img/parallax1.jpg" alt="#">
            </li>
            <li class="flex flex-start">
                <img src="https://cdn.quasar.dev/img/parallax1.jpg" alt="#">
            </li>
            <li class="flex flex-start">
                <img src="https://cdn.quasar.dev/img/parallax1.jpg" alt="#">
            </li>
            <li class="flex flex-start">
                <img src="https://cdn.quasar.dev/img/parallax1.jpg" alt="#">
            </li>
        </ul>
      </div>
    </div>-->
  </q-page>
</template>

<script>
import configServices from '../services/config'

export default {
  name: 'Noticiadetalle',
  data () {
    return {
      sliders: true,
      slide: 1,
      autoplay: true,
      info: {
        field_cuota_trimestral: [
          {}
        ]
      },
      urlSite: 'https://pwccdev.mkbk.digital/',
      pop_cuota: false,
      cuotas: [],
      id: ''
    }
  },
  created () {
    this.id = localStorage.getItem('noticeId')
    this.getInfo()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/' + _this.id + '?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
