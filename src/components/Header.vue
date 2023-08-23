<template>
  <div class="bg-black bg-opacity-60 h-16 flex justify-between items-end px-12">
    <div class="flex gap-2 items-center mb-2">
      <Anvil class="text-primary w-5 h-5" />
      <div class="text-primary-light">Tool Enchantments</div>
    </div>

    <div>
      <div class="flex gap-2 items-center">
        <div
          class="w-5 h-5 flex justify-center items-center rounded-md bg-white-primary text-grey"
        >
          A
        </div>
        <div
          class="py-2 flex justify-center items-center bg-white border border-white text-text-dark w-32 rounded-tr-xl rounded-tl-xl"
        >
          Add
        </div>
        <div
          class="py-2 flex justify-center items-center bg-primary-light text-primary-light w-32 border-2 border-primary-light border-opacity-10 bg-opacity-10 rounded-tr-xl rounded-tl-xl"
        >
          Upgrade
        </div>
        <div
          class="w-5 h-5 flex justify-center items-center rounded-md bg-white-primary text-grey"
        >
          D
        </div>
      </div>
    </div>

    <div class="flex mb-2">
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
import Anvil from "../assets/icons/Anvil.vue";
import Coin from "../assets/icons/Coin.vue";
</script>
