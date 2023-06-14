<script setup lang="ts">
import { reactive, ref } from "vue";
import DropdownMenu from "@/components/DropdownMenu.vue";

const props = defineProps(["size"]);
let gridContainer = reactive({
  id: "container",
  size: props.size,
});

let mouse = reactive({
  mouseX: 0,
  mouseY: 0,
});

let menuStatus = ref(false);
function trigger(event): void {
  mouse.mouseX = event.x;
  mouse.mouseY = event.y;
}
</script>

<template>
  <table :id="gridContainer.id">
    <tr v-for="gridRow in gridContainer.size">
      <td
        v-for="gridCol in gridContainer.size"
        class="gridItems"
        @click="
          trigger($event);
          menuStatus = !menuStatus;
        "
      ></td>
    </tr>
  </table>
  <DropdownMenu
    v-show="menuStatus"
    @ok="menuStatus = !menuStatus"
    :x="mouse.mouseX"
    :y="mouse.mouseY"
  />
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
