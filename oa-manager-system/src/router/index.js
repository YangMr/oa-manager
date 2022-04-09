import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../views/login';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta : {
      title : "登录"
    }
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../components/Layout'),
    meta : {
      title : "首页"
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
