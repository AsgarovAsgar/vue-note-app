<template>
  <img :src="character.image ? character.image : 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg'" alt="">
  <div class="p-2">
    <h3 class="font-semibold">{{ character.name }}</h3>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  character: { type: Object }
})
// 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg'
</script>