import React from "react";
import { Link, NavLink } from "react-router-dom";


export class Header extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li>
                  <NavLink to="/home" activeStyle={{color:'maroon'}}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/user/2" activeClassName={'active'}>User</NavLink>
                  {/* <NavLink to="/user" activeClassName={'active'}>User</NavLink> */}
                </li>

              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }



// export class Header extends React.Component {
//     render() {
//       return (
//         <nav className="navbar navbar-default">
//           <div className="container">
//             <div className="navbar-header">
//               <ul className="nav navbar-nav">
//                 <li>
//                   <NavLink to="/home" activeStyle={{color:'maroon'}}>Home</NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/user" activeClassName={'active'}>User</NavLink>
//                 </li>

//               </ul>
//             </div>
//           </div>
//         </nav>
//       );
//     }
//   }


// export class Header extends React.Component {
//   render() {
//     return (
//       <nav className="navbar navbar-default">
//         <div className="container">
//           <div className="navbar-header">
//             <ul className="nav navbar-nav">
//               <li>
//                 <Link to="/home">Home</Link>
//               </li>
//               <li>
//                 <Link to="/user" >User</Link>
//               </li>
//               {/* <li><a href='#'>Home</a></li>
//                             <li><a href='#'>User</a></li> */}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }
