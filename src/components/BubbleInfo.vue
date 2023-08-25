<template>
  <div
    class="flex flex-col items-center w-auto scale-0 right-0 left-0 transition-all duration-150"
  >
    <div class="bg-white-primary rounded-2xl px-4 py-3 text-text-light">
      <slot name="text" />
    </div>
    <Triangle class="text-white w-3 h-3 rotate-180 -mt-[2px]" />
  </div>
</template>

<script setup>
import Triangle from "../assets/icons/Triangle.vue";
</script>

<style lang="scss" scoped>
</style>