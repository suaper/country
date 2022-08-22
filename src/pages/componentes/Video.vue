<template>
    <ul class="desc_hockey">
        <li class="flex-center">
            <div class="w_80 wrp_deporte_efect">
                <a href="#">
                    <img :src="info.field_portada_video[0].url"/>
                    <div class="info_bottom text-center">
                        <p class="desc">{{ info.title[0].value }}</p>
                        <span v-html="info.field_descripcion_video[0].value"></span>
                    </div>
                  </a>
            </div>
        </li>
    </ul>
</template>

<script>

export default {
  name: 'Video',
  props: {
    items: Object
  },
  data () {
    return {
      info: this.items,
      urlSite: 'https://obt3.cl'
    }
  }
}
</script>
