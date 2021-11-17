<template>
  <Suspense>
    <template #fallback>
      <div op70 italic>
        <span animate-pulse>Загрузка данных...</span>
      </div>
    </template>
    <div class="flex flex-col justify-between border border-gray-300 rounded-xl w-full sm:w-[45%] lg:w-[28%] m-2 p-4">
      <figure class="p-6">
        <img
          :src="product.image"
          alt="Card Image"
          class="object-contain w-full h-64"
        />
      </figure>
      <div>
        <h2 class="font-semibold mb-4">
          {{ product.title }}
        </h2>
        <p>{{ product.price }} руб</p>
        <div class="justify-end ">
          <button class="bg-yellow-200 hover:op70 px-4 py-2 rounded-xl mt-4" @click="cartStore.add(product.id)">В корзину</button>
        </div>
      </div>
    </div>
  </Suspense>
</template>

<script setup lang="ts">
import { useCartStore } from '../stores/cart'
import type { Product } from '../stores/products'

const cartStore = useCartStore()
defineProps<{
  product: Product
}>()
</script>
