<template>
  <div class="container">
    <router-view v-slot="{ Component }">
      <!-- <transition name="fade" mode="out-in"> -->
        <component :is="Component" :key="$route.path"></component>
      <!-- </transition> -->
    </router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.container {
  position: relative;
}

.container::before {
  position: absolute;
  content: "iPhone 14 Pro Max 1284px × 2778px";
  top: -25px;
  right: 0;
  font-size: smaller;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}</style>
