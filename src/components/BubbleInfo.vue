<template>
  <div class="flex flex-col items-center -mt-3">
    <div class="bg-white rounded-2xl p-2 text-text-light flex gap-1 px-4 py-3">
      Select a <span class="text-text-dark"> Tool </span> then
      <span class="text-text-dark"> Material </span> to Enchant
    </div>
    <Triangle class="text-white w-3 h-3 rotate-180 -mt-[2px]" />
  </div>
</template>

<script setup>
import Triangle from "../assets/icons/Triangle.vue";
</script>

<style lang="scss" scoped>
</style>