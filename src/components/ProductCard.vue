<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  detail: {
    typeof: Object,
    required: true
  },
  onSave: {
    typeof: Function | Boolean,
    default: false
  },
  icon: {
    typeof: String | Boolean,
    default: false
  }
});

const detail = ref(props.detail);
const icon = ref(props.icon);

const getImageWithProductIdAndIndex = (index, productId) => {
  return `/src/assets/nike/${productId}-${index}.png`
}

const tryingToSave = () => {
  if (props.onSave) props.onSave(props.detail);
}

</script>

<template>
  <div class="productCard">
    <div class="productCard__content">
      <img :src="getImageWithProductIdAndIndex(detail.index, detail.productId)" :alt="detail.name"/>
    </div>
    <div class="productCard__details">
      <h6>{{ detail.name }}</h6>
      <q-icon 
        :name="icon ? icon : 'favorite'"
        :saved="detail.saved"
        @click="tryingToSave"
      />
    </div>
  </div>
</template>