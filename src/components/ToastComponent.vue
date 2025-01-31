<template>
  <div class="flex items-center justify-center">
    <div class="fixed bottom-3 w-full max-w-[430px] px-3" v-if="isShow">
      <div class="flex items-center gap-3 rounded-md bg-[#656565] px-5 py-3">
        <span class="flex h-[20px] w-[20px] items-center justify-center rounded-full border-2 border-white text-center leading-[15px] text-white">!</span>
        <span class="text-sm text-white">{{ title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue'

const props = defineProps(['title', 'status', 'isShow'])

const emit = defineEmits(['update:isShow'])

watch(
  () => props.isShow,
  (newVal) => {
    if (newVal) {
      setTimeout(() => {
        emit('update:isShow', false)
      }, 3000)
    }
  }
)
</script>

<style scoped>
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.5s ease;
}
</style>
