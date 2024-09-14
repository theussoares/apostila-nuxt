// stores/bookStore.ts

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { Book, Module, Data } from '~/types'

export const useBookStore = defineStore('bookStore', () => {
  const books = ref<Book[]>([])
  const currentBook = ref<Book | null>(null)
  const currentModuleIndex = ref(0)

  // Carregar os dados da API (data.json)
  const loadBooks = async () => {
    try {
      const response = await fetch('/data.json')
      const data: Data = await response.json()
      books.value = data.book
      if (data.book.length > 0) {
        currentBook.value = data.book[0]
      }
    } catch (error) {
      console.error('Erro ao carregar os livros:', error)
    }
  }

  const currentModule = computed<Module | undefined>(() => {
    return currentBook.value?.modules[currentModuleIndex.value]
  })

  const nextModule = () => {
    if (currentBook.value && currentModuleIndex.value < currentBook.value.modules.length - 1) {
      currentModuleIndex.value += 1
    }
  }

  const prevModule = () => {
    if (currentBook.value && currentModuleIndex.value > 0) {
      currentModuleIndex.value -= 1
    }
  }

  const setBook = (bookId: number) => {
    const selectedBook = books.value.find(book => book.id === bookId)
    if (selectedBook) {
      currentBook.value = selectedBook
      currentModuleIndex.value = 0
    }
  }

  return {
    books,
    currentBook,
    currentModuleIndex,
    currentModule,
    loadBooks,
    nextModule,
    prevModule,
    setBook,
  }
})
