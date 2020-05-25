import React, { Component } from "react";
import Aux from "../AuxComponent/AuxComponent";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import "./Layout.css";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  closeSideDrawerHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggle={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.closeSideDrawerHandler}
        />
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
