<template>
  <div
    class="w-16 h-16 p-2 relative hover:border-white hover:border-2 cursor-pointer"
    :class="`${backgroundColor} ${inBackpack ? 'rounded-2xl' : 'rounded-lg'} ${
      quantity ? 'rounded-br-lg' : ''
    }`"
  >
    <img :src="'/' + props.img" alt="" />

    <div
      v-if="props.quantity"
      class="bg-accent rounded-md absolute bottom-0 right-0"
    >
      <slot name="quantity" />
    </div>
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
    default: "",
  },
  quantity: {
    type: Boolean,
    default: false,
  },
  inBackpack: {
    type: Boolean,
    default: false,
  },
});

const backgroundColor = computed(() => {
  switch (props?.type) {
    case "selected":
      return "bg-white-primary bg-opacity-100";

    case "hover":
      return "bg-white-primary bg-opacity-60";

    case "active":
      return "bg-box-item";

    case "inactive":
      return "bg-white-primary opacity-30";

    default:
      return "bg-white-primary bg-opacity-20";
  }
});
</script>
