import React from "react";
import "./App.css";
import { FirstComponent } from "./components/fisrtExampleComponent.js";
import { HeaderExample } from "./components/HeaderExample.js";
import { HomeExample } from "./components/HomeExample";
import { HomeExampleWithProps } from "./components/HomeExampleWithProps";
import { HomeExampleWithEvents } from "./components/HomeExampleWithEvents";
import { StatelessComponent } from "./components/StatelessCompoent";
import { HeaderExamplePassingDataBetweenLayers } from "./components/PassingDataBetweenLeyers";
import { HomeLinkChangeCommunication } from "./components/HomeLinkChangeCommunication";
import { LifeCylclesOfComponent } from "./components/LifeCylclesOfComponent";

class App extends React.Component {
  // lets create a construtor and use state so that data can be communicated through layers (e.g. parent => <= child)
  constructor() {
    // we'll have to use super() whenevr we're extending from some other class
    super();
    this.state = {
      homeLink: "Home",
      homeMounted: true,
    };
  }

  // toggle mounted state value
  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted,
    });
  }

  // setting up state for new HomeLink value
  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName,
    });
  }

  // example object that will be sent as Props to a child element
  user = {
    name: "gillian",
    hobbies: ["sports"],
    likes: ["works", "plays"],
  };

  // lets pass in function from parent to child but will be executed from child element
  sayGreet() {
    console.log("greeting child from parent");
  }
  render() {
    // passing in dummy component
    let homeComp = "";
    if (this.state.homeMounted) {
      homeComp = (
        <LifeCylclesOfComponent
          name={"abappy"}
          initialAge={36}
          greet={this.sayGreet}
          changeLink={this.onChangeLinkName.bind(this)}
          initialHomeLinkText={this.state.homeLink}
        />
      );
    }
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <HeaderExample />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <HomeExample />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              {/* we can also pass down values from parent to child elements with object known as props */}
              {/* and that how we pass in props to child elements from parent element, it's one way flow and also immutable */}
              {/* <HomeExampleWithProps name={'abappy'} age={36} user={user} /> */}
              <HomeExampleWithProps name={"abappy"} age={36} user={this.user}>
                {/* whatever html elemnt we pass it in here will be treated as children elemnt which will passed onto props for children component to use */}
                <p>This is child componnent within Home</p>
                <p>This is another componnent within Home</p>
              </HomeExampleWithProps>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              {/* Using Events */}
              <HomeExampleWithEvents name={"abappy"} initialAge={36} />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              {/* using a Stateless Component */}
              <StatelessComponent homeLink="Home" />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              {/* passing in function that will be called from child component */}
              <HomeExampleWithEvents
                name={"abappy"}
                initialAge={36}
                greet={this.sayGreet}
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              {/* passing state of HomeLink to a child element and in turn child element will change HomeLink text using onChangeLinkName from this parent component */}
              <HeaderExamplePassingDataBetweenLayers
                homeLink={this.state.homeLink}
              />
              {/* we will change this HomeLink text from this HomeExampleWithEvents component */}
              <HomeLinkChangeCommunication
                // as we have used this keyword within our onChangeLinkName for our setState(), we'll have to use 'binding for this
                changeLink={this.onChangeLinkName.bind(this)}
                initialHomeLinkText={this.state.homeLink}
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <HeaderExamplePassingDataBetweenLayers
                homeLink={this.state.homeLink}
              />
              {homeComp}
              {/* <LifeCylclesOfComponent
                name={"abappy"}
                initialAge={36}
                greet={this.sayGreet}
                changeLink={this.onChangeLinkName.bind(this)}
                initialHomeLinkText={this.state.homeLink}
              /> */}
            </div>
          </div>
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <button
                className="btn btn-primary"
                onClick={this.onChangeHomeMounted.bind(this)}
              >
                [Un]mount Component
              </button>
            </div>
          </div>
          <FirstComponent />
        </div>
      </div>
    );
  }
}

/**
 * 
 * 
 function App() {
  // example object that will be sent as Props to a child element
  let user = {
    name: 'gillian',
    hobbies: ['sports'],
    likes: ['works', 'plays']
  }

  // lets pass in function from parent to child but will be executed from child element
  function sayGreet() {
    console.log('greeting child from parent');
  }
  return (
    <div className="App">
      <HeaderExample />

      <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <HomeExample />
            <HomeExampleWithProps name={'abappy'} age={36} user={user}>
              <p>This is child componnent within Home</p>
              <p>This is another componnent within Home</p>
            </HomeExampleWithProps>

            <HomeExampleWithEvents name={'abappy'} initialAge={36} />

            <StatelessComponent homeLink='Home' />

            <HomeExampleWithEvents name={'abappy'} initialAge={36} greet={sayGreet} />
          </div>
        </div>
      
      <FirstComponent />
    </div>
  );
}
 * 
 * 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <HomeExample />
          </div>
        </div>
        <HeaderExample />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FirstComponent />
    </div>
  );
}
 */

export default App;
