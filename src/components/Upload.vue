<template>
  <form>
    <label>
      <input type="file" @change="uploadDoc" />
      <span><i class="fas fa-cloud-upload-alt"></i> Resim Yükle</span>
    </label>
    <div class="output">
      <div v-if="docError" class="error">{{ docError }}</div>
      <div v-if="doc">{{ doc.name }}</div>
      <ProgressBar v-if="doc" :file="doc" @tamamlandi="doc = null" />
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import ProgressBar from "./ProgressBar";
export default {
  components: { ProgressBar },
  setup() {
    const doc = ref("");
    const docError = ref("");

    const types = ["image/png", "image/jpeg"];

    const uploadDoc = (e) => {
      //console.log(e);

      let selected = e.target.files[0];
      //console.log(secilen);

      if (selected && types.includes(selected.type)) {
        doc.value = selected;
        docError.value = null;
      } else {
        doc.value = null;
        docError.value = "Lütfen bir resim dosyası seçiniz (png ya da jpeg)";
      }
    };

    return { uploadDoc, doc, docError };
  },
};
</script>

<style>
form {
  margin: 30px auto 10px;
  text-align: center;
}
label input {
  height: 0;
  width: 0;
  opacity: 0;
}
label {
  display: block;
  width: 150px;
  height: 30px;
  background-color: var(--secondary);
  border: 1px solid var(--secondary);
  border-radius: 6px;
  margin: 10px auto;
  line-height: 30px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
label:hover {
  background: #2f3542;
  color: white;
  border: 1px solid var(--secondary);
}
.output {
  height: 40px;
  font-size: 0.8rem;
}
.error {
  color: var(--error);
}
</style>
