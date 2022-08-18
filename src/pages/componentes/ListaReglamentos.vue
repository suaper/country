<template>
    <ul class="list_reglamentos q-py-md">
        <li v-for="(item, key) in info" :key="key">
            <div class="box_download q-ma-none m_left_20 flex bg_white">
                <img src="../../assets/MiClub/i-pdf.svg">
                <div class="text">
                  <a :href="urlSite + item.field_archivo_pdf" target="_blank">
                    <span class="bold">{{ item.title }}</span>
                    <span v-html="item.field_descripcion_pdf_1"></span>
                    </a>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>

export default {
  name: 'ListaReglamentos',
  props: {
    content: [Object, Array]
  },
  data () {
    return {
      urlSite: 'https://obt3.cl/',
      info: this.content
    }
  }
}
</script>
