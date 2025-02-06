<template>
  <div class="z-10 w-full bg-white" :class="sizeClass">
    <div class="flex items-center border-b border-gray-300 p-2">
      <div class="mr-2 flex items-center justify-center rounded-full bg-yellow-400 px-2" :class="filterCounts > 0 ? 'mr-2 flex items-center justify-between rounded-full' : 'rounded-full'">
        <span class="flex cursor-pointer items-center p-2">
          <span class="material-symbols-outlined" style="font-size: 18px"> tune </span>
        </span>
        <span v-if="filterCounts > 0" class="rounded-full bg-red-500 px-2 py-1 text-xs text-white">{{ filterCounts }}</span>
      </div>

      <div class="hide-scrollbar overflow-x-auto" :class="filterCounts > 0 ? 'w-4/5' : ''">
        <ul class="inline-flex h-[2rem] space-x-2">
          <li class="cursor-pointer">
            <span class="inline-flex items-center rounded-full px-3 py-2 text-xs font-medium text-gray-600" @click="tagChange('all')" :class="filterCategory === 'all' ? 'bg-yellow-400 text-black' : 'bg-slate-100 text-black'"> All </span>
          </li>
          <li v-for="(category, index) in categories" :key="index" class="cursor-pointer">
            <span
              class="inline-flex items-center rounded-full px-3 py-2 text-xs font-medium text-gray-600"
              @click="tagChange(category.title_en)"
              :class="filterCategory === category.title_en ? 'bg-yellow-400 text-black' : 'bg-slate-100 text-black'"
              :style="{ width: 'max-content' }"
              >{{ category.title_en }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  sizeClass: {
    type: String,
    default: 'max-w-[720px]'
  },
  filterCounts: {
    type: Number,
    default: 0
  },
  filterCategory: {
    type: String,
    default: 'all'
  },
  categories: {
    type: Array,
    default: () => [
      {
        title_en: 'Health'
      },
      {
        title_en: 'F & B'
      },
      {
        title_en: 'Education'
      },
      {
        title_en: 'Technology'
      },
      {
        title_en: 'Business'
      },
      {
        title_en: 'Entertainment'
      },
      {
        title_en: 'Sports'
      },
      {
        title_en: 'Lifestyle'
      },
      {
        title_en: 'Travel'
      },
      {
        title_en: 'Science'
      },
      {
        title_en: 'Politics'
      },
      {
        title_en: 'Others'
      }
    ]
  },
  tagChange: {
    type: Function,
    default: () => {
      alert('tag change function')
    }
  }
})
</script>
