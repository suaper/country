<template>
  <q-page class="flex flex-center view_historia">
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
        <div class="row_2 row_wrap flex no-wrap flex justify-between ">
            <div class="cuarenta">
                <img class="cien" src="../../assets/QuienesSomos/image-historia.svg">
            </div>
            <div class="sesenta">
                <div class="text-h6 text-left q-my-lg">Historia</div>

                <p>El Prince of Wales Country Club fue fundado en 1925, en un momento completamente distinto de la historia de Chile, en el cual existía una importante presencia inglesa y el Príncipe de Gales era invitado a visitar el país por varios días, no importando que los viajes fuesen largos, la ciudad muy pequeña y el club ubicado fuera de la ciudad en campo abierto.</p>
                <p> En 1925 no había ninguna construcción importante en aquel extenso terreno de Tobalaba que la Sociedad Inmobiliaria Británica Príncipe de Gales compró a Joaquín Echeñique en trescientos mil pesos para levantar un country. Los únicos vestigios de actividad humana estaban sustentados en la prístina belleza de un campo donde resaltaban algunas chacras, los potreros de luminosos yuyos, unas pircas separatorias de los mismos y, a lo lejos, unos modestos ranchos de inquilinos.</p>
                <p> Había en este paisaje dominado por la presencia vertical de la cordillera de los Andes, algo que deslumbró a los fundadores: un bosquecillo de floridos almendrales dulces donde solían hacer picnics mientras se construía el Club House.</p>
            </div>
        </div>
        <div class="rwo_1 row_wrap">
            <p>En los últimos 90 años, hemos vivido tantas circunstancias diferentes en lo político, económico y social, Chile ahora es un país distinto, las personas tienen otras inquietudes y las actividades deportivas y sociales se practican de modo muy diferente. Hoy el Club está en medio de la ciudad. Si quieres conocer la historia de nuestro club, puedes adquirir el libro “Prince of Wales Country Club 80 años” disponible en la caja del segundo piso.</p>
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
