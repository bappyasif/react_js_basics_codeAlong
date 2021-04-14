// stateless component has only access to props but no states
// stateless componenst arfe lot faster as they dont require much DOM rendering once painted, refactoring it to a stateless component is recommended when there is nmo need of 'state component making app performn better and faster

export let StatelessComponent = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li>
              <a href="#">Stateless Component : {props.homeLink}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
