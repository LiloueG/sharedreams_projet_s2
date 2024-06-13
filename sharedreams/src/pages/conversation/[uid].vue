<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { pb } from '@/assets/backend'; // Assurez-vous que le chemin est correct
import send from '@/components/icons/send-2.vue';
import ImgProfil from '@/components/ImgProfil.vue';
import type { UsersResponse } from '@/pocketbase-types';
import retour from '@/components/icons/retour.vue';

const route = useRoute();

const userConversation = ref();
const users = ref([]);
const messages = ref([]);
const newMessage = ref('');
const messagesContainer = ref(null);

async function getUsersData() {
  try {
    const result = await pb.collection('conversation').getOne(route.params.uid, {
      expand: 'users',
    });
    users.value = result.expand.users;
    userConversation.value = result.expand.users.find(user => user.id !== pb.authStore.model!.id);
  } catch (error) {
    console.error('Error loading user:', error);
  }
}

const getUsername = (id) => {
  const user = users.value.find(user => user.id === id);
  return user ? user.username : 'Unknown';
};

async function loadMessages() {
  try {
    const result = await pb.collection('conversation_message').getFullList({
      filter: `conversation_id = "${route.params.uid}"`,
      expand: 'sender',
    });
    messages.value = result;
    scrollToBottom();
  } catch (error) {
    console.error('Error loading messages:', error);
  }
}

const handleMessageUpdate = (updatedMessage) => {
  const index = messages.value.findIndex(msg => msg.id === updatedMessage.id);
  if (index !== -1) {
    messages.value[index] = updatedMessage;
  } else {
    messages.value.push(updatedMessage);
  }
  scrollToBottom();
};

const sendMessage = async () => {
  if (!newMessage.value.trim()) return;

  try {
    const message = await pb.collection('conversation_message').create({
      conversation_id: route.params.uid,
      content: newMessage.value,
      sender: pb.authStore.model!.id,
    });
    newMessage.value = '';
    handleMessageUpdate(message);
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

onMounted(async () => {
  await getUsersData();
  await loadMessages();
  pb.collection('conversation_message').subscribe('*', (e) => {
    if (e.record.conversation_id === route.params.uid) {
      handleMessageUpdate(e.record);
    }
  });
});

onUnmounted(() => {
  pb.collection('conversation_message').unsubscribe('*');
});
</script>


<template>
    <main class="text-white px-4 py-12 flex flex-col h-screen">
      <div class="flex gap-3 items-center mb-4">
        <RouterLink to="/messagerie">
          <retour />
        </RouterLink>
        <div class="flex gap-3">
          <ImgProfil v-if="userConversation" :record="userConversation" :filename="userConversation.avatar" class="w-11 h-11 rounded-full" />
          <div class="flex flex-col">
            <p v-if="userConversation" class="font-semibold font-Marigny text-xl">{{ userConversation.username }}</p>
            <span class="text-xs font-light text-white/75">En ligne</span>
          </div>
        </div>
      </div>
  
      <div ref="messagesContainer" class="flex flex-col overflow-y-scroll space-y-3 mb-9 pb-9 message-container">
        <div v-for="message in messages" :key="message.id" class="flex gap-2 w-[70%] rounded-2xl p-2" :class="message.sender === pb.authStore.model!.id ? 'bg-violet-400 self-end' : 'bg-orange-400' ">
          <div class="flex flex-col ml-2">
            <span class="font-semibold">{{ getUsername(message.sender) }}</span>
            <p>{{ message.content }}</p>
          </div>
        </div>
      </div>
  
      <form @submit.prevent="sendMessage" class="text-black flex-none fixed bottom-12 w-full pr-8">
        <input v-model="newMessage" placeholder="Ecrire un message" class="p-3 pl-5 rounded-full text-black w-full" />
        <div>
          <button type="submit" class="absolute bg-orange-400 text-white p-2 flex justify-center items-center right-9 bottom-1 rounded-full">
            <send />
          </button>
        </div>
      </form>
    </main>
  </template>
  
  <style scoped>
  .message-container {
    flex-grow: 1;
    overflow-y: auto;
  }
  </style>
  
