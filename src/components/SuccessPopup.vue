<template>
  <div
    class="fixed w-full h-full bg-black bg-opacity-40 backdrop-blur-sm z-50 flex justify-center items-center inset-0"
  >
    <div
      class="w-1/4 h-1/4 bg-white-primary rounded-2xl flex flex-col justify-center items-center gap-4 relative"
    >
      <div
        @click="emit('on-close')"
        class="absolute right-4 top-4 text-xl cursor-pointer"
      >
        X
      </div>

      <ItemBox
        type="selected"
        :img="selectedItem?.img"
        class="ring-primary ring-4"
      />
      <div class="text-lg mt-4">New Enchantment!</div>
      <div class="w-4/5">
        <ItemEnchantment :enchantment="newEnchantment" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ItemBox from "./ItemBox.vue";
import ItemEnchantment from "./ItemEnchantment.vue";

const emit = defineEmits(["on-close"]);

const props = defineProps({
  selectedItem: {
    type: Object,
    default: {},
  },
});

const newEnchantment = ref({
  name: "Monster Crit Rate",
  rate: 40,
  type: "Epic",
});
</script>

<style lang="scss" scoped>
</style>