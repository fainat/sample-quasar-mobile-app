<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { matAdd } from '@quasar/extras/material-icons';

import ScreenHeader from 'components/ScreenHeader.vue';
import ScrollArea from 'components/ScrollArea.vue';
import ProductCard from 'components/ProductCard.vue';

const store = useStore();

const products = computed(() => store.getters['app/getProducts']);

const forwardHomeScreen = async () => {
  await store.dispatch('app/navigate', { panel: 'home', tool: 'general' });
}

const saveToFavorites = async (product) => {
  await store.dispatch('favorites/addFavorites', product);
}

</script>

<template>
  <div class="productsScreen">
    <screen-header :forward="forwardHomeScreen">
      Nike Products
    </screen-header>
    <scroll-area position="vertical" class="scrollAreaComponent">
      <div class="productsScreen__products">
        <product-card 
          v-for="product in products" 
          :detail="{
            ...product,
            index: 3,
            name: `$${product.cost} - ${product.name}`,
            saved: true
          }"
          :onSave="saveToFavorites"
          :icon="matAdd"
        />
      </div>
    </scroll-area>
  </div>
</template>

<style lang="scss">
.productsScreen__products {
  display: flex;
  flex-flow: row wrap;

  & .productCard:not(:last-child) {
    margin-bottom: $screen-margin-top;
  }

  & .productCard:nth-child(even) {
    margin-left: 10px;
  }
}
</style>
