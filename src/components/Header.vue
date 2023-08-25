<template>
  <div class="bg-black bg-opacity-60 h-16 flex justify-between items-end px-12">
    <div class="flex gap-2 items-center mb-2 w-[12rem]">
      <Anvil class="text-primary w-5 h-5" />
      <div class="text-primary-light">Tool Enchantments</div>
    </div>

    <div>
      <div class="flex gap-2 items-center">
        <div
          @click.enter="onPressed"
          class="w-5 h-5 flex justify-center items-center rounded-md bg-white-primary text-grey"
        >
          A
        </div>
        <div
          @click="isActive = 'add'"
          :class="
            isActive == 'add'
              ? 'bg-white border border-white text-text-dark '
              : 'bg-primary-light text-primary-light  border-2 border-primary-light border-opacity-10 bg-opacity-10'
          "
          class="w-32 cursor-pointer py-2 flex justify-center items-center rounded-tr-xl rounded-tl-xl"
        >
          Add
        </div>
        <div
          @click="isActive = 'upgrade'"
          :class="
            isActive == 'upgrade'
              ? 'bg-white border border-white text-text-dark '
              : 'bg-primary-light text-primary-light  border-2 border-primary-light border-opacity-10 bg-opacity-10'
          "
          class="w-32 cursor-pointer py-2 flex justify-center items-center rounded-tr-xl rounded-tl-xl"
        >
          Upgrade
        </div>
        <div
          @keyup.d="isActive = 'upgrade'"
          class="w-5 h-5 flex justify-center items-center rounded-md bg-white-primary text-grey"
        >
          D
        </div>
      </div>
    </div>

    <div class="flex mb-2 w-[12rem] justify-end">
      <Coin class="w-7 h-7 -mr-4 z-10" />
      <div
        class="bg-primary-light bg-opacity-20 rounded-lg text-primary-light px-5 flex items-center shrink-0"
      >
        9,999,999
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Anvil from "../assets/icons/Anvil.vue";
import Coin from "../assets/icons/Coin.vue";

let isActive = ref("add");

const onPressed = (e) => {
  console.log(e);
};

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "a":
        isActive.value = "add";
        break;
      case "d":
        isActive.value = "upgrade";
        break;

      default:
        break;
    }
  });
});
</script>
