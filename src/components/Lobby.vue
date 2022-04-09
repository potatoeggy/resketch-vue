<template>
  <div>
    <div id="over-container">
      <div className="flex flex-col justify-center w-2/3 space-y-10">
        <div className="w-full text-white text-6xl font-bold font-[Inter]">
          <SmallTitle>Lobby</SmallTitle>
        </div>
        <div className="bg-[#82A08A] w-full rounded-3xl h-[440px] px-14 py-8">
          <div className="flex flex-wrap h-full w-full space-x-28">
            {playerList}
          </div>
        </div>
        <button>
          <Button width="245">start the game!</Button>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SmallTitle from "./SmallTitle.vue";

export default defineComponent({
  components: { SmallTitle },
});
</script>

<style scoped>
#over-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    248.94deg,
    #0e312b 0.98%,
    rgba(25, 74, 39, 0.7) 101.17%
  );
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
