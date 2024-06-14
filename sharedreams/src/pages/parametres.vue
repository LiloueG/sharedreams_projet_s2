<script setup lang="ts">
import { ref } from 'vue';
import search from '@/components/icons/search.vue';
import compte from '@/components/icons/compte.vue';
import notification from '@/components/icons/notification.vue';
import themes from '@/components/icons/theme.vue';
import premium from '@/components/icons/premium.vue';
import Support from '@/components/icons/support.vue';
import Security from '@/components/icons/security.vue';
import deconnexion from '@/components/icons/logout.vue';
import retour from '@/components/icons/retour.vue';
import { logout } from '@/assets/backend';
import { useRouter } from 'vue-router';
import apropos from '@/components/icons/apropos.vue';

const router = useRouter();
const showModal = ref(false);

function logOutPush() {
    logout();
    router.push('/nuage');
}

function showPremiumPopup() {
    showModal.value = true;
}

function hidePremiumPopup() {
    showModal.value = false;
}

const redirectToStripe = () => {
    window.location.href = 'https://buy.stripe.com/test_aEU3eSgKb5hJ30AfYY';
};

// Fonction pour rediriger vers Stripe
const Acheter = () => {
    window.location.href = 'https://buy.stripe.com/test_aEU3eSgKb5hJ30AfYY';
};
</script>

<template>
    <main class="px-4 py-12 min-h-screen">
        <div class="flex gap-4 mb-8">
            <RouterLink to="/profil">
                <retour class="w-5 h-5" />
            </RouterLink>
            <h1 class="font-Marigny font-bold text-3xl ">Paramètres</h1>
        </div>
        <form class="relative mt-6">
            <input type="search"
                class="w-full font-light placeholder:text-zinc-500 px-4 py-3 rounded-full bg-purple-950 pl-14 shadow-lg"
                placeholder="Rechercher" />
            <div class="absolute inset-y-0 left-0 flex items-center pl-5">
                <search />
            </div>
        </form>
        <div class="bg-purple-950 mt-7 p-5 rounded-xl">
            <div class="flex gap-3 mb-9">
                <compte />
                <p>Votre compte</p>
            </div>
            <div class="flex gap-3 mb-9">
                <notification />
                <p>Notification</p>
            </div>
            <div class="flex gap-3 mb-9">
                <themes />
                <p>Thèmes</p>
            </div>
            <div class="flex gap-3 mb-9 cursor-pointer" @click="showPremiumPopup">
                <premium />
                <p>Premium</p>
            </div>
            <RouterLink to="/a-propos" class="flex gap-3 items-center">
                <apropos class="w-8 h-8"/>
                <p>À propos de nous</p>
            </RouterLink>
        </div>
        <div class="bg-purple-950 mt-7 p-5 rounded-xl">
            <div class="flex gap-3 mb-9">
                <Security />
                <p>Sécurité</p>
            </div>
                <RouterLink to="/support" class="flex gap-3 mb-9">
                    <support />
                    <p>Support</p>
                </RouterLink>
            <div class="flex gap-3">
                <deconnexion class="text-red-600" />
                <button @click="logOutPush()" class="text-red-600">Déconnexion</button>
            </div>
        </div>
    </main>

    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black/65 bg-opacity-50 z-50">
        <div class="text-white p-6 rounded-lg shadow-lg max-w-xl w-full">
            <h2 class="text-center text-xl font-semibold mb-6">
                Débloquez toutes les fonctionnalités de l'application avec un abonnement de seulement 2,99€ par mois.
            </h2>
            <div class="bg-violet-950 rounded-lg shadow-lg overflow-hidden">
                <div class="flex justify-between p-4 border-b border-gray-700">
                    <div class="w-1/2 text-center">
                        <p class="text-lg font-semibold">Dreamer</p>
                        <p class="text-sm">Gratuit</p>
                    </div>
                    <div class="w-1/2 text-center">
                        <p class="text-lg font-semibold">Dreamer+</p>
                        <p class="text-sm">2,99€</p>
                    </div>
                </div>
                <div class="p-4">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="border-b border-gray-700 pb-2">
                            <p>Partagez vos rêves avec vos amis</p>
                            <div class="flex justify-between items-center mt-2">
                                <span>&#10003;</span>
                            </div>
                        </div>
                        <div class="border-b border-gray-700 pb-2">
                            <p>Personnalisation de votre profil</p>
                            <div class="flex justify-between items-center mt-2">
                                <span>&#10003;</span>
                            </div>
                        </div>
                        <div class="border-b border-gray-700 pb-2">
                            <p>Chat avec Dreamy</p>
                            <div class="flex justify-between items-center mt-2">
                                <span>3 messages/semaine</span>

                            </div>
                        </div>
                        <div class="border-b border-gray-700 pb-2">
                            <p>Suivi des heures de sommeil</p>
                            <div class="flex justify-between items-center mt-2">
                                <span>&#10003;</span>

                            </div>
                        </div>
                        <div class="border-b border-gray-700 pb-2">
                            <p>Suivi complet</p>
                            <div class="flex justify-between items-center mt-2">
                                <span>&#10007;</span>
                            </div>
                        </div>
                        <div class="border-b border-gray-700 pb-2">
                            <p>Messages GIFS</p>
                            <div class="flex justify-between items-center mt-2">
                                <span>&#10003;</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-violet-950 text-center py-4">
                    <button @click="Acheter"
                        class="bg-orange-400 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded">
                        DEVENIR DREAMER +
                    </button>
                </div>
                <div class="text-center py-4">
                    <button @click="hidePremiumPopup" class="text-violet-200">Fermer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Additional styles (if needed) */
</style>
