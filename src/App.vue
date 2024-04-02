<template>
  <div>
    <Title />
    <imgGridVue />
  </div>
</template>

<script>
import imgGridVue from "./components/imgGrid.vue";
import Title from "./components/Title.vue";
export default {
  name: "App",
  components: {
    imgGridVue,
    Title,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
