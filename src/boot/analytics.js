import VueAnalytics from 'vue-analytics'

export default async ({ Vue, router }) => {
  Vue.use(VueAnalytics, {
    id: 'UA-237083350-1',
    router
  })
}
