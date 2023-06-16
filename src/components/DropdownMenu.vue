<script setup lang="ts">
import { useMenuStore } from "@/stores";

const store = useMenuStore();
</script>

<template>
  <div id="menuBorder" :style="{}">
    <div id="menuContainer">
      <div v-for="n in 8" class="innerContainer">
        <div class="item">
          <img alt="x" class="origin" src="/src/assets/icons/cpu.svg" />
          <img alt="x" class="alter" src="/src/assets/icons/cpu-black.svg" />
          CPU
        </div>
        <div class="info">RM/MV</div>
      </div>
    </div>
    <div><!--Blank--></div>
    <div id="insertButton" @click="store.visSwitch()">BLOCK INSERTION</div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/style/mixins";
@import "/src/assets/style/FontStyle";

#menuBorder {
  @include StandardBorder;
  @include ScrollBar;
  grid-row: 1/3;
  display: grid;
  box-sizing: border-box;
  grid-template: auto 22px/1fr 1fr;
  height: 300px;
  width: 300px;
  border-spacing: 0;
  position: absolute;
  box-shadow: 0 0 5px $mainColor;
  background-color: rgba(0, 0, 0, 0.75);
  font-family: Orbitron, sans-serif;
  user-select: none;
  z-index: 1;
  #menuContainer {
    overflow-y: auto;
    grid-column: 1/3;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    color: $mainColor;
    .innerContainer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0;
        text-shadow: 0 0 10px $mainColor;
      }
      .alter {
        display: none;
      }
      .item:hover {
        background-color: #54ff65;
        color: black;
        box-shadow: 0 0 10px #54ff65;
        + .info {
          color: #ff5252;
          text-shadow: 0 0 10px #ff5252;
        }
        .origin {
          display: none;
        }
        .alter {
          display: block;
        }
      }
    }
  }
  #insertButton {
    font-size: 12px;
    display: flex;
    background-color: $mainColor;
    box-shadow: 0 0 8px $mainColor;
    padding: 4px;
    justify-content: center;
    align-items: center;
  }
}
</style>
