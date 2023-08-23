<template>
  <div class="h-screen w-full relative">
    <img
      class="w-full h-full blur-sm absolute z-0"
      src="/backdrop.jpeg"
      alt=""
    />

    <div class="absolute w-full h-full flex flex-col z-10">
      <Header />
      <Content />
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Content from "../components/Content.vue";
</script>
