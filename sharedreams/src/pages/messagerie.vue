<!-- <script setup lang="ts">
import barre from '@/components/barre.vue'
import retour from '@/components/icons/retour.vue'
import search from '@/components/icons/search.vue'
import { getFriends } from '@/assets/backend'
import CardProfilMessage from '@/components/CardProfilMessage.vue'

const friends = await getFriends()
console.log(typeof friends[0].expand)


</script>

<template>
    <barre />
    <main class="px-4 py-12 min-h-screen">
        <div class="flex justify-between">
            <div class="flex gap-3">
                <RouterLink to="/accueil">
                    <retour />
                </RouterLink>
                <h1 class="font-Marigny text-2xl font-bold">Messages</h1>
            </div>
        </div>
        <form class="relative mt-6">
            <input type="search" class="w-full font-light placeholder:text-zinc-500 px-4 py-2 border-zync-500 rounded-xl bg-white/20 pl-12" placeholder="Rechercher..."/>
            <div class="absolute inset-y-0 left-0 flex items-center pl-3"> 
                <search />
            </div>
        </form>
        <div class="mt-8">
            <CardProfilMessage v-for="friend in friends[0].expand.user_friend" :key="friend.id" v-bind="friend"/>
        </div>
    </main>
</template> -->

<script setup lang="ts">
import barre from '@/components/barre.vue'
import retour from '@/components/icons/retour.vue'
import Messagesend from '@/components/Messagesend.vue'
import Messagereceive from '@/components/Messagesreceive.vue'
</script>

<template>
    <barre />
    <main class="px-4 py-12 min-h-screen">
        <div class="flex justify-between mb-9">
            <div class="flex gap-3">
                <RouterLink to="/accueil">
                    <retour />
                </RouterLink>
                <h1 class="font-Marigny text-2xl font-bold">Messages</h1>
            </div>
            </div>
            <div class="chat-container">
            <!-- Titre de la page de chat -->
                <h1>Chat</h1>
                <Messagesend />
                <Messagereceive />
            <!-- Zone d'affichage des messages -->
                <div class="messages">
                    <div v-for="(message, index) in messages" :key="index" class="message">
                    <strong>{{ message.user }}:</strong> {{ message.content }}
                </div>
            </div>
            <!-- Formulaire pour envoyer un nouveau message -->
            <form @submit.prevent="sendMessage">
                <input class="text-black" v-model="newMessage" type="text" placeholder="Tapez votre message..." required />
                <button type="submit">Envoyer</button>
            </form>
        </div>    
    </main>
</template>
  
  
  
  <style scoped>
  .chat-container {
    max-width: 600px;
    margin: auto;
    padding: 1em;
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