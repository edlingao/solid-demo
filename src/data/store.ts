import { createStore } from "solid-js/store";

const [store, setStore] = createStore({
  name: "Solid",
  count: 0,
});
