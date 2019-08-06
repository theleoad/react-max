import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Leo", age: "33" },
      { name: "Nathy", age: "25" },
      { name: "Slash", age: "3" },
      { name: "Malu", age: "2" }
    ]
  };

  switchNameHandler = newName => {
    // console.log("was clicked");
    this.setState({
      persons: [
        { name: newName, age: "33" },
        { name: "Nathália", age: "25" },
        { name: "Slash", age: "3" },
        { name: "Malu", age: "27" }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Leo", age: "33" },
        { name: "Nathy", age: "25" },
        { name: "Slash", age: "3" },
        { name: event.target.value, age: "27" }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Leleolelel")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, "Coisinho")}
        >
          My hobbies: dancing
        </Person>
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
          changed={this.nameChangeHandler}
        />
      </div>
    );
  }
}

export default App;
