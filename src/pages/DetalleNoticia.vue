<template>
  <q-page class="flex justify-between view_quienes_somos">
    <div class="q-pb-md all_width gris_home etiquetas">
        <div class="center text-center q-my-lg titulos q-mt-2">Noticias</div>
        <div class="centrar w_1200">
          <div class="center text-left q-my-lg titulo2 q-mt-2">Las mejores adaptaciones de la literatura al ballet</div>
        </div>
        <div class="img_noticia"><img src="https://cdn.quasar.dev/img/parallax1.jpg" alt="#"></div>
        <div class="centrar w_1200 text_noticias">
          <p>Tiene un especial mérito por parte del grupo Elephant in the Black Box seguir adelante, creando y ofreciendo espectáculos con público en directo, en una época gris en la que se ha impuesto el diferido y otras formas virtuales</p>
          <p>Comienza André Lepecki su libro Agotar la danza (2006) con una cita escogida con retranca e ironía de la decana de los críticos de ballet y danza de The New York Times, Anna Kisselgoff, publicada el 31 de diciembre de 2000. El fragmento, sacado de contexto, no ayuda mucho pero, visto en retrospectiva, sigue teniendo vigencia. Dice Kisselgoff: “Parar y seguir. Llamémoslo tendencia o tic, la creciente frecuencia de secuencias espasmódicas en la coreografía es algo imposible de ignorar. Los espectadores interesados en un flujo o continuidad de movimiento han encontrado últimamente escasos ejemplos de ello en numerosos estrenos”. Y apunta de manera arriesgada Lepecki que Kisselgoff, tras enlistar a algunos “coreógrafos espasmódicos”, informa su consideración de lo visto en David Dorfman (Nueva York) y en William Forsythe (entonces en la dirección del conjunto de Frankfurt) con una frase conclusiva: “Todo muy de hoy. ¿Y mañana qué?”. Pues estamos en ese mañana, habida cuenta de que han pasado algo más de 20 años de aquel premonitorio escrito.</p>

          <q-btn outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
        </div>
    </div>
    <div class="q-pa-md all_width bg_white logos_footer">
      <div class="centrar w_1200">
        <ul class="q-pd-none">
            <li class="flex flex-start">
                <img src="https://cdn.quasar.dev/img/parallax1.jpg" alt="#">
            </li>
            <li class="flex flex-start">
                <img src="https://cdn.quasar.dev/img/parallax1.jpg" alt="#">
            </li>
            <li class="flex flex-start">
                <img src="https://cdn.quasar.dev/img/parallax1.jpg" alt="#">
            </li>
            <li class="flex flex-start">
                <img src="https://cdn.quasar.dev/img/parallax1.jpg" alt="#">
            </li>
        </ul>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'Noticiadetalle',
  data () {
    return {
      sliders: true,
      slide: 1,
      autoplay: true,
      info: {
        field_cuota_trimestral: [
          {}
        ]
      },
      urlSite: 'https://pwccdev.mkbk.digital/',
      pop_cuota: false,
      cuotas: []
    }
  }
}
</script>
