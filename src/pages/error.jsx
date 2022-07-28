import React from 'react';

const Error = ({error}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <h1>{error}</h1>
        </div>
    );
};

export default Error;