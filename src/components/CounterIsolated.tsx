import { createSignal } from "solid-js";
import "./Counter.css";

export default function CounterIsolated() {
  
  const [count, setCount] = createSignal(0);

  return (
    <button class="increment" onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </button>
  );
}
