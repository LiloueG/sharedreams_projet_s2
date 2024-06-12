<script setup lang="ts">
import barre from '@/components/barre.vue';
import { goBack } from 'vue';
import retour from '@/components/icons/retour.vue'

const goBack = () => {
    window.history.back();
};

import type { SleepDataResponse, SleepDataRecord } from '@/pocketbase-types';
const props = defineProps<SleepDataResponse<any>>();

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

const formatDuration = (hours) => {
    const totalMinutes = hours * 60;
    const h = Math.floor(totalMinutes / 60);
    const m = totalMinutes % 60;
    return `${h}h ${m} min`;
}

</script>

<template>
    <div class="text-white min-h-screen p-4">

        <header class="flex items-center justify-between">
            <button @click="goBack" class="text-white ">
                <retour />
                <h1 class="font-Marigny text-2xl font-bold"> Retour </h1>
            </button>
            <h1 class="font-Marigny text-2xl font-bold">Statistiques</h1>
            <div class="w-6"></div>
        </header>


        <div class="mt-8">

            <div class="circular-gradient w-32 h-32"></div>
            <div class="mt-8 px-4">
                <div class="flex justify-between items-center mb-4">
                    <div class="text-lg font-semibold">Nuits réparatrices</div>
                    <div class="text-lg font-semibold">74 %</div>
                </div>
                <div class="relative pt-1">
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-500">
                        <div style="width:74%"
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-300">
                        </div>
                    </div>
                </div>

                <div class="flex justify-between items-center mb-4">
                    <div class="text-lg font-semibold">Mauvaises nuits</div>
                    <div class="text-lg font-semibold">26 %</div>
                </div>
                <div class="relative pt-1">
                    <div class="overflow-hidden h-2 text-xs flex rounded bg-purple-500">
                        <div style="width:26%"
                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-400">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <barre />
</template>

<style scoped>
.circular-gradient {
    background: conic-gradient(pink 36deg, pink 36deg 170deg, indigo 170deg);
    border-radius: 50%;
}
</style>

