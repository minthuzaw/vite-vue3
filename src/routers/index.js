import { createRouter, createWebHistory } from 'vue-router'
import Tr from '@/libs/i18n/translation'
import { useLocaleStore } from '@/store/localeStore'
import Index from '@/modules/pages/IndexPage.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, left: 0 }
    }
  }
})
router.beforeEach(async (to, from, next) => {
  const localStore = useLocaleStore()
  if (to.query.lang) {
    await Tr.switchLanguage(to.query.lang)
    localStore.setLocale(to.query.lang)
  }
  window.scrollTo(0, 0)

  return next()
})

export default router
