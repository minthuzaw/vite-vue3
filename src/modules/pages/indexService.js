import api from '@/libs/axios'

const endpoints = {
  photo: 'photos'
}

const indexService = {
  getPhoto: async () => {
    try {
      return await api.get(endpoints.photo)
    } catch {
      return null
    }
  }
}

export { indexService }
