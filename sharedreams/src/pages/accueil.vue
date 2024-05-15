<script setup lang="ts">
import { pb, getDreams } from '@/assets/backend';
import CardReve from '@/components/cardReve.vue';
import amis from '@/components/icons/amis.vue'
import plus from '@/components/icons/plus.vue'
import barre from '@/components/barre.vue';
import type { dreamRecord } from '@/assets/pocket-types';

const user = await pb.collection('users').getOne(pb.authStore.model.id)
const dreams:dreamRecord[] = await getDreams()

console.log(dreams)

</script>

<template>
  <barre />
  <main class="px-4 py-12 min-h-screen">
      <div class="font-Marigny text-2xl flex justify-between">
        <div>
            <h1>Bonjour,</h1>
            <p class="font-bold">{{ user.username }}</p>
        </div>
        <amis class="w-9" />
      </div>

      <section>
          <p class="font-Marigny mt-6">Les plus populaires</p>
          <div>
            <p>Carrousel</p>
          </div>
      </section>
      <section class="py-6">
        <p class="font-Marigny font-bold text-2xl">Amis</p>
      </section>
      <div class="flex flex-col gap-5">
        <CardReve v-for="dream in dreams" :key="dream.id" v-bind="dream" />
      </div>
      <RouterLink to="/nouveau_reve">
        <button class="bg-orange-400 border-2 border-orange-400 px-8 py-3 rounded-2xl font-Marigny font-bold flex gap-2 items-center shadow-lg shadow-black/30 fixed right-4 bottom-32"><plus />Nouveau rêve</button>
      </RouterLink>
  </main>
</template>