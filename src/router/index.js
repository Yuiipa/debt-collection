import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
const router = createRouter({
  history: createWebHistory(''),
  routes,
})

router.beforeEach((to, _from, next) => {
  next()
})

export default router
