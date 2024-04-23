<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
defineProps<{ color: string }>()

const { copy, copied } = useClipboard();
</script>

<template>
  <button @click="copy(color)"
    class="w-full h-full max-h-20 p-4 rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 flex justify-center items-center "
    :style="{ backgroundColor: color }">
    <span v-if="!copied" class="text-sm font-normal text-center" :style="{ color: color, mixBlendMode: 'difference' }">
      {{ color }}
    </span>
    <span v-else>
      copied!
    </span>
  </button>
</template>