<script setup>
import {onMounted} from "vue";

let canvas;
let ctx;
let center = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
};
let centeredRect = {
    drawCenteredRect: function (x, y) {
        ctx.strokeRect(x, y, window.innerWidth - 2 * x, window.innerHeight - 2 * y);
    }
}
onMounted(() => {
    initCanvas();
    window.onresize = () => {
        center.x = window.innerWidth / 2;
        center.y = window.innerHeight / 2;
        initCanvas();
    }
})

function initCanvas() {
    canvas = document.getElementById('backGround');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawCanvas();
}

function drawCanvas() {
    let color = "#54ff65";
    ctx.strokeStyle = color;
    ctx.globalAlpha = 0.25;
    ctx.shadowBlur = 5;
    ctx.shadowColor = color;
    ctx.lineWidth = 2.0;
    drawRects(6, 40);
    drawLines();
}

function drawRects(numRect, sideLength) {
    let rectWidth = window.innerWidth;
    let rectHeight = window.innerHeight;
    let hypo = Math.sqrt(rectWidth ** 2 + rectHeight ** 2);
    let sinA = rectHeight / hypo;
    let cosA = rectWidth / hypo;
    let curX = sideLength * cosA;
    let curY = sideLength * sinA;
    for (let cur = 0; cur < numRect; cur++) {
        centeredRect.drawCenteredRect(curX, curY);
        curX = (1 + (1 / 2 ** cur)) * curX;
        curY = (1 + (1 / 2 ** cur)) * curY;
    }
}

function drawLines() {
    ctx.beginPath();
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            let cur = [window.innerWidth * i, window.innerHeight * j];
            let to = [(i === 1) ? 1.7 * center.x : 0.3 * center.x, (j === 1) ? 1.7 * center.y : 0.3 * center.y];
            ctx.moveTo(cur[0], cur[1]);
            ctx.lineTo(to[0], to[1]);
            ctx.closePath();
        }
    }
    ctx.stroke();
}
</script>

<template>
    <canvas id="backGround"></canvas>
</template>

<style lang="scss" scoped>
@import "/src/assets/style/mixins";
@import "/src/assets/style/FontStyle";

#backGround {
  @include PageCenter;
  z-index: -1;
}
</style>