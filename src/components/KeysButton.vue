<template>
  <div
    :class="`flex flex-row  gap-2 items-center ${
      text
        ? light
          ? 'p-1 bg-grey-lighten  rounded-xl'
          : 'p-1 bg-black bg-opacity-25 border-2 border-black border-opacity-20 rounded-lg'
        : ''
    }`"
  >
    <div
      class="min-w-[1.25rem] h-5 flex justify-center items-center rounded-md bg-white-primary text-grey"
    >
      <slot name="icon" />
    </div>
    <div v-if="text">
      <slot name="text" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
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
