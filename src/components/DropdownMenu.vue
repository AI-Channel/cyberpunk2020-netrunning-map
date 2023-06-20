<script setup lang="ts">
import { useMenuStore } from '@/stores';
import CpuIcon from '@/components/icons/CpuIcon.vue';
import DataWallIcon from '@/components/icons/DataWallIcon.vue';
import PasswordGateIcon from '@/components/icons/PasswordGateIcon.vue';
import MemoryIcon from '@/components/icons/MemoryIcon.vue';

const store = useMenuStore();
let menuInfo = [
  {
    components: CpuIcon,
    name: 'CPU',
    info: 'CURR RM'
  },
  {
    components: DataWallIcon,
    name: 'WALL',
    info: 'STR INST'
  },
  {
    components: PasswordGateIcon,
    name: 'GATE',
    info: 'STR INST'
  },
  {
    components: MemoryIcon,
    name: 'MEM',
    info: 'STR INST'
  }
];
</script>

<template>
  <div id="menuBorder">
    <div id="menuContainer">
      <div v-for="(item, index) in menuInfo" class="innerContainer" :key="index">
        <div class="item" tabindex="1">
          <component :is="menuInfo[index].components" class="icon" />
          <div>{{ item.name.toUpperCase() }}</div>
        </div>
        <div class="info">{{ item.info.toUpperCase() }}</div>
      </div>
    </div>
    <div id="setterContainer">
      <button class="counterButton">-</button>
      <span>00</span>
      <button class="counterButton">+</button>
    </div>
    <div id="setButton">STR SET</div>
    <div id="insertButton" @click="store.visSwitch()">COMP INST</div>
  </div>
</template>

<style lang="scss" scoped>
@import '/src/assets/style/mixins';
@import '/src/assets/style/FontStyle';

#menuBorder {
  @include StandardBorder;
  @include ScrollBar;
  display: grid;
  box-sizing: border-box;
  position: absolute;
  box-shadow: 0 0 22px rgba($mainColor, 0.5);
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(2.5px);
  font-family: Orbitron, sans-serif;
  user-select: none;
  z-index: 1;
  grid: {
    template: auto 40px 30px/2fr 3fr;
    row: 1/3;
  }

  #menuContainer {
    overflow-y: auto;
    grid-column: 1/3;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    color: $mainColor;

    .innerContainer {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        text-shadow: 0 0 8px $mainColor;
      }
      .item {
        justify-content: space-between;
        * {
          margin: 8px 10px;
        }
        &:hover {
          background-color: $mainColor;
          color: black;
          + .info {
            color: #ff5252;
            text-shadow: 0 0 8px #ff5252;
          }
          :deep(svg) {
            * {
              stroke: black;
            }
            path {
              fill: black;
            }
            .dataWall {
              fill: black;
            }
          }
        }
        &:focus {
          @extend :hover;
          box-shadow: 0 0 20px rgba($mainColor, 0.8);
        }
      }
    }
  }
  #setterContainer {
    @include CenterFlex;
    grid-column: 1/3;
    color: $mainColor;
    text-shadow: 0 0 8px $mainColor;
    .counterButton {
      background-color: rgba(0, 0, 0, 0.75);
      color: $mainColor;
      border: 1px solid $mainColor;
      width: 28px;
      height: 28px;
      box-shadow: 0 0 8px $mainColor;
      &:hover {
        border-color: #baffc1;
        box-shadow: 0 0 8px #baffc1;
      }
    }
  }
  #setButton {
    @include CenterFlex;
    color: $mainColor;
    text-shadow: 0 0 5px $mainColor;
  }
  #insertButton {
    @include CenterFlex;
    background-color: $mainColor;
    box-shadow: 0 0 8px $mainColor;
    padding: 4px;
  }
}
</style>
