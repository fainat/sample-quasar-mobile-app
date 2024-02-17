<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  activeControlPanel: {
    typeof: String,
    required: true,
    readonly: true
  },
  controlPanels: {
    required: true,
    readonly: true
  }
});

const activeControlPanel = computed(() => props.activeControlPanel );
const controlPanels = computed(() => props.controlPanels);

</script>

<template>
  <q-tabs v-model="activeControlPanel" class="controlPanel">
    <q-tab 
      v-for="controlPanel in controlPanels" 
      :name="controlPanel.name" 
      :icon="controlPanel.icon"
      @click="controlPanel.effect"
      :key="controlPanel.name"
    >
      <q-badge v-if="controlPanel.badge" :floating="controlPanel.badge.floating" :rounded="controlPanel.badge.rounded">
        {{ controlPanel.badge.count }}
      </q-badge>
      {{ controlPanel.content }}
    </q-tab>
  </q-tabs>
</template>