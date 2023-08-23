<template>
  <div class="w-16 h-16 rounded-lg p-2" :class="backgroundColor">
    <img :src="'/' + props.img" alt="" />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "normal",
  },
  img: {
    type: String,
    default: "carrot.png",
  },
});

const backgroundColor = computed(() => {
  if (props?.type === "selected") {
    return "bg-white-primary bg-opacity-20";
  }
  switch (props?.type) {
    case "selected":
      return "bg-white-primary bg-opacity-80";

    case "hover":
      return "bg-white-primary bg-opacity-30";

    case "inactive":
      return "bg-white-primary opacity-30";

    default:
      return "bg-white-primary bg-opacity-20";
  }
});
</script>
