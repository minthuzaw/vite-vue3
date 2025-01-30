<template>
  <div class="gg pt-1" :class="widthClass">
    <div class="h-1.5 w-full overflow-hidden rounded-full bg-transparent">
      <div class="animate-progress origin-left-right h-full w-full rounded-full" :style="{ backgroundColor: bgColor }"></div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  bgColor: {
    type: String,
    default: '#FFC906'
  },
  widthClass: {
    type: String,
    default: 'w-[300px]'
  }
})
</script>
