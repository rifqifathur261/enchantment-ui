<template>
  <div class="h-screen w-full relative">
    <img
      class="w-full h-full blur-sm absolute z-0 object-cover"
      src="/backdrop.jpeg"
      alt=""
    />

    <div
      v-if="isEnchantOpen"
      class="absolute w-full h-full flex flex-col z-10 bg-black bg-opacity-40"
    >
      <Header />
      <Content />
      <BottomSection />
    </div>

    <div
      v-else
      @click="isEnchantOpen = true"
      class="flex bg-white-primary pl-3 pr-5 py-2 items-center gap-2 rounded-xl hover:rounded-lg transition-all cursor-pointer duration-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div>
        <Enchantment class="w-5 h-5 text-primary" />
      </div>

      <div class="text-text-dark">Open Enchantments</div>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Content from "../components/Content.vue";
import BottomSection from "../components/BottomSection.vue";
import Enchantment from "../assets/icons/Anvil.vue";
import { ref } from "vue";

const isEnchantOpen = ref(true);

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "Escape":
      isEnchantOpen.value = false;
    default:
      break;
  }
});
</script>
