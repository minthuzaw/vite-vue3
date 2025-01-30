<script setup></script>

<template>
  <div class="flex h-screen justify-center bg-gray-100">
    <div class="box-border flex w-full max-w-[768px] flex-col bg-white">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
* {
  user-select: none;
}
</style>
