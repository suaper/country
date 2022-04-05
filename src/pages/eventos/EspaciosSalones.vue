<template>
  <q-page class="flex flex-center view_hijos_socios view_fitness">
    <Menueventos/>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
      >
        <q-carousel-slide :name="1" img-src="../../assets/Home/banner-home.png" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Espacios y Salones</div>
        </div>
        <div class="browse_salones centrar w_1000">
            <div class="card_espacios w_30 q-card">
                <div class="q-card__section q-card__section--vert">
                    <div class="card-ul">

                        <ul>
                            <li><img src="../../assets/HazteSocio/socio01.png" /></li>
                            <li><h5>Sala Newton</h5></li>
                            <li>Capacidad: 100 personas</li>
                            <li><q-btn outline class="azul q-my-md centrar sin_borde" label="Ver más" icon-right="arrow_right_alt"/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="card_espacios w_30 q-card">
                <div class="q-card__section q-card__section--vert">
                    <div class="card-ul">

                        <ul>
                            <li><img src="../../assets/HazteSocio/socio01.png" /></li>
                            <li><h5>Sala Newton</h5></li>
                            <li>Capacidad: 100 personas</li>
                            <li><q-btn outline class="azul q-my-md centrar sin_borde" label="Ver más" icon-right="arrow_right_alt"/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="card_espacios w_30 q-card">
                <div class="q-card__section q-card__section--vert">
                    <div class="card-ul">

                        <ul>
                            <li><img src="../../assets/HazteSocio/socio01.png" /></li>
                            <li><h5>Sala Newton</h5></li>
                            <li>Capacidad: 100 personas</li>
                            <li><q-btn outline class="azul q-my-md centrar sin_borde" label="Ver más" icon-right="arrow_right_alt"/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="card_espacios w_30 q-card">
                <div class="q-card__section q-card__section--vert">
                    <div class="card-ul">

                        <ul>
                            <li><img src="../../assets/HazteSocio/socio01.png" /></li>
                            <li><h5>Sala Newton</h5></li>
                            <li>Capacidad: 100 personas</li>
                            <li><q-btn outline class="azul q-my-md centrar sin_borde" label="Ver más" icon-right="arrow_right_alt"/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="card_espacios w_30 q-card">
                <div class="q-card__section q-card__section--vert">
                    <div class="card-ul">

                        <ul>
                            <li><img src="../../assets/HazteSocio/socio01.png" /></li>
                            <li><h5>Sala Newton</h5></li>
                            <li>Capacidad: 100 personas</li>
                            <li><q-btn outline class="azul q-my-md centrar sin_borde" label="Ver más" icon-right="arrow_right_alt"/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="card_espacios w_30 q-card">
                <div class="q-card__section q-card__section--vert">
                    <div class="card-ul">

                        <ul>
                            <li><img src="../../assets/HazteSocio/socio01.png" /></li>
                            <li><h5>Sala Newton</h5></li>
                            <li>Capacidad: 100 personas</li>
                            <li><q-btn outline class="azul q-my-md centrar sin_borde" label="Ver más" icon-right="arrow_right_alt"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menueventos from 'pages/submenus/Menueventos'

export default {
  name: 'Espaciossalones',
  components: {
    Menueventos
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {},
      pop_consultar: false
    }
  }
}
</script>
