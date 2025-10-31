import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/tvet',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/TvetPage.vue') }],
  },
  {
    path: '/projects/proposals/cuab',
    component: () => import('pages/CuabProposalPage.vue'),
  },
  {
    path: '/investment-forum/v1',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/InvestmentForumPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
