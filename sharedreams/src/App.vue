<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import { pb } from '@/assets/backend';
import LoadingScreen from './components/LoadingScreen.vue';

const router = useRouter();
const isLoading = ref(true);



onMounted(() => {
  const redirectTo = pb.authStore.isValid ? '/accueil' : '/nuage';

  const loadingMinimumTime = new Promise(resolve => setTimeout(resolve, 1600)); 


  Promise.all([
    router.push(redirectTo),
    loadingMinimumTime
  ]).finally(() => {
    isLoading.value = false; 
  });
});
</script>

<template>
  <div>
    <LoadingScreen v-if="isLoading" />
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>