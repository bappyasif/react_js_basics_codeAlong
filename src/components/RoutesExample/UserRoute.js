import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./HomeRoute";

export class User extends React.Component {
  onNavigateToHome() {
    // BrowserRouter.push("/home");
    this.props.history.push("/home");
    // <BrowserRouter>
    //   <Route path='/'>
    //     <Home />
    //   </Route>
    // </BrowserRouter>;
  }

  render() {
    return (
      <div className="container">
        <h2>User Page</h2>
        {/* <p>User ID: {this.props.params.id || ''}</p> */}
        {/* <p>User ID: {this.props.params.id}</p> */}
        {/* we want to navigate from a linked page */}
        {/* <button className="btn btn-primary" onClick={this.onNavigateToHome}>Go Home</button> */}
      </div>
    );
  }
}
