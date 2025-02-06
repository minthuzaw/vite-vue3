<template>
  <div class="min-w-screen flex items-center justify-center overflow-hidden">
    <div class="grid w-4/5 justify-center p-2">
      <div class="col-span-12 rounded-[56px] bg-gradient-to-b from-gray-500/40 to-blue-500/5 p-1 xl:col-span-6">
        <div class="m-0 h-full w-full rounded-[53px] bg-gradient-to-b from-gray-100 to-white px-4 py-7">
          <div class="flex flex-col items-center gap-3">
            <div class="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-primary">
              <img loading="lazy" class="h-full w-full" src="@/assets/images/profile.png" alt="min thu zaw" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900">A simple Vite + Vue 3 + Tailwind CSS</h3>
          </div>
        </div>
      </div>

      <div class="col-span-12 mt-4 flex justify-center">
        <button @click="$router.push('/components')" class="flex items-center text-sm font-medium text-[#FFA726] transition-colors hover:text-[#FF9800]">
          Components
          <span class="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  </div>
  <div class="min-w-screen flex-col items-center justify-center space-y-3 p-6">
    <h2 class="text-xl font-bold">Installation</h2>
    <span>To quickly get started, enter a project name and run the commands below.</span>
    <h3 class="text-md font-bold">Project Name</h3>
    <input v-model="projectName" type="text" placeholder="vite-vue3" class="w-1/2 rounded-md border border-gray-300 p-2" />

    <div class="text-md flex-col items-center rounded-md bg-gray-100 p-4">
      <div class="text-gray-500"># clone the starter</div>
      <div>
        git clone https://github.com/minthuzaw/vite-vue3.git
        <span class="text-yellow-500">{{ projectName || '&lt;project-name&gt;' }}</span>
      </div>
      <div>
        cd <span class="text-yellow-500">{{ projectName || '&lt;project-name&gt;' }}</span>
      </div>
      <div>rm -rf .git <span class="text-gray-500"># remove git folder</span></div>
      git init
      <span class="text-gray-500"># initialise git for your new project</span>
    </div>
    <div>Alternatively, go to the <a target="_blank" class="font-bold underline" href="https://github.com/minthuzaw/vite-vue3">Github</a> repository.</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projectName = ref('')
</script>
