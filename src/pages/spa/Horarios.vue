<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness view_danzas">
    <div class="q-pb-xl all_width gris_home">
        <div class="setenta q-pd-md centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Programa de Clases</div>
            <div class="back"> <q-btn round color="white" onclick="history.back()" icon="west" />Volver</div>
        </div>
        <ul class="wrp_actions_center_peluqueria">
            <li>
                <a href="#" icon-right="arrow_right_alt">Fitness Funcional</a>
            </li>
            <li>
                <a href="#" icon-right="arrow_right_alt">Gimnasia de Mantención</a>
            </li>
            <li>
                <a href="#" icon-right="arrow_right_alt">Personal Trainer</a>
            </li>
            <li>
                <a href="#" icon-right="arrow_right_alt">Pilates</a>
            </li>
            <li>
                <a href="#" icon-right="arrow_right_alt">Training Golf</a>
            </li>
            <li>
                <a href="#" icon-right="arrow_right_alt">Yoga</a>
            </li>
        </ul>
    </div>
    <div>
    </div>
    <div class="q-py-xl all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1000">
            <h6 class="peluqueria q-mt-none">Spinning</h6>
            <p>Es una clase donde se debe pedalear sobre una bicicleta estática al ritmo de la música, dirigida por un profesor, quien da las instrucciones de ritmo, velocidades, cargas y movimientos sobre la bicicleta. Desarrolla principalmente la capacidad cardiovascular del individuo y aporta significativamente a la baja de porcentaje de tejido adiposo corporal, dependiendo de los niveles de frecuencia cardiaca en que se trabaje. Se localiza la mayor parte del trabajo en el tren inferior.</p>
            <p> También conecta tu mente y tu cuerpo, motivado por paseos virtuales acompañados de la mejor música. Una clase que todos pueden seguir.</p>
        </div>
    </div>
    <div class="q-py-xl all_width gris_home table_horarios">
        <div class="centrar w_1000">
        <h6 class="peluqueria q-mt-none">Clases y Horarios</h6>
          <table class="blanco">
            <tr>
                <th>Clase</th>
                <th>Tipo</th>
                <th>Horarios</th>
                <th>Profesor/a</th>
            </tr>
            <tr>
                <td>Spinning</td>
                <td>Presencial</td>
                <td>Martes y Jueves <br> 7:30 a 8:15</td>
                <td>Daniela Rojas</td>
            </tr>
            <tr>
                <td>Spinning</td>
                <td>Presencial</td>
                <td>Martes y Jueves <br> 7:30 a 8:15</td>
                <td>Daniela Rojas</td>
            </tr>
            <tr>
                <td>Spinning</td>
                <td>Presencial</td>
                <td>Martes y Jueves <br> 7:30 a 8:15</td>
                <td>Daniela Rojas</td>
            </tr>
            <tr>
                <td>Spinning</td>
                <td>Presencial</td>
                <td>Martes y Jueves <br> 7:30 a 8:15</td>
                <td>Daniela Rojas</td>
            </tr>
          </table>
        </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'Horarios',

  data () {
    return {
      sliders: true
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    goToAnchor (e, item) {
      e.preventDefault()
      const el = document.querySelector(item)
      el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
</script>
