<!-- pages/book/[id].vue -->

<template>
  <div>
    <h1 class="p-4 text-xl font-bold mb-4">{{ currentBook?.title }}</h1>
    <ModuleView v-if="currentModule" :module="currentModule" />
    <Navigation class="mb-4 gap-4" :hasPrev="hasPrev" :hasNext="hasNext" @prev="prevModule" @next="nextModule" />
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useBookStore } from '~/stores/bookStore'
import ModuleView from '~/components/ModuleView.vue'
import Navigation from '~/components/Navigation.vue'
import { computed, onMounted } from 'vue'

const route = useRoute()
const bookStore = useBookStore()

const bookId = Number(route.params.id)

onMounted(async () => {
  if (bookStore.books.length === 0) {
    await bookStore.loadBooks()
  }
  bookStore.setBook(bookId)
})

const currentBook = computed(() => bookStore.currentBook)
const currentModule = computed(() => bookStore.currentModule)
const hasPrev = computed(() => bookStore.currentModuleIndex > 0)
const hasNext = computed(() =>
  bookStore.currentBook
    ? bookStore.currentModuleIndex < bookStore.currentBook.modules.length - 1
    : false
)

const nextModule = () => {
  if (hasNext.value) {
    bookStore.nextModule()
  }
}

const prevModule = () => {
  if (hasPrev.value) {
    bookStore.prevModule()
  }
}
</script>
