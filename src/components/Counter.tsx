import { createSignal } from "solid-js";
import { count, setCount } from "~/data/count";
import "./Counter.css";

export default function Counter() {
  
  return (
    <button class="increment" onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </button>
  );
}
