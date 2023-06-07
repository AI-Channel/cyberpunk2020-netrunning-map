<script setup>
import { reactive } from "vue";

const props = defineProps(["size"]);
let gridContainer = reactive({
  id: "container",
  size: props.size,
});
let subMenu = [
  { name: "CPU", src: "/src/assets/icons/cpu.svg" },
  { name: "Wall", src: "/src/assets/icons/data-wall.svg" },
  { name: "Gate", src: "/src/assets/icons/password-gate.svg" },
  { name: "Memory", src: "/src/assets/icons/memory.svg" },
];
let menuStatus = false;
</script>

<template>
  <table :id="gridContainer.id">
    <tr v-for="gridRow in gridContainer.size">
      <td
        v-for="gridCol in gridContainer.size"
        class="gridItems"
        @click="menuStatus = !menuStatus"
      ></td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
@import "/src/assets/style/mixins";

#container {
  @include StandardBorder;
  box-shadow: 0 0 5px $mainColor;
  border-spacing: 0;

  .gridItems {
    box-shadow: inset 0 0 5px $mainColor;
    @include StandardBorder;
  }

  .gridItems:hover {
    border-color: #ccffcc;
    box-shadow: inset 0 0 5px #ccffcc;
  }
}
</style>
