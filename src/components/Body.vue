<template>
  <h1><slot></slot></h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style scoped>
h1 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  color: #ffffff;
}
</style>
