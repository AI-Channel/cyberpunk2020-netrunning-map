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
    info: 'RM/MV'
  },
  {
    components: DataWallIcon,
    name: 'WALL',
    info: 'STR='
  },
  {
    components: PasswordGateIcon,
    name: 'GATE',
    info: 'STR='
  },
  {
    components: MemoryIcon,
    name: 'MEM',
    info: 'STR='
  }
];
</script>

<template>
  <div id="menuBorder">
    <div id="menuContainer">
      <div v-for="(item, index) in menuInfo" class="innerContainer" :key="index">
        <div class="item">
          <component :is="menuInfo[index].components" class="icon" />
          <div>{{ item.name }}</div>
        </div>
        <div class="info">{{ item.info }}</div>
      </div>
    </div>
    <div><!--Blank--></div>
    <div id="insertButton" @click="store.visSwitch()">BLOCK INSERTION</div>
  </div>
</template>

<style lang="scss" scoped>
@import '/src/assets/style/mixins';
@import '/src/assets/style/FontStyle';

#menuBorder {
  @include StandardBorder;
  @include ScrollBar;
  grid-row: 1/3;
  display: grid;
  box-sizing: border-box;
  grid-template: auto 22px/1fr 1fr;
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
    font-size: 20px;
    display: flex;
    flex-direction: column;
    color: $mainColor;

    .innerContainer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        text-shadow: 0 0 10px $mainColor;
      }
      .item {
        justify-content: space-between;
        * {
          margin: 8px;
        }
        &:hover {
          background-color: $mainColor;
          color: black;
          box-shadow: 0 0 10px $mainColor;
          + .info {
            color: #ff5252;
            text-shadow: 0 0 10px #ff5252;
          }
          :deep(svg) {
            * {
              stroke: black;
            }
            path {
              fill: black;
            }
          }
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
