<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Body from "../components/Body.vue";
import Button from "../components/Button.vue";
import Title from "../components/Title.vue";
import Modal from "../components/Modal.vue";
</script>

<template>
  <Modal v-if="showModal" @exit="showModal = false" />
  <div id="background">
    <div class="flex flex-col space-y-8">
      <Title>resketch.</Title>
      <Body>
        unleash your creativity. <br />
        sketch now.
      </Body>
      <div class="flex space-x-8">
        <Button>join a game</Button>
        <div>
          <Button @click="showModal = true" :dark="true"
            >enter a private room</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  components: { Body, Title, Button },
  data() {
    return {
      showModal: false,
    };
  },
});
</script>

<style scoped>
#background {
  height: 100vh;
  width: 100vw;
  padding: 160px;
  background: linear-gradient(
    248.94deg,
    #0e312b 0.98%,
    rgba(25, 74, 39, 0.7) 101.17%
  );
}
</style>
