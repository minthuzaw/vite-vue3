import axios from 'axios'
import JsonParseBigInt from 'json-parse-bigint'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})
api.interceptors.response.use(
  (response) => JsonParseBigInt(response.data),
  (error) => {
    alert(error)
  }
)

export const setAuthToken = (token, lang) => {
  api.interceptors.request.use((config) => {
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
      config.params = { lang }
    }
    config.transformResponse = (data) => data
    return config
  })
}

export default api
