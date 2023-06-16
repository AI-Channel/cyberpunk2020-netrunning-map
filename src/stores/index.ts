import { ref } from "vue";
import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", () => {
  const menuStatus = ref(false);
  const x = ref(0);
  const y = ref(0);

  function visSwitch() {
    menuStatus.value = !menuStatus.value;
  }

  function getMouse(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  return {
    menuStatus,
    visSwitch,
    x,
    y,
    getMouse,
  };
});
