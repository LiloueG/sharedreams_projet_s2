<script setup lang="ts">
import retour from '@/components/icons/retour.vue'
</script>

<template>
    <main class="px-4 py-12 min-h-screen">
        <div class="flex gap-4 mb-8">
            <RouterLink to="/parametres">
                <retour class="w-5 h-5" />
            </RouterLink>
            <h1 class="font-Marigny font-bold text-3xl ">À propos de nous</h1>
        </div>
        <div>
            <h1 class="font-Marigny font-bold text-xl mb-3">Qui sommes-nous ?</h1>
            <p class="mb-4">Nous sommes une équipe de trois étudiantes qui ont décidé de créer une application web dans le but d'un projet en BUT MMI.</p>
            <div class="flex flex-col items-center mb-6">
                <img src="../assets/image/liloue.png" alt="" class="w-32 h-32 rounded-full">
                <p class="font-Marigny font-bold text-2xl">Liloue</p>
                <p>Design et développement web</p>
            </div>
            <div class="flex flex-col items-center mb-6">
                <img src="../assets/image/pao.jpg" alt="" class="w-32 h-32 rounded-full mb-2">
                <p class="font-Marigny font-bold text-2xl">Paola</p>
                <p>Design et développement web</p>
            </div>
            <div class="flex flex-col items-center mb-6">
                <img src="../assets/image/blandine.png" alt="" class="w-32 h-32 rounded-full mb-2">
                <p class="font-Marigny font-bold text-2xl">Blandine</p>
                <p>Communication et marketing</p>
            </div>
            <p class="mb-3">Nous avons décidé de créer une application innovante dédiée à l'exploration de vos rêves. Grâce à notre application, vous pouvez écrire et enregistrer vos rêves, les partager avec vos amis, et analyser leur signification avec l'aide de notre IA avancée, Dreamy.</p>
            <p class="mb-3">Notre application permet de tenir un journal de rêves, d'organiser vos récits et de les retrouver facilement. Vous pouvez également partager vos rêves avec vos amis et discuter avec eux grâce à une messagerie intégrée. La fonctionnalité la plus fascinante est l'analyse des rêves par Dreamy, notre IA qui interprète vos rêves et fournit des rapports détaillés pour vous aider à comprendre leurs symboles et thèmes récurrents.</p>
            <p class="mb-3">En plus de cela, l'application offre des outils de suivi et de statistiques pour visualiser l'évolution de vos rêves au fil du temps. Vous pouvez rejoindre une communauté de passionnés de rêves, échanger des conseils et découvrir de nouvelles perspectives sur vos expériences oniriques.</p>
        </div>
    </main>
</template>