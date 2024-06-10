<script setup lang="ts">
import retour from '@/components/icons/retour.vue'
import { ref } from 'vue'
import { UpadateUser } from '@/assets/backend'

const data = ref({
    username: "",
    mail: "",
    password: "",
    passwordConfirm: "",
    biography: "",
    avatar: "",
});

const handleValidation = async () => {
    if (data.value.username === "" || data.value.mail === "" || data.value.password === "" || data.value.passwordConfirm === "" || data.value.biography === "" || data.value.avatar === "") {
    } 
    else {
        if (polconfident.value === true) {
            if (data.value.password === data.value.passwordConfirm) {
                UpadateUser(data.value);
                console.log(data.value)
            } else {
                console.log("Les mots de passe ne correspondent pas");
            }
        } else {
            console.log("Veuillez accepter la politique de confidentialité");
        }
    }
}


</script>

<template>
    <main class="px-4 py-12 min-h-screen">
        <div class="flex gap-3 items-center">
            <RouterLink to="/accueil">
                <retour class="w-5 h-5"/>
            </RouterLink>
            <h1 class="font-Marigny text-2xl font-bold">Modification du profil</h1>
        </div>
        <form class="mt-6">
            <div>
                <label for="username" class="text-gray-400">Nom d'utilisateur</label>
                <input type="text" id="username" v-model="username" class="w-full font-light placeholder:text-slate-200 px-4 py-2 border-zync-500 rounded-xl bg-white/20" placeholder="Nom d'utilisateur"/>
            </div>
            <div class="mt-4">
                <label for="email" class="text-gray-400">Adresse mail</label>
                <input type="email" id="email" v-model="mail" class="w-full font-light placeholder:text-slate-200 px-4 py-2 border-zync-500 rounded-xl bg-white/20" placeholder="Adresse mail"/>
            </div>
            <div class="mt-4">
                <label for="password" class="text-gray-400">Mot de passe</label>
                <input type="password" id="password" v-model="password" class="w-full font-light placeholder:text-slate-200 px-4 py-2 border-zync-500 rounded-xl bg-white/20" placeholder="Mot de passe"/>
            </div>
            <div class="mt-4">
                <label for="password" class="text-gray-400">Confirmer le mot de passe</label>
                <input type="password" id="password" v-model="passwordConfirm" class="w-full font-light placeholder:text-slate-200 px-4 py-2 border-zync-500 rounded-xl bg-white/20" placeholder="Confirmer le mot de passe"/>
            </div>
            <div class="mt-4">
                <label for="avatar" class="text-gray-400">Avatar</label>
                <input type="file" id="avatar" class="w-full font-light placeholder:text-slate-200 px-4 py-2 border-zync-500 rounded-xl bg-white/20" placeholder="Avatar"/>
            </div>
            <div class="mt-4">
                <label for="description" class="text-gray-400">Description</label>
                <textarea id="description" v-model="biography" class="w-full font-light placeholder:text-slate-200 px-4 py-2 border-zync-500 rounded-xl bg-white/20" placeholder="Description"></textarea>
            </div>
        </form>
    </main>
</template>