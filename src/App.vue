<script setup>
import StatusBar from "@/components/StatusBar.vue";
import NeonBox from "@/components/NeonBox.vue";
import Main from "@/components/Main.vue";

</script>

<template>
    <NeonBox/>
    <div id="window">
        <Main/>
    </div>
    <StatusBar/>
</template>

<style lang="scss" scoped>
@import "/src/assets/style/mixins";
@import "/src/assets/style/FontStyle";
#window {
    @include PageCenter;
    @include StandardBorder;
    box-shadow: inset 0 0 5px $mainColor;
    backdrop-filter: blur(3px);
    box-sizing: border-box;
    width: 90%;
    height: 90%;
}
</style>
