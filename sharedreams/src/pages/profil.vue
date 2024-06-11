<script setup lang="ts">
import CardProfil from '@/components/CardProfil.vue'
import barre from '@/components/barre.vue';
import cardReve from '@/components/cardReve.vue';
import setting from '@/components/icons/setting.vue';
import { getDreamsforProfil } from '@/assets/backend';

const dreamspublish = await getDreamsforProfil()


</script>

<template>
    <barre class="z-10" />
    <main class="px-4 py-12 min-h-screen">
        <div class="flex justify-between mb-8">
            <h1 class="font-Marigny font-bold text-3xl ">Profil</h1>
            <RouterLink to="/parametres">
                <setting />
            </RouterLink>
        </div>
        <CardProfil />
        <div class="flex flex-col gap-5 mb-16">
            <cardReve v-for="dream in dreamspublish" :key="dream.user" v-bind="dream"/>
        </div>
    </main>
</template>
