<script setup lang="ts">
import img_profil from '@/assets/image/img_profil.png'
import like from '@/components/icons/like.vue'
import commentaire from '@/components/icons/commentaire.vue'
</script>

<template>
    <div class="bg-white/20 rounded-xl p-4 flex flex-col gap-3">
        <div class="flex justify-between items-center">
            <div class="flex gap-3 items-center">
                <img :src="img_profil" alt="image de profil">
                <p class="font-Marigny font-bold text-xl">Liloue</p>
            </div>
            <p class="text-xs">Il y a 2 min</p>
        </div>
        <p>Je me suis retrouvée à marcher le long d'un chemin sinueux, bordé d'arbres aux feuilles chatoyantes. Le soleil filtrait à travers 
            les branches, créant des motifs dansants sur le sol. Une douce brise caressait mon visage...
        </p>
        <div class="flex gap-4">
            <like />
            <commentaire />
        </div>
    </div>
</template>