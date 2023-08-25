<template>
  <div
    class="bg-black bg-opacity-40 flex-1 pt-6 flex flex-col items-center gap-4"
  >
    <AddMaterialSection
      :selected="selected"
      @on-empty="selected.materials = []"
    />

    <BackpackSection @on-select="handleSelected" />

    <BottomSection />
  </div>
</template>



<script setup>
import { ref } from "vue";
import AddMaterialSection from "./AddMaterialSection.vue";
import BackpackSection from "./BackpackSection.vue";
import BottomSection from "./BottomSection.vue";

const selected = ref({});

const handleSelected = (val) => {
  selected.value = val;
};
</script>

<style lang="scss" scoped>
</style>