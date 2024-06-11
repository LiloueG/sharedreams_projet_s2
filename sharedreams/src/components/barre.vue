<script setup lang="ts">
import maison from '@/components/icons/maison.vue'
import dreamy from '@/components/icons/dreamy.vue'
import suivi from '@/components/icons/suivi.vue'
import forum from '@/components/icons/forum.vue'
import profil from '@/components/icons/profil.vue'
import { RouterLink } from 'vue-router'

</script>

<template>
    <div class="flex bg-black/60 w-screen fixed bottom-0 py-5 gap-8 rounded-t-xl justify-center">
        <RouterLink to="/accueil">
            <div class="flex flex-col items-center">
                <maison />
                <p class="text-xs mt-1">Accueil</p>
            </div>    
        </RouterLink>
        <RouterLink to="/dreamy">
            <div class="flex flex-col items-center">
                <dreamy />
                <p class="text-xs mt-1">Dreamy</p>
            </div>
        </RouterLink>
        <RouterLink to="/suivi">
            <div class="flex flex-col items-center">
                <suivi />
                <p class="text-xs mt-1">Suivi</p>
            </div>
        </RouterLink>
        <RouterLink to="/messagerie">
            <div class="flex flex-col items-center">
                <forum />
                <p class="text-xs mt-1">Messages</p>
            </div>
        </RouterLink>
        <RouterLink to="/profil">
            <div class="flex flex-col items-center">
                <profil />
                <p class="text-xs mt-1">Profil</p>
            </div>
        </RouterLink>
    </div>
</template>