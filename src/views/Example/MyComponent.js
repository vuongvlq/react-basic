import React from "react";
import ChildrenComponent from "./ChilldrenComponent";
import AddComponent from "./AddComponent";

/**
 * JSX => Return 1 block code HTML
 * Fragment => Return multiple block code HTML, code HTML must be wrapped in <Fragment> or <>
 * State help update data in component but not refresh page
 */

class MyComponent extends React.Component {

  state = {
    arrJobs: [
      { id: 'abcjob1', 'title': 'Developer', salary: '500' },
      { id: 'abcjob2', 'title': 'Tester', salary: '400' },
      { id: 'abcjob3', 'title': 'Designer', salary: '700' },
    ]
  }

  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job]
    })
  }

  render() {
    console.log(">>> call render ", this.state)
    return (
      <>
        <AddComponent
          addNewJob={this.addNewJob}
        />
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
