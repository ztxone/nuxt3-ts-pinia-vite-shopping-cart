<template>
  <div flex justify-center mx-auto space-x-4 text-2xl font-300 cursor-default>
    <div flex>
      <NuxtLink to="/">Главная</NuxtLink>
    </div>
    <span>|</span>
    <div flex>
      <NuxtLink to="/cart">Корзина ({{ count }})</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
const count = computed(() => cartStore.count)
</script>
