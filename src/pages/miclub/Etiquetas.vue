<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menumiclub />
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
    <div class="q-pb-md all_width gris_home etiquetas">
        <div class="center text-center q-my-lg titulos">Etiquetas</div>
        <div class="centrar w_1200">
            <p class="intro text-center">Los socios y su grupo familiar deberán mantener en forma constante un comportamiento y conducta acorde con la categoría de nuestro club, observándose respeto y cortesía como también apegándose a normas de moral y buenas costumbres.</p>

            <div class="q-pa-md row items-start q-gutter-md">
                <q-card class="card_etiquetas w_30">
                <q-card-section>
                    <h5>Comedor Principal</h5>
                    <ul>
                        <li>Entrada sólo para mayores de 10 años.</li>
                        <li>Tenida formal o casual. </li>
                        <li>Prohibido el uso de bermudas, shorts o tenida deportiva.</li>
                        <li>Prohibido el uso de dispositivos móviles. </li>
                    </ul>
                </q-card-section>
                </q-card>
                <q-card class="card_etiquetas w_30">
                <q-card-section>
                    <h5>Comedor Principal</h5>
                    <ul>
                        <li>Entrada sólo para mayores de 10 años.</li>
                        <li>Tenida formal o casual. </li>
                        <li>Prohibido el uso de bermudas, shorts o tenida deportiva.</li>
                        <li>Prohibido el uso de dispositivos móviles. </li>
                    </ul>
                </q-card-section>
                </q-card>

                <q-card class="card_etiquetas w_30">
                <q-card-section>
                    <h5>Comedor Principal</h5>
                    <ul>
                        <li>Entrada sólo para mayores de 10 años.</li>
                        <li>Tenida formal o casual. </li>
                        <li>Prohibido el uso de bermudas, shorts o tenida deportiva.</li>
                        <li>Prohibido el uso de dispositivos móviles. </li>
                    </ul>
                </q-card-section>
                </q-card>

                <q-card class="card_etiquetas w_30">
                <q-card-section>
                    <h5>Comedor Principal</h5>
                    <ul>
                        <li>Entrada sólo para mayores de 10 años.</li>
                        <li>Tenida formal o casual. </li>
                        <li>Prohibido el uso de bermudas, shorts o tenida deportiva.</li>
                        <li>Prohibido el uso de dispositivos móviles. </li>
                    </ul>
                </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menumiclub from 'pages/submenus/Menumiclub'

export default {
  name: 'Etiquetas',
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
