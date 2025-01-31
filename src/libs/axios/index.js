import axios from 'axios'
import JsonParseBigInt from 'json-parse-bigint'
import { useEventBus } from '@/composables/emitter'

const EventBus = useEventBus()

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

api.interceptors.request.use((config) => {
  /* Set auth token here */
  config.transformResponse = (data) => data
  return config
})

api.interceptors.response.use(
  (response) => JsonParseBigInt(response.data),
  (error) => {
    showToast(error?.message || 'Something went wrong')
  }
)

const showToast = (error) => {
  EventBus.emit('show-toast', {
    title: error,
    showToast: true
  })
}

export default api
