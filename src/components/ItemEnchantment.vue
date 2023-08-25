<template>
  <div
    v-if="!enchantment?.type"
    class="rounded-xl flex justify-center items-center gap-2 bg-black bg-opacity-25 px-3 py-3 border-2 border-grey-light border-opacity-50"
  >
    <Rect class="w-4 h-4 text-grey-light" />
    <div class="text-text-light">Empty</div>
  </div>

  <div
    v-if="enchantment?.type == 'Common'"
    class="rounded-xl flex justify-between bg-black bg-opacity-25 px-3 py-3 border-2 border-grey-light border-opacity-50"
  >
    <div class="flex items-center gap-2">
      <TrashBag class="w-5 h-5 text-grey-light" />
      <div class="text-primary-light">{{ enchantment?.name }}</div>
    </div>

    <div class="text-primary-light">{{ enchantment?.rate }}%</div>
  </div>

  <div
    v-if="enchantment?.type == 'Epic'"
    class="relative rounded-xl px-3 border-2 border-grey-light border-opacity-50 bg-gradient-to-tr via-30% from-gold-light via-gold-dark to-gold-light"
  >
    <img
      class="absolute w-32 h-full object-cover right-1/4 z-0"
      src="/texture.png"
      alt=""
    />

    <div class="py-3 flex justify-between z-10">
      <div class="flex items-center gap-2">
        <Leaf class="w-5 h-5 text-accent -rotate-90" />
        <div class="text-primary-light">{{ enchantment?.name }}</div>
      </div>

      <div class="text-primary-light">{{ enchantment?.rate }}%</div>
    </div>
  </div>

  <div
    v-if="enchantment?.type == 'Rare'"
    class="rounded-xl px-3 border-2 border-grey-light border-opacity-50 bg-gradient-to-tr via-30% from-blue-light via-blue-dark to-blue-light"
  >
    <div class="py-3 flex justify-between">
      <div class="flex items-center gap-2">
        <TrashBag class="w-5 h-5 text-blue-lighten" />
        <div class="text-primary-light">{{ enchantment.name }}</div>
      </div>

      <div class="text-primary-light">{{ enchantment.rate }}%</div>
    </div>
  </div>
</template>

<script setup>
import Leaf from "../assets/icons/Leaf.vue";
import Rect from "../assets/icons/Rect.vue";
import TrashBag from "../assets/icons/TrashBag.vue";

const props = defineProps({
  enchantment: {
    type: Object,
    default: {},
  },
});
</script>

<style lang="scss" scoped>
</style>