<template>
  <div>
    <Suspense>
      <template #fallback>
        <div op70 italic>
          <span animate-pulse>Загрузка данных...</span>
        </div>
      </template>
      <div>
        <h1 text-2xl font-bold pb-6>Доступные товары</h1>
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import ProductCard from '../components/ProductCard.vue'

import { usePersistCart } from '../composables/usePersistCart'
import { useProductStore } from '../stores/products'

const productStore = useProductStore()

productStore.fetchAll()
// usePersistCart()
const products = computed(() => productStore.list)

</script>
