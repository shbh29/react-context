import Switch from "./Switch/switch";
import { useState } from "react";
import './App.css'

export default function App() {
  return (
    <>
      <div className="App">
        <h1>Hello Shubham compound component</h1>
        <Switch >
          <Switch.On >Hi</Switch.On>
          <Switch.Off >Bye</Switch.Off>
        </Switch>
      </div>
    </>
  );
}
