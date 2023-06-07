<script setup>
let props = defineProps(["dataFortressName"]);
</script>

<template>
  <div id="nameTag">
    SYS://VIEW/{{ dataFortressName.toUpperCase() }}
    <img alt="x" src="/src/assets/icons/reorder-four.svg" />
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/style/mixins";
@import "/src/assets/style/FontStyle";

#nameTag {
  background-color: $mainColor;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 7px 20px;
  font-family: Orbitron, sans-serif;
  user-select: none;
  max-width: 80%;
  max-height: 40px;
  box-shadow: 15px 15px 8px rgba($mainColor, 0.3), 0 0 8px $mainColor;
}
</style>
