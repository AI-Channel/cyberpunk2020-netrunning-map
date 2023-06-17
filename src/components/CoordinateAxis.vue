<script setup lang="ts">
const props = defineProps<{
  gridWidthAndHeight: number;
  gridSize: number;
}>();
</script>

<template>
  <table class="coordinateAxis">
    <tr>
      <td
        v-for="index in gridSize"
        :style="{ width: props.gridWidthAndHeight / props.gridSize + 'px' }"
        class="axisItem"
        :key="index"
      >
        {{ index }}
      </td>
    </tr>
  </table>
  <table class="coordinateAxis">
    <tr
      v-for="index in gridSize"
      :style="{ height: props.gridWidthAndHeight / props.gridSize + 'px' }"
      class="axisItem"
      :key="index"
    >
      <td>{{ index }}</td>
    </tr>
  </table>
</template>

<style scoped lang="scss">
@import '/src/assets/style/mixins';
@import '/src/assets/style/FontStyle';

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
