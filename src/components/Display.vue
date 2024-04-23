<script setup lang="ts">
import CopyColor from './CopyColor.vue';
const props = defineProps<{ colors: string[] }>();
</script>

<template>
  <section
    class="w-full h-full grid grid-flow-row gap-8 mt-10 md:grid-cols-4 md:grid-rows-4 max-md:grid-cols-2 max-md:grid-rows-2 max-sm:grid-cols-1 max-sm:grid-rows-1">
    <div v-for="item, index in colors" :key="index" class="col-span-1 row-span-1 md:col-span-1 md:row-span-1">
      <CopyColor :color="item" />
    </div>
  </section>
</template>