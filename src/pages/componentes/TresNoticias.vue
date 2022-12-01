<template>
    <div class="row flex justify-center  items-start">
        <table class="sesenta">
          <tr>
              <td>
                  <img :src="urlSite + notices[0].field_imagen_noticia" />
              </td>
              <td>
                  <h5 class="titulo_noticias">{{ trimNotice(notices[0].title) }}</h5>
                  <p v-html="trimNoticeDetalle(notices[0].body)"></p>
                  <q-btn @click="goNotice(notices[0])" outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
              </td>
          </tr>
      </table>
      <table class="treintaycinco">
          <tr>
              <td>
                  <h5 class="titulo_noticias">{{ trimNotice(notices[1].title) }}</h5>
                  <p v-html="trimNoticeDetalle(notices[1].body)"></p>
                  <q-btn @click="goNotice(notices[1])" outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
              </td>
          </tr>
          <tr>
              <td>
                  <h5 class="titulo_noticias">{{ trimNotice(notices[2].title) }}</h5>
                  <p v-html="trimNoticeDetalle(notices[2].body)"></p>
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
      urlSite: 'https://obt3.cl'
    }
  },
  methods: {
    goNotice (notice) {
      localStorage.setItem('noticeId', notice.nid)
      this.$router.push('/detalle-noticia/' + notice.title.toLowerCase().replaceAll(' ', '-'))
    },
    trimNotice (title) {
      var maxLength = 90
      if (title.length > maxLength) {
        var trimmedString = title.substr(0, maxLength)
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')))
        return trimmedString + '...'
      }

      return title
    },
    trimNoticeDetalle (detalle) {
      var maxLength = 90
      if (detalle.length > maxLength) {
        var trimmedString = detalle.substr(0, maxLength)
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')))
        return trimmedString + '...'
      }

      return detalle
    }
  }
}
</script>
