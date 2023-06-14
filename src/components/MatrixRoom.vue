<script setup lang="ts">
import { onMounted } from "vue";

let canvas;
let ctx;
let curX: number;
let curY: number;

onMounted(() => {
  initCanvas();
  window.onresize = () => {
    initCanvas();
  };
});

function initCanvas(): void {
  canvas = document.querySelector("canvas");
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawCanvas();
}

function drawCanvas(): void {
  let color = "#54ff65";
  ctx.strokeStyle = color;
  ctx.globalAlpha = 0.25;
  ctx.shadowBlur = 5;
  ctx.shadowColor = color;
  ctx.lineWidth = 2.0;
  drawRects(5, 60);
  drawLines();
}

function drawRects(numRect: number, sideLength: number): void {
  let rectWidth = window.innerWidth;
  let rectHeight = window.innerHeight;
  let hypo = Math.sqrt(rectWidth ** 2 + rectHeight ** 2);
  let sinA = rectHeight / hypo;
  let cosA = rectWidth / hypo;
  curX = sideLength * cosA;
  curY = sideLength * sinA;
  for (let cur = 0; cur < numRect; cur++) {
    ctx.strokeRect(
      curX,
      curY,
      window.innerWidth - 2 * curX,
      window.innerHeight - 2 * curY
    );
    curX = (1 + 1 / 2 ** cur) * curX;
    curY = (1 + 1 / 2 ** cur) * curY;
  }
}

function drawLines(): void {
  ctx.beginPath();
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      let cur = [window.innerWidth * i, window.innerHeight * j];
      let to = [
        i === 1 ? window.innerWidth - curX : curX,
        j === 1 ? window.innerHeight - curY : curY,
      ];
      ctx.moveTo(cur[0], cur[1]);
      ctx.lineTo(to[0], to[1]);
      ctx.closePath();
    }
  }
  ctx.stroke();
}
</script>

<template>
  <canvas></canvas>
</template>

<style lang="scss" scoped>
@import "/src/assets/style/mixins";
@import "/src/assets/style/FontStyle";

canvas {
  @include PageCenter;
  z-index: -1;
}
</style>
