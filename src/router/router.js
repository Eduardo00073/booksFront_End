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
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
import Restricted from '@/components/Restricted.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/Categories',
    name: 'CategoriesIndex',
    component: CategoriesIndex,
    meta: { requiresAuth: true }
  },
  {
    path: '/Categories/create',
    name: 'CategoriesCreate',
    component: CategoriesCreate,
    meta: { requiresAuth: true }
  },
  {
    path: '/Categories/:id/edit',
    name: 'CategoriesUpdate',
    component: CategoriesUpdate,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/Books',
    name: 'BooksIndex',
    component: BooksIndex,
    meta: { requiresAuth: true }
  },
  {
    path: '/Books/create',
    name: 'BooksCreate',
    component: BooksCreate,
    meta: { requiresAuth: true }
  },
  {
    path: '/Books/:id',
    name: 'BooksView',
    component: BooksView,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/Books/:id/edit',
    name: 'BooksUpdate',
    component: BooksUpdate,
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/restricted',
    name: 'Restricted',
    component: Restricted
  },
  {
    path: '/:catchAll(.*)',
    name: 'Error404',
    component: Error404
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Middleware para verificar autenticação
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user');
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/restricted');
  } else {
    next();
  }
});

export default router;
