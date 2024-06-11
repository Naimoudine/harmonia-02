import { useLoaderData } from "react-router-dom";
import "./App.css";

function App() {
  const loaderData = useLoaderData();

  return (
    <main className="container">
      <h1>{loaderData}</h1>
    </main>
  );
}

export default App;
