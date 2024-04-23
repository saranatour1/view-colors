<script setup lang="ts">
import { ref, watch } from 'vue';
import { useColorsStore } from "../stores/store"

const store = useColorsStore();
const text = ref<string>('');
watch(text, async (newQuestion, oldQuestion) => {
  try {
    store.findMatches(newQuestion)
  } catch (e) {
    console.log(e)
  }
})
</script>

<template>
  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-10">
    <span class="text-lg font-bold italic">
      Your message
    </span>
    <textarea id="message" rows="4"
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..." v-model="text"></textarea>
  </label>
</template>