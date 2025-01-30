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
            <DialogPanel
              class="relative h-full w-[292px] transform overflow-hidden rounded-[20px] bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all"
              :style="lucky ? { backgroundImage: `url(${ribbonImage}), linear-gradient(to bottom, #FFF7DA, #FFFFFF)`, backgroundSize: 'cover' } : {}"
            >
              <div>
                <span class="mb-4 flex justify-end">
                  <img src="@/assets/images/cross.png" alt="close" @click="$emit('close')" />
                </span>
                <div class="flex flex-1 flex-col items-center justify-center gap-[16px] text-center">
                  <DialogTitle as="h3" class="mb-2 text-base font-semibold leading-6 text-gray-900">
                    <span class="text-[20px] text-[#F68D3E]">{{ title }}</span>
                  </DialogTitle>
                  <img v-if="lucky === false" src="@/assets/images/unlucky.png" alt="unlucky" loading="lazy" />
                  <img v-if="outcomePoints !== 0" src="@/assets/images/point.png" alt="points" loading="lazy" />
                  <img v-if="outcomeImage" :src="outcomeImage" class="h-[80px] w-[80px]" alt="outcome image" loading="lazy" />
                  <div class="mt-2 flex flex-col leading-[25px]">
                    <span class="text-[14px] text-gray-800" v-if="lucky == false">
                      {{ description }}
                    </span>
                    <span v-if="outcomePoints !== 0" class="text-[14px]">
                      <span v-if="$route?.query?.lang === 'mm'">သင်သည် </span>
                      <span v-if="$route?.query?.lang === 'en'">You've won</span> <br />
                      <span class="font-bold">{{ thousandSeparator(outcomePoints) }} points</span>
                      <span v-if="$route?.query?.lang === 'en'">!!</span>
                      <span v-if="$route?.query?.lang === 'mm'"> ရရှိပါသည်</span>
                    </span>
                    <span v-if="outcomeRewardName" class="text-[14px]">
                      <span v-if="$route?.query?.lang === 'en'">You've won</span> <br />
                      <span v-if="$route?.query?.lang === 'mm'">သင်သည် </span>
                      <span class="font-bold">{{ outcomeRewardName }}</span>
                      <span v-if="$route?.query?.lang === 'en'">!!</span>
                      <span v-if="$route?.query?.lang === 'mm'"> လက်ဆောင် ရရှိပါသည်</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="mt-5">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-[40px] bg-yellow-400 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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

import { useRoute, useRouter } from 'vue-router'
import { thousandSeparator } from '@/utils/thousandSeparator'

const open = ref(true)
const router = useRouter()
const route = useRoute()

const props = defineProps(['title', 'description', 'buttonText', 'lucky', 'outcomePoints', 'outcomeImage', 'outcomeRewardName'])

const redirectPages = () => {
  if (props.lucky === false) {
    router.push({
      name: 'campaignsWelcome',
      params: { id: route.params.id },
      query: {
        lang: route.query.lang,
        auth_token: route.query.auth_token
      }
    })
    const event = new CustomEvent('to-back', {
      detail: {
        message: 'go to home page'
      }
    })

    document.dispatchEvent(event)
  } else if (props.outcomePoints !== 0) {
    const event = new CustomEvent('to-point-history', {
      detail: {
        message: 'go to point history page'
      }
    })

    document.dispatchEvent(event)
  } else if (props.outcomeRewardName) {
    const event = new CustomEvent('to-voucher-list', {
      detail: {
        message: 'go to voucher list'
      }
    })

    document.dispatchEvent(event)
  }
}
</script>
