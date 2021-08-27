import { readonly, ref } from "vue";

export function useRequest() {
  const loading = ref(false);
  const payload = ref(null)
  

  const makeRequest = async (url) => {
    loading.value = true
    const res = await fetch(url)
    payload.value = await res.json()
    loading.value = false
  }


  return {
    loading: readonly(loading),
    payload: readonly(payload),
    makeRequest
  };
}
