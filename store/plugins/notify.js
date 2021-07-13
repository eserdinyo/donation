export default function notify(store) {
  store.subscribe((mutation, state) => {
    if (mutation.type === "cart/pushToCart") {
      // TODO: send notification to slack
      console.log(mutation.payload);
    }
  });
}
