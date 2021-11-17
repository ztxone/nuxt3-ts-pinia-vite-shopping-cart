<template>
  <div class="card bordered ">
    <figure class="px-8 pt-10">
      <img
        :src="product.image"
        alt="Card Image"
        class="object-contain w-full h-64"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ product.title }}
      </h2>
      <p>{{ product.price }} руб</p>
      <div class="justify-end card-actions">
        <button class="btn btn-primary" @click="cartStore.add(product.id)">В корзину</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../stores/cart'
import type { Product } from '../stores/products'

const cartStore = useCartStore()
defineProps<{
  product: Product
}>()
</script>
