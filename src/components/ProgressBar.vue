<template>
  <div class="progress-bar" :style="{ width: progress + '%' }"></div>
</template>

<script>
import useStorage from "../composables/useStorage";

export default {
  props: ["file"],
  setup(props) {
    useStorage(props.file);
  },
};
</script>

<style>
.progress-bar {
  display: block;
  height: 6px;
  background: var(--primary);
  transition: width 0.3s ease;
  border-radius: 6px;
  margin-top: 20px;
}
</style>
