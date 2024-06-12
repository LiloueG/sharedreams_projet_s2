<template>
    <div>
      <h1>Commentaires pour le rêve {{ dreamId }}</h1>
      <div v-if="loading">Chargement des commentaires...</div>
      <div v-else>
        <div v-for="comment in comments" :key="comment.id">
          <p>{{ comment.content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router/auto';
  import pb from '@/pocketbase'; // Ajustez le chemin selon votre configuration
  
  const route = useRoute();
  const dreamId = ref(route.params.id);
  const comments = ref([]);
  const loading = ref(true);
  
  const fetchComments = async () => {
    try {
      const response = await pb.collection('comments').getFullList({
        filter: `dream_id = '${dreamId.value}'`,
      });
      comments.value = response;
    } catch (error) {
      console.error("Error while fetching comments:", error);
    } finally {
      loading.value = false;
    }
  };
  
  onMounted(() => {
    fetchComments();
  });
  </script>
  
  <style scoped>
  /* Ajoutez les styles ici */
  </style>
  