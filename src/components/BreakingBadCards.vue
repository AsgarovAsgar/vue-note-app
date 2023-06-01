<template>
  <div>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="character in characters" :key="character._id" class="border shadow-md ">
        <CharacterList :character="character">
          <div>
            <p class="text-sm">{{ character.spouse !== 'NaN' ? character.spouse : 'None' }}</p>
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
import { ref, watch } from 'vue'
import CharacterList from './CharacterList.vue';

const token = 'Rg8NWqKvNmfsui_ZRPmU'
const baseUrl = 'https://the-one-api.dev/v2'
const config = { headers: { Authorization: `Bearer ${token}` } };

const characters = ref(null)
const page = ref(0)

const response = await axios.get(`${baseUrl}/character?limit=8&sort=name:asc`, config)
characters.value = response.data.docs

watch(page, async () => {
  const res = await axios.get(`${baseUrl}/character?limit=8&offset=${page.value * 8}&sort=name:asc`, config)
  characters.value = res.data.docs
})
</script>