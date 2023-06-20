<script setup lang="ts">
import { useMenuStore } from '@/stores';

const props = defineProps({ size: Number });
const store = useMenuStore();
</script>

<template>
  <table id="container">
    <tr v-for="gridRow in props.size" :key="gridRow">
      <td
        v-for="gridCol in props.size"
        :key="props.size * (gridRow - 1) + gridCol"
        class="gridItems"
        tabindex="2"
        @click="
          store.visSwitch();
          store.getMouse($event);
        "
      ></td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
@import '/src/assets/style/mixins';

#container {
  @include StandardBorder;
  border-spacing: 0;

  .gridItems {
    @include StandardBorder;
    box-sizing: border-box;
    &:hover {
      border-color: #baffc1;
      box-shadow: inset 0 0 5px #baffc1;
    }
    &:focus {
      border-color: #ffffff;
      box-shadow: inset 0 0 5px #ffffff;
    }
  }
}
</style>
