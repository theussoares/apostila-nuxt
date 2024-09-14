<!-- components/ModuleView.vue -->

<template>
  <div class="flex flex-col gap-4">
    <h2 class="p-4 text-xl font-semibold text-slate-700">
      Módulo {{ module.id }}: {{ module.title }}
    </h2>

    <section class="mb-4">
      <h3 class="p-4 text-xl font-semibold text-slate-700">Palavras</h3>
      <ul class="list-none">
        <li v-for="(word, index) in module.words" :key="index" class="mb-4">
          <div class="flex items-center justify-between h-12 bg-slate-700 p-4">
            <div>
              <strong class="text-xl font-medium text-slate-100">{{
                word.english
              }}</strong>
              <span
                v-if="visibleTranslations.has(index)"
                class="ml-2 text-xl font-medium text-slate-100"
                >- {{ word.portuguese }}</span
              >
            </div>
            <!-- No template, substitua o <img> pelo componente correspondente -->
            <button
              @click="toggleTranslation(index)"
              class="focus:outline-none"
            >
              <EyeOffIcon v-if="visibleTranslations.has(index)" />
              <EyeIcon v-else />
            </button>
          </div>
          <!-- Lista de perguntas relacionada à palavra -->
          <ul
            v-if="word.questions && word.questions.length"
            class="list-decimal list-inside ml-4 mt-2"
          >
            <li v-for="(question, qIndex) in word.questions" :key="qIndex">
              {{ question }}
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section class="mb-4">
      <h3 class="p-4 text-xl font-semibold text-slate-700">
        Estruturas e Exemplos
      </h3>
      <div
        v-for="(structure, sIndex) in module.structures_and_examples"
        :key="sIndex"
        class="mb-2"
      >
        <h4 class="p-4 text-lg font-semibold text-slate-700">
          {{ structure.title }}
        </h4>
        <div v-if="structure.sections" class="bg-slate-700 p-4">
          <div
            v-for="(section, secIndex) in structure.sections"
            :key="secIndex"
            class="mb-8"
          >
            <h5 class="font-medium text-slate-100 text-center mb-2">
              {{ section.title }}
            </h5>
            <ul class="list-none flex flex-wrap justify-evenly gap-8">
              <li v-for="(example, exIndex) in section.content" :key="exIndex">
                <strong class="text-slate-200 font-medium text-md"
                  >{{ example.english }}
                  <br />
                </strong>
                <span class="text-slate-300 font-normal text-md"
                  >-{{ example.portuguese }}</span
                >
              </li>
            </ul>
          </div>
        </div>
        <div v-else class="bg-slate-700 p-4">
          <ul class="list-none flex flex-wrap justify-evenly gap-8">
            <li v-for="(example, exIndex) in structure.examples" :key="exIndex">
              <strong class="text-slate-200 font-medium text-md"
                >{{ example.english }}
                <br />
              </strong>
              <span class="text-slate-300 font-normal text-md"
                >-{{ example.portuguese }}</span
              >
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mb-4">
      <h3 class="p-4 text-xl font-semibold text-slate-700">Perguntas e Respostas</h3>
      <ul class="list-none bg-slate-700 p-4">
        <li v-for="(qa, index) in module.questions_and_answers" :key="index">
          <strong class="text-slate-300">P:</strong> <span class="text-slate-300 font-normal text-md">{{ qa.question }}</span>
          <br />
          <strong class="text-slate-300">R:</strong> <span class="text-slate-200 font-thin text-md">{{ qa.answer }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";
import type { Module } from "~/types";
import EyeIcon from "~/components/EyeIcon.vue";
import EyeOffIcon from "~/components/EyeOffIcon.vue";

// Definir as propriedades esperadas pelo componente
const props = defineProps<{
  module: Module;
}>();

// Estado reativo para controlar a visibilidade das traduções
const visibleTranslations = ref(new Set<number>());

// Função para alternar a visibilidade da tradução
const toggleTranslation = (index: number) => {
  if (visibleTranslations.value.has(index)) {
    visibleTranslations.value.delete(index);
  } else {
    visibleTranslations.value.add(index);
  }
  // Reatribuir para garantir a reatividade
  visibleTranslations.value = new Set(visibleTranslations.value);
};
</script>

<style scoped>
/* Suavizar transições de opacidade */
.transition-opacity {
  transition: opacity 0.3s ease;
}
</style>
