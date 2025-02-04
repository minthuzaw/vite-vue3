<template>
  <div class="relative mb-3 flex items-center border-b border-gray-300 px-3">
    <router-link v-for="(link, index) in links" :key="index" to="/" class="flex-1 py-4 text-center text-gray-600" :class="{ 'text-yellow-400': $route.name === link.name }"
      >{{ link.name }}
      <span v-if="link.count > 0" class="absolute top-2 w-5 rounded-full bg-red-500 text-sm font-medium text-white" :class="link.count > 99 ? 'w-8 text-center' : ''">
        {{ link.count > 99 ? '99+' : link.count }}
      </span>
    </router-link>

    <div class="flex items-center bg-yellow-400 p-2" :class="filterCounts > 0 ? 'flex w-[55px] items-center justify-between rounded-[20px]' : 'rounded-full'">
      <span @click="$emit('show')" class="material-symbols-outlined vertical-align-middle" style="font-size: 15px"> tune </span>
      <span v-if="filterCounts > 0" class="flex w-5 justify-center rounded-full bg-red-500 text-sm font-medium text-white">{{ filterCounts }}</span>
    </div>
  </div>
</template>
<script setup>
defineProps({
  filterCounts: {
    type: Number,
    default: 0
  },
  links: {
    type: Array,
    default: () => [
      {
        name: 'Reward',
        count: 100
      },
      {
        name: 'Sticker',
        count: 5
      },
      {
        name: 'Card',
        count: 11
      }
    ]
  }
})
</script>
