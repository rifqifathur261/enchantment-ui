<template>
  <div
    class="flex justify-between items-end w-full pb-4 px-14 absolute bottom-0"
  >
    <div
      class="flex bg-white-primary pl-3 pr-5 py-2 items-center gap-2 rounded-xl"
    >
      <div>
        <Spiral
          class="w-8 h-8 -scale-x-100 -scale-y-100 -rotate-45 text-primary"
        />
      </div>
      <div class="text-base flex text-text-light">
        <span class="text-[19px] text-text-dark"
          >3<span class="text-text-light">/</span></span
        >5
      </div>
      <div class="text-text-light">Giants Freed</div>
    </div>
    <div class="flex gap-1">
      <KeysButton :text="true" :has-border="false" class="hover:cursor-default">
        <template #icon> <Mouse class="w-4 h-4" /> </template>
        <template #text>
          <div class="text-primary-light">Select</div>
        </template>
      </KeysButton>

      <KeysButton :text="true" :has-border="false" class="hover:cursor-default">
        <template #icon> <div class="px-1">Esc</div> </template>
        <template #text>
          <div class="text-primary-light">Back</div>
        </template>
      </KeysButton>
    </div>
  </div>
</template>

<script setup>
import Spiral from "../assets/icons/Spiral.vue";
import Mouse from "../assets/icons/Mouse.vue";
import KeysButton from "./KeysButton.vue";

const props = defineProps({
  selected: {
    type: Object,
    default: {},
  },
});
</script>
