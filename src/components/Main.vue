<script setup lang="ts">
import { ref } from "vue";
import GridMap from "@/components/GridMap.vue";
import ItemAttributes from "@/components/ItemAttributes.vue";
import CoordinateAxis from "@/components/CoordinateAxis.vue";

let dataFortressName = ref<string>("Data Fortress");
interface grid {
  gridSize: number;
  numberOfItems: number;
  gridWidthAndHeight?: number;
}
let gridAttribute: grid = {
  gridSize: 11,
  numberOfItems: 14,
  gridWidthAndHeight: 520,
};
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
          'auto ' +
          gridAttribute.gridWidthAndHeight +
          'px/auto ' +
          gridAttribute.gridWidthAndHeight +
          'px',
      }"
    >
      <div><!--Blank--></div>
      <CoordinateAxis
        :grid-size="gridAttribute.gridSize"
        :grid-width-and-height="gridAttribute.gridWidthAndHeight"
      />
      <GridMap :size="gridAttribute.gridSize" />
    </div>
    <div id="containerBorder">
      <div id="itemContainer">
        <ItemAttributes :number-of-items="gridAttribute.numberOfItems" />
      </div>
      <div><!--Blank--></div>
      <div id="infoTag">
        /ETC/LEGEND
        <div id="version">v3.2.1</div>
        <img alt="x" src="/src/assets/icons/filter.svg" />
        <img alt="x" src="/src/assets/icons/ellipsis-horizontal.svg" />
        <img alt="x" src="/src/assets/icons/expand.svg" />
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
  user-select: none;
  grid: {
    template-rows: 40px 1fr;
    template-columns: 1fr 1fr;
    auto-flow: column;
  }
  #infoTag,
  #nameTag {
    background-color: $mainColor;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    padding: 7px;
    font-family: Orbitron, sans-serif;
    box-shadow: 0 0 8px $mainColor;
    #version {
      font-size: small;
    }
  }
  #nameTag {
    max-width: 80%;
    justify-content: space-between;
    padding: 7px 20px;
    box-shadow: 15px 15px 8px rgba($mainColor, 0.3);
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
    grid-template: auto 35px/1fr 1fr;

    #itemContainer {
      padding: 18px;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      grid-column: 1/3;
    }
  }
}
</style>
