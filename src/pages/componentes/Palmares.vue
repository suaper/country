<template>
    <ul class="list_palmares q-py-md">
        <li v-for="(item, key) in info" :key="key">
            <div class="box_download q-ma-none m_left_20 flex bg_white">
                <img src="../../assets/MiClub/i-medalla.svg">
                <div class="text">
                    <span class="bold">{{ item.field_nombre_palmar }}</span>
                    <a href="#" target="_blank"><span>{{ item.field_fecha_palmares }}</span></a>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>

export default {
  name: 'Palmares',
  props: {
    items: Array
  },
  data () {
    return {
      info: this.items
    }
  }
}
</script>
