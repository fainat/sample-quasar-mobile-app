<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

import ScreenHeader from 'components/ScreenHeader.vue';
import ScrollArea from 'components/ScrollArea.vue';
import FavoriteProduct from 'components/FavoriteProduct.vue';

const store = useStore();

const products = computed(() => store.getters['app/getProducts']);
const favorites = computed(() => store.getters['favorites/getFavorites']);

const findProductByProductId = (productId, index = 3) => {
  const foundProduct = products.value.find((product) => product.productId === productId);
  return foundProduct;
}

const forwardToSections = async (options) => {
  await store.dispatch('app/navigate', options);
}

const removeProduct = (productId, onIndex) => {
  store.dispatch('favorites/removeProduct', {
    id: productId,
    index: onIndex
  });
}

const removeProductFromFavorites = (productId) => {
  products.value.forEach((product, onIndex) => {
    if (product.productId === productId) removeProduct(productId, onIndex);
  });
}
</script>

<template>
  <div class="favoriteScreen">
    <screen-header :forward="() => forwardToSections({ panel: 'home', tool: 'general' })">
      Favorites
    </screen-header>
    <scroll-area position="vertical" class="scrollAreaComponent">
      <favorite-product 
        v-for="favorite in favorites" 
        :key="favorite.productId" 
        :product="findProductByProductId(favorite.productId)" 
        :onRemove="removeProductFromFavorites"
      />
      <div v-if="!favorites.length" class="favoriteScreen__alert">
        <center>No Favorites Yet</center>
        <q-btn @click="() => forwardToSections({ panel: 'details', tool: 'details' })">
          Go to Products
        </q-btn>
      </div>
    </scroll-area>
  </div>
</template>

<style lang="scss">
.favoriteScreen {

  & .q-scrollarea__container {
    border-radius: 0 !important;
  }

  &__alert {
    height: 100px;
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;

    & center { 
      font-weight: 400;;
      font-size: $sm-f;
      color: $disabled;
    }

    & button {
      border-radius: $min-br;
      background-color: $orange;
      font-size: $sm-f;
      text-transform: inherit;
      font-weight: 400;
      color: white;
      &::before { visibility: hidden !important; }
    }
  }
}
</style>