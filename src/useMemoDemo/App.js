import { useState , useMemo} from "react";

const fib =function fib(n) {
  console.log(n);
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

function App() {
  const [check, setCheck] = useState(7);
  const handleChangeNegative = (e) => {
    setCheck(check - 1);
  }
  const handleChangePositive = (e) => {
    setCheck(check + 1);
  }
  const value = useMemo(() => fib(check), [check]);
  return (
    <>
      <h1>Get Nth Fib number</h1>
      <h2>{check}th Fibonaci number is {value}</h2>
      <button onClick={handleChangeNegative}> - </button> <button onClick={handleChangePositive}> + </button>
      <div>
        <label>
          Random CheckBox
          <input type='checkbox' />
        </label>
      </div>
    </>
  );
}

export default App;
