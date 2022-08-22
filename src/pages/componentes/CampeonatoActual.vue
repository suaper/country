<template>
    <div class="wrp_table_clasificacion campeonato_golf">
        <h5 class="text_normal">{{ info.title }}</h5>
        <div class="row">
            <ul class="fecha_campeonato">
                <li>
                     <q-icon name="date_range"></q-icon> <span>{{ info.datetime.day }}</span>
                </li>
                <li><span>{{ info.datetime.month }}</span></li>
                <li><span>{{ info.datetime.year }}</span></li>
            </ul>
            <ul class="hora_campeonato">
                <li>
                    <q-icon name="watch_later"></q-icon>
                    <span>{{ info.datetime.hour }}</span>
                </li>
            </ul>
        </div>
        <div class="row flex w_100 justify-between">
            <div class="w_50 table_campeonato">
                <h5 class="text_normal">Ranking</h5>
                <div class="marco_table">
                    <div class="row flex w_100 justify-betwen cabe">
                        <img alt="img2" src="img/logo-country-club.png" class="q-mt-lg">
                        <a href="#">Ver más<q-icon name="arrow_right_alt" class="cursor-pointer"></q-icon></a>
                    </div>
                    <table>
                        <tr>
                            <th>Pos</th>
                            <th>Nombre</th>
                            <th>Prom Pts.</th>
                            <th>Tot Pts.</th>
                            <th>Eventos</th>
                        </tr>
                        <tr v-for="(item, key) in ranking" :key="key">
                            <td>{{ item.field_ranking }}</td>
                            <td>{{ item.field_nombre_y_apellidos }}</td>
                            <td>{{ item.field_prom_pts }}</td>
                            <td>{{ item.field_tot_pts }}</td>
                            <td>{{ item.field_eventos }}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="w_50 table_campeonato">
                <h5 class="text_normal">Jugador Destacado</h5>
                <div class="jugador_desacado">
                    <img :src="urlSite + info.field_jugador_destacado" class="cien">
                    <div class="wrp_over">
                        <span class="text-white">{{ info.field_nombre_jugador_destacado }}</span>
                        <span class="desc_white">{{ info.field_campeonato_destacado }}</span>
                        <q-btn outline type="submit" class="azul centrar mt_10 bg_white_home" label="ver" icon-right="arrow_right_alt"/>
                    </div>
                </div>
            </div>
        </div>
        <ul class="botones_horizontal">
            <li>
                <q-btn outline class="azul q-my-md centrar bg_white_i" label="Ver Bases" icon-right="arrow_right_alt"/>
            </li>
            <li>
                <q-btn outline class="azul q-my-md centrar bg_white_i" label="Ver Listado de Inscritos" icon-right="arrow_right_alt"/>
            </li>
            <li>
                <q-btn outline class="azul q-my-md centrar bg_white_i" label="Ver Inscripciones" icon-right="arrow_right_alt"/>
            </li>
            <li>
                <q-btn outline class="azul q-my-md centrar bg_white_i" label="Ver Inscripciones" icon-right="arrow_right_alt"/>
            </li>
            <li>
                <q-btn outline class="azul q-my-md centrar bg_white_i" label="Ver Salidas" icon-right="arrow_right_alt"/>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'CampeonatoActual',
  props: {
    items: Object,
    table: Array
  },
  data () {
    return {
      info: this.items,
      ranking: this.table,
      urlSite: 'https://obt3.cl'
    }
  }
}
</script>
