<template>
  <q-page class="flex flex-center view_hijos_socios view_danzas">

    <div class="q-pb-xl all_width gris_home">
        <div class="setenta q-pd-md centrar text-center relative">
            <div class="center text-center q-my-lg titulos">Compañias</div>
            <div class="back"> <q-btn round color="white" onclick="history.back()" icon="west" />Volver</div>
        </div>
        <div class="q-py-md w_1000 centrar flex_companias justify-center">
            <table class="datos_staff_contacto">
                <tr>
                    <td>
                        <img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/staff-play6.png" class="raius"></td>
                    <td>
                        <p><strong>Nombre y Apellido</strong></p>
                        <p><strong> Profesora </strong></p>
                        <p>Edad</p>
                        <q-btn class="q-ml-lg sin_borde" @click="openDetalle()" outline color="indigo-10" icon-right="east" label="Ver más" />
                    </td>
                </tr>
            </table>
            <table class="datos_staff_contacto">
                <tr>
                    <td>
                        <img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/staff-play6.png" class="raius"></td>
                    <td>
                        <p><strong>Nombre y Apellido</strong></p>
                        <p><strong> Profesora </strong></p>
                        <p>Edad</p>
                        <q-btn class="q-ml-lg sin_borde" outline color="indigo-10" icon-right="east" label="Ver más" />
                    </td>
                </tr>
            </table>
            <table class="datos_staff_contacto">
                <tr>
                    <td>
                        <img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/staff-play6.png" class="raius"></td>
                    <td>
                        <p><strong>Nombre y Apellido</strong></p>
                        <p><strong> Profesora </strong></p>
                        <p>Edad</p>
                        <q-btn class="q-ml-lg sin_borde" outline color="indigo-10" icon-right="east" label="Ver más" />
                    </td>
                </tr>
            </table>
            <table class="datos_staff_contacto">
                <tr>
                    <td>
                        <img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/staff-play6.png" class="raius"></td>
                    <td>
                        <p><strong>Nombre y Apellido</strong></p>
                        <p><strong> Profesora </strong></p>
                        <p>Edad</p>
                        <q-btn class="q-ml-lg sin_borde" outline color="indigo-10" icon-right="east" label="Ver más" />
                    </td>
                </tr>
            </table>
            <table class="datos_staff_contacto">
                <tr>
                    <td>
                        <img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/staff-play6.png" class="raius"></td>
                    <td>
                        <p><strong>Nombre y Apellido</strong></p>
                        <p><strong> Profesora </strong></p>
                        <p>Edad</p>
                        <q-btn class="q-ml-lg sin_borde" outline color="indigo-10" icon-right="east" label="Ver más" />
                    </td>
                </tr>
            </table>
            <table class="datos_staff_contacto">
                <tr>
                    <td>
                        <img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/staff-play6.png" class="raius"></td>
                    <td>
                        <p><strong>Nombre y Apellido</strong></p>
                        <p><strong> Profesora </strong></p>
                        <p>Edad</p>
                        <q-btn class="q-ml-lg sin_borde" outline color="indigo-10" icon-right="east" label="Ver más" />
                    </td>
                </tr>
            </table>
            <table class="datos_staff_contacto">
                <tr>
                    <td>
                        <img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/staff-play6.png" class="raius"></td>
                    <td>
                        <p><strong>Nombre y Apellido</strong></p>
                        <p><strong> Profesora </strong></p>
                        <p>Edad</p>
                        <q-btn class="q-ml-lg sin_borde" outline color="indigo-10" icon-right="east" label="Ver más" />
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <q-dialog v-model="card">
      <q-card class="my-card pop_compania">
        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
        <q-card-section class="q-pt-none desc_pop">
          <strong> Nombres y Apellidos completos Categoría Edad</strong>
          <strong>Categoría</strong>
          <span>Edad</span>
          <div class="text-caption text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus suscipit lorem ac pharetra. Cras tempor nisi libero, nec pharetra nunc vehicula at. Morbi eu leo eros. In hac habitasse platea dictumst. Etiam volutpat arcu tortor, nec mollis lectus pretium vel. Integer vitae ornare est, eget iaculis arcu. Nunc eu ex felis. Sed lacinia quis mauris nec gravida.
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat class="text-blue" label="Cerrar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>

export default {
  name: 'Compania',
  data () {
    return {
      urlSite: 'https://pwccdev.mkbk.digital/',
      multimediaHome: [],
      card: false
    }
  },
  methods: {
    openDetalle () {
      this.card = true
    }
  }
}
</script>
