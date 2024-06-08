<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue';
import { fetchData } from '@/assets/backend';
import arrowLeft from '@/components/icons/arrowLeft.vue';
import arrowRight from '@/components/icons/arrowRight.vue';

const props = defineProps<{
  slides: Array<{ title: string, content: string }>
}>();

const activeIndex = ref(0);

const prevSlide = () => {
  activeIndex.value = (activeIndex.value === 0) ? props.slides.length - 1 : activeIndex.value - 1;
};

const nextSlide = () => {
  activeIndex.value = (activeIndex.value === props.slides.length - 1) ? 0 : activeIndex.value + 1;
};

const loadData = async () => {
  try {
    const fetchedData = await fetchData();
    console.log('Fetched data:', fetchedData);
  } catch (error) {
    console.error('Error loading data:', error);
  }
};

onMounted(() => {
  loadData();
});
</script>


<template>
    <div :class="'carousel'" class="flex flex-col items-center mt-12 mb-10">
      <div class="flex gap-16 items-center">
          <arrowLeft  @click="prevSlide" />
          <p class="font-Marigny font-medium text-2xl">Lundi</p>
          <arrowRight @click="nextSlide" />
      </div>
    </div>
    <div class="carousel-inner" :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index" class="carousel-item">
          <slot :slide="slide"></slot>
        </div>
    </div>
    
   
  </template>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}
.carousel-item {
  flex: 0 0 100%;
  max-width: 100%;
}
.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  padding: 1rem;
  cursor: pointer;
}
.carousel-control.prev {
  left: 0;
}
.carousel-control.next {
  right: 0;
}
</style>