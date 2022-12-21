<template>
    <ul class="list_palmaresFutbol q-py-md">
        <li v-for="(item, key) in sliderItems" :key="key">
            <div class="box_download q-ma-none m_left_20 flex bg_white">
                <img :src="urlSite + item.field_imagen_palmares">
                <div class="text border_left">
                    <span class="bold">{{ item.field_nombre_palmar }}</span>
                    <span> Fecha {{ item.field_fecha_palmares }}</span>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>

export default {
  name: 'PalmaresFutbol',
  props: {
    items: Array
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      slidecontent: 0,
      sliderItems: this.items,
      urlSite: 'https://www.pwcc.cl'
    }
  }
}
</script>
