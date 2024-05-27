<script setup lang="ts">
import { ref } from "vue";
import { logIn } from '@/assets/backend';
import { useRouter } from 'vue-router'

const router = useRouter()


const rememberMe = ref(false);

const data = ref({
    email: "",
    password: "",
});

const handleValidation = async () => {
    if (data.value.email === "" || data.value.password === "") {
        console.log("Veuillez remplir tous les champs");
    } else {
        await logIn(data.value);
        router.push('/accueil');
    }
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
                    <button class="border-2 border-white px-8 py-2 rounded-full font-Marigny font-bold">Inscription</button>
                </RouterLink>
                <RouterLink to="/connexion">
                    <button class="bg-orange-400 border-2 border-orange-400 px-8 py-2 rounded-full font-Marigny font-bold">Connexion</button>
                </RouterLink>
            </div>
        </div>
        <div class="container mx-auto mt-2">
        <form class="max-w-md mx-auto mt-2">
            <div class="mb-5">
                <input type="email" id="email" v-model="data.email" class="w-full font-light placeholder:text-white px-4 py-2 border-white border-2 rounded-md bg-slate-200/50" placeholder="Email" />
            </div>
            <div>
                <input type="password" id="password" v-model="data.password" class="w-full font-light placeholder:text-white px-4 py-2 border-white border-2 rounded-md bg-slate-200/50" placeholder="Mot de passe" />
            </div>
            <div class="flex gap-12 justify-between items-center mt-5">
                <label class="">
                    <label for="remember" class="flex">
                        <input type="checkbox" id="remember" v-model="rememberMe" class="appearance-none mr-2 w-4 h-4 border-2 border-gray-300 rounded-sm bg-none items-center checked:bg-blue-500 " />
                        <span class="text-xs">Se souvenir de moi</span>
                    </label>
                </label>
                <a class="text-xs hover:underline-offset-4" href="">Mot de passe oublié ?</a>
            </div>
            <RouterLink to="/accueil">
                <div @click="handleValidation()" class="bg-orange-400 w-full text-center rounded-full py-3 font-Marigny font-medium text-2xl mt-3 ">C'est parti !</div>
            </RouterLink>
        </form>
    </div>
    <div class="flex justify-center items-center gap-2">
        <span class="h-0.5 w-[25%] rounded bg-gradient-to-l from-black"></span>
        <p class="text-black font-sm">ou</p>
        <span class="h-0.5 w-[25%] rounded bg-gradient-to-r from-black"></span>
    </div>
    <div class="flex justify-center gap-5 drop-shadow-lg">
        <img class="size-14" src="@/assets/image/google.svg" alt="connexion par google">
        <img class="size-14" src="@/assets/image/facebook.svg" alt="connexion par facebook">
    </div>
</div>
</template>