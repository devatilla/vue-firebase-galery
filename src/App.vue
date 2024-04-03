<template>
  <div>
    <Title />

    <Upload />

    <imgGridVue />
  </div>
</template>

<script>
import imgGridVue from "./components/imgGrid.vue";
import Title from "./components/Title.vue";
import Upload from "./components/Upload.vue";
export default {
  name: "App",
  components: {
    imgGridVue,
    Title,
    Upload,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
