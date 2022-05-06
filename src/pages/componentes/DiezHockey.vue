<template>
    <ul class="desc_hockey">
        <li>
            <div class="w_80 wrp_deporte_efect">
                <a href="#">
                    <img :src="content.field_portada_video[0].url"/>
                    <div class="info_bottom text-center">
                        <p class="desc">Hockey</p>
                        <span v-html="content.field_descripcion_video[0].value"></span>
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
    info: Object
  },
  data () {
    return {
      content: this.info
    }
  }
}
</script>
