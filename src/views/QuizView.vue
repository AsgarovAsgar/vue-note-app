<template>
  <main class="relative flex justify-center items-baseline h-screen">
    <div class="border rounded-xl shadow-lg p-4 mt-10 max-w-3xl w-full bg-white">
      <header class="flex flex-col gap-2">
        <h1 class="text-xl font-semibold">Question {{ questionStatus }}</h1>
        <div class="w-[300px] h-6 border-2 border-orange-400">
          <div :style="{width: barPercentage}" class="bg-orange-400 h-full transition-all ease-linear duration-300"></div>
        </div>
      </header>
      <QuizQuestion v-if="!showResult" :question="subject.questions[currentQuestionIndex]" @selectAnswer="acceptAnswerAndMove" />
      <div v-else class="flex flex-col m-4 justify-center items-center">
        <h2 class="text-xl font-semibold">Your result is...</h2>
        <p class="text-[80px] font-semibold">{{ correctAnswers }} / {{ subject.questions.length }}</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import data from '../../data.json'
import QuizQuestion from '@/components/QuizQuestion.vue';

const route = useRoute()
const { id } = route.params

const subject = data.find(q => q.id == id)
const currentQuestionIndex = ref(0)
const correctAnswers = ref(0)
const barPercentage = computed(() => `${Math.floor((currentQuestionIndex.value / subject.questions.length) * 100)}%`)
const questionStatus = computed(() => {
  if(currentQuestionIndex.value + 1 <= subject.questions.length) {
    return `${currentQuestionIndex.value + 1 } / ${subject.questions.length}`
  } else {
    return `${subject.questions.length} / ${subject.questions.length}`
  }
})
const showResult = ref(false)

function acceptAnswerAndMove(isCorrect) {
  if(isCorrect) correctAnswers.value++
  if(subject.questions.length - 1 === currentQuestionIndex.value) {
    showResult.value = true
  }
  currentQuestionIndex.value++
}

</script>