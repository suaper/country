<template>
  <q-page class="flex flex-center view_quienes_somos view_cotizar">
    <div class="q-pb-md all_width gris_home view_danzas q-mt-xl q-mb-none">
        <div class="setenta  centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Cotizar</div>
            <div class="back"> <q-btn to="/eventos/tipo-eventos" round color="white" icon="west" />Volver</div>
        </div>
    </div>
    <div class="q-py-md w_1100 centrar justify-center">
        <ul class="pasos">
            <li class="active">
                <div class="sub_caja">
                    <span class="caja">01</span>
                </div>
                <div class="sub_wrap">
                    <span class="paso">PASO 1</span>
                    <p class="azul">Información de la Reserva</p>
                </div>

            </li>
            <li class="normal">
                <div class="sub_caja">
                    <span class="caja">02</span>
                </div>
                <div class="sub_wrap">
                    <span class="paso">PASO 2 </span>
                    <p class="azul">Fecha y hora</p>
                </div>
            </li>
            <li class="active">
            <div class="sub_caja">
                <span class="caja">03</span>
            </div>
            <div class="sub_wrap">
                <span class="paso">PASO 3 </span>
                <p class="azul">Datos personales</p>
            </div>
            </li>
            <li class="normal">
                <div class="sub_caja">
                    <span class="caja">04</span>
                 </div>
                <div class="sub_wrap">
                    <span class="paso">PASO 4</span>
                    <p class="azul">Confirmación</p>
                </div>
            </li>
        </ul>
    </div>

    <div class="row jusify-beetwen text_adicional w_1000 centrar q-py-xl">
        <q-form>
            <div class="form_cotizar w_1000 row_2 paso1">
                <div class="w_47">
                    <q-select outlined label="Seleccione el Servicio a Cotizar" v-model="month" />
                    <q-input
                        outlined
                        label="Cantidad de Personas *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                    />
                </div>
                <div class="w_47">
                    <q-select outlined label="Seleccione el Salón" v-model="as" />
                </div>
                <div class="w_100 text_left">
                    <q-btn outline class="azul q-my-md centrar bg_white_i" label="Cotiza tu evento" icon-right="arrow_right_alt"/>
                </div>
            </div>
            <div class="form_cotizar w_1000 row_2 paso1 paso2">
                <div class="w_47">
                <q-date
                    v-model="date"
                    minimal
                />
                </div>
                <div class="w_47">
                    <p><q-icon name="info"></q-icon>La disponibilidad de horas se mostrará al elegir el día del evento.</p>
                    <div class="wrp_busca_mes w_500 centrar">
                        <q-select outlined label="Seleccione la hora" v-model="hora" />
                    </div>
                </div>
                <div class="w_100 text_center centrar_botones">
                    <q-btn outline class="azul q-my-md centrar btn_bg_beige" label="volver" icon="arrow_right_alt"/>
                    <q-btn outline class="azul q-my-md centrar bg_white_i" label="Continuar" icon-right="arrow_right_alt"/>
                </div>
            </div>

            <div class="form_cotizar w_1000 row_2 paso1 paso3">
                <strong class="w_100">Datos personales</strong>
                <div class="w_47">
                    <div class="fila_2 flex">
                        <q-input
                            outlined
                            label="Nombres"
                        />
                        <q-input
                            outlined
                            label="Apellidos"
                        />
                    </div>
                    <q-input
                        outlined
                        label="RUT"
                    />
                    <q-input
                        outlined
                        label="Empresa ( no obligatorio)"
                    />
                </div>
                <div class="w_47">
                    <q-input
                        outlined
                        label="Correo Electrónico"
                    />
                    <q-input
                        outlined
                        label="(+56 9) Teléfono"
                    />
                </div>
                <div class="w_100 text_center centrar_botones">
                    <q-btn outline class="azul q-my-md centrar btn_bg_beige" label="volver" icon="arrow_right_alt"/>
                    <q-btn outline class="azul q-my-md centrar bg_white_i" label="Continuar" icon-right="arrow_right_alt"/>
                </div>
            </div>
            <div class="form_cotizar w_1000 row_2 paso1 paso4 confirmacion">
                <div class="wrap w_80 centrar">
                    <div class="w_30 separador">
                        <h6>Matrimonio Salón Terraza </h6>
                        <strong>A.M. | 1 Abr/2021 60 personas</strong>
                    </div>
                    <div class="w_58">
                        <table class="table_confirmacion">
                            <tr>
                                <td>Nombres</td>
                                <td>Nombre Nombre Apellido Apellido </td>
                            </tr>
                            <tr>
                                <td>RUT</td>
                                <td>1122334455667</td>
                            </tr>
                            <tr>
                                <td>Empresa</td>
                                <td>Nombre de la empresa</td>
                            </tr>
                            <tr>
                                <td>Mail</td>
                                <td>Correo.ejemplo@gmail.com </td>
                            </tr>
                            <tr>
                                <td>Teléfono</td>
                                <td>+56 9 444444444</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="w_100 text_center centrar_botones">
                    <q-btn outline class="azul q-my-md centrar btn_bg_beige" label="volver" icon="arrow_right_alt"/>
                    <q-btn  @click="finaliza = true" outline class="azul q-my-md centrar bg_white_i" label="Enviar" icon-right="arrow_right_alt"/>
                </div>
            </div>
        </q-form>
        <q-dialog
            v-model="finaliza"
            class="pop_finaliza"
            >
            <q-card style="width: 300px">
                <q-card-section>
                    <div class="text-center">¡Tu solicitud de reserva se ha enviado con éxito!</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                 <p>Nos contactaremos muy pronto para terminar con el proceso de reserva.</p>
                </q-card-section>

                <q-card-actions align="center" class="bg-white text-teal">
                    <q-btn outline class="azul q-my-md centrar btn_bg_beige" label="Aceptar" icon-right="arrow_right_alt"/>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'cotizador',
  setup () {
    return {
      date: '2019/02/01',
      hora: '',
      finaliza: false
    }
  }
}
</script>
