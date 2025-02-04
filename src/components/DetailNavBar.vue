<template>
  <div class="overflow-hidden bg-white" :class="sizeClass">
    <div class="flex items-center justify-between px-4 py-3 text-lg text-black/90">
      <div class="flex items-center">
        <span @click="toBack" class="material-symbols-outlined mr-3 cursor-pointer align-middle">arrow_back</span>
        {{ title }}
      </div>
      <div class="cursor-pointer">
        <span @click="searchFunction" class="material-symbols-outlined">search</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  sizeClass: {
    type: String,
    default: 'max-w-[768px]'
  },
  title: {
    type: String,
    default: 'Detail'
  },
  toBack: {
    type: Function,
    default: () => {
      alert('back function')
    }
  },
  searchFunction: {
    type: Function,
    default: () => {
      alert('search function')
    }
  }
})
</script>
