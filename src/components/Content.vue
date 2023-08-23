<template>
  <div
    class="bg-black bg-opacity-40 flex-1 pt-6 flex flex-row items-start justify-center"
  >
    <div class="w-4/5 rounded-xl flex">
      <div
        class="flex-1 bg-white-primary bg-opacity-30 rounded-tl-xl rounded-bl-xl relative"
      >
        <!-- <img src="../assets/tree-no-bg.png" alt="" /> -->
        <!-- <img
          class="absolute object-cover object-left-top w-64 h-[18rem]"
          src="../assets/palm-tree-no-bg.png"
          alt=""
        />
        <img
          class="absolute object-cover object-left-top w-24 h-[7rem] border"
          src="../assets/garden-street-light-no-bg.png"
          alt="Street Lamp"
        /> -->
      </div>
      <div class="flex-1 bg-black bg-opacity-30">
        <div class="flex flex-col px-8">
          <ItemBox />
        </div>
      </div>
      <div class="flex-1 bg-black bg-opacity-30 rounded-tr-xl rounded-br-xl">
        <div class="text-light-grey text-[12px]">Enchantments</div>

        <div
          class="rounded-xl flex justify-between bg-black bg-opacity-25 px-3 py-3 border-2 border-primary-light border-opacity-25"
        >
          <div class="flex items-center gap-2">
            <TrashBag class="w-5 h-5 text-light-grey" />
            <div class="text-primary-light">Swift Swing</div>
          </div>

          <div class="text-primary-light">3%</div>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import ItemBox from "./ItemBox.vue";
import TrashBag from "../assets/icons/TrashBag.vue";
</script>

<style lang="scss" scoped>
</style>