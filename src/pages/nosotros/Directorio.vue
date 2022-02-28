<template>
  <q-page class="view_directorio gris_home">
    <div class="wrp_submenu">
     <Menusomos />
    </div>
  <h2 class="center title">
      Directorio
  </h2>
  <div class="row_director bg_amarillo">
      <ul>
          <li>
              <div class="wrp_foto">
                <img class="cien" src="../../assets/QuienesSomos/0.png">
              </div>
              <div class="nombre">
                  <span class="name">Carlos Ruiz de Gamboa Riquelme</span>
                  <span class="cargo">Presidente</span>
              </div>
          </li>
      </ul>
  </div>
  <div class="content">
    <div class="list_directivos">
      <ul>
        <li>
            <div class="wrp_foto">
              <img class="cien" src="../../assets/QuienesSomos/1.png">
            </div>
            <div class="nombre">
                <span class="name">Carlos Ruiz de Gamboa Riquelme</span>

            </div>
        </li>

        <li>
            <div class="wrp_foto">
              <img class="cien" src="../../assets/QuienesSomos/2.png">
            </div>
            <div class="nombre">
                <span class="name">Carlos Ruiz de Gamboa Riquelme</span>
            </div>
        </li>

        <li>
            <div class="wrp_foto">
              <img class="cien" src="../../assets/QuienesSomos/3.png">
            </div>
            <div class="nombre">
                <span class="name">Carlos Ruiz de Gamboa Riquelme</span>
            </div>
        </li>

        <li>
            <div class="wrp_foto">
              <img class="cien" src="../../assets/QuienesSomos/4.png">
            </div>
            <div class="nombre">
                <span class="name">Carlos Ruiz de Gamboa Riquelme</span>
            </div>
        </li>

        <li>
            <div class="wrp_foto">
              <img class="cien" src="../../assets/QuienesSomos/5.png">
            </div>
            <div class="nombre">
                <span class="name">Carlos Ruiz de Gamboa Riquelme</span>
            </div>
        </li>

        <li>
            <div class="wrp_foto">
              <img class="cien" src="../../assets/QuienesSomos/6.png">
            </div>
            <div class="nombre">
                <span class="name">Carlos Ruiz de Gamboa Riquelme</span>
            </div>
        </li>

        <li>
            <div class="wrp_foto">
              <img class="cien" src="../../assets/QuienesSomos/7.png">
            </div>
            <div class="nombre">
                <span class="name">Carlos Ruiz de Gamboa Riquelme</span>
                <span class="cargo">Gerente General</span>
            </div>
        </li>
      </ul>
    </div>
  </div>

  </q-page>
</template>

<script>
import Menusomos from '../../pages/submenus/Menusomos'

export default {
  name: 'Directorio',
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
