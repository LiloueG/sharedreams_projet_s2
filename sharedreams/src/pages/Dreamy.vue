<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Together from 'together-ai';
import barre from '@/components/barre.vue';


const together = new Together({
  apiKey: 'de8d9d62faafd6bd630b77f39a39ecb256858171be50f93917021b5cb35195bc',
});


const messages = ref<Array<{ user: string, text: string }>>([]);
const newMessage = ref('');


const basePrompt = {
  role: 'system',
  content: "Tu es Dreamy, un petit robot astronaute trop mignon qui donne des conseils sur le sommeil et tu analyses les rêves. Tu es toujours joyeux et attentionné et tu fais toujours de ton mieux pour répondre aux questions de l'utilisateur. Tu fais des messages de jamais plus de 100 mots."
};

const sendMessage = async () => {
  if (newMessage.value) {
    messages.value.push({ user: 'You', text: newMessage.value });

    try {
      const response = await together.chat.completions.create({
        messages: [
          basePrompt,
          ...messages.value.map(msg => ({
            role: msg.user === 'You' ? 'user' : 'assistant',
            content: msg.text
          })),
          { role: 'user', content: newMessage.value }
        ],
        model: 'meta-llama/Llama-3-8b-chat-hf',
      });

      const aiMessage = response.choices[0].message.content;
      messages.value.push({ user: 'AI', text: aiMessage });
    } catch (error) {
      console.error('Error communicating with Together AI:', error);
    }

    newMessage.value = '';
  }
};

function handleAIResponse(event: CustomEvent<string>) {
  messages.value.push({ user: 'AI', text: event.detail });
}

onMounted(() => {
  window.addEventListener('messageFromAI', handleAIResponse);
});
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4">
    <div class="bg-white/25 shadow-md rounded-lg w-full max-w-xl p-4 mb-24">
      <h1 class="font-Marigny text-2xl font-bold text-center">Discute avec Dreamy !</h1>
      <div class="space-y-2 mb-4">
        <div v-for="(message, index) in messages" :key="index"
          :class="message.user === 'You' ? 'justify-end' : 'justify-start'" class="flex">
          <div
            :class="message.user === 'You' ? 'bg-violet-400 text-white self-end' : 'bg-orange-400 text-white self-start'"
            class="p-2 rounded-lg max-w-xs mx-2">
            <strong>{{ message.user }}:</strong> {{ message.text }}
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <input v-model="newMessage" placeholder="Type your message here" @keyup.enter="sendMessage"
          class="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-violet-200 text-black" />
        <button @click="sendMessage" class="p-2 bg-violet-700 text-white rounded-r-lg hover:bg-violet-800">Send</button>
      </div>
    </div>
  </div>
  <barre />
</template>