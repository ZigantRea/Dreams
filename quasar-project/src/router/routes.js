const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'nesto', component: () => import('pages/Error404.vue'), },
      { path: 'omeni', component: () => import('src/pages/Omeni.vue') },
      { path: 'galeria', component: () => import('pages/Galeria.vue') },
      { path: 'kontakt', component: () => import('pages/Kontakt.vue') },
      { path: 'log', component: () => import('pages/novo.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
