<script setup lang="ts">
import { pb, getDreams } from '@/assets/backend';
import CardReve from '@/components/cardReve.vue';
import amis from '@/components/icons/amis.vue'
import plus from '@/components/icons/plus.vue'
import barre from '@/components/barre.vue';
import type { dreamRecord } from '@/assets/pocket-types';
import verified from '@/components/icons/verified_vsetesajour.vue'
import { onMounted, ref } from 'vue';



const dreams: dreamRecord[] = await getDreams()
const user = await pb.collection('users').getOne(pb.authStore.model!.id)



</script>

<template>
  <barre class="z-10"/>
  <main v-if="user" class="px-4 py-12 min-h-screen">
      <div class="font-Marigny text-2xl flex justify-between">
        <div>
            <h1>Bonjour,</h1>
            <p class="font-bold">{{ user.username }}</p>
        </div>
        <RouterLink to="/amis">
          <amis class="w-9" />
        </RouterLink>
      </div>

      <section class="py-6">
        <p class="font-Marigny font-bold text-2xl">Tout le monde</p>
      </section>
      <div class="flex flex-col gap-5">
        <CardReve v-for="dream in dreams" :key="dream.user" v-bind="dream" />
      </div>
      <RouterLink to="/nouveau_reve">
        <button class="bg-orange-400 border-2 border-orange-400 px-8 py-3 rounded-full font-Marigny font-bold flex gap-2 items-center shadow-lg shadow-black/30 fixed right-4 bottom-32"><plus />Nouveau rêve</button>
      </RouterLink>
  </main>
  <div class="bg-white/25 flex flex-col items-center justify-center p-6 mb-52">
        <verified class="mb-2"/>
        <p class="font-bold font-Marigny text-3xl">Vous êtes à jour</p>
      </div>
</template>