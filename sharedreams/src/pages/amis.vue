<script setup lang="ts">
import retour from '@/components/icons/retour.vue'
import ajout_amis from '@/components/icons/ajout_amis.vue'
import search from '@/components/icons/search.vue'
import img_profil from '@/assets/image/img_profil.png'


</script>

<template>
    <main class="px-4 py-12 min-h-screen">
        <div class="flex justify-between">
            <div class="flex gap-3">
                <RouterLink to="/accueil">
                    <retour />
                </RouterLink>
                <h1 class="font-Marigny text-2xl font-bold">Amis</h1>
            </div>
            <ajout_amis />
        </div>
        <form class="relative mt-6">
            <input type="search" class="w-full font-light placeholder:text-zinc-500 px-4 py-2 border-zync-500 rounded-xl bg-white/20 pl-12" placeholder="Rechercher"/>
            <div class="absolute inset-y-0 left-0 flex items-center pl-3"> 
                <search />
            </div> 
        </form>
        <div>
            <img :src="img_profil" alt="image de profil">
            <p>Maria</p>
            <p>En ligne il y a 2h</p>

        </div>
    </main>
</template>