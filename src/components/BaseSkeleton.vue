<template>
  <div
    class="flex animate-pulse items-center justify-center bg-gray-300"
    :class="{
      'rounded-full': shape === 'circle',
      rounded: shape === 'rounded',
      'rounded-none': shape === 'rectangle' || shape === 'square'
    }"
    :style="{
      width: width + 'px',
      height: height + 'px',
      borderRadius: shape === 'circle' ? '50%' : borderRadius + 'px'
    }"
  >
    <span class="text-center text-gray-500">{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  shape: {
    type: String,
    default: 'rectangle',
    validator: (value) => ['circle', 'rectangle', 'square', 'rounded'].includes(value)
  },
  width: {
    type: Number,
    default: 100
  },
  height: {
    type: Number,
    default: 10
  },
  borderRadius: {
    type: Number,
    default: 8
  },
  text: {
    type: String,
    default: ''
  }
})
</script>
