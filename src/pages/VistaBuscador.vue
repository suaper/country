<template>
  <q-page class="flex flex-center view_quienes_somos">
    <div class="q-pb-md all_width gris_home view_danzas q-mt-xl q-mb-md">
        <div class="setenta  centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Buscador de Libros</div>
            <div class="back"> <q-btn to="/cultura" round color="white" icon="west" />Volver</div>
        </div>
    </div>
    <div class="q-py-md w_1200 centrar flex_escuelas flex_obras justify-center">
        <div class="row_search">
            <div class="wrp_search vista flex">
                <h5>Buscador</h5>
                <q-input
                    outlined
                    v-model="filter"
                    lazy-rules
                    class="bg_ww"
                />
                  <q-btn round color="white" class="relative" icon="search" to="/vista-buscador" />
            </div>
        </div>
    </div>

    <div class="q-pb-xl all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
        <div class="text-left q-mb-none q-mt-xl titulos wrp_gallery_biblioteca">Resultados de Búsqueda</div>
            <div class="row fit justify-between items-center q-gutter-xs q-col-gutter wrap wwsearcing">
                <div class="w_100 v_buscador">
                    <table class="lista_resultados">
                        <tr>
                            <td class="text-left">
                                <h5 class="name_event">Nombre de la sección</h5>
                                <p class="desc_event text-left">jadsfjasldj loremds dsd ds ds sd sd sd limitar cantidad de texto</p>
                                <q-btn class="btn_bg_beige centrar  btn_centrar" label="Ver más"/>
                            </td>
                        </tr>

                        <tr>
                            <td class="text-left">
                                <h5 class="name_event">Nombre de la sección</h5>
                                <p class="desc_event text-left">jadsfjasldj loremds dsd ds ds sd sd sd limitar cantidad de texto</p>
                                <q-btn class="btn_bg_beige centrar  btn_centrar" label="Ver más"/>
                            </td>
                        </tr>

                        <tr>
                            <td class="text-left">
                                <h5 class="name_event">Nombre de la sección</h5>
                                <p class="desc_event text-left">jadsfjasldj loremds dsd ds ds sd sd sd limitar cantidad de texto</p>
                                <q-btn class="btn_bg_beige centrar  btn_centrar" label="Ver más"/>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'Buscador',

  data () {
    return {
      urlSite: 'https://pwccdev.mkbk.digital/'
    }
  }
}
</script>
