<template>
  <main class="px-4 py-12 min-h-screen">
    <div class="flex justify-between">
      <div class="flex gap-3">
        <RouterLink to="/accueil">
          <retour />
        </RouterLink>
        <h1 class="font-Marigny text-2xl font-bold">Commentaires</h1>
      </div>
    </div>
    <div class="mt-8">
      <div v-for="comment in comments" :key="comment.id" class="mb-4">
        <p class="font-bold">{{ comment.author }}</p>
        <p>{{ comment.content }}</p>
      </div>
      <div class="mt-6">
        <textarea v-model="newComment" placeholder="Ajoutez un commentaire..." class="w-full p-2 border"></textarea>
        <button @click="addComment" class="mt-2 px-4 py-2 bg-blue-500 text-white">Publier</button>
      </div>
    </div>
  </main>
</template>

<script>
import { RouterLink } from 'vue-router'
import retour from '@/components/icons/retour.vue'
import { ref } from 'vue'

export default {
  components: {
    retour,
    RouterLink,
  },
  setup() {
    const comments = ref([
      { id: 1, author: 'Alice', content: 'Super article !' },
      { id: 2, author: 'Bob', content: 'Merci pour les infos.' },
    ]);
    const newComment = ref('');

    const addComment = () => {
      if (newComment.value.trim()) {
        const nextId = comments.value.length + 1;
        comments.value.push({
          id: nextId,
          author: 'Anonyme',
          content: newComment.value,
        });
        newComment.value = '';
      }
    };

    return { comments, newComment, addComment };
  },
}
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>