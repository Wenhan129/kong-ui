import React from "react";
import logo from "./logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./styles/index.scss";
import Button, { ButtonType } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
library.add(fas);

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
      <Menu
        mode="horizontal"
        // defaultOpenSubMenus={["2", "3"]}
        defaultIndex="0"
        onSelect={(index) => alert(index)}
      >
        <MenuItem>Cool Link1</MenuItem>
        <MenuItem>Cool Link2</MenuItem>
        <SubMenu title="Cool">
          <MenuItem>Cool SubMenu Link3</MenuItem>
          <MenuItem>Cool SubMenu Link3</MenuItem>
          <MenuItem>Cool SubMenu Link3</MenuItem>
        </SubMenu>
        <SubMenu title="Cool">
          <MenuItem>Cool SubMenu Link3</MenuItem>
          <MenuItem>Cool SubMenu Link3</MenuItem>
          <MenuItem>Cool SubMenu Link3</MenuItem>
        </SubMenu>
        <SubMenu title="Cool">
          <MenuItem>Cool SubMenu Link3</MenuItem>
          <MenuItem>Cool SubMenu Link3</MenuItem>
          <MenuItem>Cool SubMenu Link3</MenuItem>
        </SubMenu>
        <MenuItem>Cool Link3</MenuItem>
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
