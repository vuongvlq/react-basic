import React from "react";
import ChildrenComponent from "./ChilldrenComponent";

/**
 * JSX => Return 1 block code HTML
 * Fragment => Return multiple block code HTML, code HTML must be wrapped in <Fragment> or <>
 * State help update data in component but not refresh page
 */

class MyComponent extends React.Component {

  state = {
    firstName: '',
    lastName: ''
  }

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    });
  }

  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value
    });
  }

  handleSubmit = (event) => {
    console.log('Data Submited: ', this.state);
    event.preventDefault();
  }
  render() {
    console.log(">>> call render ", this.state)
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label><br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label><br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br>
          </br>
          <input type="button" value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
        <ChildrenComponent name={'children one'} />
        <ChildrenComponent name={'children two'} />
        <ChildrenComponent name={'children three'} />
      </>
    );
  }
}

export default MyComponent;
