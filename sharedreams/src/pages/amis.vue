<script setup lang="ts">
import retour from '@/components/icons/retour.vue'
import ajout_amis from '@/components/icons/ajout_amis.vue'
import search from '@/components/icons/search.vue'
import CardAmis from '@/components/CardAmis.vue'
import barre from '@/components/barre.vue'
import { getFriends } from '@/assets/backend'

const friends = await getFriends()
console.log(typeof friends[0].expand)


</script>

<template>
    <barre />
    <main class="px-4 py-12 min-h-screen">
        <div class="flex justify-between">
            <div class="flex gap-3">
                <RouterLink to="/accueil">
                    <retour />
                </RouterLink>
                <h1 class="font-Marigny text-2xl font-bold">Amis</h1>
            </div>
            <RouterLink to="/ajout-amis">
                <ajout_amis />
            </RouterLink>
        </div>
        <form class="relative mt-6">
            <input type="search" class="w-full font-light placeholder:text-zinc-400 px-4 py-2 border-zync-500 rounded-full bg-white/20 pl-12" placeholder="Rechercher des amis..."/>
            <div class="absolute inset-y-0 left-0 flex items-center pl-3"> 
                <search />
            </div> 
        </form>
        <div v-if="friends[0].expand !== undefined">
            <CardAmis v-for="friend in friends[0].expand.user_friend" :key="friend.id" v-bind="friend"/>
        </div>
        <div v-else>
            <p class="text-gray-500 mt-4">Vous n'avez pas encore d'amis</p>
        </div>
    </main>
</template>