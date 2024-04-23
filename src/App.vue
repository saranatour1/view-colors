<script setup lang="ts">
import Display from './components/Display.vue';
import TextInput from './components/TextInput.vue';
import { useColorsStore } from './stores/store';
const store = useColorsStore();
</script>

<template>
  <main class="w-full h-full min-h-screen max-w-full bg-cool-white flex flex-col justify-start items-center">
    <section class="pt-40 w-full max-w-[45.625rem] max-md:max-w-full">
      <div class="w-full max-md:px-4">
        <span class="text-4xl font-bold">Dump your text that has colors here 👇🏼</span>
        <TextInput />
        <Display :colors="store.colors" />
      </div>
    </section>
  </main>
</template>
