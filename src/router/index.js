import { createRouter, createWebHistory } from 'vue-router';

import Login from '../views/Login.vue';
import Students from '../views/Students.vue';
import Register from '../views/Register.vue';
 
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/students',
    name: 'Students',
    component: Students
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;