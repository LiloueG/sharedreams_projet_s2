<script setup lang="ts">
import retour from '@/components/icons/retour.vue'
import { ref } from 'vue'
import { UpdateUser } from '@/assets/backend'
import { useRouter } from 'vue-router'
import { pb } from '@/assets/backend'

const router = useRouter()

const data = ref({
    "username": "",
    "email": "",
    "password": "",
    "passwordConfirm": "",
    "biography": "",
    "avatar": "",
});

// const handleValidation = async () => {
//     if (data.value.username === "" || data.value.mail === "" || data.value.password === "" || data.value.passwordConfirm === "" || data.value.biography === "" || data.value.avatar === "") {
//         console.log("Veuillez remplir tous les champs");
//     } 
//     else {
//             if (data.value.password === data.value.passwordConfirm && data.value.password.length >= 6) {
//                 UpdateUser(data.value);
//                 router.push('/profil');
//                 console.log(data.value)
//             } else {
//                 console.log("Les mots de passe ne correspondent pas ou le mot de passe n'est pas assez long");
//             }
//             if (!data.value.mail.includes("@") && !data.value.mail.includes(".")) {
//                 console.log("L'adresse mail n'est pas valide");
//             } 
//             else {
//                 console.log(data.value.mail);
//             }
//             if (data.value.username === data.value.username) {
//                 console.log(data.value.username);}
//             else { 
//                 console.log("Le nom d'utilisateur n'est pas valide"); 
//             }
//     }
// }


const handleValidation = async () => {
    let valid = true;
    
    // Vérification des champs fournis
    if (data.value.username && data.value.username.trim() === "") {
        console.log("Le nom d'utilisateur ne doit pas être vide");
        valid = false;
    }
    
    if (data.value.email) {
        if (!data.value.email.includes("@") || !data.value.email.includes(".")) {
            console.log("L'adresse mail n'est pas valide");
            valid = false;
        }
    }

    if (data.value.password || data.value.passwordConfirm) {
        if (data.value.password !== data.value.passwordConfirm) {
            console.log("Les mots de passe ne correspondent pas");
            valid = false;
        } else if (data.value.password && data.value.password.length < 6) {
            console.log("Le mot de passe doit contenir au moins 6 caractères");
            valid = false;
        }
    }
    if (data.value.biography) {
        if (data.value.biography.trim() === "") {
            console.log("La description ne doit pas être vide");
            valid = false;
        }
    }
    
    if (data.value.avatar) {
        // Vérifier que le fichier est une image
        const allowedExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
        const extension = data.value.avatar.split('.').pop();
        if (!allowedExtensions.includes(extension)) {
            console.log("Le fichier fourni n'est pas une image");
            valid = false;
        }
    }

    // Si tous les champs fournis sont valides, envoyer les données
    if (valid) {
        try {
            await UpdateUser(data.value);
            router.push('/profil');
            console.log(data.value);
            //console.log(pb.authStore.model)
        } catch (error) {
            console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
        }
    }
}

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0] || null;
  if (file) {
    data.value.avatar = file ? file.name : "";
  }
};


// const formData =await new FormData();
//     try {
        
//         formData.append('username', data.value.username);
//         formData.append('mail', data.value.mail);
//         formData.append('avatar', data.value.avatar as unknown as Blob);
//         formData.append('biography', data.value.biography);
//         formData.append('password', data.value.password);
//         formData.append('passwordConfirm', data.value.password);

//         await pb.collection('users').update(pb.authStore.model?.id, formData);

//         console.log(formData);
//     } catch (error) {
//         console.error("Erreur lors de la création du FormData:", error);
//     }




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
                <label for="password" class="text-gray-400">Confirmer le mot de passe</label>
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