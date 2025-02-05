<template>
  <div class="min-w-screen flex-col items-center justify-center overflow-hidden">
    <!-- Nav Bar -->
    <DetailNavBar />
    <TagComponent />

    <!-- Card -->
    <div class="mt-10 grid w-full justify-center p-2">
      <BaseCard>
        <template #header>
          <span class="text-[1rem]">Card Header</span>
        </template>
        <template #body>
          <span class="text-[0.875rem]">Card Body</span>
        </template>
        <template #footer>
          <a href="#" class="inline-flex items-center text-sm font-medium text-[#FFA726] transition-colors hover:text-[#FF9800]">
            Details
            <span class="material-symbols-outlined"> arrow_forward </span>
          </a>
        </template>
      </BaseCard>
    </div>

    <div class="my-3 flex justify-center gap-2">
      <button @click="modelDialog = true" class="flex items-center rounded-lg bg-[#FFA726] p-2 text-sm font-medium text-gray-800 transition-colors hover:text-stone-100">Open Model Dialog</button>
      <button @click="popup = !popup" class="flex items-center rounded-lg bg-[#FFA726] p-2 text-sm font-medium text-gray-800 transition-colors hover:text-stone-100">Open Popup</button>

      <button @click="bottomDialog = !bottomDialog" class="flex items-center rounded-lg bg-[#FFA726] p-2 text-sm font-medium text-gray-800 transition-colors hover:text-stone-100">Open Bottom Dialog</button>
    </div>

    <BaseLoading v-if="isLoading" />

    <!-- Model Dialog -->
    <ModelDialog v-if="modelDialog" @close="closeCallback" />
    <!-- Popup Dialog -->
    <PopupDialog v-if="popup" />

    <!-- ListNavBar -->
    <ListNavBar @show="showCallback" />

    <!-- BaseDialog with position-->
    <BaseDialog :title="'Choose Filters'" v-model="bottomDialog">
      <h1>This is a bottom dialog. You can change dialog position using "position" prop.</h1>

      <div class="pt-6">
        <label class="flex cursor-pointer items-center justify-between">
          <span class="text-gray-700">Check me</span>

          <input type="checkbox" class="peer hidden" v-model="checked" />
          <div class="h-5 w-5 rounded-full border-[3.5px] border-gray-400 bg-white transition-all peer-checked:border-yellow-500"></div>
        </label>
      </div>
      <div class="flex items-center justify-center gap-2 pt-6">
        <span class="w-10 text-red-400">Reset</span>
        <button class="col-span-2 w-full rounded-full bg-yellow-400 px-3 py-2">Confirm</button>
      </div>
    </BaseDialog>

    <!-- Skeleton -->
    <div class="m-5 grid grid-cols-4 gap-4">
      <BaseSkeleton :shape="'circle'" :width="100" :height="100" />
      <BaseSkeleton :width="100" :height="100" />
      <BaseSkeleton :shape="'rounded'" :width="100" :height="100" :borderRadius="20" />
      <div class="flex flex-col gap-2">
        <BaseSkeleton :width="150" :height="15" />
        <BaseSkeleton :width="100" :height="15" />
        <BaseSkeleton :width="80" :height="15" />
        <BaseSkeleton :width="60" :height="15" />
      </div>
    </div>

    <!-- Tag Pannel -->
    <TagPanel :tabs="tabs" @tab-click="tabClickCallBack">
      <template #tab-0>
        <p>This is the content for Tab 1.</p>
      </template>
      <template #tab-1>
        <p>This is the content for Tab 2.</p>
      </template>
      <template #tab-2>
        <p>This is the content for Tab 3.</p>
      </template>
    </TagPanel>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useIndexStore } from '@/modules/pages/indexStore'
import BaseCard from '@/components/BaseCard.vue'
import BaseLoading from '@/components/BaseLoading.vue'
import ModelDialog from '@/components/ModelDialog.vue'
import PopupDialog from '@/components/PopupDialog.vue'
import TagComponent from '@/components/TagComponent.vue'
import DetailNavBar from '@/components/DetailNavBar.vue'
import ListNavBar from '@/components/ListNavBar.vue'
import BaseDialog from '@/components/BaseDialog.vue'
import BaseSkeleton from '@/components/BaseSkeleton.vue'
import TagPanel from '@/components/TagPanel.vue'

const indexStore = useIndexStore()
const isLoading = ref(false)

const modelDialog = ref(false)
const popup = ref(false)
const bottomDialog = ref(false)
const checked = ref('')

const tabs = ref([
  { title: 'Tab 1', value: '0' },
  { title: 'Tab 2', value: '1' },
  { title: 'Tab 3', value: '2' }
])

const closeCallback = () => {
  modelDialog.value = false
}

const showCallback = () => {
  bottomDialog.value = true
}

const tabClickCallBack = (e) => {
  console.log(e)
}

onMounted(async () => {
  await fetchPhoto()
})

const fetchPhoto = async () => {
  isLoading.value = true
  try {
    await indexStore.fetchPhoto()
    const response = indexStore.photo
    console.log(response)
    isLoading.value = false
  } catch (error) {
    console.error(error)
    isLoading.value = false
  }
}
</script>
