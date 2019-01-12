import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Title: Welcome to my Page</h1>
            <p>This is sample Web Page !!!</p>
            <h3>Copyrights : {props.owner}</h3>
        </div>
    )
}

const adminWarning = (WrappedComponent) => {
    return (props) => (
            <div>
                <p>This is a Warning from Admin Team !!!</p>
                <WrappedComponent {...props} />
            </div>
        )
}

const Warning = adminWarning(Info);

ReactDOM.render(<Warning owner='SK' />,document.getElementById('root'));