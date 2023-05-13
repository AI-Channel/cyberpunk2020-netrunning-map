<script setup>

</script>

<template>
    <div id="interface"></div>
</template>

<style lang="scss" scoped>
@import "/src/assets/style/mixins";
@import "/src/assets/style/FontStyle";

#interface {
  @include PageCenter;
  @include StandardBorder;
    display: flex;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
}
</style>