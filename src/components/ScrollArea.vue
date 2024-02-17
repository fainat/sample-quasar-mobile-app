<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  position: {
    typeof: String,
    readonly: true,
    default: 'vertical'
  }
});

const scrollAreaPosition = ref(props.position);
</script>

<template>
  <q-scroll-area :delay="1200" :visible="false">
    <div class="row no-wrap" v-if="scrollAreaPosition === 'horizontal'">
      <slot></slot>
    </div>
    <slot v-if="scrollAreaPosition === 'vertical'"></slot>
  </q-scroll-area>
</template>