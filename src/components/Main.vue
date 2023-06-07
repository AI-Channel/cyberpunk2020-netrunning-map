<script setup>
import { ref } from "vue";
import GridMap from "@/components/GridMap.vue";
import ItemAttributes from "@/components/ItemAttributes.vue";
import CoordinateAxis from "@/components/CoordinateAxis.vue";

let dataFortressName = ref("Data Fortress");
let gridWidthAndHeight = 520;
let gridSize = 11;
let numberOfItems = 14;
</script>

<template>
  <div id="interface">
    <div id="nameTag">
      SYS://VIEW/{{ dataFortressName.toUpperCase() }}
      <img alt="x" src="/src/assets/icons/reorder-four.svg" />
    </div>
    <div
      id="outContainer"
      :style="{
        'grid-template':
          'auto ' + gridWidthAndHeight + 'px/auto ' + gridWidthAndHeight + 'px',
      }"
    >
      <div><!--Blank--></div>
      <CoordinateAxis
        :grid-size="gridSize"
        :grid-width-and-height="gridWidthAndHeight"
      />
      <GridMap :size="gridSize" />
    </div>
    <div id="containerBorder">
      <div id="itemContainer">
        <ItemAttributes :number-of-items="numberOfItems" />
      </div>
      <div><!--Blank--></div>
      <div id="infoTag">
        /ETC/LEGEND
        <div id="version">v3.2.1</div>
        <img src="/src/assets/icons/filter.svg" alt="x" />
        <img src="/src/assets/icons/ellipsis-horizontal.svg" alt="x" />
        <img src="/src/assets/icons/expand.svg" alt="x" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/style/mixins";
@import "/src/assets/style/FontStyle";

#interface {
  @include PageCenter;
  @include StandardBorder;
  @include ScrollBar;
  box-sizing: border-box;
  width: 1220px;
  height: 640px;
  display: grid;
  box-shadow: inset 0 0 5px $mainColor;
  backdrop-filter: blur(3px);
  grid: {
    template-rows: 40px 1fr;
    template-columns: 1fr 1fr;
    auto-flow: column;
  }
  #nameTag,
  #infoTag {
    background-color: $mainColor;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 7px 20px;
    font-family: Orbitron, sans-serif;
    user-select: none;
  }
  #nameTag {
    max-width: 80%;
    max-height: 40px;
    box-shadow: 15px 15px 8px rgba($mainColor, 0.3), 0 0 8px $mainColor;
  }
  #outContainer {
    @include StandardBorder;
    margin: 15px;
    display: grid;
    width: 570px;
    height: 570px;
  }
  #containerBorder {
    @include StandardBorder;
    grid-row: 1/3;
    margin: 20px;
    display: grid;
    grid-template: auto auto/1fr 1fr;
    #itemContainer {
      padding: 18px;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      grid-column: 1/3;
    }
    #infoTag {
      box-shadow: 0 0 8px $mainColor;
      #version {
        font-size: small;
      }
    }
  }
}
</style>
