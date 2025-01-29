import "./styles.css";
import { CounterButton } from "@repo/ui/counter-button";
import { Link } from "@repo/ui/link";

function App() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline text-green-200">
        Hello world!
      </h1>

      <div className="w-100 h-100 bg-mint-500">asdasd</div>
      <CounterButton />
      <p className="description">
        Built With{" "}
        <Link href="https://turbo.build/repo" newTab>
          Turborepo
        </Link>
        {" & "}
        <Link href="https://vitejs.dev/" newTab>
          Vite
        </Link>
      </p>
    </div>
  );
}

export default App;
