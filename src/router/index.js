import CheckPage from '@/pages/CheckPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useStatus } from '@/composables/useAuth'
const { isLogin } = useStatus()
const routes = [
  { path: '/', name: 'login', component: LoginPage },
  { path: '/check', name: 'checkPage', component: CheckPage, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !isLogin.value) {
    return {
      path: '/',
    }
  }
})

export default router
