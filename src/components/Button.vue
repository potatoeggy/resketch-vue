<template>
  <div class="container" :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    dark: {
      type: Boolean,
    },
    width: {
      type: Object as () => number | undefined,
    },
  },
  computed: {
    styles() {
      return {
        color: this.dark ? "white" : "#245F3F",
        "background-color": this.dark ? "#13362E" : "white",
        padding: "14px 28px",
        "border-radius": "16px",
        cursor: "pointer",
        "font-size": "24px",
        "text-align": "center",
        "box-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        width: this.width ? `${this.width}px` : "auto",
      };
    },
  },
});
</script>
