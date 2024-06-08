<script setup lang="ts">
import like from '@/components/icons/like.vue'
import commentaire from '@/components/icons/commentaire.vue'
import type { DreamsResponse } from '@/pocketbase-types'
import { defineProps } from 'vue'
import Img from '@/components/ImgCardReve.vue'
import { ref } from 'vue'



const props = defineProps<DreamsResponse>()


function convertirEnTempsEcoulé(heureDonnée) {
    // Convertir l'heure donnée en objet Date
    const dateDonnée = new Date(heureDonnée);

    // Obtenir l'heure actuelle
    const maintenant = new Date();

    // Calculer la différence en millisecondes
    const difference = maintenant - dateDonnée;

    // Convertir la différence en secondes
    const secondes = Math.floor(difference / 1000);

    // Convertir la différence en minutes
    const minutes = Math.floor(secondes / 60);

    // Convertir la différence en heures
    const heures = Math.floor(minutes / 60);

    // Convertir la différence en jours
    const jours = Math.floor(heures / 24);

    // Convertir la différence en semaines
    const semaines = Math.floor(jours / 7);

    // Convertir la différence en mois (en supposant que chaque mois a 30 jours)
    const mois = Math.floor(jours / 30);

    // Convertir la différence en années (en supposant que chaque année a 365 jours)
    const années = Math.floor(jours / 365);

    if (années > 0) {
        return `il y a ${années} an${années > 1 ? 's' : ''}`;
    } else if (mois > 0) {
        return `il y a ${mois} mois`;
    } else if (semaines > 0) {
        return `il y a ${semaines} sem${semaines > 1 ? 's' : ''}`;
    } else if (jours > 0) {
        return `il y a ${jours} j${jours > 1 ? 's' : ''}`;
    } else if (heures > 0) {
        return `il y a ${heures} h${heures > 1 ? 's' : ''}`;
    } else if (minutes > 0) {
        return `il y a ${minutes} min${minutes > 1 ? 's' : ''}`;
    } else {
        return `il y a ${secondes} sec${secondes > 1 ? 's' : ''}`;
    }
}

const love = ref(false)
const loveCount = ref(0)

function toggleLove() {
    love.value = !love.value
    if (love.value) {
        loveCount.value++
    } else {
        loveCount.value--
    }
}

</script>

<template>
    <div class="bg-white/20 rounded-xl p-4 flex flex-col gap-3">
        <div class="flex justify-between items-center">
            <div class="flex gap-3 items-center">
                <Img :record="props" :filename="expand.user.avatar" class="w-9 h-9 rounded-full"/> 
                <p class="font-Marigny font-bold text-xl">{{ expand.user.username}}</p>
            </div>
            <p class="text-xs">{{ convertirEnTempsEcoulé(created) }}</p>
        </div>
        <p class="font-bold font-Marigny text-lg" >{{ dreamnight }}</p>
        <p>{{ dream }}</p>
        <div class="flex gap-4">
            <div class="flex gap-2">
                <like @click="toggleLove" :className="love ? 'text-red-600' : 'text-white'" />
                <span class="text-white">{{ loveCount }}</span>
            </div>
            <commentaire />
        </div>
    </div>
</template>