<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import retour from '@/components/icons/retour.vue';

const router = useRouter();

const contactData = ref({
    name: "",
    email: "",
    message: "",
});

const handleContactSubmit = async () => {
    if (contactData.value.name === "" || contactData.value.email === "" || contactData.value.message === "") {
        console.log("Veuillez remplir tous les champs");
    } else {
        // Ici vous pouvez envoyer les données de contact à votre serveur ou API
        // Exemple :
        // await sendContactMessage(contactData.value);

        console.log("Message envoyé :", contactData.value);
    }
};
</script>

<template>
    <main class="px-4 py-12">
        <div class="flex flex-col gap-5">
            <div class="flex gap-3 items-center">
                <RouterLink to="/support">
                    <retour />
                </RouterLink>
                <h1 class="font-Marigny font-bold text-3xl">Contactez-nous</h1>
            </div>
            <div class="container mx-auto mt-2">
                <form class="max-w-md mx-auto text-white">
                    <div class="mb-5">
                        <input type="text" id="name" v-model="contactData.name" class="w-full font-light placeholder:text-white px-4 py-2 rounded-md bg-slate-200/50" placeholder="Nom" />
                    </div>
                    <div class="mb-5">
                        <input type="email" id="email" v-model="contactData.email" class="w-full font-light placeholder:text-white px-4 py-2 bg-slate-200/50 rounded-md" placeholder="Email" />
                    </div>
                    <div class="mb-5">
                        <textarea id="message" v-model="contactData.message" class="w-full font-light placeholder:text-white px-4 py-2 bg-slate-200/50 rounded-md" placeholder="Message" rows="5"></textarea>
                    </div>
                    <button @click.prevent="handleContactSubmit" class="bg-orange-400 w-full rounded-full py-3 font-Marigny font-medium text-2xl mt-3">Envoyer</button>
                </form>
            </div>
        </div>
    </main>
</template>

<style scoped>
/* Ajoutez ici vos styles personnalisés pour la page de contact */
</style>
