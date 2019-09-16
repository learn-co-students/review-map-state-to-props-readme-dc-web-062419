import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  handleOnClickItems() {
    this.props.store.dispatch({
      type: "GET_COUNT_OF_ITEMS"
    });
  }

  handleOnClickUsers() {
    this.props.store.dispatch({
      type: "GET_COUNT_OF_USERS"
    });
  }

  render() {
    debugger;
    return (
      <div className="App">
        <button onClick={() => this.handleOnClickItems()}>
          Click to change items count
        </button>
        <button onClick={() => this.handleOnClickUsers()}>
          Click to change user count
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  debugger;
  return { items: state.items };
};

export default connect(mapStateToProps)(App);
// What this is basically saying is re-render the app component based on changes in state that are specified in the mapStateToProps function.
// Any time those speciifc state att's change then the app component will re-render with the new information.
