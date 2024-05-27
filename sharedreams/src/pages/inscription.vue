<script setup lang="ts">
import {ref} from 'vue'
import { Adduser } from '@/assets/backend';
import { useRouter } from 'vue-router'
import { pb } from '@/assets/backend';

const router = useRouter()

const polconfident = ref(false);


const data = ref({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    mail: false,
});


const handleValidation = async () => {
    if (data.value.username === "" || data.value.email === "" || data.value.password === "" || data.value.passwordConfirm === "") {
        console.log("Veuillez remplir tous les champs");
    } else {
        if (polconfident.value === true) {
            if (data.value.password === data.value.passwordConfirm) {
                Adduser(data.value);
                router.push('/accueil');
                console.log(data.value)
            } else {
                console.log("Les mots de passe ne correspondent pas");
            }
        } else {
            console.log("Veuillez accepter la politique de confidentialité");
        }
    }
}
const currentuser = ref()
const doLoginOauth = async () => {
  const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' });
  currentuser.value = pb.authStore.model
  location.reload()
}

</script>

<template>
    <div class="w-screen h-screen px-5 flex flex-col gap-5">
        <div class="flex flex-col gap-8">
            <h1 class="flex justify-center mt-10 font-Marigny font-bold text-4xl">
                Sharedreams
            </h1>
            <div class="flex justify-center gap-4">
                <RouterLink to="/inscription">
                    <button class="bg-orange-400 border-2 border-orange-400 px-8 py-2 rounded-full font-Marigny font-bold text-">Inscription</button>
                </RouterLink>
                <RouterLink to="/connexion">
                    <button class="border-2 border-white px-8 py-2 rounded-full font-Marigny font-bold">Connexion</button>
                </RouterLink>
            </div>
        </div>
        <div class="container mx-auto mt-2">
        <form class="max-w-md mx-auto text-white">
            <div class="mb-5 ">
                <input type="text" id="name" v-model="data.username" class="w-full font-light placeholder:text-white px-4 py-2 border-white border-2 rounded-md bg-slate-200/50 " placeholder="Pseudo" />
            </div>
            <div class="mb-5">
                <input type="email" id="email" v-model="data.email" class="w-full font-light placeholder:text-white px-4 py-2 border-white border-2 bg-slate-200/50 rounded-md" placeholder="Email" />
            </div>
            <div class="mb-5">
                <input type="password" id="password" v-model="data.password" class="w-full placeholder:text-white font-light px-4 py-2 border-white border-2 bg-slate-200/50 rounded-md" placeholder="Mot de passe"/>
            </div>
            <div class="mb-5">
                <input type="password" id="confirmPassword" v-model="data.passwordConfirm" class="w-full font-light placeholder:text-white px-4 py-2 border-white border-2 bg-slate-200/50 rounded-md" placeholder="Confirmer le mot de passe"/>
            </div>
            <div class="flex gap-12">
            <label class="mb-4">
                <label for="polconfident" class="flex items-center text-gray-400">
                    <input type="checkbox" id="polconfident" v-model="polconfident" class="appearance-none mr-2 w-4 h-4 border-2 border-gray-300 rounded-sm bg-none checked:bg-blue-500" />
                    <span class="text-xs">J’approuve la politique de confidentialité ShareDreams</span>
                </label>
                <label for="sendmail" class="flex items-center text-gray-400 mt-2">
                    <input type="checkbox" id="sendmail" v-model="data.mail" class="appearance-none mr-2 w-5 h-4 border-2 border-gray-300 rounded-sm bg-none checked:bg-blue-500" />
                    <span class="text-xs">J’accepte de recevoir des e-mails promotionnels et informatifs de la part de ShareDreams</span>
                </label>
            </label>
            </div>
            <RouterLink to="/accueil">
                <button @click="handleValidation()" class="bg-orange-400 w-full rounded-full py-3 font-Marigny font-medium text-2xl mt-3">C'est parti !</button>
            </RouterLink>
        </form>
    </div>
    <div class="flex justify-center items-center gap-2">
        <span class="h-0.5 w-[25%] rounded bg-gradient-to-l from-black"></span>
        <p class="text-black font-sm">ou</p>
        <span class="h-0.5 w-[25%] rounded bg-gradient-to-r from-black"></span>
    </div>
    <div class="flex justify-center gap-5 drop-shadow-lg">
        <img @click="doLoginOauth" class="size-14" src="@/assets/image/google.svg" alt="connexion par google">
        <img class="size-14" src="@/assets/image/facebook.svg" alt="connexion par facebook">
    </div>
    </div>
</template>