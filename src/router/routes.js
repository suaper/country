
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
  {
    path: '/hijos_socios',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/haztesocio/HijosSocios.vue') }
    ]
  },
  {
    path: '/hijos_ex_socios',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/haztesocio/HijosExSocios.vue') }
    ]
  },
  {
    path: '/nuevos_socios',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/haztesocio/NuevosSocios.vue') }
    ]
  },
  {
    path: '/extranjeros_de_paso',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/haztesocio/ExtranjerosDePaso.vue') }
    ]
  },
  {
    path: '/senior',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/haztesocio/Senior.vue') }
    ]
  },
  {
    path: '/familia_de_socios',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/haztesocio/FamiliaDeSocios.vue') }
    ]
  },
  {
    path: '/spa',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Spa.vue') }
    ]
  },
  {
    path: '/fitness',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/spa/Fitness.vue') }
    ]
  },
  {
    path: '/peluqueria',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/spa/Peluqueria.vue') }
    ]
  },
  {
    path: '/estetica',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/spa/Estetica.vue') }
    ]
  },
  {
    path: '/kinesiologia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/spa/Kinesiologia.vue') }
    ]
  },
  {
    path: '/contacto_spa',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/spa/ContactoSpa.vue') }
    ]
  },
  {
    path: '/gastronomia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Gastronomia.vue') }
    ]
  },
  {
    path: '/staff',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/gastronomia/Staff.vue') }
    ]
  },
  {
    path: '/restaurantes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/gastronomia/Restaurantes.vue') }
    ]
  },
  {
    path: '/special_day',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/gastronomia/SpecialDay.vue') }
    ]
  },
  {
    path: '/country',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/gastronomia/Country.vue') }
    ]
  },
  {
    path: '/multimedia_gastronomia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/gastronomia/MultimediaGastronomia.vue') }
    ]
  },
  {
    path: '/contacto_gastronomia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/gastronomia/ContactoGastronomia.vue') }
    ]
  },
  {
    path: '/kids',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Kids.vue') }
    ]
  },
  {
    path: '/kids/summer-activities',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/kids/SummerActivities.vue') }
    ]
  },
  {
    path: '/kids/winter-activities',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/kids/WinterActivities.vue') }
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
