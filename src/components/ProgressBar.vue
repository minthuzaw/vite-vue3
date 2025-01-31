<template>
  <div :class="widthClass">
    <div class="p-progressbar h-1.5 w-full overflow-hidden bg-transparent" :class="borderClass">
      <div
        class="animate-progress h-full w-full"
        :style="{
          backgroundImage: `linear-gradient(
            to right,
            transparent 0%,
            ${bgColor} 50%,
            transparent 100%
          )`,
          backgroundSize: '200% 100%'
        }"
      ></div>
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
  },
  borderClass: {
    type: String,
    default: 'rounded-full'
  }
})
</script>

<style scoped>
@keyframes moveGradient {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}

.animate-progress {
  animation: moveGradient 1.5s linear infinite;
}
</style>
