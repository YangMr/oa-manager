import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../views/login';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue'),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
