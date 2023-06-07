<script setup></script>

<template>
  <div id="menuBorder">
    <div id="menuContainer"></div>
    <div><!--Blank--></div>
    <div id="insertButton">BLOCK INSERTION</div>
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
  grid-template: auto auto/1fr 1fr;
  height: 500px;
  width: 300px;
  z-index: 1;
  #menuContainer {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    grid-column: 1/3;
  }
  #insertButton {
    font-family: Orbitron, sans-serif;
    background-color: $mainColor;
  }
}
</style>
