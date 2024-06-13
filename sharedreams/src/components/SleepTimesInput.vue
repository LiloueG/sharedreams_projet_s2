<template>
    <div class="sleep-container">
        <p class="sleep-title">Temps de sommeil</p>
        <p class="sleep-time">{{ formattedSleepTime }}</p>
        <button @click="viewStatistics" class="statistics-button">Voir les statistiques</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sleepTime: '04:03' // Exemple de temps de sommeil initial
        };
    },
    computed: {
        formattedSleepTime() {
            const [hours, minutes] = this.sleepTime.split(':');
            return `${hours}h ${minutes} min`;
        }
    },
    methods: {
        viewStatistics() {
            // Logique pour afficher les statistiques
            alert('Affichage des statistiques...');
        }
    }
};
</script>

<style scoped>
.sleep-container {
    background-color: #4c1d95;
    /* Couleur violette /
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    color: white;
    max-width: 300px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}

.sleep-container::before,
.sleep-container::after {
    content: '';
    position: absolute;
    background: url('path/to/cloud-and-moon.png') no-repeat center center / contain;
    width: 100px;
    / Adjust size as necessary /
    height: 100px;
    / Adjust size as necessary /
}

.sleep-container::before {
    top: -20px;
    left: 20px;
}

.sleep-container::after {
    bottom: -20px;
    right: 20px;
}

.sleep-title {
    font-size: 14px;
}

.sleep-time {
    font-size: 24px;
    margin: 10px 0;
}

.statistics-button {
    background-color: #ff9800;
    / Couleur orange */
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    font-size: 14px;
}
</style>