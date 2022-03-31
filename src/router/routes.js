
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
    path: '/hazte-socio/hijos-socios',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/haztesocio/HijosSocios.vue') }
    ]
  },
  {
    path: '/hazte-socio/hijos-ex-socios',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/haztesocio/HijosExSocios.vue') }
    ]
  },
  {
    path: '/hazte-socio/nuevos-socios',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/haztesocio/NuevosSocios.vue') }
    ]
  },
  {
    path: '/hazte-socio/extranjeros-de-paso',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/haztesocio/ExtranjerosDePaso.vue') }
    ]
  },
  {
    path: '/hazte-socio/senior',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/haztesocio/Senior.vue') }
    ]
  },
  {
    path: '/hazte-socio/familia-de-socios',
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
    path: '/spa/fitness',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/spa/Fitness.vue') }
    ]
  },
  {
    path: '/spa/peluqueria',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/spa/Peluqueria.vue') }
    ]
  },
  {
    path: '/spa/estetica',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/spa/Estetica.vue') }
    ]
  },
  {
    path: '/spa/kinesiologia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/spa/Kinesiologia.vue') }
    ]
  },
  {
    path: '/spa/multimedia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/spa/MultimediaSpa.vue') }
    ]
  },
  {
    path: '/spa/contacto',
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
    path: '/gastronomia/staff',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/gastronomia/Staff.vue') }
    ]
  },
  {
    path: '/gastronomia/restaurantes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/gastronomia/Restaurantes.vue') }
    ]
  },
  {
    path: '/gastronomia/special-day',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/gastronomia/SpecialDay.vue') }
    ]
  },
  {
    path: '/gastronomia/country',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/gastronomia/Country.vue') }
    ]
  },
  {
    path: '/gastronomia/multimedia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/gastronomia/MultimediaGastronomia.vue') }
    ]
  },
  {
    path: '/gastronomia/contacto',
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
    path: '/hazte-socio/familia-rama-deportiva',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/kids/SummerActivities.vue') }
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
    path: '/hazte-socio/familia-rama-deportiva',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/kids/WinterActivities.vue') }
    ]
  },
  {
    path: '/kids/winter-activities',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/kids/WinterActivities.vue') }
    ]
  },
  {
    path: '/kids/play-room',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/kids/PlayRoom.vue') }
    ]
  },
  {
    path: '/kids/motor-skills',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/kids/MotorSkills.vue') }
    ]
  },
  {
    path: '/kids/sport-kids',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/kids/SportKids.vue') }
    ]
  },
  {
    path: '/cultura',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Cultura.vue') }
    ]
  },
  {
    path: '/cultura/charlas-culturales',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/cultura/CharlasCulturales.vue') }
    ]
  },
  {
    path: '/cultura/danza',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/cultura/Danza.vue') }
    ]
  },
  {
    path: '/cultura/biblioteca',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/cultura/Biblioteca.vue') }
    ]
  },
  {
    path: '/cultura/noticias',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/cultura/Noticias.vue') }
    ]
  },
  {
    path: '/cultura/multimedia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/cultura/Multimedia.vue') }
    ]
  },
  {
    path: '/eventos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Eventos.vue') }
    ]
  },
  {
    path: '/eventos/staff',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/eventos/Staff.vue') }
    ]
  },
  {
    path: '/eventos/tipo-eventos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/eventos/TipoEventos.vue') }
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
