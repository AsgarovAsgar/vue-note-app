<template>
  <div class="flex flex-col mt-2 gap-2">
    <h2 class="text-lg font-medium">{{ question.text }}</h2>
    <div class="flex flex-col gap-2">
      <div @click="$emit('selectAnswer', option.isCorrect)" v-for="option in question.options" :key="option.id" class="cursor-pointer flex items-center rounded overflow-hidden">
        <p class="px-2 py-1 bg-orange-300">{{ option.label }}</p>
        <p class="px-3 py-1 bg-gray-200 w-full">{{ option.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  question: { type: Object }
})
</script>