<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import ScrollArea from 'components/ScrollArea.vue';
import { forwardProductWithIndex } from './helpers';

const store = useStore();
const salesBanners = ref([
  {
    index: 3,
    name: 'Nike Sportswear',
    sale: '35',
    productId: 'PhoenixWomensOversizedweatshirt',
    background: '#e9f9f9'
  },
  {
    index: 4,
    name: 'Nike W/W Shoes',
    sale: '55',
    productId: 'FreeMetcon5WomenWorkOut',
    background: '#f6f1e7'
  }
]);

const forwardSales = (index, productId) => forwardProductWithIndex(store, { index, productId });

</script>

<template>
  <scroll-area position="horizontal" class="homeScreen__salesBanner">
    <q-card class="salesBanner" v-for="banner in salesBanners" :key="banner.name"
      :style="`background-color: ${banner.background}`" @click="forwardSales(banner.index, banner.productId)">
      <div class="salesBanner__about">
        <h6>{{ banner.name }}</h6>
        <h5 sale>Sale Up To {{ banner.sale }}% Off*</h5>
      </div>
      <div class="salesBanner__product">
        <img :src="`/src/assets/nike/${banner.productId}-${banner.index}.png`" :alt="banner.name">
      </div>
    </q-card>
  </scroll-area>
</template>

<style lang="scss" scoped>
.homeScreen__salesBanner {
  height: 150px;
  margin-top: $screen-margin-top;

  & .salesBanner {
    height: 145px;
    width: calc($screen-half * 2 - 50px);
    border-radius: $min-br;
    box-shadow: none;

    display: flex;
    justify-content: space-around;
    padding: 0 15px;

    &__about {
      width: 50%;
      margin: auto 0;

      & h6 {
        font-weight: 500;
        font-size: calc($sm-f - 2px);
        text-transform: capitalize;
      }

      & h5 {
        font-weight: bolder;
        font-size: calc(20px);
        text-transform: uppercase;
      }

      & h6,
      & h5 {
        color: $black;
        line-height: 20px;
      }
    }

    &__product {
      width: 50%;
      position: relative;

      & img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translateX(-50%) translateY(-50%);
      }
    }

    &:not(:last-child) {
      margin-right: $screen-padding;
    }
  }

  & .q-scrollarea__container {
    border-radius: 0 !important;
  }
}</style>