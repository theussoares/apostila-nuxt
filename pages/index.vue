<!-- pages/index.vue -->

<template>
  <div class="flex items-center justify-center min-h-screen">
    <BookButton />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useBookStore } from '~/stores/bookStore'
import BookButton from '~/components/BookButton.vue'

const bookStore = useBookStore()

onMounted(() => {
  bookStore.loadBooks()
})
</script>
