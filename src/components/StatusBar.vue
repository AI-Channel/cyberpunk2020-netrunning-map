<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "StatusBar",
    data() {
        return {
            temperature: "75°C",
            dataFlow: "2MU/S",
            gridClass: "gridItems",
            iconClass: "icon"
        }
    }
})
</script>

<template>
    <div id="statusBar">
        <img :class="[gridClass,iconClass]" alt="x" src="/src/assets/icons/terminal.svg">
        <img :class="[gridClass,iconClass]" alt="x" src="/src/assets/icons/sunny.svg">
        <div :class="gridClass">
            <img :class="[gridClass,iconClass]" alt="x" src="/src/assets/icons/thermometer.svg">
            <p class="barText">{{ temperature }}</p>
        </div>
        <div :class="gridClass">
            <img :class="[gridClass,iconClass]" alt="x" src="/src/assets/icons/swap-vertical.svg">
            <p class="barText">{{ dataFlow }}</p>
        </div>
        <div :class="gridClass"></div>
    </div>
</template>

<style lang="scss" scoped>
#statusBar {
  $barColor: #54FF65;
  $barWidth: 50px;
  $barHeight: 350px;
  width: $barWidth;
  height: $barHeight;
  background-color: $barColor;
  box-shadow: -20px 10px 13px rgba($barColor, 0.5), 0px 0px 8px $barColor;
  box-sizing: border-box;
  position: absolute;
  right: 0;
  top: 50%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 50%;
  transform: translate(0, -50%);

  .gridItems {
    margin: auto;
  }

  .icon {
    margin: auto;
    display: block;
    zoom: .8;
  }

  .barText {
    box-sizing: border-box;
    font: {
      size: xx-small;
      family: Orbitron, sans-serif;
    }
    margin: 0;
    padding: 0;
    zoom: .8;
  }

}

@font-face {
  font-family: "Orbitron";
  src: url("/src/assets/fonts/Orbitron-VariableFont_wght.ttf");
}
</style>