<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getComments, addComment } from '@/assets/backend';
import type { CommentsResponse } from '@/pocketbase-types';
import CommentCard from '@/components/CommentCard.vue';

const route = useRoute();
const comments = ref<CommentsResponse[]>([]);
const newComment = ref('');
const dreamId = route.params.id as string;

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
        comments.value.unshift(comment); // Ajoute le nouveau commentaire en haut de la liste
        newComment.value = '';
    } catch (error) {
        console.error('Error posting comment:', error);
    }
}

onMounted(() => {
    loadComments();
});
</script>

<template>
    <div class="comments-page">
        <div class="comments-list">
            <CommentCard v-for="comment in comments" :key="comment.id" :comment="comment" />
        </div>
    </div>
</template>

<style scoped>
.comments-page {
    padding: 20px;
}
.comment-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
}
.comments-list {
    margin-top: 20px;
}
</style>
