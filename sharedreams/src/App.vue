<script setup lang="ts">
import { RouterView } from 'vue-router';
import { pb } from '@/assets/backend'
import { useRouter } from 'vue-router'
import barre from '@/components/barre.vue'

const router = useRouter()

console.log(pb.authStore.isValid);

if (!pb.authStore.isValid) {
  router.push('/nuage')
}

</script>

<template>
  <!-- <button @click="pb.authStore.clear">LOGOUT</button> -->
  <Suspense>
    <RouterView />
  </Suspense>
  <barre />
</template>
