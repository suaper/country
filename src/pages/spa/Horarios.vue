<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness view_danzas">
    <div class="q-pb-xl all_width gris_home">
        <div class="setenta q-pd-md centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Programa de Clases</div>
            <div class="back"> <q-btn round color="white" onclick="history.back()" icon="west" />Volver</div>
        </div>
        <ul class="wrp_actions_center_peluqueria">
            <li v-for="(item, key) in horarios" :key="key">
                <a href="#" @click="showItem($event, item)" icon-right="arrow_right_alt">{{ item.title }}</a>
            </li>
        </ul>
    </div>
    <div>
    </div>
    <div class="q-py-xl all_width bg_amarillo wrp_club hazte_socio" v-if="loadedHorario">
        <div class="centrar w_1000">
            <h6 class="peluqueria q-mt-none">{{ horario.title }}</h6>
            <p v-html="horario.body"></p>
        </div>
    </div>
    <div class="q-py-xl all_width gris_home table_horarios" v-if="loadedHorario">
        <div class="centrar w_1000">
        <h6 class="peluqueria q-mt-none">Clases y Horarios</h6>
          <table class="blanco">
            <tr>
                <th>Clase</th>
                <th>Tipo</th>
                <th>Horarios</th>
                <th>Profesor/a</th>
            </tr>
            <tr v-for="(item, key) in horario.subServices" :key="key">
                <td>{{ item.field_clase }}</td>
                <td>{{ item.field_tipo }}</td>
                <td>{{ item.field_horario }}</td>
                <td>{{ item.field_profesor_a }}</td>
            </tr>
          </table>
        </div>
    </div>
  </q-page>
</template>

<script>
import configServices from '../../services/config'

export default {
  name: 'Horarios',

  data () {
    return {
      sliders: true,
      horarios: [],
      horario: {},
      loadedHorario: false
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    showItem (e, item) {
      e.preventDefault()
      this.horario = item
      this.loadedHorario = true
    },
    getInfo () {
      var _this = this

      configServices.loadData(this, '/horarios-clases-profesores/json', {
        callBack: (data) => {
          data.map((item, key) => {
            var service = {
              title: item.field_nombre_disciplina,
              body: item.body,
              subServices: [
                {
                  field_clase: item.field_clase,
                  field_horario: item.field_horario,
                  field_profesor_a: item.field_profesor_a,
                  field_tipo: item.field_tipo
                }
              ]
            }
            const isFound = _this.horarios.find((element, index) => {
              if (element.title === item.field_nombre_disciplina) {
                _this.horarios.splice(index, 1)
                return element
              }
            })

            if (isFound && typeof isFound !== 'undefined') {
              isFound.subServices.push({
                field_clase: item.field_clase,
                field_horario: item.field_horario,
                field_profesor_a: item.field_profesor_a,
                field_tipo: item.field_tipo
              })

              _this.horarios.push(isFound)
            } else {
              _this.horarios.push(service)
            }
          })

          _this.horario = _this.horarios[0]
          _this.loadedHorario = true

          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
