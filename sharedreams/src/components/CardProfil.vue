<script setup lang="ts">
import img_profil from '../assets/image/img_profil.png'
import { pb } from '@/assets/backend'

</script>

<template>
    <div class="mb-3">
        <div class="flex gap-8">
            <img :src="img_profil" alt="image de profil" class="w-14 h-14">
            <div class="w-full flex justify-around">
                <p class="font-Marigny font-medium">Amis</p>
                <p class="font-Marigny font-medium">Rêves publiés</p>
            </div>
        </div>
        <p class="font-bold font-Marigny text-xl">Liloue</p>
    </div>
    <p class="text-xs">🎨🔮 Graphiste freelance le jour, exploratrice des rêves la nuit!🔍💭 
        📝 Rejoignez-moi dans mes aventures nocturnes et découvrez les secrets de l'inconscient! 🚀🌠
        ✨🔍 Partagez vos rêves, décodez leurs mystères et libérez votre imagination! 🌈💫
    </p>
    <div class="flex justify-center gap-6 py-7">
        <button class="font-Marigny font-bold text-xs border-2 border-white rounded-3xl py-2 px-4">Modifier le profil</button>
        <button class="font-Marigny font-bold text-xs border-2 border-white rounded-3xl py-2 px-4">Partager le profil</button>
    </div>
</template>