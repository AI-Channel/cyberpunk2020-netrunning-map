<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  gridWidthAndHeight: Number,
  gridSize: Number
});
const axisSize = computed(() => {
  return props.gridWidthAndHeight / props.gridSize;
});
</script>

<template>
  <table class="coordinateAxis">
    <tr>
      <td
        v-for="index in gridSize"
        :style="{ width: axisSize + 'px' }"
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
      :style="{ height: axisSize + 'px' }"
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
