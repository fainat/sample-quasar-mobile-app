<script setup>
import { ref, defineProps } from 'vue';
import { matKeyboardBackspace } from '@quasar/extras/material-icons'

const props = defineProps({
  forward: {
    typeof: Function | Boolean,
    default: false
  },
  action: {
    typeof: Boolean,
    default: false
  }
});

const forward = ref(props.forward);
const action = ref(props.action);

</script>
<template>
  <div class="screenHeaderComponent">
    <q-btn @click="forward" v-if="forward" class="screenHeaderComponent__forward">
      <q-icon :name="matKeyboardBackspace" />
    </q-btn>
    <h6 class="screenHeaderComponent__title">
      <slot/>
    </h6>
    <div class="screenHeaderComponent__action" v-if="action || forward">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.screenHeaderComponent {
  display: flex;
  height: $elem-height;
  align-items: center;

  &__forward {
    margin-right: 5px;
    border-radius: $min-br;
    width: $control-panel-gap;

    & i { font-size: $icon-action-size; }
    &::before { visibility: hidden; }
  }

  &__title {
    font-size: calc($sm-f + 4px);
    font-weight: 400;
    margin: 0 auto;
  }

  &__action {
    width: $control-panel-gap;
  }
}
</style>