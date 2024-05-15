<script setup lang="ts">
import { pb } from '@/assets/backend'
import CardReve from '@/components/cardReve.vue';
import amis from '@/components/icons/amis.vue'
import plus from '@/components/icons/plus.vue'

const user = await pb.collection('users').getOne(pb.authStore.model.id)


</script>

<template>
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
      <CardReve />
      <button class="bg-orange-400 border-2 border-orange-400 px-8 py-3 rounded-2xl font-Marigny font-bold flex gap-2 items-center shadow-lg shadow-black/30 fixed right-4 bottom-32"><plus />Nouveau rêve</button>
  </main>
</template>