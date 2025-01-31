<template>
  <ProgressBar widthClass="w-full" borderClass="border-none" />
</template>
<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useEventBus } from '@/composables/emitter'
import ProgressBar from '@/components/ProgressBar.vue'

const EventBus = useEventBus()

onMounted(() => {
  EventBus.on('progress', updateProgress)
})

onBeforeUnmount(() => {
  EventBus.off('progress', updateProgress)
})

const updateProgress = (show) => {
  const progress = document.querySelector('.p-progressbar')
  if (show) {
    progress.style.display = 'block'
  }
  setTimeout(() => {
    progress.style.display = 'none'
  }, 300)
}
</script>
<style scoped>
.p-progressbar {
  height: 3px;
  display: none;
  position: fixed !important;
  z-index: 9999 !important;
  top: 0 !important;
  right: 0 !important;
  left: 0 !important;
}
</style>
