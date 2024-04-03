import { ref, watchEffect } from "vue";
import { storage } from "../firebase/config";

const useStorage = (doc) => {
  const error = ref(null);
  const url = ref(null);
  const progress = ref(null);

  watchEffect(() => {
    const storageRef = storage.ref("resimler/" + doc.name);

    storageRef.put(doc).on(
      "state_changed",
      (snap) => {
        console.log(snap);
      },
      (err) => {
        error.value = err;
      },
      async () => {
        const dlUrl = await storageRef.getDownloadURL();
        url.value = dlUrl;
      }
    );
  });

  return { url, error, progress };
};

export default useStorage;
