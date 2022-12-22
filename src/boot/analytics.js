import VueAnalytics from 'vue-analytics'

export default async ({ Vue, router }) => {
  Vue.use(VueAnalytics, {
    id: 'UA-252523098-1',
    router
  })
}
