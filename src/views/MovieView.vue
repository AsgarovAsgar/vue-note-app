<template>
  <main class="relative flex justify-center items-baseline h-screen">
    <div class="border flex flex-col gap-4 rounded-xl shadow-lg p-4 mt-10 max-w-3xl w-full bg-white">
      <header class="flex justify-between items-center">
        <h1 class="text-xl font-semibold">Movies</h1>
        <div class="flex gap-4">
          <button :class="[isLordOfTheRings ? 'font-semibold bg-green-100 border-green-200' : '']" class="px-4 py-1.5 border rounded bg-gray-100" @click="isLordOfTheRings = true">Lord of the Rings</button>
          <button :class="[!isLordOfTheRings ? 'font-semibold bg-green-100 border-green-200' : '']" class="px-4 py-1.5 border rounded bg-gray-100" @click="isLordOfTheRings = false">Breaking Bad</button>
        </div>
      </header>
      <keep-alive>
        <Suspense v-if="isLordOfTheRings">
          <template #default>
            <BreakingBadCards />
          </template>
          <template #fallback>
            <div>
              <p>loading...</p>
            </div>
          </template>
        </Suspense>
        <RickAndMortyCard v-else/>
      </keep-alive>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import BreakingBadCards from '../components/BreakingBadCards.vue';
import RickAndMortyCard from '../components/RickAndMortyCard.vue';

const isLordOfTheRings = ref(true)
</script>