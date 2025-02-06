<template>
  <div class="card py-2">
    <div class="flex border-b border-gray-300">
      <button v-for="tab in tabs" :key="tab.value" @click="selectTab(tab.value)" :class="['px-4 py-2', activeTab === tab.value ? 'border-b-2 border-primary text-primary' : 'text-gray-600']">
        {{ tab.title }}
      </button>
    </div>
    <div class="p-4">
      <template v-for="tab in tabs" :key="tab.value">
        <slot v-if="activeTab === tab.value" :name="`tab-${tab.value}`"></slot>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['tab-click'])

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
    default: () => [{ title: 'Default Tab', value: '0' }]
  }
})

const activeTab = ref(props.tabs.length > 0 ? props.tabs[0].value : '0')

const selectTab = (value) => {
  activeTab.value = value
  emit('tab-click', value)
}
</script>
