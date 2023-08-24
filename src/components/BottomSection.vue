<template>
  <div class="flex justify-between items-end w-full">
    <div>Test</div>
    <div>Test</div>
  </div>
</template>

<script setup>
import ItemBox from "./ItemBox.vue";
import TrashBag from "../assets/icons/TrashBag.vue";
import Leaf from "../assets/icons/Leaf.vue";
import Rect from "../assets/icons/Rect.vue";
import Triangle from "../assets/icons/Triangle.vue";
import KeyButton from "./KeysButton.vue";
import BubbleInfo from "./BubbleInfo.vue";
import { watch } from "vue";

const props = defineProps({
  selected: {
    type: Object,
    default: {},
  },
});

watch(
  () => props.selected,
  (val) => {
    // console.log("val ", val);
  }
);
</script>
