<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>

import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
const options = {
  confirmButtonColor: '#1f2660',
  cancelButtonColor: '#1f2660',
  showCloseButton: true
}

Vue.use(VueSweetalert2, options)
import 'sweetalert2/dist/sweetalert2.min.css'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-237083350-1'
})

export default {
  name: 'App'
}
</script>
