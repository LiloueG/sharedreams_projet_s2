<script setup lang="ts">
import retour from '@/components/icons/retour.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { pb } from '@/assets/backend'

const router = useRouter()

const data = ref({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    biography: "",
    avatar: null as File | null,
});

const originalData = ref({ ...data.value });

onMounted(async () => {
    try {
        const userId = pb.authStore.model?.id;
        if (!userId) throw new Error("Utilisateur non connecté ou ID utilisateur introuvable");
        
        const userData = await pb.collection('users').getOne(userId);
        data.value = { 
            username: userData.username,
            email: userData.email,
            biography: userData.biography,
            avatar: null,
            password: "",
            passwordConfirm: ""
        };
        originalData.value = { ...data.value };
    } catch (error) {
        console.error("Erreur lors de la récupération des données de l'utilisateur:", error);
    }
});

const handleValidation = async () => {
    let valid = true;
    const formData = new FormData();

    if (data.value.username && data.value.username.trim() !== originalData.value.username) {
        formData.append('username', data.value.username);
    }

    if (data.value.email && (data.value.email !== originalData.value.email)) {
        if (!data.value.email.includes("@") || !data.value.email.includes(".")) {
            console.log("L'adresse mail n'est pas valide");
            valid = false;
        } else {
            formData.append('email', data.value.email);
        }
    }

    if (data.value.password || data.value.passwordConfirm) {
        if (data.value.password !== data.value.passwordConfirm) {
            console.log("Les mots de passe ne correspondent pas");
            valid = false;
        } else if (data.value.password.length >= 6) {
            formData.append('password', data.value.password);
        } else {
            console.log("Le mot de passe doit contenir au moins 6 caractères");
            valid = false;
        }
    }

    if (data.value.biography && data.value.biography.trim() !== originalData.value.biography) {
        formData.append('biography', data.value.biography);
    }

    if (data.value.avatar) {
        const allowedExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
        const extension = data.value.avatar.name.split('.').pop()?.toLowerCase();
        if (!allowedExtensions.includes(extension)) {
            console.log("Le fichier fourni n'est pas une image");
            valid = false;
        } else {
            formData.append('avatar', data.value.avatar);
        }
    }

    if (valid && formData.keys().next().value) {
        try {
            const userId = pb.authStore.model?.id;
            if (!userId) throw new Error("Utilisateur non connecté ou ID utilisateur introuvable");

            await pb.collection('users').update(userId, formData);
            console.log(data.value);
            router.push('/profil');
        } catch (error) {
            console.error("Erreur lors de la mise à jour de l'utilisateur:", error.response ? error.response.data : error.message);
        }
    } else if (!formData.keys().next().value) {
        console.log("Aucun champ n'a été modifié");
    }
}

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0] || null;
  if (file) {
    data.value.avatar = file;
  }
};
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
                <input type="text" id="username" v-model="data.username" class="w-full font-light placeholder:text-slate-200 px-4 py-2 border-zync-500 rounded-xl bg-white/20" placeholder="Nom d'utilisateur"/>
            </div>
            <div class="mt-4">
                <label for="email" class="text-gray-400">Adresse mail</label>
                <input type="email" id="email" v-model="data.email" class="w-full font-light placeholder:text-slate-200 px-4 py-2 border-zync-500 rounded-xl bg-white/20" placeholder="Adresse mail"/>
            </div>
            <div class="mt-4">
                <label for="password" class="text-gray-400">Mot de passe</label>
                <input type="password" id="password" v-model="data.password" class="w-full font-light placeholder:text-slate-200 px-4 py-2 border-zync-500 rounded-xl bg-white/20" placeholder="Mot de passe"/>
            </div>
            <div class="mt-4">
                <label for="passwordConfirm" class="text-gray-400">Confirmer le mot de passe</label>
                <input type="password" id="passwordConfirm" v-model="data.passwordConfirm" class="w-full font-light placeholder:text-slate-200 px-4 py-2 border-zync-500 rounded-xl bg-white/20" placeholder="Confirmer le mot de passe"/>
            </div>
            <div class="mt-4">
                <label for="avatar" class="text-gray-400">Avatar</label>
                <input type="file" id="avatar" @change="handleFileUpload" class="w-full font-light placeholder:text-slate-200 px-4 py-2 border-zync-500 rounded-xl bg-white/20" placeholder="Avatar"/>
            </div>
            <div class="mt-4">
                <label for="biography" class="text-gray-400">Description</label>
                <textarea id="biography" v-model="data.biography" class="w-full font-light placeholder:text-slate-200 px-4 py-2 border-zync-500 rounded-xl bg-white/20" placeholder="Description"></textarea>
            </div>
        </form>
        <button @click="handleValidation" class="mt-6 w-full py-2 bg-zync-500 text-white font-bold rounded-xl">Valider</button>
    </main>
</template>