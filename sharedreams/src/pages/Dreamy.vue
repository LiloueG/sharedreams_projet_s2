<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Together from 'together-ai';
import retour from '@/components/icons/retour.vue';
import send from '@/components/icons/send-2.vue';

// Initialisation de l'API Together AI
const together = new Together({
  apiKey: '250f2b1a0c51d6eafe13b11be2a721feaa526d797cd3813940231485a56dbcce',
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
  content: "Tu es Dreamy, un petit robot astronaute trop mignon qui donne des conseils sur le sommeil et tu analyses les rêves. Tu es toujours joyeux et attentionné et tu fais toujours de ton mieux pour répondre aux questions de l'utilisateur. Tu fais des messages de 100."
};

// Fonction pour envoyer un message à l'IA
const sendMessage = async () => {
  if (messageCount.value >= 3) {
    showModal.value = true;
    return;
  }

  if (newMessage.value) {
    messages.value.push({ user: 'Vous', text: newMessage.value });
    const currentMessage = newMessage.value; // Store the current message
    newMessage.value = ''; // Clear the input field immediately
    isTyping.value = true;
    messageCount.value++;

    try {
      const response = await together.chat.completions.create({
        messages: [
          basePrompt,
          ...messages.value.map(msg => ({
            role: msg.user === 'Vous' ? 'user' : 'assistant',
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
  <main class="px-4 pt-12 pb-36 h-screen">
    <div class="flex gap-3 pb-4">
      <RouterLink to="/accueil">
        <retour />
      </RouterLink>
      <h1 class="font-Marigny text-2xl font-bold">Discute avec Dreamy </h1>
    </div>
    <div class="flex flex-col h-full">
      <div class="flex-1 overflow-y-auto mb-4 h-[80vh] space-y-2">
        <div class="flex flex-col space-y-2">
          <div v-for="(message, index) in messages" :key="index" :class="message.user === 'Vous' ? 'justify-end' : 'justify-start'" class="flex">
            <div :class="message.user === 'Vous' ? 'bg-violet-400 text-white self-end' : 'bg-orange-400 text-white self-start w-[70%]'" class="p-2 rounded-lg max-w-xs mx-2">
              <strong>{{ message.user }}:</strong> {{ message.text }}
            </div>
          </div>
          <div v-if="isTyping" class="flex justify-start">
            <div class="bg-orange-400 text-white self-start p-2 rounded-lg max-w-xs mx-2 w-[70%]">
              <strong>Dreamy:</strong> Dreamy est en train d'écrire...
            </div>
          </div>
        </div>
      </div>
      <div class="flex-none fixed bottom-12 w-full pr-8">
        <div class="flex items-center">
          <input v-model="newMessage" placeholder="Votre message..." @keyup.enter="sendMessage" class="p-3 pl-5 rounded-full text-black w-full" />
          <button @click="sendMessage" class="absolute bg-orange-400 text-white p-2 right-9 rounded-full">
            <send />
          </button>
        </div>
      </div>
    </div>
    
    
    <!-- Popup pour l'achat d'un abonnement -->
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
    </main>
  </template>
