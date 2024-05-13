<script>
</script>

<template>
    <div class="w-screen h-screen px-5 flex flex-col gap-5">
        <div class="flex flex-col gap-8">
            <h1 class="flex justify-center mt-10 font-Marigny font-bold text-4xl">
                Sharedreams
            </h1>
            <div class="flex justify-center gap-4">
                <RouterLink to="/inscription">
                    <button class="border-2 border-white px-8 py-3 rounded-full font-Marigny font-bold">Inscription</button>
                </RouterLink>
                <RouterLink to="/connexion">
                    <button class="bg-orange-400 border-2 border-orange-400 px-8 py-3 rounded-full font-Marigny font-bold">Connexion</button>
                </RouterLink>
            </div>
        </div>
        <div class="container">
        <form class="max-w-md mx-auto">
            <div class="mb-5">
                <input type="text" id="name" v-model="pseudo" class="w-full px-4 py-2 border-white border-4 rounded-md bg-slate-200 opacity-50" style="color: white" placeholder="Pseudo" />
            </div>
            <div class="mb-5">
                <input type="email" id="email" v-model="email" class="w-full px-4 py-2 border-white border-4 rounded-md bg-slate-200 opacity-50" style="color: white" placeholder="Email" />
            </div>
            <div>
                <input type="password" id="password" v-model="password" class="w-full px-4 py-2 border-white border-4 rounded-md bg-slate-200 opacity-50" style="color: white" placeholder="Mot de passe" />
            </div>
            <div class="flex gap-12 justify-center items-center mt-5">
                <label class="">
                    <label for="remember" class="">
                        <input type="checkbox" id="remember" v-model="rememberMe" class="appearance-none mr-2 w-4 h-4 border-2 border-gray-300 rounded-sm bg-none items-center checked:bg-blue-500 " />
                        <span class="text-xs">Se souvenir de moi</span>
                    </label>
                </label>
                <a class="text-xs hover:underline-offset-4" href="">Mot de passe oublié ?</a>
            </div>
            <button type="submit" class="bg-orange-400 w-full rounded-full py-3 font-Marigny font-medium text-2xl mt-3 ">C'est parti !</button>
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