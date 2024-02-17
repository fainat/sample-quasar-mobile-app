<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

import { matAttachMoney } from '@quasar/extras/material-icons'

const store = useStore();

const creditCard = computed(() => store.getters['app/getMainCreditCard']);

const getLastEightDigits = () => {
  let cardNumber = String(creditCard.value.number);
  cardNumber = cardNumber.slice(cardNumber.length / 2, cardNumber.length);
  return [cardNumber.slice(0, cardNumber.length / 2), cardNumber.slice(cardNumber.length / 2, cardNumber.length)]
}

const forwardBanks = () => store.dispatch('app/updateActivePanelState', 'banks');

</script>

<template>
  <q-card class="homeScreen__pinnedCreditCard" @click="forwardBanks">
    <div class="homeScreen__pinnedCreditCard--above">
      <h6>Balance</h6>
      <q-icon :name="creditCard.name" />
    </div>
    <div class="homeScreen__pinnedCreditCard--below">
      <h6 price>
        <q-icon :name="matAttachMoney" />
        {{ creditCard.balance }}
      </h6>
      <h6 credit-number>
        {{ Array(getLastEightDigits()[0].length).fill(null).join('*') }}
        {{ getLastEightDigits()[1] }}
      </h6>
    </div>
  </q-card>
</template>

<style lang="scss">
.homeScreen__pinnedCreditCard {
  margin: 2px;
  border-radius: $min-br;
  background-color: $black;
  padding: $screen-padding calc($screen-padding + 10px);

  &--above i {
    color: white;
    font-size: calc($sm-f + 10px);
    margin-left: -20px;
  }

  &--below {
    margin-top: $screen-margin-top;
  }

  &--above,
  &--below {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & h6 {
      font-size: $sm-f;
      font-weight: 400;
      color: white;

      &[price=""] {
        font-weight: bold;
        font-size: calc($sm-f + 8px);

        display: flex;
        align-items: center;

        & i {
          color: white;
          font-size: calc($sm-f + 10px);
          margin-left: -5px;
        }
      }

      &[credit-number=""] {
        font-weight: bold;
        font-family: 'Courier New', Courier, monospace;
      }
    }
  }
}
</style>