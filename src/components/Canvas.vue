<template>
  <div>
    <div id="over-container">
      <div class="flex flex-col justify-center items-center w-2/3 space-y-8">
        <div
          class="flex items-center w-full bg-[#E9E9E9] rounded-xl px-4 font-[Inter]"
        >
          <div class="w-1/3 py-4 text-lg text-gray-500">Round 1 out of 3:</div>
          <div class="w-1/3 text-center text-3xl">draw a car</div>
          <div class="w-1/3 py-4" />
        </div>
        <div class="flex space-x-8 w-full h-full">
          <div class="pr-4">
            <div class="bg-white rounded-3xl">
              <canvas
                onMouseDown="{startDrawing}"
                onMouseUp="{endDrawing}"
                onMouseMove="{draw}"
                ref="canvas"
                width="860px"
                height="480px"
                class="rounded-3xl"
              />
            </div>
          </div>
          <div class="flex flex-col bg-white rounded-3xl">
            <div
              @click="changeToPencil"
              class="h-1/2 flex border-b-2 border-b-black justify-center items-center px-4 hover:cursor-pointer"
            >
              <img src="@/assets/Ellipse.svg" />
            </div>
            <div
              @click="changeToEraser"
              class="h-1/2 flex border-t-2 border-t-black justify-center items-center px-4 hover:cursor-pointer"
            >
              <img src="@/assets/Eraser.png" />
            </div>
          </div>
        </div>
        <div class="flex w-full space-x-32 font-[Inter] font-bold">
          <div class="flex w-full space-x-8">
            <template v-for="(item, index) in roundData" :key="index">
              <div
                :class="[
                  'flex',
                  'justify-center',
                  'items-center',
                  'w-1/3',
                  'rounded-xl',
                  'py-3.5',
                  {
                    'bg-[#0E312B]': item.state === 'correct',
                    'bg-[#9D9D9D]': item.state === 'incorrect',
                    'bg-white': item.state === 'not answered',
                    'text-white': item.state !== 'not answered',
                    'text-black': item.state === 'not answered',
                    'box-border': item.state === 'not answered',
                  },
                ]"
              >
                {{ item.roundNumber }}
              </div>
            </template>
          </div>
          <button>
            <Button :width="320">Submit Drawing</Button>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "./Button.vue";
export default defineComponent({
  components: { Button },
  data() {
    return {
      isDrawing: false,
      lineWidth: 5,
      lineColor: "black",
      lineOpacity: 1,
      ctx: null as CanvasRenderingContext2D | null,
      roundData: [ // dummy data
        {
            roundNumber: 1,
            state: "correct",
        },
        {
            roundNumber: 2,
            state: "incorrect",
        },
        {
            roundNumber: 3,
            state: "not answered",
        },
    ]
    };
  },
  mounted() {
    const ctx = (this.$refs.canvas as HTMLCanvasElement).getContext("2d")!;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = this.lineOpacity;
    ctx.strokeStyle = this.lineColor;
    ctx.lineWidth = this.lineWidth;
    this.ctx = ctx;
  },
  methods: {
    changeToEraser() {
      this.lineWidth = 50;
      this.lineColor = "white";
    },
    changeToPencil() {
      this.lineWidth = 5;
      this.lineColor = "black";
    },

    startDrawing(event: MouseEvent) {
      if (this.ctx) {
        this.ctx.beginPath();
        this.ctx.moveTo(event.offsetX, event.offsetY);
        this.isDrawing = true;
      }
    },

    endDrawing() {
        if (this.ctx) {
            this.ctx.closePath();
            this.isDrawing = false;
        }
    }

    draw(event: MouseEvent ) {
        if (!this.isDrawing) {
            return;
        }
        if (this.ctx) {
            this.ctx.lineTo(event.offsetX, event.offsetY)
            this.ctx.stroke()
        }
    }
  },
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
</style>
