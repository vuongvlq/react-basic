import React from "react";

/**
 * JSX => Return 1 block code HTML
 * Fragment => Return multiple block code HTML, code HTML must be wrapped in <Fragment> or <>
 * State help update data in component but not refresh page
 */

class ChildrenComponent extends React.Component {
  state = {
    showJobs: false
  }

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs
    })
  }
  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    return (
      <>
        {showJobs === false ?
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
          :
          <>
            <div className='job-list'>
              {
                arrJobs.map((item, index) => {
                  return (
                    <div key={item.id}>
                      Title: {item.title} - Salary: {item.salary} $
                    </div>
                  )
                })
              }
            </div>
            <div>
              <button onClick={() => this.handleShowHide()} > Hide</button>
            </div>
          </>
        }
      </>
    );
  }
}

// const ChildrenComponent = (props) => {
//   console.log(">>> check props ", props)
//   // let name = this.props.name;
//   // let age = this.props.age;

//   let { name, age, address, arrJobs } = props;
//   return (
//     <>
//       <div className='job-list'>
//         {
//           arrJobs.map((item, index) => {
//             return (
//               <div key={item.id}>
//                 Title: {item.title} - Salary: {item.salary}
//               </div>
//             )
//           })
//         }
//       </div>
//     </>
//   );
// }

export default ChildrenComponent;
