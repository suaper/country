
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/quienes-somos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/QuienesSomos.vue') }
    ]
  },
  {
    path: '/quienes-somos/historia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/nosotros/Historia.vue') }
    ]
  },
  {
    path: '/quienes-somos/mision',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/nosotros/Mision.vue') }
    ]
  },
  {
    path: '/quienes-somos/directorio',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/nosotros/Directorio.vue') }
    ]
  },
  {
    path: '/quienes-somos/expresidentes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/nosotros/expresidentes.vue') }
    ]
  },
  {
    path: '/mi-club',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MiClub.vue') }
    ]
  },
  {
    path: '/mi-club/etiquetas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/miclub/Etiquetas.vue') }
    ]
  },
  {
    path: '/mi-club/cuotas-reglamento',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/miclub/CuotasReglamento.vue') }
    ]
  },
  {
    path: '/mi-club/beneficios-socios',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/miclub/BeneficiosSocios.vue') }
    ]
  },
  {
    path: '/hazte-socio',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HazteSocio.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
