import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import '@/assets/styles/_icon.scss'
import i18n from '@/libs/i18n'
import router from '@/routers'

const pinia = createPinia()
const app = createApp(App)
app.use(i18n)
app.use(router)
app.use(pinia)
app.mount('#app')
