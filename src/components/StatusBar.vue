<script setup>
import {reactive} from 'vue'

const barText = reactive({
    temperature: "75°C",
    dataFlow: "2MU/S"
})
const toolTipText = reactive({
    gitHub: "Contact Us",
    terminal: "Terminal",
    sunny: "Sunny",
    temperature: "Temperature",
    dataFlow: "Data Flow"
})
</script>

<template>
    <div id="statusBar">
        <a class="gridItems">
            <img alt="x" class="icon" src="/src/assets/icons/terminal.svg">
            <span class="toolTipText">{{ toolTipText.terminal }}</span>
        </a>
        <a class="gridItems">
            <img alt="x" class="icon" src="/src/assets/icons/sunny.svg">
            <span class="toolTipText">{{ toolTipText.sunny }}</span>
        </a>
        <a class="gridItems">
            <img alt="x" class="icon" src="/src/assets/icons/thermometer.svg">
            <p class="barText">{{ barText.temperature }}</p>
            <span class="toolTipText">{{ toolTipText.temperature }}</span>
        </a>
        <a class="gridItems">
            <img alt="x" class="icon" src="/src/assets/icons/swap-vertical.svg">
            <p class="barText">{{ barText.dataFlow }}</p>
            <span class="toolTipText">{{ toolTipText.dataFlow }}</span>
        </a>
        <a class="gridItems" href="https://github.com/AI-Channel/Cyberpunk2020-Netrunning-Map">
            <img alt="x" class="icon" src="/src/assets/icons/github.svg">
            <span class="toolTipText">{{ toolTipText.gitHub }}</span>
        </a>
        <div class="gridItems"></div>
    </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/style/mixins";
@import "/src/assets/style/FontStyle";
#statusBar {
    @include VerticalCenter;
    $barWidth: 45px;
    $barHeight: 320px;
    width: $barWidth;
    height: $barHeight;
    background-color: $mainColor;
    box-shadow: -20px 10px 13px rgba($mainColor, 0.5), 0px 0px 8px $mainColor;
    box-sizing: border-box;
    right: 0;
    display: grid;
    grid-template-rows: repeat(8, 1fr);

    .gridItems, .icon {
        margin: auto;
        display: block;
    }

    .icon {
        max-width: 90%;
    }

    .toolTipText {
        @include StandardBorder;
        user-select: none;
        visibility: hidden;
        text-align: center;
        padding: 5px;
        position: absolute;
        z-index: 1;
        top: -5px;
        background-color: rgba(black, 0.6);
        right: 200%;
        color: $mainColor;
        zoom: .8;
        backdrop-filter: blur(10px);
        border-radius: 6px;
        font: {
            size: 8px;
            family: Orbitron, sans-serif;
        }
    }

    a:hover {
        filter: opacity(70%);

        .toolTipText {
            visibility: visible;
        }
    }

    .barText {
        box-sizing: border-box;
        user-select: none;
        font: {
            size: xx-small;
            family: Orbitron, sans-serif;
        }
        margin: auto;
        padding: 0;
        zoom: .7;
    }
}
</style>