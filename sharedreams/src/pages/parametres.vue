<script setup lang="ts">
import search from '@/components/icons/search.vue';
import compte from '@/components/icons/compte.vue'
import notification from '@/components/icons/notification.vue'
import themes from '@/components/icons/theme.vue'
import premium from '@/components/icons/premium.vue'
import Support from '@/components/icons/support.vue';
import Security from '@/components/icons/security.vue';
import deconnexion from '@/components/icons/logout.vue';
import { logout } from '@/assets/backend';
import retour from '@/components/icons/retour.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function logOutPush() {
    logout();
    router.push('/nuage');
}

</script>

<template>
    <main class="px-4 py-12 min-h-screen">
        <div class="flex gap-4 mb-8">
            <RouterLink to="/profil">
                <retour class="w-5 h-5"/>
            </RouterLink>
            <h1 class="font-Marigny font-bold text-3xl ">Paramètres</h1>
        </div>
        <form class="relative mt-6">
            <input type="search" class="w-full font-light placeholder:text-zinc-500 px-4 py-3 rounded-full bg-purple-950 pl-14 shadow-lg" placeholder="Rechercher"/>
            <div class="absolute inset-y-0 left-0 flex items-center pl-5"> 
                <search />
            </div> 
        </form>
        <div class="bg-purple-950 mt-7 p-5 rounded-xl">
            <div class="flex gap-3 mb-9">
                <compte />
                <p>Votre compte</p>
            </div>
            <div class="flex gap-3 mb-9">
                <notification />
                <p>Notification</p>
            </div>
            <div class="flex gap-3 mb-9">
                <themes />
                <p>Thèmes</p>
            </div>
            <div class="flex gap-3">
                <premium />
                <p>Premium</p>
            </div>
        </div>
        <div class="bg-purple-950 mt-7 p-5 rounded-xl">
            <div class="flex gap-3 mb-9">
                <Security />
                <p>Sécurité</p>
            </div>
            <div class="flex gap-3 mb-9">
                <support />
                <p>Support</p>
            </div>
            <div class="flex gap-3">
                <deconnexion class="text-red-600"/>
                <button @click="logOutPush()" class="text-red-600">Déconnexion</button>
            </div>
        </div>
    </main>
</template>
