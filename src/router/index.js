import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import StockAvgCal from '../views/StockAverageCalculator.vue'
import EmiCalculator from '../views/EmiCalculator.vue'
import UpcomingEvents from '../views/UpcomingEvents.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'stock-average-calculator',
      path: '/stock-average-calculator',
      component: StockAvgCal,
    },
    {
      name: 'emi-calculator',
      path: '/emi-calculator',
      component: EmiCalculator,
    },
    {
      name: 'upcoming-events',
      path: '/upcoming-events',
      component: UpcomingEvents,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
