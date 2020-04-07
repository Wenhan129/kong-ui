import React from "react";
import logo from "./logo.svg";
import "./styles/index.scss";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <Button disabled autoFocus>
        Hello World
      </Button>
      <Button btnType={ButtonType.Primary}>Confirm</Button>
      <Button btnType={ButtonType.Danger}>Alert</Button>
      <Button btnType={ButtonType.Default} autoFocus>
        Default
      </Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
