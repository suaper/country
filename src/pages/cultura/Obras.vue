<template>
  <q-page class="flex flex-center view_hijos_socios view_danzas">

    <div class="q-pb-xl all_width gris_home">
        <div class="setenta q-pd-md centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Obras</div>
            <div class="back"> <q-btn round color="white" icon="west" />Volver</div>
        </div>
        <div class="q-py-md w_1200 centrar flex_escuelas justify-center">
            <div class="wrp_img_obras">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                    <div class="absolute-bottom text-subtitle1 text-center">
                        Cascanueces
                        <q-btn class="q-ml-lg sin_borde" outline color="indigo-10" icon-right="east" label="Ver más" />
                    </div>
                </q-img>
            </div>
            <div class="wrp_img_obras">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                    <div class="absolute-bottom text-subtitle1 text-center">
                        Cascanueces
                        <q-btn class="q-ml-lg sin_borde" outline color="indigo-10" icon-right="east" label="Ver más" />
                    </div>
                </q-img>
            </div>
            <div class="wrp_img_obras">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                    <div class="absolute-bottom text-subtitle1 text-center">
                        Cascanueces
                        <q-btn class="q-ml-lg sin_borde" outline color="indigo-10" icon-right="east" label="Ver más" />
                    </div>
                </q-img>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'Obras',
  data () {
    return {
      urlSite: 'https://pwccdev.mkbk.digital/',
      multimediaHome: [],
      formulario: false
    }
  },
  methods: {
    openPopForm () {
      this.formulario = true
    }
  }
}
</script>
