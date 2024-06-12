<template>
    <div>
        <h2>Commentaires pour le rêve {{ dreamId }}</h2>
        <div v-if="loading">Chargement des commentaires...</div>
        <div v-else>
            <div v-for="comment in comments" :key="comment.id">
                <p>{{ comment.text }}</p>
                <small>Posté par {{ comment.user_id }}</small>
            </div>
            <form @submit.prevent="submitComment">
                <textarea v-model="newComment" placeholder="Ajouter un commentaire"></textarea>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getComments, addComment } from '@/assets/backend';

export default {
    props: ['id'],
    setup(props) {
        const dreamId = props.id;
        const comments = ref([]);
        const newComment = ref('');
        const loading = ref(true);

        const fetchComments = async () => {
            try {
                const response = await getComments(dreamId);
                comments.value = response;
            } catch (error) {
                console.error("Error while fetching comments:", error);
            } finally {
                loading.value = false;
            }
        };

        const submitComment = async () => {
            try {
                const comment = await addComment(dreamId, newComment.value);
                comments.value.push(comment);
                newComment.value = '';
            } catch (error) {
                console.error("Error while adding comment:", error);
            }
        };

        onMounted(() => {
            fetchComments();
        });

        return {
            dreamId,
            comments,
            newComment,
            loading,
            submitComment,
        };
    },
};
</script>