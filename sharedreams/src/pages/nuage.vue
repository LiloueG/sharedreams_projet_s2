<script setup lang="ts">
</script>

<template>
    <div class="w-screen h-screen relative overflow-hidden px-5 flex flex-col gap-5 justify-end pb-20">
      <img src="@/assets/image/nuage.svg" alt="nuage">
      <div class="font-Marigny text-3xl">
        <h1 class="font-bold">Sharedreams,</h1>
        <p class="font-medium"> l’endroit où tous vos rêves s’expriment</p>
      </div>
      <p>L’application parfaite pour partager vos rêves avec tous vos amis !</p>
      <RouterLink to="/message">
        <button class="bg-orange-400 w-full rounded-lg py-3 font-Marigny font-medium text-2xl mt-5">C'est parti</button>
      </RouterLink>
  </div>
</template>