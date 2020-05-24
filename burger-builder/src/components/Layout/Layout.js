import React from "react";
import Aux from "../../hoc/AuxComponent";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";

const layout = (porps) => {
  return (
    <Aux>
      <Toolbar />
      <main className="Content">{porps.children}</main>
    </Aux>
  );
};

export default layout;
