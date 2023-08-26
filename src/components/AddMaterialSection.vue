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

    <div class="flex flex-1 flex-row relative z-20">
      <div
        class="bg-black bg-opacity-30 backdrop-blur-sm w-full h-full absolute"
      ></div>

      <div class="flex-1 flex justify-center items-center relative">
        <div class="flex flex-col px-8 items-center">
          <div class="group">
            <ItemBox
              @click="selectedItem = {}"
              type="active"
              :img="selectedItem?.img"
            >
              <template #tooltip>
                <BubbleInfo class="absolute -top-20 group-hover:scale-100">
                  <template #text>
                    <div class="flex flex-row flex-nowrap gap-1 w-max">
                      Select a <span class="text-text-dark"> Tool </span> then
                      <span class="text-text-dark"> Material </span>
                      to Enchant
                    </div>
                  </template>
                </BubbleInfo>
              </template>
            </ItemBox>
          </div>

          <div class="text-center text-grey-light my-1">X</div>

          <div class="flex flex-nowrap gap-2">
            <ItemBox
              :img="materialItems[item - 1]?.img"
              v-for="item in 5"
              :key="item.id"
              @click="handleMaterialClick(item - 1)"
            />
          </div>

          <div class="w-full flex flex-col items-center mt-4 gap-2">
            <div class="w-3/4 relative">
              <div
                class="absolute w-full h-[5px] rounded-md bg-white-primary bg-opacity-30"
              />
              <div
                class="absolute h-[5px] rounded-md bg-white-primary bg-opacity-60 transition-all duration-500"
                :style="`width: ${materialItems.length * 20}%;`"
              />
            </div>
            <div class="text-primary-light">
              {{ materialItems.length * 20 }} / 100
            </div>
          </div>
        </div>

        <div
          class="flex flex-col items-start absolute -bottom-2 left-1/2 -translate-x-1/2"
        >
          <KeyButton
            @click="handleConfirm"
            :text="true"
            light
            class="px-2 py-1"
          >
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
      <div class="text-text-light text-[13px]">Enchantments</div>

      <div class="flex flex-col gap-2">
        <ItemEnchantment
          v-for="index in 3"
          :key="index.id"
          :enchantment="
            selectedItem?.enchantments
              ? selectedItem?.enchantments[index - 1]
              : {}
          "
        />
      </div>

      <div class="flex gap-2 flex-col min-h-[6rem] my-2">
        <div class="flex justify-center" v-if="materialItems.length > 0">
          <Triangle class="text-white w-4 h-4 animate-bounce" />
        </div>

        <div
          v-if="materialItems.length > 0"
          class="rounded-xl px-3 border-2 border-grey-light border-opacity-50 bg-gradient-to-tr via-30% from-blue-light via-blue-dark to-blue-light"
        >
          <div class="py-3 flex justify-between">
            <div class="flex items-center gap-2">
              <TrashBag class="w-5 h-5 text-blue-lighten" />
              <div class="text-primary-light">Rare Enchantment</div>
            </div>

            <div class="text-primary-light">
              {{ materialItems.length * 3 }}%
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-start absolute -bottom-3 right-8">
        <KeyButton
          @mousedown="onDiscard"
          @mouseup="
            progressAnimation = '';
            canClearMaterial = false;
          "
          :text="true"
          class="relative"
          :anim-class="progressAnimation"
          :progress="progress"
        >
          <template #icon> X </template>
          <template #text>
            <div class="flex gap-1">
              <div class="text-primary">Hold</div>

              <div class="text-text-light">Discard</div>
            </div>
          </template>
        </KeyButton>
      </div>
    </div>
  </div>

  <SuccessPopup
    :selected-item="confirmTool"
    v-if="modalDialog"
    @on-close="modalDialog = false"
  />
</template>

<script setup>
import SuccessPopup from "./SuccessPopup.vue";
import ItemBox from "./ItemBox.vue";
import TrashBag from "../assets/icons/TrashBag.vue";

import Triangle from "../assets/icons/Triangle.vue";
import KeyButton from "./KeysButton.vue";
import BubbleInfo from "./BubbleInfo.vue";
import { onMounted, ref, watch } from "vue";
import ItemEnchantment from "./ItemEnchantment.vue";

const emit = defineEmits(["on-empty"]);

const props = defineProps({
  selected: {
    type: Object,
    default: {},
  },
});

const selectedItem = ref({});
const materialItems = ref([]);

const handleMaterialClick = (index) => {
  materialItems.value.splice(index, 1);
};

watch(
  () => props.selected,
  (val) => {
    selectedItem.value = val.item;
    materialItems.value = val.materials;
  },
  { deep: true }
);

const progress = ref(0);
const progressAnimation = ref("");
const canClearMaterial = ref(false);

const onDiscard = () => {
  if (progressAnimation.value == "" && materialItems.value.length > 0) {
    progressAnimation.value = "animate-progress-animation";
    canClearMaterial.value = true;

    setTimeout(() => {
      if (canClearMaterial.value) {
        progressAnimation.value = "";
        emit("on-empty");
      }
    }, 2000);
    return;
  }
};

const modalDialog = ref(false);
const confirmTool = ref({});

const handleConfirm = () => {
  if (selectedItem.value) {
    modalDialog.value = true;
    confirmTool.value = selectedItem.value;
  }
};

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "Enter":
        handleConfirm();
        break;
      case "x":
        onDiscard();

      default:
        break;
    }
  });
  window.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "x":
        progressAnimation.value = "";
        canClearMaterial.value = false;

      default:
        break;
    }
  });
});
</script>

<style lang="scss">
.animation-paused {
  animation-play-state: paused;
}
</style>
