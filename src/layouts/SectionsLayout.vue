<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

import HomeScreen from 'pages/home/HomeScreen.vue';
import FavoriteScreen from 'pages/favorite/FavoriteScreen.vue';
import ProductsScreen from 'pages/products/ProductsScreen.vue';
import BanksScreen from 'pages/banks/BanksScreen.vue';

import AppScreen from 'components/AppScreen.vue';
import ControlPanel from 'components/ControlPanel.vue';
import NavigateButton from 'components/NavigateButton.vue';

const store = useStore();

const activePanel = computed(() => store.getters['app/getActivePanel']);
const activeTool = computed(() => store.getters['app/getActiveToolState']);

const favorites = computed(() => store.getters['favorites/getFavorites']);


const updateActivePanelState = async (value, tool) => {
  await store.dispatch('app/updateActivePanelState', value);
  if (tool) await store.dispatch('app/updateActiveToolState', { tool });
};

const controlPanels = computed(() => [
  {
    name: 'home',
    icon: 'home',
    badge: {
      floating: true,
      rounded: true
    },
    effect: () => updateActivePanelState('home')
  },
  {
    name: 'favorite',
    icon: 'favorite',
    badge: (favorites.value[0] ? {
      floating: true,
      rounded: false,
      count: favorites.value.length
    } : false),
    effect: () => updateActivePanelState('favorite', 'favorite')
  },
  {
    name: 'banks',
    icon: 'savings',
    badge: {
      floating: true,
      rounded: true
    },
    effect: () => updateActivePanelState('banks')
  },
  {
    name: 'profile',
    icon: undefined,
    badge: false,
    content: 'PRF',
    effect: () => updateActivePanelState('profile')
  }
]);

</script>

<template>
  <AppScreen>
    <template v-slot:screen>
      <q-tab-panels v-model="activePanel" animated>
        <!-- Pages -->
        <q-tab-panel name="home">
          <home-screen/>
        </q-tab-panel>

        <q-tab-panel name="banks">
          <banks-screen/>
        </q-tab-panel>

        <q-tab-panel name="favorite">
          <favorite-screen/>
        </q-tab-panel>

        <q-tab-panel name="profile">
          <center>Profile Layout</center>
        </q-tab-panel>

        <!-- Sections -->
        <q-tab-panel name="details">
          <products-screen/>
        </q-tab-panel>
      </q-tab-panels>
    </template>
    <template v-slot:toolbar>
      <q-tab-panels v-model="activeTool" animated>
        <q-tab-panel name="general">
          <control-panel 
            :active-control-panel="activePanel"
            :control-panels="controlPanels"
          />
        </q-tab-panel>
        <q-tab-panel name="favorite">
          <navigate-button :navigate="{ panel: 'banks', tool: 'general' }">
            Go to Payment
          </navigate-button>
        </q-tab-panel>
        <q-tab-panel name="details">
          <navigate-button :navigate="{ panel: 'favorite', tool: 'general' }">
            Go to Favorites
          </navigate-button>
        </q-tab-panel>
        <q-tab-panel name="profile">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, porro.
        </q-tab-panel>
      </q-tab-panels>
    </template>
  </AppScreen>
</template>