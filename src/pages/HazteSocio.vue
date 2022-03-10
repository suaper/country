<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menuhaztesocio/>
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
        <q-carousel-slide :name="1" img-src="../assets/Home/banner-home.png" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </q-carousel>
    </div>
    <div class="q-pb-md all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Hazte Socio</div>
            <p class="intro text-center">Si estás interesado en ser socio de nuestro Club, contáctanos <br> y conoce las condiciones para postular al PWCC. ¡Te esperamos!</p>
            <hr class="hr_amarillo">
             <h5 class="italic">Para recibir el detalle del proceso de postulación, haz click en el siguiente botón:</h5>
             <q-btn outline @click="pop_form_socio = true" class="azul q-my-md centrar bg_white_i" label="Más información" icon-right="arrow_right_alt"/>
        </div>
    </div>
    <q-dialog v-model="pop_form_socio" >
        <q-card class="flex pop_hazte_socio">
            <div class="wrp_left sesenta">
                <q-card-section class="row items-center q-pb-none">
                    <div class="text-h6 open">1. Datos Principales</div>
                    <q-space />
                </q-card-section>

                <q-card-section class="flex pop_club">
                    <q-form
                        @submit="onSubmit"
                        @reset="onReset"
                        class="q-gutter-md"
                        >
                        <q-input
                            outlined
                            v-model="name"
                            label="Nombre completo *"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input outlined v-model="date" mask="date" :rules="['date']">
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                                <q-date v-model="date">
                                <div class="row items-center justify-end">
                                    <q-btn v-close-popup label="Close" color="primary" flat />
                                </div>
                                </q-date>
                            </q-popup-proxy>
                            </q-icon>
                        </template>
                        </q-input>
                        <q-input
                            outlined
                            v-model="name"
                            label="Nacionalidad *"
                            lazy-rules
                            :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input
                            outlined
                            v-model="age"
                            label="Teléfono *"
                        />

                        <q-input
                            outlined
                            v-model="name"
                            label="Celular *"
                        />

                        <q-input outlined v-model="email" type="Correo electrónico" label="Correo electrónico *" />

                        <q-select outlined v-model="estado_civil" :options="options_civil" label="Estado Civil" />
                    </q-form>
                </q-card-section>
            </div>
            <div class="wrp_left cuarenta bg_amarillo">
                <q-card-section class="row items-center q-pb-none">
                    <div class="text-h6 open">2. Datos Postulación</div>
                    <q-space />
                    <q-btn class="close_top" icon="close" flat round dense v-close-popup />
                </q-card-section>

                <q-card-section class="pop_radio q-px-md">
                    <div class="q-px-md vertical">
                        <div class="label_radio">
                            <p>Selecciona la categoría a la que deseas postularte:</p>
                        </div>
                        <q-radio name="shape" v-model="shape" val="line" label="Line" />
                        <q-radio name="shape" v-model="shape" val="rectangle" label="Rectangle" />
                        <q-radio name="shape" v-model="shape" val="ellipse" label="Ellipse" />
                        <q-radio name="shape" v-model="shape" val="polygon" label="Polygon" />
                        <q-radio name="shape" v-model="shape" val="otro" label="Rectangle" />
                        <q-radio name="shape" v-model="shape" val="otro1" label="Ellipse" />
                        <q-radio name="shape" v-model="shape" val="otro1" label="Polygon" />

                        <div>
                            <q-btn outline @click="pop_form_socio = true" class="text_white mt_10 centrar bg_orange" label="Enviar Formulario" icon-right="arrow_right_alt"/>
                        </div>
                    </div>
                </q-card-section>

            </div>
        </q-card>
    </q-dialog>
    <div class="q-pb-md all_width bg_amarillo wrp_club hazte_socio">
        <div class="centrar w_1200">
            <h4 class="subtitle">Noticias</h4>
            <div class="row flex justify-center  items-start">
                <table class="sesenta">
                    <tr>
                        <td>
                            <img src="../assets/HazteSocio/socio01.png" />
                        </td>
                        <td>
                            <h5 class="titulo_noticias">Título de la principal noticia de esta sección, texto falso.</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum tellus a nibh volutpat ultricies. Sed iaculis, erat a tristique vestibulum, urna ipsum aliquet…</p>
                            <q-btn outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                </table>
                <table class="treintaycinco">
                    <tr>
                        <td>
                            <h5 class="titulo_noticias">Título de noticias secundarias, texto falso.</h5>
                            <p>Sed iaculis, erat a tristique vestibulum, urna ipsum aliquet lorem…</p>
                            <q-btn outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h5 class="titulo_noticias">Título de noticias secundarias, texto falso.</h5>
                            <p>Cras rutrum tellus a nibh volutpat ultricies. Sed iaculis, erat a tristique…</p>
                            <q-btn outline class="azul q-my-md centrar bg_white_i" label="Leer más" icon-right="arrow_right_alt"/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

    <div class="q-py-xl all_width gris_home wrp_club">
        <div class="centrar w_1200 flex justify-between items-center">
            <h4 class="subtitle sin_margen">Contáctanos</h4>
            <ul class="contacto_footer">
                <li class="mail">
                    <img src="../assets/HazteSocio/i-correo.svg" />
                    <span>mvaldivia@pwcc.cl</span>
                </li>
                <li class="tel">
                    <img src="../assets/HazteSocio/i-phone.svg" />
                    <span>+56 9 98215362</span>
                </li>
                <li class="tel">
                    <img src="../assets/HazteSocio/i-phone.svg" />
                    <span>+56 2 2757 5700 </span>
                </li>
            </ul>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menuhaztesocio from 'pages/submenus/Menuhaztesocio'

export default {
  name: 'Haztesocio',
  components: {
    Menuhaztesocio
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {},
      pop_form_socio: false,
      shape: 'false',
      options_civil: [
        'Solter@', 'Casad@', 'Viud@', 'Unión libre'
      ],
      estado_civil: null,
      date: '2019/02/01'
    }
  }
}
</script>
