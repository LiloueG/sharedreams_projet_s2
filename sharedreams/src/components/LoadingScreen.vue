<script setup lang="ts">
import dreamy from '@/components/icons/dreamy.vue';
import logo_sharedreams from '@/components/icons/logo_sharedreams.vue';
</script>

<template>
    <div class="bg-night-sky min-h-screen flex flex-col justify-center items-center z-50 absolute w-full">
        <p class="text-white text-4xl mb-12 font-Marigny font-bold">Bien dormi ?</p>
        <logo_sharedreams class=" h-24 w-24 mb-11" />
        <div class="loader"></div>
    </div>
</template>

<style scoped>
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.bg-night-sky {
    background: url('/chargement.jpg') no-repeat center center fixed;
    background-size: cover;
}

.loader {
    border: 4px solid rgba(255, 255, 255, 0.208);
    border-top: 4px solid #e0e3ac;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
}
</style>

