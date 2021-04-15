import React from "react";
import PropTypes from "prop-types";

export class HomeLinkChangeCommunication extends React.Component {
    // to access and save props value as a class variable so that we can muitatre as we require, we'll have to use constructor and initialize that value within class
    constructor(props) {
        super();
        // we'll have to define state for this component so that wehnever a changes occurs DOM gets updated as such
        this.state = {
            // lets define state for HomeLink as well
            // homeLink: 'Changed Link'
            homeLink: props.initialHomeLinkText
        }
    }
    // lets create utility function for HomeLink change from chilkd component
    onChangeLink() {
      this.props.changeLink(this.state.homeLink);
    }

    onUserInputHandler(evt) {
        this.setState({
            homeLink: evt.target.value
        });
    }
    
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <h4>Data Communication between component</h4>
            {/* lets create a button for to trigger HomeLink text change */}
            {/* we'll also use 'this' binding as we used this within our button onClick function */}
            {/* <button className='btn btn-primary' onClick={this.onChangeLink.bind(this)}>Change Home Link Text</button> */}

            {/* now lets get user input for HomeLink chnage Text which will have default HomeLink Text */}
            {/* using value is a one way binding but and it will simply show value and no other Text change woint be reflected by React DOM when user inputs */}
            {/* <input type='text' value={this.props.initialHomeLinkText} />
            <button className='btn btn-primary' onClick={this.onChangeLink.bind(this)}>Change Home Link Text</button> */}

            {/* we wil use onChange handler to have a two way binding for user inputs */}
            <input type='text' value={this.state.homeLink} onChange={(evt)=>this.onUserInputHandler(evt)} />
            <button className='btn btn-primary' onClick={this.onChangeLink.bind(this)}>Change Home Link Text</button>
          </div>
        </div>
      </div>
    );
  }
}

// we can also do a sanity checks for our props to be sure what kind of data it our class should be expecting through it
HomeLinkChangeCommunication.propTypes = {
  initialHomeLinkText: PropTypes.string
};