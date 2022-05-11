 <template>
<div class="centrar q-pb-xl  w_1200">
  <div class="cincuenta q-pd-md centrar text-center">
    <div class="center text-center titulos">Fotos</div>
  </div>
  <div class="wrp_gallery_multimedia">
    <q-carousel v-model="slidecontent" transition-prev="slide-right" transition-next="slide-left" swipeable animated
      control-color="primary" padding arrows height="250px" class="galeria_multimedia">
      <q-carousel-slide class="column no-wrap" name="0">
        <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
          <div class="multimedia_slider">
            <div class="item_galeria">
              <img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/cultura05.png" />
              <div class="flex justify-start mini">
                <img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/minimedalla.png" /><p class="Posicion">1</p>
              </div>
            </div>
          </div>

          <div class="multimedia_slider">
            <div class="item_galeria">
              <img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/cultura05.png" />
              <div class="flex justify-start">
                <q-icon name="battery_4_bar" /> <p class="Posicion">1</p>
              </div>
            </div>
          </div>

          <div class="multimedia_slider">
            <div class="item_galeria">
              <img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/cultura05.png" />
              <div class="flex justify-start">
                <q-icon name="workspace_premium" /> <p class="Posicion">1</p>
              </div>
            </div>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide class="column no-wrap" name="1">
        <div class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap">
          <div class="multimedia_slider">
            <div class="item_galeria">
              <img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/cultura05.png" />
              <div class="flex justify-start">
                <q-icon name="workspace_premium" /> <p class="Posicion">1</p>
              </div>
            </div>
          </div>
          <div class="multimedia_slider">
            <div class="item_galeria">
              <img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/cultura05.png" />
              <div class="flex justify-start">
                <q-icon name="workspace_premium" /> <p class="Posicion">1</p>
              </div>
            </div>
          </div>
          <div class="multimedia_slider">
            <div class="item_galeria">
              <img src="https://pwccdev.mkbk.digital//administrador/sites/default/files/2022-04/cultura05.png" />
              <div class="flex justify-start">
                <q-icon name="workspace_premium" /> <p class="Posicion">1</p>
              </div>
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="row justify-center botones">
      <q-btn-toggle glossy v-model="slidecontent" :options="options" />
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Goleadores',
  data () {
    return {
      sliders: true,
      slide: 1,
      slidecontent: 0
    }
  }
}
</script>
