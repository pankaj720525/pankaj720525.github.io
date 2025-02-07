import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import StockAvgCal from '../views/StockAverageCalculator.vue'
import EmiCalculator from '../views/EmiCalculator.vue'
import UpcomingEvents from '../views/UpcomingEvents.vue'
import AboutUs from '../views/AboutUs.vue'
import Feedback from '../views/Feedback.vue'

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
    {
      path: '/about-us',
      name: 'about_us',
      component: AboutUs,
    },
    {
      path: '/feedback',
      name: 'feedback_page',
      component: Feedback,
    },
  ],
})

export default router
