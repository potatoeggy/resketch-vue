<template>
  <div class="background">
    <div class="container">
      <SmallTitle>You won {{ place }}!</SmallTitle>
      <template v-for="(user, index) in users" :key="index">
        <LeaderboardEntry
          :name="user.name"
          :score="user.score"
          :total="user.total"
        />
        <Button :dark="false" :width="300">
          <a href="">back to main menu</a>
        </Button>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    position: {
      type: Number,
    },
    users: {
      type: Array,
    },
  },
  computed: {
    place() {
      switch (this.position) {
        case 1:
          return "1st";
        case 2:
          return "2nd";
        case 3:
          return "3rd";
        default:
          return `${this.position}th`;
      }
    },
  },
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

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2em;
}
</style>
