import React from "react";

class AddComponent extends React.Component {

  state = {
    titleJob: '',
    salary: ''
  }
  handleChangeTitleJob = (event) => {
    this.setState({
      titleJob: event.target.value
    });
  }

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value
    });
  }

  handleSubmit = (event) => {
    console.log('Data Submited: ', this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <label htmlFor="fname">Job's Title:</label><br />
        <input
          type="text"
          value={this.state.titleJob}
          onChange={(event) => this.handleChangeTitleJob(event)}
        />
        <br />
        <label htmlFor="lname">Salary:</label><br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleChangeSalary(event)}
        />
        <br>
        </br>
        <input type="button" value="Submit"
          onClick={(event) => this.handleSubmit(event)}
        />
      </form>
    )
  }
}

export default AddComponent;
