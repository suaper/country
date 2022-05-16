<template>
    <div class="wrp_table_clasificacion campeonato_golf">
        <h5 class="text_normal">Campeonato Actual</h5>
        <div class="row">
            <ul>
                <li>
                    icono <span>5</span>
                </li>
                <li><span>mes</span></li>
                <li><span>2021</span></li>
            </ul>
            <ul>
                <li>
                    icono
                    <span>13:00</span>
                </li>
            </ul>
        </div>
        <div class="row flex w_100 justify-betwen">
            <div class="w_50 table_campeonato">
                <h5 class="text_normal">Ranking</h5>
                <div class="marco_table">
                    <div class="row flex w_100 justify-betwen">
                        <img alt="img2" src="img/logo-country-club.png" class="q-mt-lg"><div class="btn_right_top"></div>
                        <q-btn class="text_azul centrar bg_white btn_centrar" label="Ver más" icon-right="arrow_right_alt"/>
                    </div>
                    <table>
                        <tr>
                            <th>Pos</th>
                            <th>Nombre</th>
                            <th>Prom Pts.</th>
                            <th>Tot Pts.</th>
                            <th>Eventos</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Alan Watts</td>
                            <td>0.88</td>
                            <td>38.82</td>
                            <td>03</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="w_50 table_campeonato">
                <h5 class="text_normal">Jugador Destacado</h5>
                <div class="jugador_desacado">
                    <img src="img/club01.png" class="cien">
                    <div class="wrp_over">
                        <span class="text-white">Paula Alcaino</span>
                        <span class="desc_white">Campeona del Club 2021</span>
                        <q-btn outline type="submit" class="azul centrar mt_10 bg_white_home" label="ver" icon-right="arrow_right_alt"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'CampeonatoActual'
}
</script>
