<template>
  <div class="mx-auto px-2 pb-6" :class="widthClass">
    <div class="border-t-3 rounded-xl border border-t-yellow-500 bg-white p-4 shadow-md hover:shadow-xl">
      <div class="flex items-center">
        <div class="max-w-xl space-y-4">
          <div class="font-bold text-gray-900">
            <slot name="header"></slot>
          </div>
          <div class="leading-relaxed text-gray-500">
            <slot name="body"></slot>
          </div>
          <div class="pt-4">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  widthClass: {
    type: String,
    default: 'min-w-[430px]'
  }
})
</script>
