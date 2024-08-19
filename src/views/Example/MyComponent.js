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

  render() {
    return (
      <>
        <div>
          <input type="text" value={this.state.name} onChange={(event) => this.handleOnChangeName(event)} />
          {console.log("MyComponent render")}
          Hello my component, I'm {this.state.name}.
        </div>
        <div>
          I'm {this.state["old"]} years old
        </div>
      </>

    );
  }
}

export default MyComponent;
