<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="text-subtitle-2 mb-2">外观</div>
    <v-expansion-panels>
      <v-expansion-panel
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        title="Item"
      ></v-expansion-panel>
    </v-expansion-panels>
    <div class="text-subtitle-2 mt-4 mb-2">关于</div>
    <v-expansion-panels>
      <v-expansion-panel
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        title="Item"
      ></v-expansion-panel>
    </v-expansion-panels>
    <div class="text-subtitle-2 mt-4 mb-2">Github地址</div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5vh 2vw;
}
</style>