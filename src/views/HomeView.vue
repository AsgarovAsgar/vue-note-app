<template>
  <main class="relative flex justify-center items-baseline h-screen">
    <div class="border rounded-xl shadow-lg p-4 mt-10 max-w-3xl w-full bg-white">
      <header class="flex justify-between items-center">
        <h1 class="text-3xl font-semibold">Notes</h1>
        <input v-model.trim="searchQuery" class="px-4 py-1.5 border rounded-md" type="text">
      </header>
      <div class="grid grid-cols-3 mt-4 gap-4">
        <CardList :quizes="quizes" />
      </div>
    </div>
  </main>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import data from '../../data.json'
  import CardList from '@/components/CardList.vue'

  const quizes = ref(data)
  const searchQuery = ref('')
  
  watch(searchQuery, () => {
    quizes.value = data.filter(quiz => quiz.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
  })
</script>
