<script setup>
import { ref } from "vue";
import GridMap from "@/components/GridMap.vue";
import ItemAttributes from "@/components/ItemAttributes.vue";
import CoordinateAxis from "@/components/CoordinateAxis.vue";
import NameTag from "@/components/NameTag.vue";
import InfoTag from "@/components/InfoTag.vue";

let dataFortressName = ref("Data Fortress");
let gridWidthAndHeight = 520;
let gridSize = 11;
let numberOfItems = 14;
</script>

<template>
  <div id="interface">
    <NameTag :data-fortress-name="dataFortressName" />
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
      <InfoTag />
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
  }
}
</style>
