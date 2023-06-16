<script setup lang="ts">
import { useMenuStore } from "@/stores";

const props = defineProps(["size"]);
const store = useMenuStore();
</script>

<template>
  <table id="container">
    <tr v-for="gridRow in props.size">
      <td
        v-for="gridCol in props.size"
        class="gridItems"
        @click="
          store.visSwitch();
          store.getMouse($event);
        "
      ></td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
@import "/src/assets/style/mixins";

#container {
  @include StandardBorder;
  border-spacing: 0;

  .gridItems {
    @include StandardBorder;
    box-sizing: border-box;
  }

  .gridItems:hover {
    border-color: #ccffcc;
    box-shadow: inset 0 0 5px #ccffcc;
  }
}
</style>
