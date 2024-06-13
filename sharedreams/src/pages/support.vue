<script setup lang="ts">
import call from '@/components/icons/call.vue'
import mention from '@/components/icons/mention.vue'
import retour from '@/components/icons/retour.vue'

</script>

<template>
    <main class="py-12 px-4">
        <div class="flex gap-3">
            <RouterLink to="/parametres">
                <retour />
            </RouterLink>
            <h1 class="text-3xl font-bold mb-5 font-Marigny">Support</h1>
        </div>
        <div class="bg-purple-950 p-5 rounded-xl">
            <RouterLink to="/contact" class="flex gap-3 mb-9">
                <call />
                <p>Contact</p>
            </RouterLink>
            <RouterLink to="/mention" class="flex gap-3 mb-9">
                <mention />
                <p>Mentions légales</p>
            </RouterLink>
            <RouterLink to="/cgu" class="flex gap-3 mb-9">
                <mention />
                <p>CGU</p>
            </RouterLink>
            <RouterLink to="/cgv" class="flex gap-3">
                <mention />
                <p>CGV</p>
            </RouterLink>
        </div>
    </main>
</template>