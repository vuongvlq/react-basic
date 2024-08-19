import React from "react";

/**
 * JSX => Return 1 block code HTML
 * Fragment => Return multiple block code HTML, code HTML must be wrapped in <Fragment> or <>
 * State help update data in component but not refresh page
 */

class MyComponent extends React.Component {

  state = {
    name: "Vuong",
    old: 25
  }

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  handleClickButton = () => {
    alert("Click me")
  }

  render() {
    return (
      <>
        <div className="first">
          <input type="text" value={this.state.name} onChange={(event) => this.handleOnChangeName(event)} />
          {console.log("MyComponent render")}
          Hello my component, I'm {this.state.name}.
        </div>
        <div className="second">
          I'm {this.state["old"]} years old
        </div>
        <div className="third">
          <button onClick={() => this.handleClickButton()}>Click me</button>
        </div>
      </>

    );
  }
}

export default MyComponent;
