<template>
  <div class="flex flex-col justify-between border border-gray-300 rounded-xl w-full sm:w-[45%] lg:w-[28%] m-2 p-4">
    <figure class="p-6">
      <img
        :src="cartProduct.image"
        alt="Card Image"
        class="object-contain w-full h-48"
      />
    </figure>
    <div>
      <h2 class="font-semibold mb-4">
        <router-link class="link link-hover" :to="`/product/${cartProduct.id}`">{{ cartProduct.title }}</router-link>
      </h2>
      <p>{{ cartProduct.cost }} руб</p>
      <div class="justify-end ">
        <div class="btn-group">
          <button class="bg-red-300 hover:op70 px-4 py-2 rounded-xl mt-4" @click="cartStore.remove(cartProduct.id)">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../stores/cart'
import type { CartPreview } from '../stores/cart'
const cartStore = useCartStore()
defineProps<{
  cartProduct: CartPreview
}>()
</script>
