<script setup lang="ts">
import CardProfil from '@/components/CardProfil.vue'
import barre from '@/components/barre.vue';
import cardReve from '@/components/cardReve.vue';
import setting from '@/components/icons/setting.vue';
import { getDreamsforProfil } from '@/assets/backend';

const dreamspublish = await getDreamsforProfil()

console.log(dreamspublish)
</script>

<template>
    <barre />
    <main class="px-4 py-12 min-h-screen">
        <div class="flex justify-between mb-8">
            <h1 class="font-Marigny font-bold text-3xl ">Profil</h1>
            <setting />
        </div>
        <CardProfil />
        <div class="flex flex-col gap-5">
            <cardReve v-for="dream in dreamspublish" :key="dream.user" v-bind="dream" />
        </div>
    </main>
</template>
