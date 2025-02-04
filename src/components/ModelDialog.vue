<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel class="relative h-full transform overflow-hidden rounded-[20px] bg-white bg-gradient-to-b from-[#FFF7DA] to-[#FFFFFF] px-4 pb-4 pt-5 text-left shadow-xl transition-all" :class="widthClass">
              <div>
                <span class="mb-4 flex justify-end">
                  <span class="material-symbols-outlined cursor-pointer" @click="$emit('close')"> close </span>
                </span>
                <div class="flex flex-1 flex-col items-center justify-center gap-[16px] text-center">
                  <DialogTitle as="h3" class="mb-2 text-base font-semibold leading-6 text-gray-900">
                    <span class="text-[20px] text-[#F68D3E]">{{ title }}</span>
                  </DialogTitle>
                  <img src="@/assets/images/profile.png" alt="profile" loading="lazy" />
                  <div class="mt-2 flex flex-col leading-[25px]">
                    <span class="text-[14px] text-gray-800">
                      {{ description }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="mt-5">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-[40px] bg-yellow-400 px-3 py-2 text-sm font-semibold shadow-sm hover:text-white hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  @click="redirectPages"
                >
                  {{ buttonText }}
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const open = ref(true)

defineProps({
  widthClass: {
    type: String,
    default: 'w-[430px]'
  },
  title: {
    type: String,
    default: 'Model Title'
  },
  description: {
    type: String,
    default: 'Model Description'
  },
  buttonText: {
    type: String,
    default: 'Okay'
  }
})

const redirectPages = () => {
  const event = new CustomEvent('to-back', {
    detail: {
      message: 'go to home page'
    }
  })

  document.dispatchEvent(event)
}
</script>
