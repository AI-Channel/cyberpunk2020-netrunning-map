<script setup>
const props = defineProps(["gridWidthAndHeight", "gridSize"]);
</script>

<template>
  <table class="coordinateAxis">
    <tr>
      <td
        v-for="i in gridSize"
        :style="{ width: gridWidthAndHeight / gridSize + 'px' }"
        class="axisItem"
      >
        {{ i }}
      </td>
    </tr>
  </table>
  <table class="coordinateAxis">
    <tr
      v-for="i in gridSize"
      :style="{ height: gridWidthAndHeight / gridSize + 'px' }"
      class="axisItem"
    >
      <td>{{ i }}</td>
    </tr>
  </table>
</template>

<style scoped lang="scss">
@import "/src/assets/style/mixins";
@import "/src/assets/style/FontStyle";
.coordinateAxis {
  font-family: Orbitron, sans-serif;
  color: $mainColor;
  width: 100%;
  border-spacing: 0;
  font-size: 20px;
  user-select: none;
  text-shadow: 0 0 5px $mainColor;

  .axisItem {
    text-align: center;
    padding: 0;
  }
}
</style>
