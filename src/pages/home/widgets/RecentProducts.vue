<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import ProductCard from 'components/ProductCard.vue';
import { forwardProductWithIndex } from './helpers';

const store = useStore();
const products = ref([
  {
    // index: 4,
    index: 6,
    name: "Nike Free Metcon 5 (W&W Shoes)",
    saved: true,
    // productId: 'FreeMetcon5WomenWorkOut',
    productId: 'FreeMetcon5MenWorkOut',
  },
  {
    index: 4,
    name: 'Nike Sportswear Phoenix Fleece',
    saved: false,
    productId: 'PhoenixWomensOversizedweatshirtBlue',
  }
]);

const forwardProducts = (index, productId) => forwardProductWithIndex(store, { index, productId });

</script>

<template>
  <div class="recentProducts">
    <product-card 
      :key="product.name" 
      v-for="product in products" :detail="product"
      @click="forwardProducts(product.index, product.productId)" 
    />
  </div>
</template>

<style lang="scss" scoped>
.recentProducts {
  display: flex;
  gap: $screen-padding;
}
</style>