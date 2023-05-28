<template>
  <main class="flex justify-center items-baseline bg-green-400/50 h-screen">
    <div class="border rounded-2xl shadow-lg p-4 mt-20 max-w-xl w-full border-green-200/50 bg-white">
      <header class="flex justify-between items-center">
        <h1 class="text-3xl font-semibold">Notes</h1>
        <button class="p-1.5 rounded-lg hover:text-white hover:bg-green-400/50 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </header>
      <div class="mt-2 flex gap-2">
        <div class="p-2 flex flex-col justify-between border rounded-lg gap-2">
          <div>
            <h2 class="text-lg font-medium">Title</h2>
            <p class="text-sm text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit est delectus nam modi. Facere aliquid nisi rem quasi, tenetur aspernatur placeat vitae. Nisi, adipisci explicabo atque excepturi eveniet dolorum animi.</p>
          </div>
          <p class="text-xs text-gray-600">02/12/2023</p>
        </div>
      </div>
    </div>
  </main>
</template>