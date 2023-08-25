<template>
  <div class="flex-1 pt-6 flex flex-col items-center gap-10 relative">
    <AddMaterialSection
      class="flex-1"
      :selected="selected"
      @on-empty="selected.materials = []"
    />

    <BackpackSection class="flex-1" @on-select="handleSelected" />
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