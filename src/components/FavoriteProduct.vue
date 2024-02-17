<script setup>
import { defineProps, ref } from 'vue';
import { matClose } from '@quasar/extras/material-icons';


const props = defineProps({
  product: {
    typeof: Object,
    required: true
  },
  onRemove: {
    typeof: Function,
    required: true
  }
});

const product = ref(props.product);

</script>

<template>
  <q-card class="favoriteProduct">
    <div class="favoriteProduct__content">
      <img :src="`/src/assets/nike/${product.productId}-${3}.png`" :alt="product.name">
    </div>
    <div class="favoriteProduct__details">
      <div class="favoriteProduct__details--names">
        <h6>
          {{ product.name }} •
          {{ product.subname.length > 20 ? (product.subname.slice(0, 18) + '...') : product.subname }}
        </h6>
        <h6>${{ product.cost }}</h6>
      </div>
      <q-btn class="favoriteProduct__details--remove" @click="props.onRemove(product.productId)">
        <q-icon :name="matClose" />
      </q-btn>
    </div>
  </q-card>
</template>

<style lang="scss" scoped>
.favoriteProduct {
  height: 100px;
  max-width: 100%;

  display: flex;
  align-items: stretch;
  justify-content: space-between;

  box-shadow: none;
  background-color: transparent;

  &__content {
    width: 55%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  &__details {
    display: flex;
    align-items: center;

    &--names {
      height: 100%;
      padding: $screen-padding 0;
      display: flex;
      align-items: left;
      flex-direction: column;
      justify-content: space-between;

      & h6 {
        font-size: $sm-f;
        font-weight: 400;
        line-height: 20px;
        color: $black;
      }

      & h6:nth-child(2) {
        color: white;
        font-size: $sm-f;
        width: fit-content;
        background-color: $orange;
        border-radius: $min-br;
        padding: 1px 7px 1px 6px;
      }
    }


    &--remove {
      min-width: fit-content;
      margin: 0 10px;
      border-radius: $min-br;
      // background-color: $saved;
      background-color: rgba($color: #eae4df, $alpha: .5);

      & i {
        color: $saved
      }

      transition: all .2s ease;
      &:hover {

        & i {
          color: white;
        }

        background-color: $saved;
      }

      &::before {
        visibility: hidden !important;
      }
    }
  }

  border-radius: $min-br;
  // background-color: rgba($color: #eae4df, $alpha: .5);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
}</style>