<template>
  <div v-show="open" class="absolute left-1/2 top-1/2 flex w-[300px] -translate-x-1/2 -translate-y-1/2 items-center justify-center p-4 text-center">
    <div class="smy-8 transition-al w-full rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl">
      <div class="text-center text-lg font-semibold leading-6 text-gray-900">
        {{ title }}
      </div>
      <p class="mt-5 text-balance text-center text-sm text-gray-500">
        {{ description }}
      </p>
      <button
        type="button"
        class="mt-5 inline-flex w-full justify-center rounded-full bg-yellow-400 px-3 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:scale-105 hover:text-white hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        @click="open = false"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const open = ref(true)
defineProps({
  title: {
    type: String,
    default: 'Popup Title'
  },
  description: {
    type: String,
    default: 'Popup Description'
  },
  buttonText: {
    type: String,
    default: 'Okay'
  }
})
</script>
