<script setup lang="ts">
import retour from '@/components/icons/retour.vue'
import search from '@/components/icons/search.vue'
import CardAjoutAmis from '@/components/CardAjoutAmis.vue'
import barre from '@/components/barre.vue'
import type { UsersRecord } from '@/pocketbase-types';
import { ref } from 'vue'
import { getUsers, pb } from '@/assets/backend'

const users: UsersRecord[] = await getUsers()

console.log(users)
console.log(pb.authStore.model)

const searchQuery = ref('');

const filteredUsers = ref<UsersRecord[]>([]);

const searchUsers = async () => {
  try {
    const response = await pb.collection('users').getFullList({
      filter: `username LIKE '%${searchQuery.value}%'`, // Filtrez les utilisateurs dont le nom correspond à la recherche
      limit: 10 // Limitez le nombre de résultats
    });
    filteredUsers.value = response;
  } catch (error) {
    console.error("Error searching users:", error);
  }
};


</script>

<template>
    <barre />
    <main class="px-4 py-12 min-h-screen">
        <div class="flex justify-between">
            <div class="flex gap-3">
                <RouterLink to="/amis">
                    <retour />
                </RouterLink>
                <h1 class="font-Marigny text-2xl font-bold">Ajoutez des amis</h1>
            </div>
        </div>
        <form @submit.prevent="searchUsers" class="relative mt-6">
            <input type="search" v-model="searchQuery" class="w-full font-light placeholder:text-zinc-400 px-4 py-2 rounded-full bg-white/20 pl-12" placeholder="Rechercher des utilisateurs..."/>
            <div class="absolute inset-y-0 left-0 flex items-center pl-3"> 
                <search />
            </div> 
        </form>
        <h2 class="text-gray-500 mt-4">Suggestions</h2>
        <div class="mb-16">
            <CardAjoutAmis v-for="user in users" :key="users.id" v-bind="user"/>
        </div>
    </main>
</template>