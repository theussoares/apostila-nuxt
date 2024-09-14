<!-- components/Navigation.vue -->

<template>
  <div class="flex justify-between mt-4">
    <button 
      v-if="hasPrev" 
      @click="$emit('prev')" 
      class="px-4 py-2 bg-gray-300 rounded"
    >
      Módulo Anterior
    </button>
    <button 
      v-if="hasNext" 
      @click="$emit('next')" 
      class="px-4 py-2 bg-gray-300 rounded"
    >
      Próximo Módulo
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  hasPrev: boolean
  hasNext: boolean
}>()

const emit = defineEmits<{
  (e: 'prev'): void
  (e: 'next'): void
}>()
</script>
