<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { pb } from '@/assets/backend'; // Assurez-vous que le chemin est correct
import send from '@/components/icons/send-2.vue';
import ImgProfil from '@/components/ImgProfil.vue';
import type { UsersResponse } from '@/pocketbase-types';
import retour from '@/components/icons/retour.vue';

const route = useRoute();

const userConversation = ref(null);
const users = ref([]);
const messages = ref([]);
const newMessage = ref('');

async function getUsersData() {
  try {
    const result = await pb.collection('conversation').getOne(route.params.uid, {
      expand: 'users',
    });
    users.value = result.expand.users;
  } catch (error) {
    console.error('Error loading user:', error);
  }
}

const getUsername = (id) => {
  const user = users.value.find(user => user.id === id);
  return user ? user.username : 'Unknown';
};

console.log(users)

async function loadMessages() {
  try {
    const result = await pb.collection('conversation_message').getFullList({
      filter: `conversation_id = "${route.params.uid}"`,
      expand: 'sender',
    });
    messages.value = result;
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

onMounted(async () => {
  await getUsersData();
  await loadMessages();
  userConversation.value = users.value.find(user => user.id !== pb.authStore.model!.id);
  pb.collection('conversation_message').subscribe('*', (e) => {
    if (e.record.conversation_id === route.params.uid) {
      handleMessageUpdate(e.record);
    }
  });
});

onUnmounted(() => {
  pb.collection('conversation_message').unsubscribe('*');
});

const props = defineProps<UsersResponse>()
console.log(props)


</script>

<template>
  <main class="text-white px-4 py-12">
    <div class="flex gap-3 items-center">
        <retour />
      <div class="w-11 h-11 bg-purple-600 rounded-full"></div>
      <div class="flex flex-col mb-4">
        <p v-if="userConversation" class="font-semibold">{{ userConversation.username }}</p>
        <span class="text-xs font-light text-white/75">En ligne</span>
      </div>
    </div>

    <div>
        <div v-for="message in messages" :key="message.id" class="flex gap-2 w-[70%]" :class="message.sender === pb.authStore.model!.id ? 'bg-violet-400' : 'bg-orange-400' ">
          <span class="font-semibold">{{ getUsername(message.sender) }}:</span>
          <p>{{ message.content }}</p>
        </div>
    </div>

    <form @submit.prevent="sendMessage" class="mt-20 text-black">
      <input v-model="newMessage" placeholder="Ecrire un message" />
      <button type="submit">
        <send />
      </button>
    </form>
  </main>
</template>

