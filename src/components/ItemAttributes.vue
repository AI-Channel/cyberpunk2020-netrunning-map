<script setup>
let numberOfItems = 17;
let output = [{
    nameOfItems: '',
    mainInfoFirst: '',
    mainInfoSecond: ''
}];
</script>

<template>
    <table v-for="(i,index) in numberOfItems" id="infoBar">
        <tr>
            <td id="number">
                {{ index + 1 > 9 ? (index + 1).toString() : '0' + (index + 1).toString() }}
            </td>
            <td id="name">
                SAMPLE_ITEM
            </td>
            <td class="info">
                STR =10
            </td>
            <td class="info">
                INFO =NULL
            </td>
        </tr>
    </table>
</template>

<style lang="scss" scoped>
@import "/src/assets/style/mixins";
@import "/src/assets/style/FontStyle";

#infoBar {
  @include StandardBorder;
  font-family: Orbitron, sans-serif;
  margin: 2px;
  font-size: 18px;
  text-align: center;
  height: 50px;
  border-spacing: 0;
  flex-shrink: 0;

  #number {
    background-color: $mainColor;
    width: 50px;
    box-shadow: 0 0 8px $mainColor;
  }

  #name, .info {
    color: $mainColor;
  }

  #name {
    text-shadow: 0 0 5px $mainColor;
  }

}
</style>