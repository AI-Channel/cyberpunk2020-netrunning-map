<script setup lang="ts">
let props = defineProps(["numberOfItems"]);
let input = [
  {
    nameOfItems: "SAMPLE_ITEM",
    mainInfoFirst: "STR =10",
    mainInfoSecond: "INFO =NULL",
  },
];
</script>

<template>
  <table v-for="(item, index) in input" class="infoBar">
    <tr>
      <td class="number">
        {{
          index + 1 > 9 ? (index + 1).toString() : "0" + (index + 1).toString()
        }}
      </td>
      <td class="name">{{ item.nameOfItems }}</td>
      <td class="info">{{ item.mainInfoFirst }}</td>
      <td class="info">{{ item.mainInfoSecond }}</td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
@import "/src/assets/style/mixins";
@import "/src/assets/style/FontStyle";

.infoBar {
  @include StandardBorder;
  font-family: Orbitron, sans-serif;
  margin: 2px;
  font-size: 18px;
  text-align: center;
  height: 50px;
  border-spacing: 0;
  flex-shrink: 0;
  user-select: none;

  .number {
    background-color: $mainColor;
    width: 50px;
    box-shadow: 0 0 8px $mainColor;
  }

  .name,
  .info {
    color: $mainColor;
  }
}
</style>
