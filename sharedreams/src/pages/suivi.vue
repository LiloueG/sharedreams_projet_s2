<script setup lang="ts">
import barre from '@/components/barre.vue'
import Carousel from '@/components/Carousel.vue'
import { ref } from 'vue';
import lune_nuage from '@/components/icons/lune_nuage.vue';
import nuage_coupe from '@/components/icons/nuage_coupe.vue';
import petit_nuage from '@/components/icons/petit_nuage.vue';
import ToggleSwitch from '@/components/icons/toggle.vue';

const slides = ref([
  { content: 'Content for slide 1'},
  { content: 'Content for slide 2' },
  { content: 'Content for slide 3' }
]);

</script>
<template>
    <barre />
    <main class="px-4 py-12 min-h-screen">
        <div>
            <h1 class="font-Marigny font-bold text-3xl ">Suivi de sommeil</h1>
        </div>
        <div id="app">
            <Carousel :slides="slides">
                <template #default="{ slide }">
                    <div class="slide-content">
                        <section class="bg-indigo-950/20 rounded-xl px-3 py-6">
                            <p class="text-sm font-Marigny font-light mb-6">Temps de sommeil</p>
                            <div class="flex gap-6">
                                <p class="font-Marigny font-bold text-3xl">4h 03 min</p>
                                <lune_nuage />
                            </div>
                            <button class="bg-orange-400 font-Marigny font-medium text-base py-3 px-5 rounded-xl drop-shadow-lg">Voir les statistiques</button>
                        </section>
                        <div class="flex gap-3">
                            <section class="w-[50%] bg-indigo-400/20 rounded-xl">
                                <div class="py-3 px-2 mb-28">
                                    <p class="text-sm font-Marigny font-light mb-6">Qualité de sommeil</p>
                                </div>
                                <nuage_coupe class="ml-4"/>
                            </section>
                            <section class="bg-blue-600/20 p-3 rounded-xl">
                                <div class="flex gap-5 mb-10">
                                    <p class="font-Marigny text-sm">Alarme</p>
                                    <petit_nuage />
                                </div>
                                <p class="flex font-bold font-Marigny text-3xl mb-10 justify-center">7h 00</p>
                                <div class="flex gap-5">
                                    <petit_nuage />
                                    <ToggleSwitch v-model="isToggled" />
                                </div>
                            </section>

                        </div>
                    </div>
                </template>
            </Carousel>
        </div>
    </main>
</template>