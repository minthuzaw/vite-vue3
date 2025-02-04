<template>
  <Teleport to="body">
    <Transition name="modal-move">
      <div v-if="modelValue" class="fixed inset-0 z-50 flex justify-center shadow-lg" :class="positionValue">
        <div class="fixed inset-0" aria-hidden="true" @click="closeModal"></div>
        <!-- bg-black/30 backdrop-blur-sm -->
        <div
          class="relative w-full rounded-t-3xl border border-gray-200 bg-gray-50 shadow-2xl transition-transform duration-300 ease-out"
          :class="[widthClass, { 'translate-y-0 opacity-100': modelValue, 'translate-y-full opacity-0': !modelValue }, { 'rounded-b-3xl': position === 'center' }]"
          @click.stop
          ref="modalRef"
        >
          <div class="relative flex items-center justify-between p-6">
            <span class="mx-auto">{{ title }}</span>
            <button @click="closeModal" class="absolute right-4 pt-2 text-gray-800 transition-colors hover:text-gray-500 focus:text-gray-500" aria-label="Close modal">
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <div class="px-6 pb-6">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  title: {
    type: String,
    default: 'Dialog Title'
  },
  position: {
    type: String,
    default: 'bottom'
  },
  widthClass: {
    type: String,
    default: 'max-w-[768px]'
  }
})

const emit = defineEmits(['update:modelValue'])

const modalRef = ref(null)
const positionValue = computed(() => (props.position === 'bottom' ? 'items-end' : 'items-center'))

const closeModal = () => {
  emit('update:modelValue', false)
}
</script>

<style scoped>
.modal-move-enter-active,
.modal-move-leave-active {
  transition:
    transform 0.3s ease-out,
    opacity 0.3s ease;
}

.modal-move-enter-from,
.modal-move-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
