<template>
    <ul class="list_palmaresFutbol q-py-md descargables_iconos">
        <li>
            <div class="box_download q-ma-none m_left_20 flex bg_white">
                <img src="../../assets/MiClub/i-pdf.svg">
                <div class="text">
                    <span class="bold">Mapa</span>
                    <span> Ver / Descargar</span>
                </div>
            </div>
        </li>
        <li>
            <div class="box_download q-ma-none m_left_20 flex bg_white">
                <img src="../../assets/MiClub/i-pdf.svg">
                <div class="text">
                    <span class="bold">Mapa</span>
                    <span> Ver / Descargar</span>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>

export default {
  name: 'ListaDescargablesIconos',
  props: {
    items: Array
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      slidecontent: 0,
      sliderItems: this.items,
      urlSite: 'https://pwccdev.mkbk.digital/'
    }
  }
}
</script>
