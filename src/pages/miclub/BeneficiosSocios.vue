<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menumiclub />
    <div class="q-py-xl all_width gris_home beneficios">
        <div class="centrar w_1200">
        <div class="text-center q-my-lg titulos">Beneficios de los Socios</div>
        <p class="intro text-center">Presentando <strong> cédula de identidad</strong> y/o <strong> carné de socios vigente.</strong></p>
            <div class="q-pa-md">
                <div class="wrp_gallery_beneficios">
                    <q-carousel
                    v-model="slide"
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    swipeable
                    animated
                    control-color="primary"
                    padding
                    arrows
                    height="300px"
                    class="galeria_beneficios"
                    >
                    <q-carousel-slide :name="1" class="column no-wrap">
                        <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                            <div class="treintaydos">
                                <q-img class="rounded-borders col-6 full-height" src="../../assets/MiClub/hbt.png" />
                                <div class="q-mt-md text-center text-black">
                                    <span class="azul_galery">Hasta 20% de descuento</span>
                                    <span class="tex_galery">en organización interior (cocina, closet, baño y loggia).</span>
                                </div>
                            </div>
                            <div class="treintaydos">
                                <q-img class="rounded-borders col-6 full-height" src="../../assets/MiClub/ventisquero.png" />
                                <div class="q-mt-md text-center text-black">
                                    <span class="azul_galery">Hasta 20% de descuento</span>
                                    <span class="tex_galery">en organización interior (cocina, closet, baño y loggia).</span>
                                </div>
                            </div>
                            <div class="treintaydos">
                                <q-img class="rounded-borders col-6 full-height" src="../../assets/MiClub/logo-wilson.png" />
                                <div class="q-mt-md text-center text-black">
                                    <span class="azul_galery">Hasta 20% de descuento</span>
                                    <span class="tex_galery">en organización interior (cocina, closet, baño y loggia).</span>
                                </div>
                            </div>
                        </div>
                    </q-carousel-slide>

                    <q-carousel-slide :name="2" class="column no-wrap">
                        <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
                            <div class="treintaydos">
                                <q-img class="rounded-borders col-6 full-height" src="../../assets/MiClub/ventisquero.png" />
                                <div class="q-mt-md text-center text-black">
                                    <span class="azul_galery">Hasta 20% de descuento</span>
                                    <span class="tex_galery">en organización interior (cocina, closet, baño y loggia).</span>
                                </div>
                            </div>
                            <div class="treintaydos">
                                <q-img class="rounded-borders col-6 full-height" src="../../assets/MiClub/logo-wilson.png" />
                                <div class="q-mt-md text-center text-black">
                                    <span class="azul_galery">Hasta 20% de descuento</span>
                                    <span class="tex_galery">en organización interior (cocina, closet, baño y loggia).</span>
                                </div>
                            </div>
                            <div class="treintaydos">
                                <q-img class="rounded-borders col-6 full-height" src="../../assets/MiClub/hbt.png" />
                                <div class="q-mt-md text-center text-black">
                                    <span class="azul_galery">Hasta 20% de descuento</span>
                                    <span class="tex_galery">en organización interior (cocina, closet, baño y loggia).</span>
                                </div>
                            </div>
                        </div>
                    </q-carousel-slide>
                    </q-carousel>
                    <div class="row justify-center botones">
                        <q-btn-toggle
                            glossy
                            v-model="slide"
                            :options="[
                            { label: 1, value: 1 },
                            { label: 2, value: 2 }
                            ]"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menumiclub from 'pages/submenus/Menumiclub'

export default {
  name: 'BeneficiosSocios',
  components: {
    Menumiclub
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      autoplay: true,
      info: {}
    }
  }
}
</script>
