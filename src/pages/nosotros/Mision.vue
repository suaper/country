<template>
  <q-page class="flex flex-center view_mision">
    <Menusomos />
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
        :autoplay="autoplay"
      >
        <q-carousel-slide :name="1" img-src="../../assets/Home/banner-home.png" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </q-carousel>
    </div>
    <div class="q-py-md all_width gris_home">
         <div class="rwo_1 row_wrap setenta">
            <div class="text-center q-my-lg titulos">Misión</div>
            <p class="destacado destacado_italic w_850 centrar text-center azul">“Ser un incomparable lugar de encuentro para toda la familia, con servicios e instalaciones de primer nivel para la práctica del deporte y recreación, compartiendo los valores y tradiciones Británicas”.</p>
        </div>
        <div class="rwo_1 row_wrap setenta q-py-xl">
            <ul class="content_mision">

                <li class="left">
                    <img src="../../assets/QuienesSomos/mision01.png">
                    <div class="content_text">
                        <hr>
                        <p>Lograr una cada vez mejor experiencia del socio, mediante la entrega de <span class="azul"> servicios oportunos y de calidad.</span></p>
                    </div>
                </li>

                <li class="right">
                    <div class="content_text">
                        <hr>
                        <p>Consolidar una <span class="azul">infraestructura de alto estándar</span> es una necesidad permanente para la óptima práctica de los distintos deportes o actividades.</p>
                    </div>
                    <img src="../../assets/QuienesSomos/mision2.png">
                </li>

                <li class="left">
                    <img src="../../assets/QuienesSomos/mision3.png">
                    <div class="content_text">
                        <hr>
                        <p>Definir e implementar un modelo de <span class="azul">sustentabilidad de largo plazo</span> que permita el desarrollo de nuestro club, asegurando una sólida situación financiera.</p>
                    </div>
                </li>

                <li class="right">
                    <div class="content_text">
                        <hr>
                        <p>Finalmente, y probablemente el aspecto más importante, se refiere a fortalecer una comunidad de socios que promueva en todo momento un <span class="azul">ambiente cordial y de respeto entre nosotros</span>, con nuestro personal y visitantes al club.</p>
                    </div>
                    <img src="../../assets/QuienesSomos/mision4.png">
                </li>
            </ul>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menusomos from '../../pages/submenus/Menusomos'

export default {
  name: 'Historia',
  components: {
    Menusomos
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      autoplay: true
    }
  }
}
</script>
