import React from "react";
import PropTypes from "prop-types";

export class LifeCylclesOfComponent extends React.Component {
  // to access and save props value as a class variable so that we can muitatre as we require, we'll have to use constructor and initialize that value within class
  constructor(props) {
    super();
    // we'll have to define state for this component so that wehnever a changes occurs DOM gets updated as such
    this.state = {
      age: props.initialAge,
      status: 0,
      // lets define state for HomeLink as well
      // homeLink: 'Changed Link'
      homeLink: props.initialHomeLinkText,
    };

    // lets also change sttaus after 2 seconds
    setTimeout(() => {
      this.setState({
        status: 1,
      });
    }, 2000);

    console.log('constructor scope');
  }
  componentWillMount() {
      console.log('Component here will mount');
  }

  componentDidMount() {
    console.log('Component did mount here');
  }

  componentWillReceiveProps(nextProps) {
      console.log('component will recieve props', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
      console.log('should component update here', nextProps, nextState);
    //   if(nextState.status === 1) return false; // overwritring default
      return true;
  }

  componentWillUpdate(nextProps, nextState) {
      console.log('component will update here', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
      console.log('component did update earlier', prevProps, prevState);
  }

  componentWillUnmount() {
      console.log('component will unmount here');
  }

  // whenever button gets called, this function will be called and perform necessary routines
  onHandleButtonClicked() {
    // this method gets triggered and asks react DOM to listrens for any changes there might have been so that it canb reflect accordingly which basically means an UI update
    this.setState({
      age: this.state.age + 2,
    });
  }

  // lets create utility function for HomeLink change from chilkd component
  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  // to get user input
  onUserInputHandler(evt) {
    this.setState({
      homeLink: evt.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <h4>Lifecycles component</h4>
            <div>
              User Name: {this.props.name} and User Age Before Increment:{" "}
              {this.props.age}
            </div>
            <button
              className="btn btn-primary"
              onClick={() => this.onHandleButtonClicked()}
            >
              Click to increase age
            </button>

            <p>
              User Name: {this.props.name} and User Age After Each Button Click:{" "}
              {this.state.age} && status: {this.state.status}
            </p>

            {/* lets call parent function greet from this child component */}
            <hr />
            <button className="btn btn-primary" onClick={this.props.greet}>
              Get Greet From Here
            </button>
            <hr />

            {/* we wil use onChange handler to have a two way binding for user inputs */}
            <input
              type="text"
              value={this.state.homeLink}
              onChange={(evt) => this.onUserInputHandler(evt)}
            />
            <button
              className="btn btn-primary"
              onClick={this.onChangeLink.bind(this)}
            >
              Change Home Link Text
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// we can also do a sanity checks for our props to be sure what kind of data it our class should be expecting through it
LifeCylclesOfComponent.propTypes = {
  name: PropTypes.string,
  initialAge: PropTypes.number,
  greet: PropTypes.func,
  initialHomeLinkText: PropTypes.string  
};
