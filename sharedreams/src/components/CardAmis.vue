<script setup lang="ts">
import Benne from '@/components/icons/Benne.vue'
import ImgProfil from './ImgProfil.vue';
import type { UsersResponse } from '@/pocketbase-types'
import { DeleteAmis} from '@/assets/backend';

const props = defineProps<UsersResponse>()
console.log(props)

const del = async () => {
    await DeleteAmis(props.id)
    console.log("delete")
}

</script>

<template>
    <div class="flex gap-4 mt-6 bg-white/20 rounded-xl px-6 py-4 items-center">
        <ImgProfil :record="props" :filename="props.avatar" class="w-11 h-11 rounded-full"/>
        <div class="w-full flex justify-between items-center">
            <div>
                <p class="font-Marigny font-bold text-xl">{{ props.username }}</p>
            </div>
            <Benne @click="del" />
        </div>   
    </div>
</template>