import React from "react";
import PropTypes from 'prop-types';

export class HomeExampleWithProps extends React.Component {
  render() {
    // to access props from parent element, we can just simply use 'this.props'
    // 'this.props' is by default provided by React
    console.log(this.props);

    // example text
    let text = "sample text";
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <h2>a component using Props</h2>
            <p>
              Name is: {this.props.user.name} and Hobbies are:{" "}
              {this.props.user.hobbies}
            </p>
            <div>
              User Name: {this.props.name} and User Age: {this.props.age}
            </div>
            {/* when we need to loop over any props we can do so within render function or within {} in JSX */}
            <h4>Likes:</h4>
            <ul>
                {/* using loop to props */}
              {this.props.user.likes.map((like,idx) => (
                <li key={idx}>{like}</li>
              ))}
            </ul>
            {/* using native variable element */}
            {text}
            <hr />
            {/* accessing any props children */}
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

// we can also do a sanity checks for our props to be sure what kind of data it our class should be expecting through it
HomeExampleWithProps.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
}
