<template>
  <div :style="{ backgroundColor: invitee.gender === Gender.Male ? 'green' : 'red' }" class="px-4 py-1.5 rounded border w-1/2">
    {{ invitee.name }}
  </div>
</template>

<script setup lang="ts">
enum Gender {
  Male,
  Female
}

defineProps<{
  invitee: {
    id: Number,
    name: String,
    gender: Gender
  }
}>()
</script>