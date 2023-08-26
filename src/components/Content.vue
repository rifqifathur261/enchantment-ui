<template>
  <div class="flex-1 flex flex-col items-center gap-10 relative justify-center">
    <AddMaterialSection
      class=""
      :selected="selected"
      @on-empty="selected.materials = []"
    />

    <BackpackSection class="items-start" @on-select="handleSelected" />
  </div>
</template>



<script setup>
import { ref } from "vue";
import AddMaterialSection from "./AddMaterialSection.vue";
import BackpackSection from "./BackpackSection.vue";

const selected = ref({});

const handleSelected = (val) => {
  selected.value = val;
};
</script>

<style lang="scss" scoped>
</style>