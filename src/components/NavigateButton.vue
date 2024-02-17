<script setup>
import { defineProps } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const props = defineProps({
  navigate: {
    typeof: Object,
    required: true
  }
});

const navigation = async () => {
  await store.dispatch('app/navigate', { panel: props.navigate.panel, tool: props.navigate.tool });
}
</script>

<template>
  <q-btn @click="navigation" class="navigateButton">
    <slot />
  </q-btn>
</template>

<style lang="scss" scoped>
.navigateButton {
  width: 85%;
  height: $elem-height;
  color: white;
  text-transform: capitalize;
  font-size: $sm-f;
  border-radius: $min-br;
  background-color: $black;

  &:active { box-shadow: none; }
  &::before { visibility: hidden; }
}
</style>