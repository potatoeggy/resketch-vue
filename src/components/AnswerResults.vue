<template>
  <div class="background">
    <div class="response-container">
      <SmallTitle>You got it {{ isCorrect ? "right" : "wrong" }}!</SmallTitle>
      <div class="image-container">
        <span class="description">{{ descriptionText }}</span>
        <img class="image-holder" />
      </div>
      <div class="button-container">
        <Button :width="200">next question</Button>
        <Button :width="200" :dark="true">exit to score</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SmallTitle from "./SmallTitle.vue";
import Button from "./Button.vue";
export default defineComponent({
  props: {
    isCorrect: {
      type: Boolean,
    },
    descriptionText: {
      type: String,
    },
  },
  components: { SmallTitle, Button },
});
</script>

<style scoped>
.background {
  background: linear-gradient(
    248.94deg,
    #0e312b 0.98%,
    rgba(25, 74, 39, 0.7) 101.17%
  );
  height: 100vh;
  width: 100vw;
}
.response-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.image-container {
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: flex-start;
  margin-top: 2em;
}

.image-holder {
  width: 436px;
  height: 389px;
  background: #ffffff;
  border-radius: 32px;
  margin-left: 150px;
}

.description {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  height: 400px;
  width: 436px;
  color: #ffffff;
}

.button-container {
  display: flex;
  flex-direction: row;
  margin-top: 2em;
  gap: 1em;
  align-content: center;
}
</style>
