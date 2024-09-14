<!-- components/BookButton.vue -->

<template>
  <div class="w-2/5 flex flex-col gap-2">
    <div>
      <img class="rounded-md" :src="capa" alt="" />
    </div>
    <button
      @click="openBook"
      class="w-full px-4 py-2 bg-blue-900 text-white rounded"
    >
      Abrir Livro
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useBookStore } from "~/stores/bookStore";
import { useRouter } from "vue-router";
import capa from "@/assets/capa.webp";

const bookStore = useBookStore();
const router = useRouter();

const openBook = () => {
  if (bookStore.books.length > 0) {
    const bookId = bookStore.books[0].id; // Seleciona o primeiro livro
    router.push(`/book/${bookId}`);
  } else {
    alert("Nenhum livro disponível.");
  }
};
</script>
