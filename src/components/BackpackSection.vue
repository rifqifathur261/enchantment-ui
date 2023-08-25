<template>
  <div
    class="3xl:max-w-[40%] w-[50%] rounded-xl flex bg-white-primary bg-opacity-10 flex-col p-3 gap-3"
  >
    <div class="flex items-center">
      <Backpack class="w-5 h-5 text-primary" />
      <div class="text-primary-light">Backpack</div>
    </div>

    <div>
      <div class="flex flex-wrap gap-2">
        <ItemBox
          in-backpack
          v-for="item in 33"
          :key="item.id"
          :img="items[item - 1]?.img"
          :quantity="items[item - 1]?.hasQuantity"
          :type="items[item - 1]?.state"
          @click="handleSelect(item - 1)"
        >
          <template #quantity>
            <div
              class="flex gap-[3px] p-1"
              v-if="items[item - 1]?.itemType == 'tool'"
            >
              <div
                :class="`w-[7px] h-[7px] rotate-45 ${
                  qty > items[item - 1]?.enchantments.length
                    ? 'border border-black'
                    : 'bg-black'
                }`"
                v-for="qty in 3"
                :key="qty"
              />
            </div>
            <div v-else class="text-[12px] px-[6px]">
              {{ items[item - 1]?.quantity }}
            </div>
          </template>
        </ItemBox>
      </div>

      <div class="flex flex-wrap gap-2 mt-4">
        <div
          class="w-16 flex justify-center items-center"
          v-for="item in 11"
          :key="item.id"
        >
          <div class="bg-white-primary bg-opacity-20 w-6 h-6 rounded-xl" />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import Backpack from "../assets/icons/Backpack.vue";
import ItemBox from "./ItemBox.vue";

const emit = defineEmits(["on-select"]);

let enchantItem = ref({ item: {}, materials: [] });

const handleSelect = (index) => {
  const item = items[index];
  if (item) {
    if (item.itemType == "tool") {
      enchantItem.value.item = item;
    } else if (item.itemType === "material") {
      if (enchantItem.value.materials.length < 5)
        enchantItem.value.materials.push(item);
    }

    emit("on-select", enchantItem.value);
  }
};

const items = [
  {
    name: "Sickle",
    img: "sickle.png",
    itemType: "tool",
    hasQuantity: true,
    quantity: 0,
    state: "active",
    enchantments: [
      {
        name: "Swift Swing",
        rate: 3,
        type: "Common",
      },
      {
        name: "Extra Drop",
        rate: 10,
        type: "Epic",
      },
    ],
  },
  {
    name: "Axe",
    img: "axe.png",
    itemType: "tool",
    hasQuantity: true,
    quantity: 1,
    state: "active",
    enchantments: [
      {
        name: "Attack",
        rate: 50,
        type: "Epic",
      },
    ],
  },
  {
    name: "Hoe",
    img: "hoe.png",
    itemType: "tool",
    hasQuantity: true,
    quantity: 2,
    state: "active",
    enchantments: [],
  },
  {
    name: "Fish",
    img: "fish.png",
    itemType: "food",
    hasQuantity: true,
    quantity: 2,
    state: "inactive",
  },
  {
    name: "Carrot",
    img: "carrot.png",
    itemType: "food",
    hasQuantity: true,
    quantity: 34,
    state: "inactive",
  },
  {
    name: "Green Gem",
    img: "green-gem.png",
    itemType: "material",
    hasQuantity: true,
    quantity: 5,
    state: "active",
  },
  {
    name: "Blue Gem",
    img: "blue-gem.png",
    itemType: "material",
    hasQuantity: true,
    quantity: 8,
    state: "active",
  },
  {
    name: "Purple Gem",
    img: "purple-gem.png",
    itemType: "material",
    hasQuantity: true,
    quantity: 12,
    state: "active",
  },
];
</script>
  