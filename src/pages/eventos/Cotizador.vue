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
            <li class="normal">
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
        </q-form>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'cotizador'
}
</script>
