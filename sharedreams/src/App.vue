<script setup lang="ts">
import { RouterView } from 'vue-router';
import { pb } from '@/assets/backend'
import { useRouter } from 'vue-router'



const router = useRouter()

console.log(pb.authStore.isValid);

if (!pb.authStore.isValid) {
  router.push('/nuage')
}
else {
  router.push('/accueil')
}


</script>

<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>
