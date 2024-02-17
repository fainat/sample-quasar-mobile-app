<script setup>
import { ref } from 'vue';
import ScrollArea from 'components/ScrollArea.vue';

const productKinds = ref([
  {
    icon: 'sell',
    name: 'Best Deal'
  },
  {
    icon: 'work',
    name: 'Life Style'
  },
  {
    icon: 'tv',
    name: 'Furniture'
  },
  {
    icon: 'kitchen',
    name: 'Kitchen'
  },
  {
    icon: 'watch',
    name: 'Accessories'
  },
  {
    icon: 'coffee',
    name: 'Drinks'
  }
]);

</script>

<template>
  <scroll-area position="horizontal" class="homeScreen__productKinds">
    <q-card :key="kinds.name" v-for="kinds in productKinds" class="homeScreen__productKinds--choose productType">
      <div class="productType__circle">
        <q-icon :name="kinds.icon" />
      </div>
      <h6>{{ kinds.name }}</h6>
    </q-card>
  </scroll-area>
</template>

<style lang="scss">
.homeScreen__productKinds {
  height: 100px;

  & .q-scrollarea__container {
    border-radius: 0 !important;
  }

  & .q-scrollarea__content {
    display: flex;
    align-items: center;
  }

  &--choose {
    height: 80px;
    width: 70px;
    border-radius: $min-br;
    box-shadow: none;

    cursor: pointer;

    &:not(:last-child) {
      margin-right: $screen-padding;
    }
  }

  & .productType {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & h6 {
      color: $black;
      font-weight: 400;
      font-size: calc($sm-f - 2px);
    }

    &__circle {
      width: 30px;
      height: 30px;
      border-radius: 50% !important;
      margin-top: $screen-padding;
      background-color: rgba($color: #89a9d1, $alpha: .9);

      & i {
        color: white;
      }

      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:nth-child(1) {
      background-color: #89a9d1;

      & h6,
      & i {
        color: white;
      }

      & .productType__circle {
        background-color: rgba($color: white, $alpha: .5);
      }
    }
  }
}
</style>