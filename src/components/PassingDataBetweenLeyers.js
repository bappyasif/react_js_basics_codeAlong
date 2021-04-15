import React from 'react';

// we'll be using stateless componnet as it's performant prone
export let HeaderExamplePassingDataBetweenLayers = (props) => {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li>
                {/* <a href="#">Stateless Component : {props.homeLink}</a> */}
                <li><a href='#'>{props.homeLink}</a></li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

// using class
// export class HeaderExamplePassingDataBetweenLayers extends React.Component {
//     render() {
//         return(
//             <nav className='navbar navbar-default'>
//                 <div className='container'>
//                     <div className='navbar-header'>
//                         <ul className='nav navbar-nav'>
//                             {/* <li><a href='#'>Home Nav Link Variant</a></li> */}
//                             <li><a href='#'>{this.props.homeLink}</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         );
//     }
// }