import React from "react";

/**
 * JSX => Return 1 block code HTML
 * Fragment => Return multiple block code HTML, code HTML must be wrapped in <Fragment> or <>
 * State help update data in component but not refresh page
 */

class ChildrenComponent extends React.Component {

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
    console.log(">>> check props ", this.props)
    // let name = this.props.name;
    // let age = this.props.age;

    let { name, age } = this.props;
    return (
      <>
        <div>
          Children Component: {name} - {age}
        </div>
      </>
    );
  }
}

export default ChildrenComponent;
