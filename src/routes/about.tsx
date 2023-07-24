import Counter from "~/components/Counter";
import CounterIsolated from "~/components/CounterIsolated";

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <p>
        This is the about page.
      </p>
      <Counter />
      <CounterIsolated />
    </main>
  );
}