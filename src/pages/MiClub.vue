<template>
  <q-page class="flex flex-center view_quienes_somos">
    <Menumiclub currentItem="/mi-club"/>
    <div class="q-py-none all_width">
      <q-carousel
        animated
        v-model="slide"
        arrows
        class="banner_top"
        navigation
        infinite
        autoplay
      >
        <q-carousel-slide v-for="(banner, key) in info.field_slider_home" :key="key" :name="banner.target_uuid" :img-src="banner.url" />
      </q-carousel>
    </div>
    <div class="q-pb-xl all_width gris_home">
        <div class="cincuenta q-pd-md centrar text-center">
            <div class="center text-center q-my-lg titulos">Mi Club</div>
            <p class="intro text-center" v-html="info.body[0].value"></p>
        </div>
    </div>
  </q-page>
</template>

<script>
import Menumiclub from 'pages/submenus/Menumiclub'
import configServices from '../services/config'

export default {
  name: 'Haztesocio',
  components: {
    Menumiclub
  },
  data () {
    return {
      sliders: true,
      slide: 1,
      urlSite: 'https://www.pwcc.cl',
      info: {
        body: [
          {
            value: '',
            summary: ''
          }
        ],
        field_correo: [
          {
            value: ''
          }
        ],
        field_telefono_1: [
          {
            value: ''
          }
        ],
        field_telefono_2: [
          {
            value: ''
          }
        ]
      },
      pop_form_socio: false,
      shape: 'false',
      options_civil: [
        'Solter@', 'Casad@', 'Viud@', 'Unión libre'
      ],
      civilStatus: null,
      mobile: '',
      date: '',
      country: '',
      phone: '',
      email: '',
      name: '',
      age: '',
      notices: [
        {
          title: '',
          field_imagen_noticia: ''
        },
        {
          title: '',
          field_imagen_noticia: ''
        },
        {
          title: '',
          field_imagen_noticia: ''
        }
      ]
    }
  },
  created () {
    this.$q.loading.show()
    this.getInfo()
    this.getNotices()
  },
  methods: {
    onSubmit () {
      var _this = this
      var data = {
        type: 'sendEmailHazteSocio',
        email: this.email,
        name: this.name,
        phone: this.phone,
        mobile: this.mobile,
        civilStatus: this.civilStatus,
        birthdate: this.date,
        country: this.country,
        category: this.shape
      }
      configServices.consumerStandar(this, 'pwcc-rest/post', data, {
        callBack: (data) => {
          if (data.status) {
            _this.$swal('Hemos registrado su solicitud pronto nos contactaremos')
          } else {
            _this.$swal('Estamos presentando problemas técnicos intente nuevamente más tarde')
          }

          this.email = ''
          this.name = ''
          this.phone = ''
          this.mobile = ''
          this.civilStatus = ''
          this.date = ''
          this.country = ''
          this.shape = ''
          this.pop_form_socio = false
        }
      })
    },
    onReset () {

    },
    getInfo () {
      var _this = this
      configServices.loadData(this, '/node/1068?_format=json', {
        callBack: (data) => {
          _this.info = data
          _this.slide = data.field_slider_home[0].target_uuid
        }
      })
    },
    goNotice (notice) {
      localStorage.setItem('noticeId', notice.nid)
      this.$router.push('/detalle-noticia/' + notice.title.toLowerCase().replaceAll(' ', '-'))
    },
    getNotices () {
      var _this = this
      configServices.loadData(this, '/noticias/hazte-socio/json', {
        callBack: (data) => {
          _this.notices = data
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
