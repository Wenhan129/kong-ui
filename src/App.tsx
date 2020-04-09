import React from "react";
import logo from "./logo.svg";
import "./styles/index.scss";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <div className="App">
      <Button disabled>Hello World</Button>
      <Button btnType={ButtonType.Primary} autoFocus>
        Confirm
      </Button>
      <Button btnType={ButtonType.Danger}>Alert</Button>
      <Button btnType={ButtonType.Default} autoFocus>
        Default
      </Button>
      <Menu defaultIndex={0} onSelect={(index) => alert(index)}>
        <MenuItem index={0}>Cool Link1</MenuItem>
        <MenuItem index={1}>Cool Link2</MenuItem>
        <MenuItem index={2}>Cool Link3</MenuItem>
      </Menu>
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
