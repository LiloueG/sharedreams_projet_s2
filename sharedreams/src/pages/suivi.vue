<template>
    <barre />
    <main class="px-4 py-12 min-h-screen bg-gradient-to-b from-indigo-950 to-indigo-900">
        <div class="flex items-center gap-4 mb-6">
            <router-link to="/accueil">
                <retour class="w-5 h-5" />
            </router-link>
            <div class="flex flex-col items-center">
                <h1 class="font-Marigny font-bold text-3xl">Suivi de sommeil</h1>
                <p class="text-sm font-Marigny font-light">{{ formatDate(currentDay.day) }}</p>
            </div>
        </div>
        <div class="flex flex-col items-center">
            <section class="bg-indigo-950/20 rounded-xl px-3 py-6 mb-6 max-w-md w-full">
                <p class="text-sm font-Marigny font-light mb-6">Temps de sommeil</p>
                <div class="flex flex-col sm:flex-row items-center gap-6 mb-6">
                    <input type="time" v-model="varHour" class="bg-indigo-950/20 text-white p-2 rounded" />
                    <button @click="updateSleepTime" class="p-2 bg-orange-400 text-white rounded font-Marigny">Mettre à
                        jour</button>
                </div>
                <p class="font-Marigny font-bold text-3xl">{{ sleepTime }}</p>
            </section>
            <section class="w-full sm:w-[50%] bg-indigo-400/20 rounded-xl p-3 mb-3 sm:mb-0">
                <p class="text-sm font-Marigny font-light mb-6">Qualité de sommeil</p>
                <p class="font-Marigny font-bold text-lg">{{ calculateSleepQuality(sleepTime) }}</p>
            </section>
        </div>
        <div class="flex justify-center items-center mt-6">
            <button @click="showPreviousDay"
                class="p-2 bg-indigo-600 text-white rounded-full w-10 h-10 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <div class="flex-grow"></div>
            <button class="p-2 bg-indigo-600 text-white rounded-full w-10 h-10 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
        <div class="flex items-center justify-center min-h-screen">
            <button class="p-2 bg-orange-400 text-white rounded font-Marigny">
                <RouterLink to="/statistiques">Aller à la page Statistiques</RouterLink>
            </button>
        </div>
    </main>
</template>

<script setup lang="ts">
import barre from '@/components/barre.vue';
import { ref, onMounted } from 'vue';

interface DayData {
    id: number;
    day: string;
    sleep_hours: string;
    sleep_quality: string;
    relation_user: string;
}

const varHour = ref('');
const sleepTime = ref('00h 00 min');
const daysData: DayData[] = []; // Placeholder for days data
let currentDayIndex = 0;

// Mock data for demonstration
const mockData: DayData[] = [
    { id: 1, day: '2024-06-08', sleep_hours: '7h 30 min', sleep_quality: 'Parfait', relation_user: 'user1' },
    { id: 2, day: '2024-06-09', sleep_hours: '6h 45 min', sleep_quality: 'Adéquate', relation_user: 'user1' },
    { id: 3, day: '2024-06-10', sleep_hours: '8h 15 min', sleep_quality: 'Parfait', relation_user: 'user1' },
];

const currentDay = ref<DayData>(mockData[currentDayIndex]);

const updateSleepTime = () => {
    if (!varHour.value) {
        sleepTime.value = '00h 00 min';
        return;
    }
    const [hours, minutes] = varHour.value.split(':');
    sleepTime.value = `${hours}h ${minutes} min`;

    // Mettre à jour les données de sommeil du jour actuel
    currentDay.value.sleep_hours = sleepTime.value;
    currentDay.value.sleep_quality = calculateSleepQuality(sleepTime.value);
};

const calculateSleepQuality = (sleepHours: string) => {
    const [hoursString, minutesString] = sleepHours.split(' ');
    const hours = parseInt(hoursString);
    const minutes = parseInt(minutesString);
    const totalMinutes = hours * 60 + minutes;

    if (totalMinutes < 360) {
        return 'Basse';
    } else if (totalMinutes >= 360 && totalMinutes <= 480) {
        return 'Adéquate';
    } else if (totalMinutes > 480 && totalMinutes <= 720) {
        return 'Parfait';
    } else {
        return 'Basse';
    }
};

const showPreviousDay = () => {
    if (currentDayIndex > 0) {
        currentDayIndex--;
        currentDay.value = mockData[currentDayIndex];
    }
};

const showNextDay = () => {
    if (currentDayIndex < mockData.length - 1) {
        currentDayIndex++;
        currentDay.value = mockData[currentDayIndex];
    }
};

const formatDate = (dateString: string) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', options);
};
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    font-family: 'Marigny', sans-serif;
    min-height: 100vh;
    background: linear-gradient(to bottom, #4c1d95, #2a144a);
}

#app {
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (min-width: 640px) {
    .flex {
        display: flex;
    }

    .items-center {
        align-items: center;
    }

    .justify-center {
        justify-content: center;
    }

    .w-full {
        width: 100%;
    }

    .max-w-md {
        max-width: 28rem;
    }

    .max-w-2xl {
        max-width: 42rem;
    }

    .w-[50%] {
        width: 50%;
    }
}
</style>
