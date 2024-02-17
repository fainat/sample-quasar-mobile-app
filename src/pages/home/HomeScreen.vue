<script setup>
import { ref } from 'vue';

import ScrollArea from 'components/ScrollArea.vue';

import PreviewCreditCard from './widgets/PreviewCreditCard.vue';
import KindProducts from './widgets/KindProducts.vue';
import RecentProducts from './widgets/RecentProducts.vue';
import SalesBanner from './widgets/SalesBanner.vue';

const searchValue = ref('');

</script>

<template>
  <div class="homeScreen">
    <q-input rounded outlined v-model="searchValue" label="Search here..." class="homeScreen__search">
      <template v-slot:append>
        <q-icon name="search" @click="searchValue = ''" class="cursor-pointer" />
      </template>
    </q-input>
    <scroll-area position="vertical" class="scrollAreaComponent">
      <!-- Preview Credit Card -->
      <PreviewCreditCard/>
      <!-- Product Kinds -->
      <kind-products/>
      <!-- Recently Viewed Products -->
      <recent-products/>
      <!-- News -->
      <sales-banner/>
  </scroll-area>
</div>
</template>