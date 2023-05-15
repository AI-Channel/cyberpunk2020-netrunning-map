<script setup>
import {reactive} from "vue";

const props = defineProps(['widthAndHeight', 'size']);
let gridContainer = reactive({
    id: "container",
    size: props.size,
    width: props.widthAndHeight,
    height: props.widthAndHeight,
})
</script>

<template>
    <div :id="gridContainer.id" :style="{'grid-template':
'repeat('+gridContainer.size+',1fr)/'
+'repeat('+gridContainer.size+',1fr)',
'width':gridContainer.width+'px',
'height':gridContainer.height+'px'}">
        <div v-for="gridItem in gridContainer.size**2" class="gridItems">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/style/mixins";

#container {
  @include StandardBorder;
  display: grid;
  box-shadow: 0 0 5px $mainColor;

  .gridItems {
    box-shadow: inset 0 0 5px $mainColor;
    @include StandardBorder;
  }

  .gridItems:hover {
    border-color: #CCFFCC;
    box-shadow: inset 0 0 5px #CCFFCC;
  }
}
</style>