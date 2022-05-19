<template>
    <div class="wrp_table_clasificacion campeonato_golf">
        <h5 class="text_normal">Campeonato del Club 2021 - Copa BICE</h5>
        <div class="row">
            <ul class="fecha_campeonato">
                <li>
                     <q-icon name="date_range"></q-icon> <span>5</span>
                </li>
                <li><span>mes</span></li>
                <li><span>2021</span></li>
            </ul>
            <ul class="hora_campeonato">
                <li>
                    <q-icon name="watch_later"></q-icon>
                    <span>13:00</span>
                </li>
            </ul>
        </div>
        <ul class="list_palmaresFutbol q-py-md list_info_campeonatos flex flex-start">
            <li>
                <div class="box_download q-ma-none m_left_20 flex bg_white">
                    <img src="../../assets/MiClub/i-pdf.svg">
                    <div class="text">
                        <span class="bold">Mapa</span>
                        <span> Ver / Descargar</span>
                    </div>
                </div>
            </li>
            <li>
                <div class="box_download q-ma-none m_left_20 flex bg_white">
                    <img src="../../assets/MiClub/i-pdf.svg">
                    <div class="text">
                        <span class="bold">Mapa</span>
                        <span> Ver / Descargar</span>
                    </div>
                </div>
            </li>
           <li>
                <div class="box_download q-ma-none m_left_20 flex bg_white">
                    <img src="../../assets/MiClub/i-pdf.svg">
                    <div class="text">
                        <span class="bold">Mapa</span>
                        <span> Ver / Descargar</span>
                    </div>
                </div>
            </li>
        </ul>
        <q-btn outline class="azul q-my-md centrar bg_white_i" label="Ver Bases" icon-right="arrow_right_alt"/>
    </div>
</template>

<script>

export default {
  name: 'CampeonatoActual'
}
</script>
