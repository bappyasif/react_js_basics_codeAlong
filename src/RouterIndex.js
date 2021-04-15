import React from "react";
// import {Router, Route, browserHistory} from "react-router";
// import {Router, Route} from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./components/RoutesExample/HomeRoute";
import { Root } from "./components/RoutesExample/RootRoute";
import { User } from "./components/RoutesExample/UserRoute";

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Root>
          
            <Route path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/user/:id">
              <User />
            </Route>
          
        </Root>
      </Router>
    );
  }
}

// class AppRouter extends React.Component {
//     render() {
//       return (
//         <Router>
//           <div>
//             <Root>
//               <Route path="/" component={Home} />
//               <Route path="/home" component={Home} />
//               <Route path="/user/:id" component={User} />
//             </Root>
//           </div>
//         </Router>
//       );
//     }
//   }

// class AppRouter extends React.Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Root>
//             <Route path="/" component={Home} />
//             <Route path="/home" component={Home} />
//             <Route path="/user" component={User} />
//           </Root>
//         </div>
//       </Router>
//     );
//   }
// }

// class AppRouter extends React.Component {
//   render() {
//     return (
//       <Router>
//         <Root>
//           <Switch>
//             <Route exact path={"/"} component={Home} />
//             <Route path={"home"} component={Home} />
//             <Route path={"user"} component={User} />
//           </Switch>
//         </Root>
//       </Router>
//     );
//   }
// }

// class AppRouter extends React.Component {
//   render() {
//     return (
//       <Router>
//         <Route path={"/"} component={Root}>
//           <Route path={"home"} component={Home} />
//           <Route path={"user"} component={User} />
//         </Route>
//         <Route path={"home-single"} component={Home} />
//       </Router>
//     );
//   }
// }

// class AppRouter extends React.Component {
//     render() {
//         return(
//             <Router history={browserHistory}>
//                 <Route path={'user'} component={User} />
//                 <Route path={'home'} component={Home} />
//             </Router>
//         )
//     }
// }

// class AppRouter extends React.Component {
//     render() {
//         return(
//             <Root>
//                 <Home></Home>
//             </Root>
//         )
//     }
// }

export { AppRouter };
