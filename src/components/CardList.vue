<template>
  <transition-group
    name="card"
    appear
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
  >
    <RouterLink 
      v-for="(quiz, index) in quizes"
      :key="quiz.id"
      :data-index="index"
      :to="`/quiz/${quiz.id}`"
      class="flex flex-col w-full justify-between border rounded-md gap-2 overflow-hidden"
    >
      <img class="h-full w-full object-cover" :src="quiz.img" :alt="quiz.name">
      <div class="px-2 mb-2">
        <h2 class="font-medium">{{ quiz.name }}</h2>
        <p class="text-sm">{{ quiz.questions.length }} questions</p>
      </div>
    </RouterLink>
  </transition-group>

</template>

<script setup>
import gsap from 'gsap'

defineProps({
  quizes: { type: Array }
})

function beforeEnter(el) {
  el.style.opacity = 0;
  el.style.transform = 'translateY(-60px)'
}

function enter(el) {
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    delay: el.dataset.index * 0.3
  })
}

</script>

<style scoped>

/* .card-enter-from {
  transform: translateY(-50px);
  opacity: 0;
}
.card-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.card-enter-active {
  transition: all 0.5s ease;
} */
</style>