import path from 'path'

export function getFileContents(folderName, fileName, moduleFolder, folderPath) {
  return [
    {
      // Create Vue File
      path: path.join(moduleFolder, `${fileName}List.vue`),
      content: `<template>
  <div>
    <h1>{{ ${folderName} }} List</h1>
    <!-- Add your list content here -->
  </div>
</template>

<script setup>
import use${fileName}List from './use${fileName}List'

const { ${folderName} } = use${fileName}List()
</script>

<style scoped>
/* Add your styles here */
</style>
`,
      message: `/list/${fileName}List.vue file created.`
    },
    {
      // Create JS File
      path: path.join(moduleFolder, `use${fileName}List.js`),
      content: `import { ref } from 'vue'

export default function use${fileName}List() {
  const ${folderName} = ref('${fileName}')
  return { ${folderName} }
}
`,
      message: `/list/use${fileName}List.js file created.`
    },
    {
      // Create Route
      path: path.join(folderPath, 'route.js'),
      content: `const ${folderName}Routes = [
  {
    path: '/${folderName}s',
    name: '${folderName}List',
    component: () => import('@/modules/${folderName}/list/${fileName}List.vue')
  }
]

export default ${folderName}Routes
`,
      message: `route.js file created.`
    },
    {
      // Create Service
      path: path.join(folderPath, 'service.js'),
      content: `import api from '@/libs/axios'

const endpoints = {
  ${folderName}: '/${folderName}s'
}

const service = {
  get${fileName}s: async (params) => {
    try {
      return await api.get(endpoints.${folderName}, { params })
    } catch {
      return null
    }
  }
}

export { service }
`,
      message: `service.js file created.`
    },
    {
      // Create Store
      path: path.join(folderPath, 'store.js'),
      content: `import { defineStore } from 'pinia'
import { service } from './service'

export const use${fileName}Store = defineStore('${fileName}Store', {
  state: () => ({
    ${folderName}ListResponse: null
  }),
  actions: {
    async fetch${fileName}s(params) {
      this.${folderName}ListResponse = await service.get${fileName}s(params)
    }
  }
})
`,
      message: `store.js file created.`
    }
  ]
}
