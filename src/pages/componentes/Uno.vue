<template>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
        autoplay="autoplay"
      >
      <q-carousel-slide v-for="(banner, key) in info.field_slider_sport" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
</template>

<script>

export default {
  name: 'Uno',
  props: {
    banner: Object,
    bannerSlide: String
  },
  data () {
    return {
      sliders: true,
      slide: this.bannerSlide,
      info: this.banner
    }
  }
}
</script>
