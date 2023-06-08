<template>
  <div>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="character in characters" :key="character._id" class="border shadow-md ">
        <CharacterList :character="character">
          <div>
            <p>{{ character.location?.name }}</p>
          </div>
        </CharacterList>
      </div>
    </div>
    <div class="flex gap-4 mt-4 justify-end font-medium">
      <button class="px-4 py-1.5 rounded-md bg-blue-200" @click="page--">prev</button>
      <button class="px-4 py-1.5 rounded-md bg-blue-200" @click="page++">next</button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, watch, onMounted } from 'vue'
import CharacterList from './CharacterList.vue';

const baseUrl = "https://rickandmortyapi.com/api"

const characters = ref(null)
const page = ref(1)

onMounted(async () => {
  const response = await axios.get(`${baseUrl}/character`)
  characters.value = response.data.results
})


watch(page, async () => {
  const res = await axios.get(`${baseUrl}/character/?page=${page.value}`)
  characters.value = res.data.docs
})
</script>