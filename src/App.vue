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

export default {
  name: 'App'
}
</script>
