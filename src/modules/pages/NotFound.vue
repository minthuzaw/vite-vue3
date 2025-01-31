<template>
  <div class="min-w-screen flex min-h-screen items-center justify-center overflow-hidden">
    <div class="grid justify-center p-2">
      <div class="col-span-12 rounded-[56px] bg-gradient-to-b from-gray-500/40 to-blue-500/5 p-1 xl:col-span-6">
        <div class="m-0 h-full w-full rounded-[53px] bg-gradient-to-b from-gray-100 to-white px-4 py-7">
          <div class="flex flex-col items-center gap-3">
            <div class="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-primary">
              <img loading="lazy" class="h-full w-full" src="@/assets/images/profile.png" alt="min thu zaw" />
            </div>
            <div class="text-center text-4xl font-bold">Not Found</div>
            <div class="text-light mt-4 text-center">Requested resource is not available.</div>

            <RouterLink to="/" class="mt-6">
              <Button class="flex items-center gap-2 rounded-xl bg-primary p-3 hover:bg-gray-500"> <span class="material-symbols-outlined"> arrow_back </span>Go Back</Button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
