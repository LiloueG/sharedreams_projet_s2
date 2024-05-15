<script setup lang="ts">
</script>

<template>
    <div class="w-screen h-screen relative overflow-hidden px-5 flex flex-col gap-5 justify-end pb-20">
      <img src="@/assets/image/message.svg" alt="message">
      <div class="font-Marigny text-3xl">
        <h1 class="font-bold">Ecrivez, partagez, réagissez !</h1>
      </div>
      <p>Sharedreams vous permet de tenir un carnet de rêves partageable avec vos amis. Likez leurs posts et commentez !</p>
      <div class="flex items-center justify-between">
          <div class="flex flex-row gap-1 w-full">
              <span class="h-2 w-[25%] rounded-full bg-orange-400"></span>
              <span class="h-2 w-[25%] rounded-full bg-white"></span>
              <span class="h-2 w-[25%] rounded-full bg-white"></span>
          </div>
          <RouterLink to="/sommeil">
            <button class="bg-orange-400 px-7 py-3 pb-2 rounded-full justify-items-stretch font-Marigny text-2xl font-medium">
                Suivant
            </button>
          </RouterLink>
      </div>
  </div>
</template>