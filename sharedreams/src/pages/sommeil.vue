<script setup lang="ts">
</script>

<template>
    <div class="w-screen h-screen relative overflow-hidden px-5 flex flex-col gap-5 justify-end pb-20">
      <div class="flex flex-col justify-center">
        <img class="h-[70%]" src="@/assets/image/sommeil.svg" alt="message">
      </div>
      <div class="font-Marigny text-3xl">
        <h1 class="font-bold">Suivez votre sommeil et vos rêves</h1>
      </div>
      <p>Sharedreams vous permet de tenir un carnet de rêves partageable avec vos amis. Likez leurs posts et commentez !</p>
      <div class="flex items-center justify-between">
          <div class="flex flex-row gap-1 w-full">
              <span class="h-2 w-[25%] rounded-full bg-orange-400"></span>
              <span class="h-2 w-[25%] rounded-full bg-orange-400"></span>
              <span class="h-2 w-[25%] rounded-full bg-white"></span>
          </div>
          <RouterLink to="/ia">
            <button class="bg-orange-400 px-7 py-3 pb-2 rounded-full justify-items-stretch !important font-Marigny text-2xl font-medium">
                Suivant
            </button>
          </RouterLink>
      </div>
  </div>
</template>