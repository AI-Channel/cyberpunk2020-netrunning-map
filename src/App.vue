<script>
import {defineComponent} from "vue";
import StatusBar from "@/components/StatusBar.vue";

export default defineComponent({
    name: "App",
    components: {StatusBar}
})
</script>

<template>
    <div>
        <StatusBar/>
    </div>
</template>

<style scoped lang="scss">

</style>
