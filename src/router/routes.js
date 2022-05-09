
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
    path: '/quienes-somos/administracion',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/nosotros/administracion.vue') }
    ]
  },
  {
    path: '/quienes-somos/memoria-anual',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/nosotros/MemoriaAnual.vue') }
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
    path: '/special-days',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SpecialDays.vue') }
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
      { path: '', component: () => import('pages/haztesocio/FamiliaRamaDeportiva.vue') }
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
    path: '/cultura/escuelas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/cultura/Escuelas.vue') }
    ]
  },
  {
    path: '/cultura/compania',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/cultura/Compania.vue') }
    ]
  },
  {
    path: '/cultura/obras',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/cultura/Obras.vue') }
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
  {
    path: '/eventos/espacios-salones',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/eventos/EspaciosSalones.vue') }
    ]
  },
  {
    path: '/eventos/country-experience',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/eventos/CountryExperience.vue') }
    ]
  },
  {
    path: '/eventos/matrimonios',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/eventos/Matrimonios.vue') }
    ]
  },
  {
    path: '/eventos/multimedia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/eventos/Multimedia.vue') }
    ]
  },
  {
    path: '/eventos/contacto',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/eventos/Contacto.vue') }
    ]
  },
  {
    path: '/noticias',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Noticias.vue') }
    ]
  },
  {
    path: '/detalle-noticia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DetalleNoticia.vue') }
    ]
  },
  {
    path: '/detalle-multimedia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DetalleMultimedia.vue') }
    ]
  },
  {
    path: '/calendario',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Calendario.vue') }
    ]
  },
  {
    path: '/calendario/deportes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/calendario/CalendarioDeportes.vue') }
    ]
  },
  {
    path: '/calendario/spa',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/calendario/CalendarioSpa.vue') }
    ]
  },
  {
    path: '/deportes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Deportes.vue') }
    ]
  },
  {
    path: '/deportes/golf',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Golf.vue') }
    ]
  },
  {
    path: '/deportes/hockey',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Hockey.vue') }
    ]
  },
  {
    path: '/deportes/rugby',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Rugby.vue') }
    ]
  },
  {
    path: '/deportes/hockey/nosotros',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Nosotros.vue') }
    ]
  },
  {
    path: '/deportes/hockey/categoria',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Categorias.vue') }
    ]
  },
  {
    path: '/deportes/hockey/calendario',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Calendario.vue') }
    ]
  },
  {
    path: '/deportes/natacion/multimedia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Multimedia.vue') }
    ]
  },
  {
    path: '/deportes/rugby/multimedia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Multimedia.vue') }
    ]
  },
  {
    path: '/deportes/hockey/multimedia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Multimedia.vue') }
    ]
  },
  {
    path: '/deportes/hockey/contacto',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Contacto.vue') }
    ]
  },
  {
    path: '/deportes/natacion/contacto',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Contacto.vue') }
    ]
  },
  {
    path: '/deportes/rugby/contacto',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Contacto.vue') }
    ]
  },
  {
    path: '/deportes/rugby/calendario',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Calendario.vue') }
    ]
  },
  {
    path: '/deportes/rugby/staff',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Staff.vue') }
    ]
  },
  {
    path: '/deportes/rugby/noticias',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Noticias.vue') }
    ]
  },
  {
    path: '/deportes/natacion/noticias',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Noticias.vue') }
    ]
  },
  {
    path: '/deportes/hockey/noticias',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Noticias.vue') }
    ]
  },
  {
    path: '/deportes/natacion',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Natacion.vue') }
    ]
  },
  {
    path: '/deportes/natacion/master',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/NatacionMaster.vue') }
    ]
  },
  {
    path: '/deportes/natacion/triatlon',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Triatlon.vue') }
    ]
  },
  {
    path: '/deportes/natacion/escuela-natacion',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/EscuelaNatacion.vue') }
    ]
  },
  {
    path: '/deportes/natacion/natacion-bebes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/NatacionBebes.vue') }
    ]
  },
  {
    path: '/deportes/natacion/actividades',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Actividades.vue') }
    ]
  },
  {
    path: '/deportes/natacion/noticias',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Noticias.vue') }
    ]
  },
  {
    path: '/deportes/natacion/multimedia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Multimedia.vue') }
    ]
  },
  {
    path: '/deportes/natacion/contacto',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Contacto.vue') }
    ]
  },
  {
    path: '/deportes/squash/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Squash.vue') }
    ]
  },
  {
    path: '/deportes/squash/historia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Historia.vue') }
    ]
  },
  {
    path: '/deportes/squash/historia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Historia.vue') }
    ]
  },
  {
    path: '/deportes/squash/escuela',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Escuela.vue') }
    ]
  },
  {
    path: '/deportes/squash/torneos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Calendario.vue') }
    ]
  },
  {
    path: '/deportes/squash/noticias',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Noticias.vue') }
    ]
  },
  {
    path: '/deportes/squash/multimedia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Multimedia.vue') }
    ]
  },
  {
    path: '/deportes/squash/contacto',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/deportes/Contacto.vue') }
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
