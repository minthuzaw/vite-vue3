# Vue 3 + Vite + Tailwind

## Features

- [Vue3](https://vuejs.org/)
- [Vue Composition API](https://vuejs.org/api/composition-api-setup.html)
- [Vue Router](https://router.vuejs.org/) - The official router for Vue.js
- [Pinia](https://pinia.vuejs.org/) - The Vue Store that you will enjoy using
- [Axios](https://axios-http.com/) - Promise based HTTP client for the browser and node.js
- [I18ns](https://vue-i18n.intlify.dev/) - Vue I18n is internationalization plugin for Vue.js
- [Husky](https://typicode.github.io/husky/) - Modern native git hooks made easy
- [Icon](https://fonts.google.com/icons) - Google font icon

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [Editor Config](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## Recommended Node Version

Node >= 16
`<br>`

## Project setup

### Edit .env

```
VITE_BASE_URL=
VITE_I18N_FALLBACK_LOCALE=en
VITE_I18N_LOCALE=en
```

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build & npm run preview
```

### Lints and fixes files

```
npm run lint
```

### Formats files

```
npm run format
```

### Example Api Fetch
```
import { useStore } from '@/store'
const store = useStore()
const isLoading = ref(false)

onMounted(async () => {
  await fetchPhoto()
})

const fetchPhoto = async () => {
  isLoading.value = true
  try {
    await store.fetchPhoto()
    const response = store.photo
    console.log(response)
    isLoading.value = false
  } catch (error) {
    console.error(error)
    isLoading.value = false
  }
}
```