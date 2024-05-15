<script setup lang="ts">
import img_profil from '@/assets/image/img_profil.png'
import like from '@/components/icons/like.vue'
import commentaire from '@/components/icons/commentaire.vue'
import type { dreamRecord } from '@/assets/pocket-types'
import { defineProps } from 'vue'
import { pb } from '@/assets/backend'
import { ref, onMounted } from 'vue'

const props = defineProps<dreamRecord>()


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

const username = ref('')

async function getUser() {
    const user = await pb.collection('users').getOne(props.user)
    return user.username
}



onMounted(() => {
    getUser()
})

console.log(username.value)

</script>

<template>
    <div class="bg-white/20 rounded-xl p-4 flex flex-col gap-3">
        <div class="flex justify-between items-center">
            <div class="flex gap-3 items-center">
                <img :src="img_profil" alt="image de profil">
                <p class="font-Marigny font-bold text-xl">{{ user }}</p>
            </div>
            <p class="text-xs">{{ convertirEnTempsEcoulé(created) }}</p>
        </div>
        <p>{{ dream }}</p>
        <div class="flex gap-4">
            <like />
            <commentaire />
        </div>
    </div>
</template>