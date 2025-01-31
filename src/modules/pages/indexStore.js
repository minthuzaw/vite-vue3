import { defineStore } from 'pinia'
import { indexService } from './indexService'

export const useIndexStore = defineStore({
  id: 'useIndexStore',
  state: () => ({
    photo: null
  }),

  getters: {},

  actions: {
    async fetchPhoto() {
      this.photo = await indexService.getPhoto()
    }
  }
})
