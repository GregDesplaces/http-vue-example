<script setup>
const API_URL = 'https://jsonplaceholder.typicode.com/todos';
import { ref, onMounted } from 'vue'




const todos = ref([])
const isLoading = ref(true)

onMounted(async () => {
  const response = await fetch(API_URL)
  const data = await response.json()
  todos.value = data
  isLoading.value = false
})
</script>

<template>
  <main>
    <h1>Tous les todos</h1>

    <!-- Loader -->
     <p v-if="isLoading">Chargement...</p>

    <!-- Afficher la liste de todos -->
     <ul v-else>
      <li v-for="todo in todos" :key="todo.id">
        <RouterLink :to="`/todos/${todo.id}`">{{ todo.title }}</RouterLink>
      </li>
     </ul>
  </main>
</template>
