 <template>
<div class="centrar q-pb-xl  w_1200">
  <div class="cincuenta q-pd-md centrar text-center">
    <div class="center text-center titulos">Fotos</div>
  </div>
  <div class="wrp_gallery_multimedia goleadores">
    <q-carousel v-model="slidecontent" transition-prev="slide-right" transition-next="slide-left" swipeable animated
      control-color="primary" padding arrows height="290px" class="galeria_multimedia">
      <q-carousel-slide class="column no-wrap" :name="key" v-for="(item, key) in sliderItems" :key="key">
        <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
          <div class="multimedia_slider" v-for="(subItem, subKey) in item" :key="subKey">
            <div class="item_galeria">
              <div class="wrp_hover">
                <img :src="urlSite + subItem.field_imagen_goleador" />
                <div class="mostra_hover">
                  <ul>
                    <li class="name">
                      <p class="text-center text-white strong">{{ subItem.field_nombre_y_apellidos }}</p>
                    </li>
                    <li class="name">
                      <p class="text-center text-white">{{ subItem.field_equipo }}</p>
                    </li>
                    <li class="goles">
                      <p class="text-center text-white">{{ subItem.field_goles }} Goles</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex justify-start mini">
                <p class="Posicion text-center">{{ subItem.field_posicion }}</p>
              </div>
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="row justify-center botones">
      <q-btn-toggle glossy v-model="slidecontent" :options="[]" />
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Goleadores',
  props: {
    items: Array
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      slidecontent: 0,
      sliderItems: this.items,
      urlSite: 'https://www.pwcc.cl'
    }
  }
}
</script>
