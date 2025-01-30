<template>
  <div v-show="open" class="absolute flex min-h-full items-center justify-center p-4 text-center">
    <div class="w-[350px] rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
      <div class="text-center">
        <div class="text-lg font-semibold leading-6 text-gray-900">
          {{ title }}
        </div>
        <div class="mt-2">
          <p class="text-sm text-gray-500">
            {{ description }}
          </p>
        </div>
        <div class="mt-5">
          <button
            type="button"
            class="inline-flex w-full justify-center rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click="open = false"
          >
            {{ buttonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const open = ref(true)
defineProps(['title', 'description', 'buttonText'])
</script>
