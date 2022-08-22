<template>
  <div class="content">
    <ul class="list_palmaresFutbol q-py-md descargables_iconos">
        <li v-for="(item, key) in sliderItems" :key="key">
            <div class="box_download q-ma-none m_left_20 flex bg_white">
                <img :src="urlSite + item.field_icono_item">
                <div class="text">
                    <span class="bold">{{ item.field_titulo_item }}</span>
                    <a href="#" @click="openPopup($event, item)"><span>{{ item.field_ver_descargar }}</span></a>
                </div>
            </div>
        </li>
    </ul>
    <q-dialog v-model="video" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <img :src="urlSite + currentVideo.field_imagen_a_mostrar">
          <a :href="urlSite + currentVideo.field_archivo_pdf">Descargar {{ currentVideo.field_titulo_item }}</a>
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
  name: 'ListaDescargablesIconos',
  props: {
    items: Array
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      slidecontent: 0,
      sliderItems: this.items,
      video: false,
      currentVideo: {},
      urlSite: 'https://obt3.cl'
    }
  },
  methods: {
    openPopup (e, item) {
      e.preventDefault()
      this.currentVideo = item
      this.video = true
    }
  }
}
</script>
