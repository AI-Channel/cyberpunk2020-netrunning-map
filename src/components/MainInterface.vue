<script setup lang="ts">
import { computed, ref } from 'vue';
import GridMap from '@/components/GridMap.vue';
import ItemAttributes from '@/components/ItemAttributes.vue';
import CoordinateAxis from '@/components/CoordinateAxis.vue';
import DropdownMenu from '@/components/DropdownMenu.vue';
import { useMenuStore } from '@/stores';

let dataFortressName = ref<string>('Data Fortress');
let menuWidth = 270;
let menuHeight = 350;
const store = useMenuStore();

interface grid {
  gridSize: number;
  numberOfItems: number;
  gridWidthAndHeight: number;
}

let gridAttribute: grid = {
  gridSize: 11,
  numberOfItems: 14,
  gridWidthAndHeight: 520
};
const redirectedX = computed(() => {
  return store.x + 2 + menuWidth >= window.innerWidth ? store.x - menuWidth - 2 : store.x + 2;
});
const redirectedY = computed(() => {
  return store.y + 2 + menuHeight >= window.innerHeight ? store.y - menuHeight - 2 : store.y + 2;
});
</script>

<template>
  <DropdownMenu
    v-show="store.menuStatus"
    :style="{
      top: redirectedY + 'px',
      left: redirectedX + 'px',
      width: menuWidth + 'px',
      height: menuHeight + 'px'
    }"
  />
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
          'px'
      }"
    >
      <div><!--Blank--></div>
      <CoordinateAxis
        :grid-size="gridAttribute.gridSize"
        :grid-width-and-height="gridAttribute.gridWidthAndHeight"
      />
      <GridMap :size="gridAttribute.gridSize" />
    </div>
    <div id="attributeContainer">
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
@import '@/assets/style/mixins';
@import '@/assets/style/FontStyle';

#interface {
  @include PageCenter;
  @include StandardBorder;
  @include ScrollBar;
  box-sizing: border-box;
  width: 1220px;
  height: 640px;
  display: grid;
  backdrop-filter: blur(3px);
  user-select: none;
  grid: {
    template: auto/repeat(2, minmax(0, 1fr));
    auto-flow: column;
  }

  #infoTag {
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
    @extend #infoTag;
    max-width: 80%;
    justify-content: space-between;
    padding: 7px 20px;
    box-shadow: 15px 15px 8px rgba($mainColor, 0.5);
  }

  #outContainer {
    @include StandardBorder;
    margin: 15px;
    display: grid;
    width: 570px;
    height: 570px;
    box-shadow: 0 0 10px rgba($mainColor, 0.75);
  }

  #attributeContainer {
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
