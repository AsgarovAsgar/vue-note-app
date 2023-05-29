<template>
  <RouterLink 
    v-for="quiz in quizes"
    :key="quiz.id"
    :to="`/quiz/${quiz.id}`"
    class="flex flex-col w-full justify-between border rounded-md gap-2 overflow-hidden"
  >
    <img class="h-full w-full object-cover" :src="quiz.img" :alt="quiz.name">
    <div class="px-2 mb-2">
      <h2 class="font-medium">{{ quiz.name }}</h2>
      <p class="text-sm">{{ quiz.questions.length }} questions</p>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  quizes: {
    type: Array
  }
})
</script>