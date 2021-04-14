import logo from "./logo.svg";
import "./App.css";
import { FirstComponent } from "./components/fisrtExampleComponent.js";
import { HeaderExample } from "./components/HeaderExample.js";
import { HomeExample } from "./components/HomeExample";
import {HomeExampleWithProps} from './components/HomeExampleWithProps';
import {HomeExampleWithEvents} from './components/HomeExampleWithEvents';
import {StatelessComponent} from './components/StatelessCompoent';

function App() {
  // example object that will be sent as Props to a child element
  let user = {
    name: 'gillian',
    hobbies: ['sports'],
    likes: ['works', 'plays']
  }
  return (
    <div className="App">
      <HeaderExample />

      <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <HomeExample />
            {/* we can also pass down values from parent to child elements with object known as props */}
            {/* and that how we pass in props to child elements from parent element, it's one way flow and also immutable */}
            {/* <HomeExampleWithProps name={'abappy'} age={36} user={user} /> */}
            <HomeExampleWithProps name={'abappy'} age={36} user={user}>
              {/* whatever html elemnt we pass it in here will be treated as children elemnt which will passed onto props for children component to use */}
              <p>This is child componnent within Home</p>
              <p>This is another componnent within Home</p>
            </HomeExampleWithProps>

            {/* Using Events */}
            <HomeExampleWithEvents name={'abappy'} initialAge={36} />

            {/* using a Stateless Component */}
            <StatelessComponent homeLink='Home' />
          </div>
        </div>
      
      <FirstComponent />
    </div>
  );
}


/**
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
