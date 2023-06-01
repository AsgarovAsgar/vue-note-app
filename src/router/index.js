import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import NoteView from '@/views/NoteView.vue'
import QuizView from '@/views/QuizView.vue'
import MovieView from '@/views/MovieView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/note',
    name: 'note',
    component: NoteView
  },
  {
    path: '/movie',
    name: 'movie',
    component: MovieView
  },
  {
    path: '/quiz/:id',
    name: 'quiz',
    component: QuizView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router