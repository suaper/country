  <template>
  <q-page class="flex flex-center view_hijos_socios view_kids">
    <Menusomos currentItem="/quienes-somos/administracion" />
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
      >
        <q-carousel-slide v-for="(banner, key) in info.field_slider_home" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
    <div class="q-pb-xl all_width gris_home">
        <div class="setenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Administración</div>
        </div>
        <div :class="(key % 2 === 0) ? 'row_wrap no-wrap' : 'q-py-md row_wrap no-wrap'" v-for="(item, key) in personal" :key="key">
            <div class="staff_general">
                 <div class="flex" style="justify-content: space-between;">
                    <table class="datos_staff_contacto" v-for="(subItem, subKey) in item" :key="subKey">
                        <tr>
                            <td><img :src="urlSite + subItem.field_imagen_persona" class="raius"></td>
                            <td>
                                <p><strong>{{ subItem.title }}</strong></p>
                                <p style="font-size: 13px;"><strong>{{ subItem.field_cargo }}</strong></p>
                                <p>{{ subItem.field_email }}</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menusomos from 'pages/submenus/Menusomos'
import configServices from '../../services/config'

export default {
  name: 'Administracion',
  components: {
    Menusomos
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      info: {
        body: [
          { value: '' }
        ]
      },
      personal: [],
      secondPersonal: [],
      urlSite: 'https://obt3.cl',
      multimediaHome: []
    }
  },

  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/400?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
        }
      })

      configServices.loadData(this, 'personal-administracion/json', {
        callBack: (data) => {
          const n = 5

          _this.personal = new Array(Math.ceil(data.length / n))
            .fill()
            .map(_ => data.splice(0, n))
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
