import { createRouter, createWebHistory } from 'vue-router'
import Tr from '@/libs/i18n/translation'
import { useLocaleStore } from '@/store/localeStore'
import Index from '@/modules/pages/IndexPage.vue'
import NotFound from '@/modules/pages/NotFound.vue'
import { useEventBus } from '@/composables/emitter'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: NotFound
  },
  {
    path: '/:catchAll(.*)*',
    redirect: 'not-found'
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
  const EventBus = useEventBus()
  EventBus.emit('progress', true)

  const localStore = useLocaleStore()
  if (to.query.lang) {
    await Tr.switchLanguage(to.query.lang)
    localStore.setLocale(to.query.lang)
  }
  window.scrollTo(0, 0)

  return next()
})

export default router
