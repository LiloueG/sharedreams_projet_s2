<script setup lang="ts">
import retour from '@/components/icons/retour.vue'

</script>

<template>
    <main class="px-4 py-12">
        <div class="flex flex-col gap-5">
            <div class="flex gap-3 items-center">
                <RouterLink to="/support">
                    <retour />
                </RouterLink>
                <h1 class="font-Marigny font-bold text-3xl">Mentions légales</h1>
            </div>
        </div>
        <div class="flex flex-col gap-3 mt-9">
            <p class="font-Marigny font-bold text-xl">Bienvenue sur ShareDreams !</p>
            <p>Votre application dédiée au sommeil et aux rêves !</p>
            <p>Notre politique de confidentialité vise à vous informer sur la manière dont nous collectons, utilisons et protégeons vos données personnelles dans le cadre de l’utilisation de notre application.</p>
            <p>Cette politique de confidentialité s’applique à tous les utilisateurs de notre application qui utilisent nos services pour suivre leur sommeil, enregistrer leurs rêves et accéder à des fonctionnalités connexes pour améliorer leur bien-être et leur qualité de vie.</p>
            <p>Nous comprenons l’importance de protéger votre vie privée, c’est pourquoi nous nous engageons à traiter vos données personnelles de manière sécurisée, transparente et conforme aux lois applicables en matière de protection des données.</p>
            <p>En utilisant notre application, vous consentez à la collecte et au traitement de certaines informations personnelles telles que votre nom, votre adresse e-mail, votre âge, votre sexe et des données liées à votre sommeil que vous renseignerez sur l’application, telles que la durée et la qualité de votre sommeil, les phases de sommeil paradoxal et profond, ainsi que les détails de vos rêves.</p>
            <p>Nous utilisons ces informations pour vous fournir des fonctionnalités personnalisées, des conseils de sommeil adaptés à vos besoins individuels, ainsi que des analyses approfondies de vos habitudes de sommeil et de vos cycles de rêve. Vos données peuvent également être utilisées de manière agrégée et anonymisée à des fins de recherche et de développement afin d’améliorer notre application et de contribuer à la compréhension scientifique du sommeil et des rêves.</p>
            <p>Nous ne partagerons jamais vos données personnelles avec des tiers sans votre consentement explicite, sauf dans les cas où cela est nécessaire pour fournir nos services, respecter nos obligations légales ou protéger nos droits et intérêts légitimes.</p>
            <p>Votre confidentialité est notre priorité absolue, et nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, divulgation, altération ou destruction.</p>
            <p>Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité ou la manière dont nous traitons vos données personnelles, n’hésitez pas à nous contacter à l’adresse 4 Pl. Lucien Tharradin. Nous sommes là pour vous aider et nous nous engageons à respecter et à protéger votre vie privée à tout moment. Nous vous remercions de votre confiance et nous sommes ravis de vous accompagner dans votre voyage vers un sommeil réparateur et des rêves épanouissants grâce à ShareDreams.</p>
        </div>
    </main>
</template>