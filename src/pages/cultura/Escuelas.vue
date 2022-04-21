<template>
  <q-page class="flex flex-center view_hijos_socios view_danzas">

    <div class="q-pb-xl all_width gris_home">
        <div class="setenta q-pd-md centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Escuelas</div>
            <div class="back"> <q-btn round color="white" icon="west" />Volver</div>
        </div>
        <div class="q-py-md w_1200 centrar flex_escuelas justify-center">
            <div class="wrp_img_escuelas">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                    <div class="absolute-bottom text-subtitle1 text-center">
                        Caption bottom
                    </div>
                    <div class="absolute-full text-subtitle2 flex flex-center hover">
                        <ul>
                            <li>
                                <h6>Pre-Ballet</h6>
                            </li>
                            <li>
                                <strong>Edad</strong>
                                <span>6 a 24 años</span>
                            </li>
                            <li>
                                <strong>Horas semanales</strong>
                                <span>36 horas</span>
                            </li>
                            <li>
                                <strong>Jornadas</strong>
                                <span>Mañana</span>
                            </li>
                            <li>
                                <q-btn outline class="azul q-my-md centrar bg_white_i" @click="openPopForm()" label="Inscribirme" icon-right="arrow_right_alt"/>
                            </li>
                            <li>
                                <q-btn outline class="azul q-my-md centrar btn_bg_beige text-white" @click="openPopForm()" label="Clase de prueba" icon-right="arrow_right_alt"/>
                            </li>
                        </ul>
                    </div>
                </q-img>
            </div>

            <div class="wrp_img_escuelas">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                    <div class="absolute-full text-subtitle2 flex flex-center">
                        Caption
                    </div>
                </q-img>
            </div>

            <div class="wrp_img_escuelas">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                    <div class="absolute-full text-subtitle2 flex flex-center">
                        Caption
                    </div>
                </q-img>
            </div>

            <div class="wrp_img_escuelas">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                    <div class="absolute-full text-subtitle2 flex flex-center">
                        Caption
                    </div>
                </q-img>
            </div>

            <div class="wrp_img_escuelas">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                    <div class="absolute-full text-subtitle2 flex flex-center">
                        Caption
                    </div>
                </q-img>
            </div>
        </div>
    </div>
    <q-dialog v-model="formulario" >
        <q-card style="width: 700px; max-width: 80vw;" class="pop_mi_c pob_biblioteca bg_beige pop_escuelas">
            <q-card-section class="row items-center q-pb-none relative ">
                <q-btn class="btn_cerrar" icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section class="pop_club bg_white libro_icn">
              <span class="autor bold">Reserva de Servicios</span>
              <span class="autor bold">Nombre del Servicio</span>
            </q-card-section>
            <q-card-section class="pop_descargar bg_white list_biblioteca">
              <q-form
                  @submit="onSubmit"
                  @reset="onReset"
                  class="q-gutter-md form_biblioteca"
                  >

                  <div class="row_2">
                    <q-input
                        outlined
                        v-model="name"
                        label="Nombre *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                    />
                    <q-input
                        outlined
                        v-model="apellido"
                        label="Apellidos *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                    />
                  </div>

                  <div class="fila">
                    <q-input
                        outlined
                        v-model="telefono"
                        label="Número de contacto *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                    />
                  </div>

                  <div class="fila">
                    <q-input
                        outlined
                        v-model="correo"
                        label="Correo electrónico*"
                    />
                  </div>

                  <div class="fila">
                    <q-input
                        outlined
                        v-model="rut"
                        label="Rut"
                    />
                  </div>
                  <div class="fila">
                      <q-btn outline type="submit" class="azul text_white mt_10 bg_white" label="Reservar" icon-right="arrow_right_alt"/>
                  </div>
              </q-form>
            </q-card-section>
        </q-card>
    </q-dialog>
  </q-page>
</template>

<script>

export default {
  name: 'Escuelas',
  data () {
    return {
      urlSite: 'https://pwccdev.mkbk.digital/',
      multimediaHome: [],
      formulario: false
    }
  },
  methods: {
    openPopForm () {
      this.formulario = true
    }
  }
}
</script>
