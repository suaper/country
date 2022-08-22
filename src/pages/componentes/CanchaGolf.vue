<template>
    <div class="q-py-none all_width wrp_club">
        <div class="row_wrap no-wrap flex justify-between fsecond_row_home">
            <div class="q-py-md">
                <table class="esquma_inferior">
                <tr>
                <td class="tg-0pky" rowspan="2">
                    <a href="#" @click="openItem($event, items[0])">
                        <img alt="img2" :src="urlSite + items[0].field_portada"><div class="wrp_over">
                        <span class="text-white">{{ items[0].field_titulo_video }}</span>
                        <span class="desc_white" v-html="items[0].field_descripcion"></span>
                    </div></a>
                </td>
                <td class="tg-1pky">
                    <a href="#" @click="openItem($event, items[1])">
                        <img alt="img2" :src="urlSite + items[1].field_portada"><div class="wrp_over">
                        <span class="text-white">{{ items[1].field_titulo_video }}</span>
                        <span class="desc_white" v-html="items[1].field_descripcion"></span>
                    </div></a>
                </td>
                </tr>
                <tr>
                <td class="tg-4pky">
                    <a href="#" @click="openItem($event, items[2])">
                        <img alt="img2" :src="urlSite + items[2].field_portada"><div class="wrp_over">
                        <span class="text-white">{{ items[2].field_titulo_video }}</span>
                        <span class="desc_white" v-html="items[2].field_descripcion"></span>
                    </div></a></td>
                </tr>
                </table>
            </div>
        </div>
         <q-dialog v-model="video" persistent>
          <q-card>
            <q-card-section class="row items-center">
              <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + currentVideo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
  name: 'CanchaGolf',
  props: {
    info: Array
  },
  data () {
    return {
      items: this.info,
      urlSite: 'https://obt3.cl',
      video: false,
      currentVideo: ''
    }
  },
  methods: {
    openItem (e, multimedia) {
      e.preventDefault()
      var currentVideo = multimedia.field_videos_cancha.split('=')
      this.currentVideo = currentVideo[1]
      this.video = true
    }
  }
}
</script>
