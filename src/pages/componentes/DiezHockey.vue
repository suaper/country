<template>
    <ul class="desc_hockey">
        <li>
            <div class="w_80 wrp_deporte_efect">
                <a href="#">
                    <img :src="content.field_portada_video[0].url"/>
                    <div class="info_bottom text-center">
                        <p class="desc" v-if="path !== 'natacion'">Hockey</p>
                        <p class="desc" v-if="path === 'natacion'">Triatlon</p>
                        <span class="text_white" v-html="content.field_descripcion_video[0].value"></span>
                    </div>
                  </a>
            </div>
            <div class="w_20" v-html="content.field_texto_video[0].value"></div>
        </li>
    </ul>
</template>

<script>

export default {
  name: 'DiezHockey',
  props: {
    info: Object,
    path: String,
    subPath: String
  },
  mounted () {
    const currentPath = this.$route.path.split('/')
    this.path = currentPath[2]
    this.subPath = currentPath[3]

    this.getInfo()
    this.$q.loading.hide()
  },
  data () {
    return {
      content: this.info
    }
  }
}
</script>
