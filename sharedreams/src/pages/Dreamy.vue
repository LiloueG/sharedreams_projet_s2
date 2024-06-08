<template>
  <div class="chat-container">
    <!-- Titre de la page de chat -->
    <h1>Chat</h1>

    <!-- Zone d'affichage des messages -->
    <div class="messages">
      <div v-for="(message, index) in messages" :key="index" class="message">
        <strong>{{ message.user }}:</strong> {{ message.text }}
      </div>
    </div>

    <!-- Formulaire pour envoyer un nouveau message -->
    <form @submit.prevent="sendMessage">
      <input class="text-black" v-model="newMessage" type="text" placeholder="Tapez votre message..." required />
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import { sendToTogetherAI } from '@/assets/backend';
import { handleAIResponse } from 'Dreamy.vue';

export default defineComponent({
  name: 'Chat',
  setup() {
    const messages = ref<Array<{ user: string, text: string }>>([]);
    const newMessage = ref('');

    const sendMessage = async () => {
      if (newMessage.value) {
        sendToTogetherAI(newMessage.value);
        messages.value.push({ user: 'You', text: newMessage.value });
        newMessage.value = '';
      }
    };

    onMounted(() => {
      window.addEventListener('messageFromAI', handleAIResponse);
    });

    return { messages, newMessage, sendMessage };
  },
});
//ecris le code d'handleAIResponse ici
function handleAIResponse(event: CustomEvent<string>) {
  messages.value.push({ user: 'AI', text: event.detail });
}


</script>

<style scoped>
.chat-container {
  max-width: 600px;
  margin: auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.messages {
  margin-bottom: 1em;
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 1em;
  border-radius: 8px;
}

.message {
  margin-bottom: 1em;
}

form {
  display: flex;
}

input {
  flex: 1;
  padding: 0.5em;
  margin-right: 0.5em;
}

button {
  padding: 0.5em;
}
</style>