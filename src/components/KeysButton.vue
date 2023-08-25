<template>
  <div
    :class="`flex flex-row gap-2 items-center  relative translate-all duration-300 hover:cursor-pointer ${
      text
        ? light
          ? ' bg-grey-lighten  rounded-xl hover:rounded-lg'
          : hasBorder
          ? ' bg-black bg-opacity-25 border-2  rounded-lg border-black border-opacity-20'
          : ' bg-black bg-opacity-25 rounded-lg'
        : ''
    }`"
  >
    <div
      class="h-full bg-white-primary opacity-50 absolute duration-300 ease-in-out rounded-md"
      :class="animClass"
      :style="`width: ${progress}`"
    />
    <div
      class="ml-[5px] my-[5px] min-w-[1.25rem] h-5 flex justify-center items-center rounded-md bg-white-primary text-grey"
    >
      <slot name="icon" />
    </div>
    <div v-if="text" class="mr-[5px] my-[5px]">
      <slot name="text" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  progress: {
    type: String,
    default: "",
  },
  animClass: {
    type: String,
    default: "",
  },
  hasBorder: {
    type: Boolean,
    default: true,
  },
  text: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
});
</script>
