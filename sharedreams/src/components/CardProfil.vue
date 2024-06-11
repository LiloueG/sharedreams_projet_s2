<script setup lang="ts">
import {pb } from '@/assets/backend'
import { defineProps } from 'vue'
import type { DreamsResponse } from '@/pocketbase-types'
import ImgPb from './ImgProfil.vue';
import { getFriendCount } from '@/assets/backend';

const user = pb.authStore.model?(await pb.collection('users').getOne(pb.authStore.model.id)):null


const friendCount = await getFriendCount()
import { getDreamsforProfil } from '@/assets/backend';

const dreamspublish = await getDreamsforProfil()


</script>

<template>
    <div class="mb-3" v-if="user">
        <div class="flex gap-8">
            <ImgPb :record="user" :filename="user.avatar" class="w-14 h-14 rounded-full"/> 
            <div class="w-full flex justify-around">
                <div class="flex flex-col">
                    <p class="font-Marigny font-medium">Amis</p>
                    <span class="text-white flex justify-center">{{ friendCount }}</span>
                </div>
                <div class="flex flex-col">
                    <p class="font-Marigny font-medium">Rêves publiés</p>
                    <span class="text-white flex justify-center">{{ dreamspublish.length }}</span>
                </div>
            </div>
        </div>
        <p class="font-bold font-Marigny text-xl">{{ user.username }}</p>
    </div>
    <p  v-if="user" class="text-xs">{{ user.biography}}
    </p>
    <div v-else>Pas d'utilisateur</div>
    <div class="flex justify-center gap-6 py-7">
        <RouterLink to="/modificationProfil">
            <button class="font-Marigny font-bold text-xs border-2 border-white rounded-3xl py-2 px-4">
                Modifier le profil
            </button>
        </RouterLink>
        <button class="font-Marigny font-bold text-xs border-2 border-white rounded-3xl py-2 px-4">Partager le profil</button>
    </div>
</template>