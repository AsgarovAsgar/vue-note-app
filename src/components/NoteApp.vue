<template>
  <main class="relative flex justify-center items-baseline bg-green-400/50 h-screen">
    <div v-if="isModalOpen" class="absolute flex justify-center w-full h-full bg-gray-900/25 backdrop-blur-[2px]">
      <div id="modal" class="flex flex-col gap-4 max-w-xl w-full h-min mt-10 p-4 bg-white items-baseline rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold">Add new note</h2>
        <input v-model="form.title" class="border px-3 py-2 rounded-md w-full" type="text">
        <textarea v-model="form.content" class="text-sm border px-3 py-2 rounded-md w-full" name="" id="" cols="30" rows="5"></textarea>
        <p class="text-xs text-red-500 -my-2" v-if="errorMessage">* {{ errorMessage }}</p>
        <div class="flex gap-4 self-end">
          <button @click="isModalOpen = false" class="rounded-md px-4 py-1.5 bg-red-500 text-white">Close</button>
          <button @click="addNote" class="rounded-md px-4 py-1.5 bg-blue-500 text-white">Add</button>
        </div>
      </div>
    </div>
    <div class="border rounded-2xl shadow-lg p-4 mt-20 max-w-xl w-full border-green-200/50 bg-white">
      <header class="flex justify-between items-center">
        <h1 class="text-3xl font-semibold">Notes</h1>
        <button @click="isModalOpen = true" class="p-1.5 rounded-lg hover:text-white hover:bg-green-400/50 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </header>
      <div class="mt-2 flex gap-3 flex-wrap">
        <div 
          v-for="note in notes"
          :key="note.id" 
          :style="{backgroundColor: note.color}"
          class="p-2 flex flex-col max-w-[265px] w-full justify-between border rounded-lg gap-2"
        >
          <div>
            <h2 class="text-lg font-medium">{{ note.title }}</h2>
            <p class="text-sm text-gray-800">{{ note.content }}</p>
          </div>
          <p class="text-xs text-gray-600">{{ showDate(note.date) }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)
const form = ref({
  title: '',
  content: ''
})
const notes = ref([])
const errorMessage = ref('')

function addNote() {
  if(form.value.content.length < 10) {
    return errorMessage.value = 'content must be at least 10 chars'
  }
  const note = {
    id: Math.floor(Math.random() * 1000000),
    date: new Date(),
    color: getRandomColor(),
    ...form.value
  }
  notes.value.push(note)
  isModalOpen.value = false
  form.value = {}
  errorMessage.value = ''
}


function getRandomColor() {
  const letters = 'BCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

function showDate(date) {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const hour = date.getHours()
  const minutes = date.getMinutes()
  return `${day}/${month}/${year} ${hour}:${minutes}`
}
</script>