<template>
    <div class="row flex justify-center  items-start">
        <table class="sesenta">
          <tr>
              <td>
                  <img :src="urlSite + notices[0].field_imagen_noticia" />
              </td>
              <td>
                  <h5 class="titulo_noticias">{{ notices[0].title }}</h5>
                  <p v-html="notices[0].body"></p>
                  <q-btn @click="goNotice(notices[0])" outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
              </td>
          </tr>
      </table>
      <table class="treintaycinco">
          <tr>
              <td>
                  <h5 class="titulo_noticias">{{ notices[1].title }}</h5>
                  <p v-html="notices[1].body"></p>
                  <q-btn @click="goNotice(notices[1])" outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
              </td>
          </tr>
          <tr>
              <td>
                  <h5 class="titulo_noticias">{{ notices[2].title }}</h5>
                  <p v-html="notices[2].body"></p>
                  <q-btn @click="goNotice(notices[2])" outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
              </td>
          </tr>
      </table>
    </div>
</template>

<script>

export default {
  name: 'TresNoticias',
  props: {
    info: Array
  },
  data () {
    return {
      notices: this.info,
      urlSite: 'https://obt3.cl/'
    }
  },
  methods: {
    goNotice (notice) {
      localStorage.setItem('noticeId', notice.nid)
      this.$router.push('/detalle-noticia/' + notice.title.toLowerCase().replaceAll(' ', '-'))
    }
  }
}
</script>
