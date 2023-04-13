import VueGtag from 'vue-gtag'

export default async ({ Vue, router }) => {
  Vue.use(VueGtag, {
    config: { id: 'G-1HELNVSMB0' }
  })
}
