<script setup lang="ts">
import type { UsersResponse } from '@/pocketbase-types';
import ImgProfil from './ImgProfil.vue';
import { AddAmis } from '@/assets/backend';

const props = defineProps<UsersResponse>()


async function add(id: string) {
    AddAmis(id)
}

</script>

<template>
    <div class="flex gap-4 mt-3 bg-white/20 rounded-xl px-6 py-4 items-center">
        <ImgProfil :record="props" :filename="props.avatar" class="w-11 h-11 rounded-full"/>
        <div class="w-full flex justify-between items-center">
            <div>
                <p class="font-Marigny font-bold text-xl">{{ props.username }}</p>
            </div>
            <button class="bg-orange-400 rounded-full px-3 py-1" @click="add(props.id)">Ajouter</button>
        </div>   
    </div>
</template>