import "./App.css";
import { useState } from "react";
import useInput from "./hooks/useInput";

function App() {
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");

  const [name, onChangeNameHandler] = useInput();
  const [password, onChangePasswordHandler] = useInput();

  // const onChangeNameHandler = (e) => {
  //   setName(e.target.value);
  // };

  // const onChangePasswordHandler = (e) => {
  //   setPassword(e.target.value);
  // };

  return (
    <div>
      <div>Custom Hook</div>

      <input type="text" value={name} onChange={onChangeNameHandler} />
      <input type="text" value={password} onChange={onChangePasswordHandler} />
    </div>
  );
}

export default App;
