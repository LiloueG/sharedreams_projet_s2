<template>
    <div @click="toggle" :class="['toggle-switch', { 'active': isActive }]">
      <div class="toggle-switch-circle"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, watch } from 'vue';
  
  const props = defineProps<{
    modelValue: boolean
  }>();
  
  const isActive = ref(props.modelValue);
  
  const toggle = () => {
    isActive.value = !isActive.value;
    emit('update:modelValue', isActive.value);
  };
  
  watch(() => props.modelValue, (newValue) => {
    isActive.value = newValue;
  });
  </script>
  
  <style scoped>
  .toggle-switch {
    width: 50px;
    height: 25px;
    border-radius: 25px;
    background-color: #f0a500;
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .toggle-switch.active {
    background-color: #9b59b6;
  }
  .toggle-switch-circle {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 1px;
    left: 1px;
    transition: left 0.3s ease;
  }
  .toggle-switch.active .toggle-switch-circle {
    left: 26px;
  }
  </style>