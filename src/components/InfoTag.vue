<script setup></script>

<template>
  <div id="infoTag">
    /ETC/LEGEND
    <div id="version">v3.2.1</div>
    <img alt="x" src="/src/assets/icons/filter.svg" />
    <img alt="x" src="/src/assets/icons/ellipsis-horizontal.svg" />
    <img alt="x" src="/src/assets/icons/expand.svg" />
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/style/mixins";
@import "/src/assets/style/FontStyle";

#infoTag {
  background-color: $mainColor;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 7px 20px;
  font-family: Orbitron, sans-serif;
  user-select: none;
  box-shadow: 0 0 8px $mainColor;

  #version {
    font-size: small;
  }
}
</style>
