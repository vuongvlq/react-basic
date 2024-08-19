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
    lastName: '',
    arrJobs: [
      { id: 'abcjob1', 'title': 'Developer', salary: '500 $' },
      { id: 'abcjob2', 'title': 'Tester', salary: '400 $' },
      { id: 'abcjob3', 'title': 'Designer', salary: '700 $' },
    ]
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
        <ChildrenComponent
          name={this.state.firstName}
          age={25}
          address={'Quang Nam'}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}

export default MyComponent;
