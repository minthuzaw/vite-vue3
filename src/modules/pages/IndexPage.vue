<template>
  <div class="min-w-screen flex min-h-screen items-center justify-center overflow-hidden">
    <div class="grid w-4/5 justify-center p-2 lg:p-0">
      <div class="col-span-12 rounded-[56px] bg-gradient-to-b from-gray-500/40 to-blue-500/5 p-1 xl:col-span-6">
        <div class="m-0 h-full w-full rounded-[53px] bg-gradient-to-b from-gray-100 to-white px-4 py-7">
          <div class="flex flex-col items-center gap-3">
            <div class="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-primary">
              <img loading="lazy" class="h-full w-full" src="@/assets/images/profile.png" alt="min thu zaw" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Vite + Vue 3 + Tailwind CSS</h3>
          </div>
        </div>
      </div>

      <div class="col-span-12 mt-4 flex justify-center">
        <button @click="$router.push('/components')" class="flex items-center text-sm font-medium text-[#FFA726] transition-colors hover:text-[#FF9800]">
          Components
          <span class="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
    <BaseLoading v-if="isLoading" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useIndexStore } from '@/modules/pages/indexStore'
import BaseLoading from '@/components/BaseLoading.vue'

const indexStore = useIndexStore()
const isLoading = ref(false)

onMounted(async () => {
  await fetchPhoto()
})

const fetchPhoto = async () => {
  isLoading.value = true
  try {
    await indexStore.fetchPhoto()
    const response = indexStore.photo
    console.log(response)
    isLoading.value = false
  } catch (error) {
    console.error(error)
    isLoading.value = false
  }
}
</script>
