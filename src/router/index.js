import { createRouter, createWebHistory } from 'vue-router'
import Form from '../views/Form.vue'
import Home from '../views/Home.vue'
import Receive from '../views/Receive.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/form',
      name: 'form',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:Form,
    },
    {
      path: '/receive',
      name: 'receive',
      component: Receive,
    },
  ],
})

export default router
