import React from 'react';
// import {render} from 'react-dom';

class FirstComponent extends React.Component {
    render() {
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1'>
                        <h2>Hello Component</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export {FirstComponent};