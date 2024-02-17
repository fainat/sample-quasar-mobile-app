<script setup>
import Toolbar from './Toolbar.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const activePanel = computed(() => store.getters['app/activePanel']);

</script>

<template>
  <div class="appScreen">
    <div class="appScreen__scrollArea">
      <slot name="screen"></slot>
    </div>
    <slot></slot>
    <Toolbar>
      <slot name="toolbar"></slot>
    </Toolbar>
  </div>
</template>