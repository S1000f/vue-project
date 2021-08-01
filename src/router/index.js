import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding.vue'
import Rendering from '../views/Rendering.vue'
import Event from '@/views/Event'
import ComputedAndWatch from '@/views/ComputedAndWatch'
import ApiDataBinding from '@/views/ApiDataBinding'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackPrefetch: true */ '../views/About.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/rendering',
    name: 'Rendering',
    component: Rendering
  },
  {
    path: '/event',
    name: 'Event',
    component: Event
  },
  {
    path: '/computed',
    name: 'ComputedAndWatch',
    component: ComputedAndWatch
  },
  {
    path: '/apidatabinding',
    name: 'ApiDataBinding',
    component: ApiDataBinding
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
