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
            <p>En utilisant l’application ShareDreams, vous acceptez les présentes Conditions Générales d’Utilisation (CGU) dans leur intégralité. Si vous n’acceptez pas ces conditions, veuillez ne pas utiliser l’application.</p>
            <p>ShareDreams vous accorde une licence limitée, non exclusive et révocable pour accéder et utiliser l’application à des fins personnelles et non commerciales. Vous ne pouvez pas copier, modifier, distribuer ou vendre l’application ou son contenu sans autorisation écrite de ShareDreams.</p>
            <p>Pour accéder à l’application, vous pouvez être amené à créer un compte utilisateur. Vous êtes responsable de maintenir la confidentialité de vos informations de connexion et de toutes les activités sur votre compte.</p>
            <p>Vous vous engagez à utiliser l’application de manière conforme à la loi et aux présentes CGU. Vous ne pouvez pas utiliser l’application d’une manière qui pourrait nuire à ShareDreams, à d’autres utilisateurs ou violer les droits de propriété intellectuelle.</p>
            <p>En publiant du contenu sur l’application, vous accordez à ShareDreams une licence mondiale, non exclusive, transférable, gratuite et sous-licenciable pour utiliser, reproduire, modifier, distribuer et afficher ce contenu dans le cadre de l’application.</p>
            <p>Tous les droits de propriété intellectuelle associés à l’application, y compris les marques, les logos, les textes, les graphiques, les images et le code source, sont la propriété de ShareDreams ou de ses concédants de licence.</p>
            <p>ShareDreams ne peut garantir que l’application sera toujours disponible, sécurisée ou exempte d’erreurs. En aucun cas, ShareDreams ne sera responsable des dommages directs, indirects, spéciaux, accessoires ou consécutifs découlant de l’utilisation ou de l’incapacité d’utiliser l’application.</p>
            <p>ShareDreams se réserve le droit de modifier les présentes CGU à tout moment. Les modifications seront effectives dès leur publication sur l’application. Il est de votre responsabilité de consulter régulièrement les CGU pour rester informé des changements.</p>
            <p>Les présentes CGU sont régies et interprétées conformément aux lois en vigueur dans le pays de résidence de ShareDreams. Tout litige découlant des présentes CGU sera soumis à la compétence exclusive des tribunaux compétents dans le ressort de cette juridiction.</p>
            <p>En utilisant l’application ShareDreams, vous acceptez d’être lié par les présentes Conditions Générales d’Utilisation. Si vous avez des questions concernant les CGU, veuillez nous contacter à l’adresse indiquée dans la Politique de Confidentialité.</p>
        </div>
    </main>
</template>