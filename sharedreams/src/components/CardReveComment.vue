<script setup lang="ts">
import Img from '@/components/ImgCardReve.vue';
import type { DreamsResponse } from '@/pocketbase-types'
import { defineProps } from 'vue'
import Heart from '@/components/icons/heart.vue';
import Sad from '@/components/icons/sad.vue';
import Tired from '@/components/icons/tired.vue';
import Happy from '@/components/icons/happy.vue';
import Scared from '@/components/icons/scared.vue';


const props = defineProps<DreamsResponse>()
console.log(props)

</script>

<template>
    <div></div>
</template>