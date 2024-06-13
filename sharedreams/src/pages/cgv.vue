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
                <h1 class="font-Marigny font-bold text-3xl">CGU</h1>
            </div>
        </div>
        <div class="flex flex-col gap-3 mt-9">
            <p>Les présentes Conditions Générales de Vente (CGV) régissent la vente de produits et services proposés par ShareDreams via son application mobile.</p>
            <p>Produits et Services : ShareDreams propose des services liés au suivi du sommeil et des rêves, ainsi que des produits numériques associés à ces services. Les descriptions et les prix des produits et services sont disponibles sur l’application.</p>
            <p>En passant commande sur l’application ShareDreams pour des abonnements, vous acceptez d’acheter les services sélectionnés aux prix et conditions indiqués. Les commandes sont soumises à l’acceptation de ShareDreams et peuvent être refusées à sa seule discrétion.</p>
            <p>Les prix des services sont indiqués en euros et sont susceptibles d’être modifiés à tout moment sans préavis. Les paiements sont effectués via les méthodes de paiement disponibles sur l’application.</p>
            <p>Dans la mesure maximale autorisée par la loi applicable, ShareDreams ne sera en aucun cas responsable des dommages indirects, accessoires, spéciaux ou consécutifs découlant de l’utilisation des services vendus sur l’application.</p>
            <p>ShareDreams se réserve le droit de modifier les présentes CGV à tout moment. Les modifications seront effectives dès leur publication sur l’application. Il est de votre responsabilité de consulter régulièrement les CGV pour rester informé des changements.</p>
            <p>Les présentes CGV sont régies et interprétées conformément aux lois en vigueur dans le pays de résidence de ShareDreams. Tout litige découlant des présentes CGV sera soumis à la compétence exclusive des tribunaux compétents dans le ressort de cette juridiction.</p>
            <p>En passant commande sur l’application ShareDreams, vous acceptez d’être lié par les présentes Conditions Générales de Vente. Si vous avez des questions concernant les CGV, veuillez nous contacter à l’adresse indiquée.</p>
            <div>
                <p class="font-Marigny font-bold text-lg">4 Pl. Lucien Tharradin,</p>
                <p class="font-Marigny font-bold text-lg">25200 Montbéliard, France</p>
            </div>
        </div>
    </main>
</template>