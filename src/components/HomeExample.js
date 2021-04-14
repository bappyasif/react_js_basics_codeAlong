import React from "react";

export class HomeExample extends React.Component {
  render() {
    let content = "";
    if (true) {
      content = "custom content";
    }
    return (
      <div>
        <p>In a new component</p>
        {/* for dynamic content we will have to use {2*2} */}
        {2 * 2}

        {/* within {2*2, **multines expression} all js logic neeeds to be in a single line, multiline expressions are not allowed */}
        {/* {2/2;
                2/1} */}

        {/* for more complex logic which might require multiline expressions we can manage them within render method it self before using it in return JSX */}
        <div>{content}</div>

        {/* ternery operators would work as long as it limits in a single line */}
        { 5>3 ? 'yes' : 'no'}
      </div>
    );
  }
}
