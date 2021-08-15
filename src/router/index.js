import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding.vue'
import Rendering from '../views/Rendering.vue'
import Event from '@/views/Event'
import ComputedAndWatch from '@/views/ComputedAndWatch'
import ApiDataBinding from '@/views/ApiDataBinding'
import NestedComponent from '@/views/NestedComponent'
import SlotModalUse from '@/views/SlotModalUse'
import Provider from '@/views/Provider'
import Calculator from '@/views/Calculator'
import CompositionCalc from '@/views/CompositionCalc'
import StoreAccess from '@/views/StoreAccess'
import Login from '@/views/Login'
import TemplateDirective from '@/views/TemplateDirective'
import Transition from '@/views/Transition'

const routes = [
  {
    path: '/transition',
    name: 'Transition',
    component: Transition
  },
  {
    path: '/template-directive',
    name: 'TemplateDirective',
    component: TemplateDirective
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/store',
    name: 'StoreAccess',
    component: StoreAccess
  },
  {
    path: '/provider',
    name: 'Provider',
    component: Provider
  },
  {
    path: '/',
    name: 'Home',
    component: Home
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
  },
  {
    path: '/nestedcomponent',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/slot',
    name: 'SlotModalUse',
    component: SlotModalUse
  },
  {
    path: '/calc',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/compoCalc',
    name: 'CompositionCalc',
    component: CompositionCalc
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
