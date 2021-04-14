import React from "react";
import PropTypes from "prop-types";

export class HomeExampleWithEvents extends React.Component {
    // to access and save props value as a class variable so that we can muitatre as we require, we'll have to use constructor and initialize that value within class
    constructor(props) {
        super();
        // this.age = props.age;
        // bind button click handler so that click event has access to our button click handler
        // this.onHandleButtonClicked;

        // we'll have to define state for this component so that wehnever a changes occurs DOM gets updated as such
        this.state = {
            age: props.initialAge,
            status: 0
        }

        // lets also change sttaus after 2 seconds
        setTimeout(()=>{
            this.setState({
                status: 1
            })
        }, 2000)
    }
    // whenever button gets called, this function will be called and perform necessary routines
    onHandleButtonClicked() {
        // this.age +=2;
        // console.log(this.age);

        // this method gets triggered and asks react DOM to listrens for any changes there might have been so that it canb reflect accordingly which basically means an UI update
        this.setState({
            age: this.state.age + 2
        });
    }
    
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <h4>Within an another component</h4>

            <div>
              User Name: {this.props.name} and User Age Before Increment: {this.props.age}
            </div>

            {/* <button className='btn btn-primary' onClick={this.onHandleButtonClicked}>Click to increase age</button> */}
            {/* by binding this we are telling React to look within this class not externally */}
            {/* <button className='btn btn-primary' onClick={this.onHandleButtonClicked.bind(this)}>Click to increase age</button> */}
            
            {/* even though our button clicke handler is incrementing but DOM doesnt render change as of yetr, due to state persistence */}
            {/* props are getting passed on from external sources whereas State is handled from within class itself */}
            {/* state of something which can be changed by component it self whereas props can change from outside */}
            {/* due React Virtual DOM which is mirror copy of our DOM and any changes reflected due to state changes will be reflected on actual DOM */}
            {/* Virtual DOM does a DOM difference check and updates only which is chnaged and rests stays as it is, thus making it fdaster than DOM repainting */}
            <button className='btn btn-primary' onClick={() => this.onHandleButtonClicked()}>Click to increase age</button>
            
            <p>User Name: {this.props.name} and User Age After Each Button Click: {this.state.age} && status: {this.state.status}</p>
          </div>
        </div>
      </div>
    );
  }
}

// we can also do a sanity checks for our props to be sure what kind of data it our class should be expecting through it
HomeExampleWithEvents.propTypes = {
  name: PropTypes.string,
  initialAge: PropTypes.number,
};
