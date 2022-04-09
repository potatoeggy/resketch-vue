<template>
  <div class="modal-overlay" />
  <div class="modal-wrapper" aria-modal aria-hidden tabIndex="-1" role="dialog">
    <div class="modal">
      <div id="container">
        <div id="header">
          <Body><div style="color: black">room code</div> </Body>
          <button
            type="button"
            class="modal-close-button"
            data-dismiss="modal"
            aria-label="Close"
            @click="toggle"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <input id="form" v-model="code" />
        <Body>
          <div style="color: black">choose a name</div>
        </Body>
        <input id="form" v-model="name" />
        <div class="flex space-between">
          <Button :dark="true"> enter the room </Button>
          <Button>host the room</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Body from "./Body.vue";
import Button from "./Button.vue";
export default defineComponent({
  props: {
    isShowing: {
      type: Boolean,
    },
  },
  data() {
    return {
      code: "",
      name: "",
    };
  },
  components: { Body, Button },
  methods: {
    toggle() {
      this.$emit("exit");
    },
  },
  emits: ["exit"],
});
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
#header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
#form {
  height: 50px;
  width: 100%;
  border-radius: 16px;
  background: #e9e9e9;
  padding-left: 20px;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
}

.modal-wrapper {
  position: fixed;
  top: 30%;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

.modal {
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 32px;
  max-width: 550px;
  padding: 2rem;
}

.modal-header {
  display: flex;
  justify-content: flex-end;
}

.modal-close-button {
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: 0.3;
  cursor: pointer;
  border: none;
}

button {
  font-size: 0.9rem;
  font-weight: 700;
  border: none;
  border-radius: 3px;
  padding: 0.3rem 1rem;
  margin-left: 0.5rem;
}

.button-default {
  background: #247ba0;
  color: #fff;
}
</style>
