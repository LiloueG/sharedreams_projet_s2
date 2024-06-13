<script setup lang="ts">
import maison from '@/components/icons/maison.vue';
import dreamy from '@/components/icons/dreamy.vue';
import suivi from '@/components/icons/suivi.vue';
import forum from '@/components/icons/forum.vue';
import profil from '@/components/icons/profil.vue';
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="flex bg-black/60 w-screen fixed bottom-0 py-5 gap-8 rounded-t-xl justify-center">
    <RouterLink to="/accueil" class="flex flex-col items-center">
      <maison :class="{ 'text-orange-400': route.path === '/accueil' || route.path === '/amis'}"/>
      <p class="text-xs mt-1" :class="{ 'text-orange-400': route.path === '/accueil' || route.path === '/amis' || route.path === '/ajout-amis'}">Accueil</p>
    </RouterLink>
    <RouterLink to="/dreamy" class="flex flex-col items-center">
      <dreamy :class="{ 'text-orange-400': route.path === '/dreamy' }"/>
      <p class="text-xs mt-1" :class="{ 'text-orange-400': route.path === '/dreamy' }">Dreamy</p>
    </RouterLink>
    <RouterLink to="/suivi" class="flex flex-col items-center">
      <suivi :class="{ 'text-orange-400': route.path === '/suivi' || route.path === '/statistiques' }"/>
      <p class="text-xs mt-1" :class="{ 'text-orange-400': route.path === '/suivi' || route.path === '/statistiques' }">Suivi</p>
    </RouterLink>
    <RouterLink to="/messagerie" class="flex flex-col items-center">
      <forum :class="{ 'text-orange-400': route.path === '/messagerie' }"/>
      <p class="text-xs mt-1" :class="{ 'text-orange-400': route.path === '/messagerie' }">Messages</p>
    </RouterLink>
    <RouterLink to="/profil" class="flex flex-col items-center">
      <profil :class="{ 'text-orange-400': route.path === '/profil' || route.path === '/parametre'}"/>
      <p class="text-xs mt-1" :class="{ 'text-orange-400': route.path === '/profil' || route.path === '/parametre'} ">Profil</p>
    </RouterLink>
  </div>
</template>
