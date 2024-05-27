<script setup lang="ts">
import happy from '@/components/icons/happy.vue';
import retour from '@/components/icons/retour.vue'
import heart from '@/components/icons/heart.vue';
import sad from '@/components/icons/sad.vue';
import tired from '@/components/icons/tired.vue';
import scared from '@/components/icons/scared.vue';
import { ref } from "vue";
import { createDream, pb } from '@/assets/backend';
import { useRouter } from 'vue-router';

const layout = ref("dream");
const dreamy = ref("");
const dream = ref("");
const router = useRouter();

const handleValidation = async () => {
    if (dream.value === "" || dreamy.value === "") {
        console.log("Veuillez remplir tous les champs");
    } else {
        createDream({ dream: dream.value, emojis: dreamy.value, dreamnight: layout.value, user: pb.authStore.model.id });
        router.push('/accueil');
    }
}


</script>

<template>
    <main class="px-4 py-12 min-h-screen">
        <div class="flex gap-3 items-center">
            <RouterLink to="/accueil">
                <retour class="w-5 h-5"/>
            </RouterLink>
            <h1 class="font-Marigny text-2xl font-bold">Ecrivez votre rêve !</h1>
        </div>
        
        <div class="flex justify-center gap-4 mt-12">
            <button @click="layout = 'dream'" class=" border-2 px-8 py-2 rounded-full font-Marigny font-semibold" :class="{ 'border-orange-400 border-2 bg-orange-400': layout == 'dream' }">Rêve</button>
            <button @click="layout = 'nightmare'" class="border-2 px-8 py-2 rounded-full font-Marigny font-semibold" :class="{ 'border-orange-400 border-2 bg-orange-400': layout == 'nightmare' }">Cauchemar</button>
        </div>
        <p class="font-Marigny mt-6">Comment vous sentez vous ?</p>
        <div class="flex">
            <happy @click="dreamy = 'happy'" class="h-16" :class="{ 'scale-125':dreamy == 'happy' }"/>
            <heart @click="dreamy = 'heart'" class="h-16" :class="{ 'scale-125':dreamy == 'heart' }"/>
            <sad @click="dreamy = 'sad'" class="h-16" :class="{ 'scale-125':dreamy == 'sad' }"/>
            <tired @click="dreamy = 'tired' " class="h-16" :class="{ 'scale-125':dreamy == 'tired' }"/>
            <scared @click="dreamy = 'scared'" class="h-16" :class="{ 'scale-125':dreamy == 'scared' }"/>
        </div>
        <form>
            <div class="mt-6">
                <textarea type="text" id="name" v-model="dream" class="w-full h-64 font-light placeholder:text-white px-4 py-2 border-white border-2 rounded-md bg-slate-200/50 " placeholder="Ecrivez votre message" />
            </div>
        </form>
        <div class="flex justify-end mt-2">
            <button @click="handleValidation()" class="bg-orange-400 border-2 border-orange-400 px-8 py-2 rounded-full font-Marigny font-semibold self-end ">Publier</button>
        </div>
    </main>
</template>