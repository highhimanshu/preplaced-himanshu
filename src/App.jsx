var a = 200;
import { useEffect, useState } from "react";
import A from "./components/A";
import B from "./components/B";

function App() {
  const a = 10;

  const [isLoading, setIsLoading] = useState();
  const [b, setB] = useState(20); //state is mutable

  useEffect(() => {
    setB(100);
  }, []);

  return (
    <>
      <h2>{isLoading ? "Data Loading" : "Data Not Loading"} </h2>
      <button onClick={() => setIsLoading(!isLoading)}>Click me</button>

      <h2>amit cse dsa - {b} </h2>
      <A data={a} />
      <B b={b} setB={setB} />
    </>
  );
}

export default App;
