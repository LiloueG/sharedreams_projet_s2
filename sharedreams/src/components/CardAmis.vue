<script setup lang="ts">
import Trash from '@/components/icons/Trash.vue'
import img_profil from '../assets/image/img_profil.png'
// import { pb } from '@/assets/backend';


</script>

<template>
    <div class="flex gap-4 mt-6 bg-white/20 rounded-xl px-6 py-4 items-center">
        <img :src="img_profil" alt="image de profil" class="w-11 h-11">
        <div class="w-full flex justify-between items-center">
            <div>
                <p class="font-Marigny font-bold text-xl">Maria</p>
                <p class="text-sm">En ligne il y a 2h</p>
            </div>
            <Trash />
        </div>   
    </div>
</template>