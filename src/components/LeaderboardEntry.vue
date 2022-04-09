<template>
  <div class="container">
    <h2>{{ name }}</h2>
    <h2>{{ score }} of {{ total }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    name: { type: String },
    score: { type: Number },
    total: { type: Number },
  },
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  background: #82a08a;
  border-radius: 16px;
  padding: 8px 32px;
  width: 750px;
}

h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  display: flex;
  align-items: center;
  color: #ffffff;
}
</style>
