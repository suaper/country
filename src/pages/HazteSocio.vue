<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menuhaztesocio/>
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
        <q-carousel-slide :name="1" img-src="../assets/Home/banner-home.png" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Hazte Socio</div>
            <p class="intro text-center">Si estás interesado en ser socio de nuestro Club, contáctanos <br> y conoce las condiciones para postular al PWCC. ¡Te esperamos!</p>
            <hr class="hr_amarillo">
             <h5 class="italic">Para recibir el detalle del proceso de postulación, haz click en el siguiente botón:</h5>
             <q-btn outline class="azul q-my-md centrar bg_white_i" label="Más información" icon-right="arrow_right_alt"/>
        </div>
    </div>
    <div class="q-pb-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
            <h4 class="subtitle">Noticias</h4>
            <div class="row flex justify-center  items-start">
                <table class="sesenta">
                    <tr>
                        <td>
                            <img src="../assets/HazteSocio/socio01.png" />
                        </td>
                        <td>
                            <h5 class="titulo_noticias">Título de la principal noticia de esta sección, texto falso.</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum tellus a nibh volutpat ultricies. Sed iaculis, erat a tristique vestibulum, urna ipsum aliquet…</p>
                            <q-btn outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                </table>
                <table class="treintaycinco">
                    <tr>
                        <td>
                            <h5 class="titulo_noticias">Título de noticias secundarias, texto falso.</h5>
                            <p>Sed iaculis, erat a tristique vestibulum, urna ipsum aliquet lorem…</p>
                            <q-btn outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5 class="titulo_noticias">Título de noticias secundarias, texto falso.</h5>
                            <p>Cras rutrum tellus a nibh volutpat ultricies. Sed iaculis, erat a tristique…</p>
                            <q-btn outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

    <div class="q-py-xl all_width gris_home wrp_club">
        <div class="centrar w_1200 flex justify-between items-center">
            <h4 class="subtitle sin_margen">Contáctanos</h4>
            <ul class="contacto_footer">
                <li class="mail">
                    <img src="../assets/HazteSocio/i-correo.svg" />
                    <span>mvaldivia@pwcc.cl</span>
                </li>
                <li class="tel">
                    <img src="../assets/HazteSocio/i-phone.svg" />
                    <span>+56 9 98215362</span>
                </li>
                <li class="tel">
                    <img src="../assets/HazteSocio/i-phone.svg" />
                    <span>+56 2 2757 5700 </span>
                </li>
            </ul>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menuhaztesocio from 'pages/submenus/Menuhaztesocio'

export default {
  name: 'Haztesocio',
  components: {
    Menuhaztesocio
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {}
    }
  }
}
</script>
