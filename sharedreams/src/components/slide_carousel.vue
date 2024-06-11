<template>
    <div class="bg-white/25 text-white p-5 rounded-xl m-2.5 mx-auto max-w-md">
      <div class="flex justify-center items-center">
        <h1 class="text-center font-bold text-xl">{{ formatDate(user.day) }}</h1>
      </div>
      <div class="flex flex-col items-center">
        <div class="text-center mt-5">
          <p class="font-bold">Temps de sommeil</p>
          <h2>{{ formatDuration(user.sleepHours) }}</h2>
        </div>
        <div class="text-center mt-5">
          <div class="text-center mt-5">
            <p class="font-bold font-Poppins">Qualité de sommeil</p>
            <h3>{{ user.sleepQuality }}</h3>
            <button class="bg-orange-400 text-white p-2.5 rounded-full cursor-pointer mt-4 hover:bg-orange-500">Voir les statistiques</button>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">
  import type { SleepDataResponse, SleepDataRecord } from '@/pocketbase-types';
  import { pb } from '@/assets/backend';

  const user = await pb.collection('users').getOne(pb.authStore.model.id)
  console.log(user)

  const props = defineProps<SleepDataResponse<any>>();
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long', 
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }
  
  const formatDuration = (hours) => {
      const totalMinutes = hours * 60;
      const h = Math.floor(totalMinutes / 60);
      const m = totalMinutes % 60;
      return `${h}h ${m} min`;
  }
  </script>
  
  <style scoped>
  .icon {
    width: 50px;
    margin-bottom: 10px;
  }
  </style>