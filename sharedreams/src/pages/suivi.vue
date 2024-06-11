<script setup lang="ts">
import barre from '@/components/barre.vue';
import { ref, onMounted } from 'vue';
import slide_carousel from '@/components/slide_carousel.vue';
import arrowLeft from '../components/icons/arrowLeft.vue';
import arrowRight from '../components/icons/arrowRight.vue';
import { getAllData, addSleepData as sendSleepData } from '@/assets/backend';

const listeData = ref([]);
const currentIndex = ref(0);

interface NewSleepData {
    day: string;
    sleepHours: number;
}

const newSleepData = ref<NewSleepData>({
    day: '',
    sleepHours: 0,
});

const addSleepData = async () => {
    if (!newSleepData.value.day || newSleepData.value.sleepHours <= 0) {
        alert("Veuillez remplir correctement tous les champs.");
        return;
    }
    const response = await sendSleepData(newSleepData.value);
    if (response) {
        listeData.value.push(response);
        newSleepData.value = { day: '', sleepHours: 0 }; // Reset form
    }
};

const next = () => {
    if (currentIndex.value < listeData.value.length - 1) {
        currentIndex.value++;
    }
};

const prev = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
    }
};

onMounted(async () => {
    listeData.value = await getAllData();
});
</script>


<template>
    <barre />
    <main class="px-4 py-12 min-h-screen bg-gradient-to-b from-violet-950 to-indigo-800 text-white">
        <h2 class="text-center mb-8">Enregistrez votre sommeil</h2>
        <form @submit.prevent="addSleepData" class="mb-8 max-w-md mx-auto">
            <input type="date" v-model="newSleepData.day" required class="bg-violet-800 p-2 rounded mb-4 block w-full">
            <input type="number" v-model="newSleepData.sleepHours" placeholder="Heures de sommeil" min="0" required class="bg-violet-800 p-2 rounded mb-4 block w-full">
            <div class="flex justify-center">
                <button type="submit" class="bg-orange-400 rounded font-Poppins p-2">Soumettre</button>
            </div>
        </form>
        <div class="carousel-container overflow-hidden max-w-sm mx-auto">
            <div class="carousel-track flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(calc(-${currentIndex * 100}%))` }">
                <slide_carousel v-for="(uneData, index) in listeData" :key="uneData.id" v-bind="uneData" class="w-full flex-shrink-0"/>
            </div>
        </div>
        <div class="flex justify-between mt-4 max-w-sm mx-auto">
            <button @click="prev" class="text-black p-2 rounded flex items-center">
                <arrow-left />
            </button>
            <button @click="next" class=" text-black p-2 rounded flex items-center">
                <arrow-right />
            </button>
        </div>
    </main>
</template>


<style>
.carousel-container {
    width: 100%;
    max-width: 400px; /* Adjust this width to fit mobile size */
    margin: auto;
}

.carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide_carousel {
    width: 100%; /* Ensure it takes the full width of the container */
    flex-shrink: 0;
    margin-left: 1rem; /* Add margin to create space between slides */
    margin-right: 1rem; /* Add margin to create space between slides */
}
</style>