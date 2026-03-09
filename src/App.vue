<script setup>
import { RouterView } from "vue-router";
import { useDarkLightMode } from "./composables/useDarkLightMode";
const { mode } = useDarkLightMode();
</script>

<template>
  <div :class="mode === 'light' ? 'light-main' : 'dark-main'">
    <RouterView />
  </div>
</template>
<style scoped>
div {
    min-height: 100vh;
}

.dark-main {
  background: #1e2939;
}
.light-main {
  background: #fafafa;
}
</style>
