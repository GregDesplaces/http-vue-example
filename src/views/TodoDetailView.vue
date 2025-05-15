<template>
  <div>
    <h1>La page du detail du todos avec l'id {{ id }}</h1>
    <hr>
    <p v-if="isLoading">Chargement en cours</p>

    <div v-else>
      <p>Titre du todo : {{ currentTodo.title }}</p>
      <p>Statut du todo : {{ (currentTodo.completed) ? 'Terminé' : 'En cours' }}</p>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { API_URL } from '@/config'
import { useRoute } from 'vue-router'

const isLoading = ref(true)
const currentTodo = ref(null)

const route = useRoute()
const id = route.params.id

onMounted( async () => {
  const response = await fetch(API_URL + '/' + id)
  currentTodo.value = await response.json()
  isLoading.value = false

})

</script>

