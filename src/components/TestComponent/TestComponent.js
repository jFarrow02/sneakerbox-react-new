import React from 'react';

const TestComponent = props=>{

    return(
        <div>
            This is a test: 
            <h2>{props.foo}</h2>
        </div>
    )
};

export default TestComponent;