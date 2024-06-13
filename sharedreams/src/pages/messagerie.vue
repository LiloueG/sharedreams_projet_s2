<script setup lang="ts">
import { ref, onMounted, type DefineProps } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import { pb } from '@/assets/backend'; // Assurez-vous que le chemin est correct
import ImgProfil from '@/components/ImgProfil.vue';
import retour from '@/components/icons/retour.vue';
import barre from '@/components/barre.vue';
import send from '@/components/icons/send-2.vue';

const conversations = ref([]);

const getUser = (users) => {
    return users.find(user => user.id !== pb.authStore.model!.id);
};

onMounted(async () => {
    if (pb.authStore.isValid) {
        conversations.value = await pb.collection('conversation').getFullList({
            filter: `users ~ "${pb.authStore.model!.id}"`,
            expand: `users`,
        });
    }   
});


</script>

<template>
    <barre />
    <main class="text-white px-4 py-12">
        
        <div class="flex gap-3">
            <RouterLink to="/accueil">
                <retour />
            </RouterLink>
            <h1 class="text-3xl font-bold mb-5 font-Marigny">Messagerie</h1>
        </div>
        <div class="flex flex-col gap-3">
            <div v-for="conversation in conversations" :key="conversation.id">
                <RouterLink :to="'conversation/' + conversation.id" class="py-3 px-5 bg-white/20 flex rounded-xl justify-between items-center">
                    <div class="flex gap-3">
                        <ImgProfil :record="getUser(conversation.expand.users)" :filename="getUser(conversation.expand.users).avatar" class="w-11 h-11 rounded-full"/>
                        <div class="flex flex-col">
                            <p class="font-semibold">{{ getUser(conversation.expand.users).username }}</p>
                            <span class="text-xs font-light text-white/75">En ligne</span>
                        </div>
                    </div>
                    <send class="w-5 h-5 text-white" />
                </RouterLink>
            </div>
        </div>
    </main>
</template>

<style scoped>
/* Ajoutez des styles supplémentaires si nécessaire */
</style>
