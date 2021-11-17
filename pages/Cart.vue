<template>
  <div>
    <Suspense>
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Загрузка данных...</span>
        </div>
      </template>
      <div>
        <div v-if="!formattedCart.length">
          <h1 class="text-xl">Корзина пуста.</h1>
        </div>
        <div v-else>
          <div class="flex flex-wrap">
            <CartCard v-for="(cartProduct, index) in formattedCart" :key="index" :cartProduct="cartProduct" />
          </div>
          <div class="mt-8 text-xl md:text-4xl">Итого: {{ cartStore.total }} руб</div>
        </div>
      </div>
    </Suspense>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '../stores/cart'
import { useProductStore } from '../stores/products'
import CartCard from '../components/CartCard.vue'

const cartStore = useCartStore()
const productStore = useProductStore()
const formattedCart = computed(() => cartStore.formattedCart)
</script>