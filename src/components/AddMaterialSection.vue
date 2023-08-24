<template>
  <div class="w-4/5 rounded-xl flex">
    <div
      class="flex-1 bg-white-primary bg-opacity-30 rounded-tl-xl rounded-bl-xl flex justify-center"
    >
      <div class="relative h-full w-[700px] -mr-[200px] -ml-[200px]">
        <img
          class="absolute bottom-0 -right-[100px]"
          src="/magic-tree-no-bg.png"
          alt=""
        />
        <img
          class="absolute bottom-0 w-[500px] left-[10px]"
          src="/magic-tree-no-bg.png"
          alt=""
        />
      </div>
    </div>

    <div
      class="flex flex-row bg-black backdrop-blur-sm bg-opacity-30 relative z-20"
    >
      <div class="flex-1 flex justify-center items-center relative">
        <BubbleInfo class="absolute top-0" />

        <div class="flex flex-col px-8 items-center">
          <ItemBox type="active" :img="selected?.img" />

          <div class="text-center text-grey-light my-1">X</div>

          <div class="flex flex-nowrap gap-2">
            <ItemBox
              :img="item < 3 ? 'blue-gem.png' : item < 4 ? 'green-gem.png' : ''"
              v-for="item in 5"
              :key="item.id"
            />
          </div>

          <div class="w-full flex flex-col items-center mt-4 gap-2">
            <div class="w-3/4 relative">
              <div
                class="absolute w-full h-[5px] rounded-md bg-white-primary bg-opacity-30"
              />
              <div
                class="absolute w-4/5 h-[5px] rounded-md bg-white-primary bg-opacity-60"
              />
            </div>
            <div class="text-primary-light">80 / 100</div>
          </div>
        </div>

        <div
          class="flex flex-col items-start absolute -bottom-2 left-1/2 -translate-x-1/2"
        >
          <KeyButton :text="true" light class="px-3 py-2">
            <template #icon>
              <div class="px-1">Enter</div>
            </template>
            <template #text>
              <div class="flex gap-1">
                <div class="text-text-dark">Confirm</div>
              </div>
            </template>
          </KeyButton>
        </div>
      </div>

      <div class="flex items-center text-grey-light">></div>
    </div>

    <div
      class="flex-1 bg-black bg-opacity-30 rounded-tr-xl rounded-br-xl flex flex-col gap-2 py-8 px-8 relative"
    >
      <div class="text-grey-light text-[13px]">Enchantments</div>

      <div
        class="cursor-pointer rounded-xl flex justify-between bg-black bg-opacity-25 px-3 py-3 border-2 border-grey-light border-opacity-50 hover:border-white hover:border-opacity-100"
      >
        <div class="flex items-center gap-2">
          <TrashBag class="w-5 h-5 text-grey-light" />
          <div class="text-primary-light">Swift Swing</div>
        </div>

        <div class="text-primary-light">3%</div>
      </div>

      <div
        class="cursor-pointer relative rounded-xl px-3 border-2 border-grey-light hover:border-white hover:border-opacity-100 border-opacity-50 bg-gradient-to-tr via-30% from-gold-light via-gold-dark to-gold-light"
      >
        <img
          class="absolute w-32 h-full object-cover right-1/4 z-0"
          src="/texture.png"
          alt=""
        />

        <div class="py-3 flex justify-between z-10">
          <div class="flex items-center gap-2">
            <Leaf class="w-5 h-5 text-accent -rotate-90" />
            <div class="text-primary-light">Extra Drop</div>
          </div>

          <div class="text-primary-light">15%</div>
        </div>
      </div>

      <div
        class="cursor-pointer rounded-xl flex justify-center items-center gap-2 bg-black bg-opacity-25 px-3 py-3 border-2 border-grey-light border-opacity-50 hover:border-white hover:border-opacity-100"
      >
        <Rect class="w-5 h-5 text-grey-light" />
        <div class="text-grey-light">Empty</div>
      </div>

      <div class="flex justify-center">
        <Triangle class="text-white w-4 h-4" />
      </div>

      <div
        class="cursor-pointer rounded-xl px-3 border-2 border-grey-light hover:border-white hover:border-opacity-100 border-opacity-50 bg-gradient-to-tr via-30% from-blue-light via-blue-dark to-blue-light"
      >
        <div class="py-3 flex justify-between">
          <div class="flex items-center gap-2">
            <TrashBag class="w-5 h-5 text-blue-lighten" />
            <div class="text-primary-light">Rare Enchantment</div>
          </div>

          <div class="text-primary-light">9%</div>
        </div>
      </div>

      <div class="flex flex-col items-start absolute -bottom-3 right-8">
        <KeyButton :text="true">
          <template #icon> X </template>
          <template #text>
            <div class="flex gap-1">
              <div class="text-primary">Hold</div>

              <div class="text-grey-light">Discard</div>
            </div>
          </template>
        </KeyButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import ItemBox from "./ItemBox.vue";
import TrashBag from "../assets/icons/TrashBag.vue";
import Leaf from "../assets/icons/Leaf.vue";
import Rect from "../assets/icons/Rect.vue";
import Triangle from "../assets/icons/Triangle.vue";
import KeyButton from "./KeysButton.vue";
import BubbleInfo from "./BubbleInfo.vue";
import { watch } from "vue";

const props = defineProps({
  selected: {
    type: Object,
    default: {},
  },
});

watch(
  () => props.selected,
  (val) => {
    // console.log("val ", val);
  }
);
</script>
