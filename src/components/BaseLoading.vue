<template>
  <div v-if="circle" class="fixed inset-0 z-[999999] flex h-screen w-screen items-center justify-center bg-[rgba(237,241,245,0.6)] transition-opacity">
    <div class="loader absolute h-[60px] w-[60px] rounded-full border-[5px] border-transparent border-t-primary"></div>
  </div>

  <div v-else class="fixed inset-0 z-[999999] flex h-screen w-screen items-center justify-center bg-[rgba(237,241,245,0.6)] transition-opacity">
    <div class="flex space-x-2">
      <div v-for="n in 5" :key="n" class="h-4 w-4 animate-bounce rounded-full bg-primary" :style="`animation-delay: ${n * 0.2}s`"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  circle: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="scss" scoped>
.loader {
  animation: spin 2s linear infinite;
  top: calc(50vh - 50px);
  left: calc(50vw - 40px);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
}

.animate-bounce {
  animation: bounce 1.5s infinite ease-in-out;
}
</style>
