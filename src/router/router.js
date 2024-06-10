import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/view/Home.vue';
import Error404 from '@/view/Error404.vue';
import CategoriesIndex from '@/view/Categories/CategoriesIndex.vue';
import CategoriesCreate from '@/view/Categories/CategoriesCreate.vue';
import CategoriesUpdate from '@/view/Categories/CategoriesUpdate.vue';
import BooksIndex from '@/view/Books/BooksIndex.vue';
import BooksView from '@/view/Books/BooksView.vue';
import BooksCreate from '@/view/Books/BooksCreate.vue';
import BooksUpdate from '@/view/Books/BooksUpdate.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Categories',
    name: 'CategoriesIndex',
    component: CategoriesIndex,
  },
  {
    path: '/Categories/create',
    name: 'CategoriesCreate',
    component: CategoriesCreate,
  },
  {
    path: '/Categories/:id/edit',
    name: 'CategoriesUpdate',
    component: CategoriesUpdate,
    props: true,
  },
  {
    path: '/Books',
    name: 'BooksIndex',
    component: BooksIndex,
  },
  {
    path: '/Books/create',
    name: 'BooksCreate',
    component: BooksCreate,
  },
  {
    path: '/Books/:id',
    name: 'BooksView',
    component: BooksView,
    props: true,
  },
  {
    path: '/Books/:id/edit',
    name: 'BooksUpdate',
    component: BooksUpdate,
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    name: 'Error404',
    component: Error404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
