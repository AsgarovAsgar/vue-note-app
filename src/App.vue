<template>
  <header class="border rounded-lg bg-gray-50 m-4 max-w-3xl mx-auto p-2 flex gap-4">
    <router-link active-class="active" class="px-3 py-1.5 rounded-md hover:bg-gray-200" to="/">Quiz App</router-link>
    <router-link active-class="active" class="px-3 py-1.5 rounded-md hover:bg-gray-200" to="/note">Note App</router-link>
  </header>
  <router-view></router-view>
</template>

<style scoped>
.active {
  font-weight: 600;
}
</style>