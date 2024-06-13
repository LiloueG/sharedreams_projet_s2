<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getComments, addComment } from '@/assets/backend';
import type { CommentsResponse } from '@/pocketbase-types';
import retour from '@/components/icons/retour.vue';
import send from '@/components/icons/send-2.vue';

const route = useRoute();
const dreamId = route.params.id as string;
const comments = ref<CommentsResponse[]>([]);
const newComment = ref('');


async function loadComments() {
    try {
        comments.value = await getComments(dreamId);
    } catch (error) {
        console.error('Error loading comments:', error);
    }
}

async function postComment() {
    if (!newComment.value.trim()) return;

    try {
        const comment = await addComment(dreamId, newComment.value);
        comments.value.unshift(comment); // Add the new comment at the top of the list
        newComment.value = '';
    } catch (error) {
        console.error('Error posting comment:', error);
    }
}

onMounted(() => {
    loadComments();
});

console.log(comments);

</script>

<template>
    <div class="comments-page px-4 py-12 min-h-screen">
        <div class="flex justify-between">
            <div class="flex gap-3">
                <RouterLink to="/accueil">
                    <retour />
                </RouterLink>
                <h1 class="font-Marigny text-2xl font-bold">Commentaires</h1>
            </div>
        </div>

        <form @submit.prevent="postComment" class="relative mt-6 flex items-center ">
            <input v-model="newComment" type="text" class="w-full font-light placeholder:text-zinc-500 px-5 py-3 border-zinc-500 rounded-full bg-white/20 " placeholder="Écrire un commentaire..." />
            <button type="submit" class="absolute bg-orange-400 text-white p-2 right-1 rounded-full">
                <send />
            </button>
        </form>

        <div class="comments-list mt-6">
            <div v-for="comment in comments" :key="comment.id" class="comment-card bg-white/20 rounded-xl p-4 mb-4">
              <div class="px-4">
                <p class="font-Marigny font-bold text-xl">{{ comment.expand.user_id[0].username }}</p>
                <small class="text-gray-500">le {{ new Date(comment.created).toLocaleString() }}</small>
                <p class="text-lg">{{ comment.text }}</p>
              </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.comment-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
}
.comments-list {
    margin-top: 20px;
}
.comment-card {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
}
</style>
