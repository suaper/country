<template>
  <q-page class="view_directorio gris_home q-pb-xl">
    <div class="wrp_submenu">
     <Menusomos />
    </div>
  <h2 class="center title">
      Ex-Presidentes
  </h2>
  <div class="wrp_expresidentes">
    <div class="caja_directivos bg-white">
        <ul class="list_expresidentes">
            <li>
                <span class="fecha">2013 - 2017</span>
                <span class="separador"></span>
                <span class="nombre">Richard Diego Padrón</span>
            </li>
            <li>
                <span class="fecha">2013 - 2017</span>
                <span class="separador"></span>
                <span class="nombre">Richard Diego Padrón</span>
            </li>
            <li>
                <span class="fecha">2013 - 2017</span>
                <span class="separador"></span>
                <span class="nombre">Richard Diego Padrón</span>
            </li>
            <li>
                <span class="fecha">2013 - 2017</span>
                <span class="separador"></span>
                <span class="nombre">Richard Diego Padrón</span>
            </li>
            <li>
                <span class="fecha">2013 - 2017</span>
                <span class="separador"></span>
                <span class="nombre">Richard Diego Padrón</span>
            </li>
            <li>
                <span class="fecha">2013 - 2017</span>
                <span class="separador"></span>
                <span class="nombre">Richard Diego Padrón</span>
            </li>
            <li>
                <span class="fecha">2013 - 2017</span>
                <span class="separador"></span>
                <span class="nombre">Richard Diego Padrón</span>
            </li>
            <li>
                <span class="fecha">2013 - 2017</span>
                <span class="separador"></span>
                <span class="nombre">Richard Diego Padrón</span>
            </li>
            <li>
                <span class="fecha">2013 - 2017</span>
                <span class="separador"></span>
                <span class="nombre">Richard Diego Padrón</span>
            </li>
            <li>
                <span class="fecha">2013 - 2017</span>
                <span class="separador"></span>
                <span class="nombre">Richard Diego Padrón</span>
            </li>
            <li>
                <span class="fecha">2013 - 2017</span>
                <span class="separador"></span>
                <span class="nombre">Richard Diego Padrón</span>
            </li>
            <li>
                <span class="fecha">2013 - 2017</span>
                <span class="separador"></span>
                <span class="nombre">Richard Diego Padrón</span>
            </li>
            <li>
                <span class="fecha">2013 - 2017</span>
                <span class="separador"></span>
                <span class="nombre">Richard Diego Padrón</span>
            </li>
            <li>
                <span class="fecha">2013 - 2017</span>
                <span class="separador"></span>
                <span class="nombre">Richard Diego Padrón</span>
            </li>
        </ul>
    </div>
    <div class="actiones_scroll" >
        <ul>
            <li> <span class="up"> </span></li>
            <li> <span class="down"> </span> </li>
        </ul>
    </div>
  </div>

  </q-page>
</template>

<script>
import Menusomos from '../../pages/submenus/Menusomos'

export default {
  name: 'Expresidentes',
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
