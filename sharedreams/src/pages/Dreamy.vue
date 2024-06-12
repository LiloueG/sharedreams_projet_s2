<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Together from 'together-ai';
import barre from '@/components/barre.vue';

// Initialisation de l'API Together AI
const together = new Together({
  apiKey: 'de8d9d62faafd6bd630b77f39a39ecb256858171be50f93917021b5cb35195bc',
});

// Références pour stocker les messages et le nouveau message
const messages = ref<Array<{ user: string, text: string }>>([]);
const newMessage = ref('');
const isTyping = ref(false);
const messageCount = ref(0);
const showModal = ref(false);

// Message de base pour définir le contexte
const basePrompt = {
  role: 'system',
  content: "Tu es Dreamy, un petit robot astronaute trop mignon qui donne des conseils sur le sommeil et tu analyses les rêves. Tu es toujours joyeux et attentionné et tu fais toujours de ton mieux pour répondre aux questions de l'utilisateur. Tu fais des messages de jamais plus de 100 mots."
};

// Fonction pour envoyer un message à l'IA
const sendMessage = async () => {
  if (messageCount.value >= 3) {
    showModal.value = true;
    return;
  }

  if (newMessage.value) {
    messages.value.push({ user: 'You', text: newMessage.value });
    const currentMessage = newMessage.value; // Store the current message
    newMessage.value = ''; // Clear the input field immediately
    isTyping.value = true;
    messageCount.value++;

    try {
      const response = await together.chat.completions.create({
        messages: [
          basePrompt,
          ...messages.value.map(msg => ({
            role: msg.user === 'You' ? 'user' : 'assistant',
            content: msg.text
          })),
          { role: 'user', content: currentMessage } // Use the stored message
        ],
        model: 'meta-llama/Llama-3-8b-chat-hf',
      });

      const aiMessage = response.choices[0].message.content;
      messages.value.push({ user: 'AI', text: aiMessage });
    } catch (error) {
      console.error('Error communicating with Together AI:', error);
    } finally {
      isTyping.value = false;
    }
  }
};

// Gestion des réponses de l'IA
function handleAIResponse(event: CustomEvent<string>) {
  messages.value.push({ user: 'AI', text: event.detail });
}

// Ajout de l'écouteur d'événements monté
onMounted(() => {
  window.addEventListener('messageFromAI', handleAIResponse);
});

// Fonction pour rediriger vers Stripe
const Acheter = () => {
  window.location.href = 'https://buy.stripe.com/test_aEU3eSgKb5hJ30AfYY';
};
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4">
    <div class="bg-white/25 shadow-md rounded-lg w-full max-w-xl p-4">
      <div class="space-y-2 mb-4">
        <div class="flex flex-col space-y-2">
          <h1 class="font-Marigny text-2xl font-bold text-center">Discute avec Dreamy !</h1>
          <div v-for="(message, index) in messages" :key="index"
            :class="message.user === 'You' ? 'justify-end' : 'justify-start'" class="flex">
            <div
              :class="message.user === 'You' ? 'bg-violet-400 text-white self-end' : 'bg-orange-400 text-white self-start'"
              class="p-2 rounded-lg max-w-xs mx-2">
              <strong>{{ message.user }}:</strong> {{ message.text }}
            </div>
          </div>
          <div v-if="isTyping" class="flex justify-start">
            <div class="bg-orange-400 text-white self-start p-2 rounded-lg max-w-xs mx-2">
              <strong>Dreamy:</strong> Dreamy est en train d'écrire...
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <input v-model="newMessage" placeholder="Type your message here" @keyup.enter="sendMessage"
          class="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-violet-200 text-black" />
        <button @click="sendMessage" class="p-2 bg-violet-700 text-white rounded-r-lg hover:bg-violet-800">
          Send
        </button>
      </div>
    </div>
    <barre />




    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black/65 bg-opacity-50 z-50">
      <div class="text-white p-6 rounded-lg shadow-lg max-w-xl w-full">
        <h2 class="text-center text-xl font-semibold mb-6">
          Débloquez toutes les fonctionnalités de l'application avec un abonnement de seulement 2,99€ par mois.
        </h2>
        <div class="bg-violet-950 rounded-lg shadow-lg overflow-hidden">
          <div class="flex justify-between p-4 border-b border-gray-700">
            <div class="w-1/2 text-center">
              <p class="text-lg font-semibold">Dreamer</p>
              <p class="text-sm">Gratuit</p>
            </div>
            <div class="w-1/2 text-center">
              <p class="text-lg font-semibold">Dreamer+</p>
              <p class="text-sm">2,99€</p>
            </div>
          </div>
          <div class="p-4">
            <div class="grid grid-cols-2 gap-4">
              <div class="border-b border-gray-700 pb-2">
                <p>Partagez vos rêves avec vos amis</p>
                <div class="flex justify-between items-center mt-2">
                  <span>&#10003;</span>
                </div>
              </div>
              <div class="border-b border-gray-700 pb-2">
                <p>Personnalisation de votre profil</p>
                <div class="flex justify-between items-center mt-2">
                  <span>&#10003;</span>
                </div>
              </div>
              <div class="border-b border-gray-700 pb-2">
                <p>Chat avec Dreamy</p>
                <div class="flex justify-between items-center mt-2">
                  <span>3 messages/semaine</span>
                  
                </div>
              </div>
              <div class="border-b border-gray-700 pb-2">
                <p>Suivi des heures de sommeil</p>
                <div class="flex justify-between items-center mt-2">
                  <span>&#10003;</span>
                  
                </div>
              </div>
              <div class="border-b border-gray-700 pb-2">
                <p>Suivi complet</p>
                <div class="flex justify-between items-center mt-2">
                  <span>&#10007;</span>
                </div>
              </div>
              <div class="border-b border-gray-700 pb-2">
                <p>Messages GIFS</p>
                <div class="flex justify-between items-center mt-2">
                  <span>&#10003;</span>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-violet-950 text-center py-4">
            <button @click="Acheter"
              class="bg-orange-400 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded">
              DEVENIR DREAMER +
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional styles (if needed) */
</style>
