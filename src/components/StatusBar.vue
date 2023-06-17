<script setup lang="ts">
import { reactive } from 'vue';

interface tooltip {
  gitHub: string;
  terminal: string;
  sunny: string;
  temperature: string;
  dataFlow: string;
}

const barText = reactive({
  temperature: '75°C',
  dataFlow: '2MU/S'
});
const toolTipText: tooltip = reactive({
  gitHub: 'Contact Us',
  terminal: 'Terminal',
  sunny: 'Sunny',
  temperature: 'Temperature',
  dataFlow: 'Data Flow'
});
</script>

<template>
  <div id="statusBar">
    <a class="gridItems">
      <img alt="x" class="icon" src="/src/assets/icons/terminal.svg" />
      <span class="toolTipText">{{ toolTipText.terminal }}</span>
    </a>
    <a class="gridItems">
      <img alt="x" class="icon" src="/src/assets/icons/sunny.svg" />
      <span class="toolTipText">{{ toolTipText.sunny }}</span>
    </a>
    <a class="gridItems">
      <img alt="x" class="icon" src="/src/assets/icons/thermometer.svg" />
      <p class="barText">{{ barText.temperature }}</p>
      <span class="toolTipText">{{ toolTipText.temperature }}</span>
    </a>
    <a class="gridItems">
      <img alt="x" class="icon" src="/src/assets/icons/swap-vertical.svg" />
      <p class="barText">{{ barText.dataFlow }}</p>
      <span class="toolTipText">{{ toolTipText.dataFlow }}</span>
    </a>
    <a class="gridItems" href="https://github.com/AI-Channel/Cyberpunk2020-Netrunning-Map">
      <img alt="x" class="icon" src="/src/assets/icons/github.svg" />
      <span class="toolTipText">{{ toolTipText.gitHub }}</span>
    </a>
    <div class="gridItems"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '/src/assets/style/mixins';
@import '/src/assets/style/FontStyle';

#statusBar {
  @include VerticalCenter;
  width: 50px;
  height: 340px;
  background-color: $mainColor;
  box-shadow: -20px 10px 13px rgba($mainColor, 0.5), 0 0 8px $mainColor;
  box-sizing: border-box;
  user-select: none;
  right: 0;
  display: grid;
  grid-template-rows: repeat(8, 1fr);

  .gridItems,
  .icon {
    margin: auto;
    display: block;
  }

  .toolTipText {
    @include StandardBorder;
    display: none;
    text-align: center;
    padding: 5px;
    position: absolute;
    z-index: 1;
    top: -1px;
    background-color: rgba(black, 0.6);
    right: 150%;
    color: $mainColor;
    border-radius: 6px;
    font: {
      size: 8px;
      family: Orbitron, sans-serif;
    }
  }

  a:hover {
    filter: opacity(70%);

    .toolTipText {
      display: block;
    }
  }

  .barText {
    box-sizing: border-box;
    font: {
      size: xx-small;
      family: Orbitron, sans-serif;
    }
    margin: auto;
    padding: 0;
    zoom: 0.8;
  }
}
</style>
