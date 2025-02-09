<template>
  <div class="flex h-screen justify-center">
    <!-- Can be replaced with your own max-width here -->
    <div class="hide-scrollbar box-border flex w-full max-w-[768px] flex-col bg-white">
      <RouterProgressBar />
      <router-view />
      <ToastComponent :title="toastTitle" v-model:isShow="show" />
    </div>
  </div>
</template>

<script setup>
import RouterProgressBar from '@/components/RouterProgressBar.vue'
import ToastComponent from '@/components/ToastComponent.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useEventBus } from '@/composables/emitter'

const EventBus = useEventBus()

const toastTitle = ref('')
const show = ref(false)

onMounted(() => {
  EventBus.on('show-toast', showToast)
})

onBeforeUnmount(() => {
  EventBus.off('show-toast', showToast)
})

const showToast = (event) => {
  toastTitle.value = event.title
  show.value = event.showToast
}
</script>

<style scoped>
* {
  user-select: none;
}
</style>
